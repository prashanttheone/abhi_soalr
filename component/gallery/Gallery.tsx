'use client';

import { useState } from 'react';

interface GalleryImage {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  category: string;
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      title: 'Residential Installation',
      subtitle: 'Expert Solar Panel Installation',
      description: 'Professional solar panel installation on a residential home with certified technicians ensuring perfect alignment and secure mounting.',
      image: 'https://images.unsplash.com/photo-1509391366360-2e938aa1ef14?w=500&h=400&fit=crop',
      category: 'Installation',
    },
    {
      id: 2,
      title: 'Commercial Solar Array',
      subtitle: 'Large-Scale Industrial Solution',
      description: 'Expert installation team working on a large commercial solar array project spanning multiple rooftops.',
      image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=500&h=400&fit=crop',
      category: 'Commercial',
    },
    {
      id: 3,
      title: 'Rooftop Installation Work',
      subtitle: 'Safety First Installation Team',
      description: 'Skilled solar engineers installing panels with precision and safety protocols on residential rooftops.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop',
      category: 'Installation',
    },
    {
      id: 4,
      title: 'Solar Panel Testing',
      subtitle: 'Quality Assurance Process',
      description: 'Our technicians perform thorough testing and quality checks on all installed solar panels.',
      image: 'https://images.unsplash.com/photo-1581092335573-f02a6fb4a0db?w=500&h=400&fit=crop',
      category: 'Testing',
    },
    {
      id: 5,
      title: 'Battery Storage Integration',
      subtitle: 'Advanced Energy Storage',
      description: 'Expert installation of battery storage systems for energy independence and backup power.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop',
      category: 'Storage',
    },
    {
      id: 6,
      title: 'Electrical Connections',
      subtitle: 'Professional Wiring Installation',
      description: 'Certified electricians establishing safe and efficient electrical connections for solar systems.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=400&fit=crop',
      category: 'Installation',
    },
    {
      id: 7,
      title: 'Team Collaboration',
      subtitle: 'Expert Installation Crew',
      description: 'Experienced solar engineers and technicians working together to deliver quality installations.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop',
      category: 'Team',
    },
    {
      id: 8,
      title: 'System Monitoring',
      subtitle: 'Real-Time Performance Tracking',
      description: 'Our team monitors system performance to ensure optimal energy production and efficiency.',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=400&fit=crop',
      category: 'Monitoring',
    },
    {
      id: 9,
      title: 'Residential Solar Array',
      subtitle: 'Home Energy Independence',
      description: 'Beautiful solar panel installation bringing clean energy to residential properties.',
      image: 'https://images.unsplash.com/photo-1509391366360-2e938aa1ef14?w=500&h=400&fit=crop',
      category: 'Residential',
    },
    {
      id: 10,
      title: 'Maintenance & Support',
      subtitle: 'Ongoing System Care',
      description: 'Regular maintenance and cleaning of solar panels to ensure peak performance.',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=400&fit=crop',
      category: 'Maintenance',
    },
    {
      id: 11,
      title: 'Commercial Installation Site',
      subtitle: 'Large-Scale Project Execution',
      description: 'Expert team executing a large commercial solar installation project with multiple units.',
      image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=500&h=400&fit=crop',
      category: 'Commercial',
    },
    {
      id: 12,
      title: 'Final Inspection',
      subtitle: 'Quality Verification Process',
      description: 'Final inspection and verification ensuring all installations meet our high quality standards.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop',
      category: 'Testing',
    },
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Solar Installation Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse our portfolio of completed solar installations across residential and commercial properties.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {galleryImages.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                    {item.category}
                  </span>
                </div>

                {/* Click to View Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                  <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="text-white text-3xl">🔍</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-green-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-green-600 font-semibold mb-3">
                  {item.subtitle}
                </p>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-900 hover:bg-white transition-all duration-300 shadow-lg"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 lg:p-10 h-full overflow-y-auto">
              {/* Image */}
              <div className="flex items-center justify-center">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              {/* Details */}
              <div className="flex flex-col justify-center space-y-6">
                {/* Category Badge */}
                <div>
                  <span className="px-4 py-2 bg-green-100 text-green-700 text-sm font-bold rounded-full inline-block">
                    {selectedImage.category}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-2">
                    {selectedImage.title}
                  </h2>
                  <p className="text-xl text-green-600 font-semibold">
                    {selectedImage.subtitle}
                  </p>
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Project Details
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {selectedImage.description}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    Get Similar Quote
                  </button>
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Close
                  </button>
                </div>

                {/* Additional Info */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border border-green-200">
                  <p className="text-sm text-gray-700">
                    <span className="font-bold text-green-600">💡 Did you know?</span> Each installation is custom-designed for optimal energy production and ROI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
