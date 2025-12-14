'use client';

import Gallery from '@/component/gallery/Gallery';

export default function GalleryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-12 lg:py-24 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center justify-center gap-3">
              <div className="h-1 w-12 bg-gradient-to-r from-green-500 to-blue-600" />
              <span className="text-green-400 font-semibold text-sm tracking-wider">
                PORTFOLIO
              </span>
              <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-green-500" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Solar Installation <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Gallery</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Explore our completed projects featuring expert solar panel installations, team expertise, and real-world energy solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Component */}
      <Gallery />

      {/* CTA Section */}
      <section className="w-full py-16 lg:py-24 bg-gradient-to-r from-green-500 via-emerald-500 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6 leading-tight">
            Inspired by Our Work?
          </h2>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto mb-8 lg:mb-10 leading-relaxed">
            Let us design and install a custom solar solution for your home or business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <button className="px-8 py-3 bg-white text-green-600 font-bold rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-base sm:text-lg">
              Get Free Consultation
            </button>
            <button className="px-8 py-3 bg-white/20 backdrop-blur-sm border-2 border-white text-white font-bold rounded-lg hover:bg-white/30 transition-all duration-300 text-base sm:text-lg">
              View More Projects
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
