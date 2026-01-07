import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/Database';
import { ImageData } from '@/schema/dummy';
import cloudinary from '@/lib/Cloudnary';

// GET - Fetch all images
export async function GET() {
  try {
    await connectDB();
    const images = await ImageData.find().sort({ uploadedAt: -1 });
    return NextResponse.json({ success: true, data: images });
  } catch (error) {
    console.error('Error fetching images:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch images' },
      { status: 500 }
    );
  }
}

// POST - Create new image record with upload
export async function POST(req: NextRequest) {
  try {
    await connectDB();
    
    const formData = await req.formData();
    const file = formData.get('file') as File;
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const tags = formData.get('tags') as string;

    if (!file) {
      return NextResponse.json(
        { success: false, error: 'No file provided' },
        { status: 400 }
      );
    }

    // Upload to Cloudinary
    const buffer = Buffer.from(await file.arrayBuffer());
    const uploadResult: any = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        { folder: 'gallery' },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      ).end(buffer);
    });

    // Create database record
    const imageData = await ImageData.create({
      imageUrl: uploadResult.secure_url,
      title: title || file.name,
      description: description || '',
      tags: tags ? tags.split(',').map(t => t.trim()) : [],
      fileSize: file.size,
      fileType: file.type,
      width: uploadResult.width,
      height: uploadResult.height,
    });

    return NextResponse.json({ success: true, data: imageData });
  } catch (error) {
    console.error('Error creating image:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create image' },
      { status: 500 }
    );
  }
}

// DELETE - Delete all images (use with caution)
export async function DELETE() {
  try {
    await connectDB();
    await ImageData.deleteMany({});
    return NextResponse.json({ success: true, message: 'All images deleted' });
  } catch (error) {
    console.error('Error deleting images:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete images' },
      { status: 500 }
    );
  }
}
