import { NextRequest, NextResponse } from 'next/server';
import { connectDB, Profile, FormDetails, Data } from '@/lib/Database';

/**
 * POST /api/details
 * Test route to verify MongoDB connection and model operations
 */
export async function POST(request: NextRequest) {
    try {
        // Connect to database
        await connectDB();

        // Parse request body
        const body = await request.json();
        const { type, data } = body;

        if (!type || !data) {
            return NextResponse.json(
                { error: 'Missing required fields: type and data' },
                { status: 400 }
            );
        }

        let result;

        // Handle different data types
        switch (type) {
            case 'profile':
                // Create a new profile
                result = await Profile.create({
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    address: data.address,
                });
                break;

            case 'form':
                // Create a new form submission
                result = await FormDetails.create({
                    formType: data.formType,
                    userId: data.userId,
                    fields: data.fields,
                    status: data.status || 'pending',
                    submittedAt: data.submittedAt || new Date(),
                });
                break;

            case 'data':
                // Create generic data entry
                result = await Data.create({
                    category: data.category,
                    title: data.title,
                    description: data.description,
                    metadata: data.metadata,
                });
                break;

            default:
                return NextResponse.json(
                    { error: `Invalid type: ${type}. Must be 'profile', 'form', or 'data'` },
                    { status: 400 }
                );
        }

        return NextResponse.json(
            {
                success: true,
                message: `${type} created successfully`,
                data: result,
            },
            { status: 201 }
        );
    } catch (error: any) {
        console.error('Error in POST /api/details:', error);
        return NextResponse.json(
            {
                success: false,
                error: error.message || 'Internal server error',
            },
            { status: 500 }
        );
    }
}

/**
 * GET /api/details
 * Test route to fetch all records (for testing purposes)
 */
export async function GET(request: NextRequest) {
    try {
        // Connect to database
        await connectDB();

        // Get query parameters
        const { searchParams } = new URL(request.url);
        const type = searchParams.get('type');

        let result;

        if (!type) {
            // Return counts of all collections
            const [profileCount, formCount, dataCount] = await Promise.all([
                Profile.countDocuments(),
                FormDetails.countDocuments(),
                Data.countDocuments(),
            ]);

            return NextResponse.json({
                success: true,
                counts: {
                    profiles: profileCount,
                    forms: formCount,
                    data: dataCount,
                },
            });
        }

        // Fetch specific type
        switch (type) {
            case 'profile':
                result = await Profile.find().limit(10).sort({ createdAt: -1 });
                break;

            case 'form':
                result = await FormDetails.find().limit(10).sort({ createdAt: -1 });
                break;

            case 'data':
                result = await Data.find().limit(10).sort({ createdAt: -1 });
                break;

            default:
                return NextResponse.json(
                    { error: `Invalid type: ${type}. Must be 'profile', 'form', or 'data'` },
                    { status: 400 }
                );
        }

        return NextResponse.json({
            success: true,
            type,
            count: result.length,
            data: result,
        });
    } catch (error: any) {
        console.error('Error in GET /api/details:', error);
        return NextResponse.json(
            {
                success: false,
                error: error.message || 'Internal server error',
            },
            { status: 500 }
        );
    }
}
