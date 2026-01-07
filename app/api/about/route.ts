import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/Database';
import { TeamMember } from '@/schema/About';

// GET - Fetch all team members
export async function GET() {
  try {
    await connectDB();
    const teamMembers = await TeamMember.find().sort({ order: 1, createdAt: 1 });
    
    return NextResponse.json({ 
      success: true, 
      data: teamMembers 
    });
  } catch (error) {
    console.error('Error fetching team members:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch team members' },
      { status: 500 }
    );
  }
}

// POST - Create new team member
export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const body = await req.json();
    
    const newMember = await TeamMember.create({
      name: body.name,
      role: body.role,
      bio: body.bio,
      image: body.image,
      linkedin: body.linkedin || '#',
      twitter: body.twitter || '#',
      order: body.order || 0,
    });

    return NextResponse.json(
      { success: true, data: newMember },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating team member:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create team member' },
      { status: 500 }
    );
  }
}
