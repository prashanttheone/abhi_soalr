import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/Database';
import { GalleryImage } from '@/schema/Gallery';

// GET - Fetch all gallery images
export async function GET() {
  try {
    await connectDB();
    const images = await GalleryImage.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: images });
  } catch (error) {
    console.error('Error fetching gallery images:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch gallery images' },
      { status: 500 }
    );
  }
}

// POST - Create new gallery image
export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const body = await req.json();

    const galleryImage = await GalleryImage.create({
      title: body.title,
      subtitle: body.subtitle,
      description: body.description,
      image: body.image,
      category: body.category,
    });

    return NextResponse.json({ success: true, data: galleryImage });
  } catch (error) {
    console.error('Error creating gallery image:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create gallery image' },
      { status: 500 }
    );
  }
}

// DELETE - Delete all gallery images
export async function DELETE() {
  try {
    await connectDB();
    await GalleryImage.deleteMany({});
    return NextResponse.json({ success: true, message: 'All gallery images deleted' });
  } catch (error) {
    console.error('Error deleting gallery images:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete gallery images' },
      { status: 500 }
    );
  }
}
