import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/Database';
import { GalleryImage } from '@/schema/Gallery';

// GET - Fetch single gallery image
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { id } = await params;
    const image = await GalleryImage.findById(id);
    
    if (!image) {
      return NextResponse.json(
        { success: false, error: 'Gallery image not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: image });
  } catch (error) {
    console.error('Error fetching gallery image:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch gallery image' },
      { status: 500 }
    );
  }
}

// PUT - Update gallery image
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const body = await req.json();
    const { id } = await params;
    
    const updatedImage = await GalleryImage.findByIdAndUpdate(
      id,
      {
        title: body.title,
        subtitle: body.subtitle,
        description: body.description,
        image: body.image,
        category: body.category,
      },
      { new: true, runValidators: true }
    );

    if (!updatedImage) {
      return NextResponse.json(
        { success: false, error: 'Gallery image not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: updatedImage });
  } catch (error) {
    console.error('Error updating gallery image:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update gallery image' },
      { status: 500 }
    );
  }
}

// DELETE - Delete single gallery image
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { id } = await params;
    const deletedImage = await GalleryImage.findByIdAndDelete(id);

    if (!deletedImage) {
      return NextResponse.json(
        { success: false, error: 'Gallery image not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Gallery image deleted successfully',
      data: deletedImage 
    });
  } catch (error) {
    console.error('Error deleting gallery image:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete gallery image' },
      { status: 500 }
    );
  }
}
