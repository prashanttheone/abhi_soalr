import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/Database';
import { GalleryImage } from '@/schema/Gallery';

// POST - Seed database with initial gallery data
export async function POST() {
  try {
    await connectDB();

    // Check if data already exists
    const existingCount = await GalleryImage.countDocuments();
    if (existingCount > 0) {
      return NextResponse.json({
        success: false,
        message: `Database already has ${existingCount} gallery images. Clear first if you want to reseed.`,
      });
    }

    const galleryData = [
      {
        title: 'Residential Installation',
        subtitle: 'Expert Solar Panel Installation',
        description: 'Professional solar panel installation on a residential home with certified technicians ensuring perfect alignment and secure mounting.',
        image: 'https://images.unsplash.com/photo-1509391366360-2e938aa1ef14?w=500&h=400&fit=crop',
        category: 'Installation',
      },
      {
        title: 'Commercial Solar Array',
        subtitle: 'Large-Scale Industrial Solution',
        description: 'Expert installation team working on a large commercial solar array project spanning multiple rooftops.',
        image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=500&h=400&fit=crop',
        category: 'Commercial',
      },
      {
        title: 'Rooftop Installation Work',
        subtitle: 'Safety First Installation Team',
        description: 'Skilled solar engineers installing panels with precision and safety protocols on residential rooftops.',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop',
        category: 'Installation',
      },
      {
        title: 'Solar Panel Testing',
        subtitle: 'Quality Assurance Process',
        description: 'Our technicians perform thorough testing and quality checks on all installed solar panels.',
        image: 'https://images.unsplash.com/photo-1581092335573-f02a6fb4a0db?w=500&h=400&fit=crop',
        category: 'Testing',
      },
      {
        title: 'Battery Storage Integration',
        subtitle: 'Advanced Energy Storage',
        description: 'Expert installation of battery storage systems for energy independence and backup power.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop',
        category: 'Storage',
      },
      {
        title: 'Electrical Connections',
        subtitle: 'Professional Wiring Installation',
        description: 'Certified electricians establishing safe and efficient electrical connections for solar systems.',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=400&fit=crop',
        category: 'Installation',
      },
      {
        title: 'Team Collaboration',
        subtitle: 'Expert Installation Crew',
        description: 'Experienced solar engineers and technicians working together to deliver quality installations.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop',
        category: 'Team',
      },
      {
        title: 'System Monitoring',
        subtitle: 'Real-Time Performance Tracking',
        description: 'Our team monitors system performance to ensure optimal energy production and efficiency.',
        image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=400&fit=crop',
        category: 'Monitoring',
      },
      {
        title: 'Residential Solar Array',
        subtitle: 'Home Energy Independence',
        description: 'Beautiful solar panel installation bringing clean energy to residential properties.',
        image: 'https://images.unsplash.com/photo-1509391366360-2e938aa1ef14?w=500&h=400&fit=crop',
        category: 'Residential',
      },
      {
        title: 'Maintenance & Support',
        subtitle: 'Ongoing System Care',
        description: 'Regular maintenance and cleaning of solar panels to ensure peak performance.',
        image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=400&fit=crop',
        category: 'Maintenance',
      },
      {
        title: 'Commercial Installation Site',
        subtitle: 'Large-Scale Project Execution',
        description: 'Expert team executing a large commercial solar installation project with multiple units.',
        image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=500&h=400&fit=crop',
        category: 'Commercial',
      },
      {
        title: 'Final Inspection',
        subtitle: 'Quality Verification Process',
        description: 'Final inspection and verification ensuring all installations meet our high quality standards.',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop',
        category: 'Testing',
      },
    ];

    const insertedImages = await GalleryImage.insertMany(galleryData);

    return NextResponse.json({
      success: true,
      message: `Successfully seeded ${insertedImages.length} gallery images`,
      data: insertedImages,
    });
  } catch (error) {
    console.error('Error seeding gallery:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to seed gallery' },
      { status: 500 }
    );
  }
}
