import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/Database';
import { TeamMember } from '@/schema/About';

// GET - Fetch single team member
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { id } = await params;
    const member = await TeamMember.findById(id);
    
    if (!member) {
      return NextResponse.json(
        { success: false, error: 'Team member not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: member });
  } catch (error) {
    console.error('Error fetching team member:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch team member' },
      { status: 500 }
    );
  }
}

// PUT - Update team member
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const body = await req.json();
    const { id } = await params;
    
    const updatedMember = await TeamMember.findByIdAndUpdate(
      id,
      {
        name: body.name,
        role: body.role,
        bio: body.bio,
        image: body.image,
        linkedin: body.linkedin,
        twitter: body.twitter,
        order: body.order,
      },
      { new: true, runValidators: true }
    );

    if (!updatedMember) {
      return NextResponse.json(
        { success: false, error: 'Team member not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: updatedMember });
  } catch (error) {
    console.error('Error updating team member:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update team member' },
      { status: 500 }
    );
  }
}

// DELETE - Delete team member
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { id } = await params;
    const deletedMember = await TeamMember.findByIdAndDelete(id);

    if (!deletedMember) {
      return NextResponse.json(
        { success: false, error: 'Team member not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Team member deleted successfully',
      data: deletedMember 
    });
  } catch (error) {
    console.error('Error deleting team member:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete team member' },
      { status: 500 }
    );
  }
}
