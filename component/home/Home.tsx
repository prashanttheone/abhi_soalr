'use client';

import { useState, useEffect } from 'react';
import WhyChooseUs from './WhyChooseUs';
import Testimonials from './Testimonials';
import ImpactStats from './ImpactStats';
import FeaturedProjects from './FeaturedProjects';
import ProcessSteps from './ProcessSteps';

interface CarouselSlide {
  id: number;
  title: string;
  description: string;
  image: string;
  gradient: string;
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const carouselSlides: CarouselSlide[] = [
    {
      id: 1,
      title: 'Residential Solar Solutions',
      description: 'Transform your home with affordable, efficient solar energy. Reduce your electricity bills and increase your home\'s value.',
      image: 'https://images.unsplash.com/photo-1509391366360-2e938aa1ef14?w=1200&h=600&fit=crop',
      gradient: 'from-green-600/40 to-blue-600/40',
    },
    {
      id: 2,
      title: 'Commercial Solar Systems',
      description: 'Scale your business operations with enterprise-grade solar installations. Maximize ROI and sustainability.',
      image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=1200&h=600&fit=crop',
      gradient: 'from-blue-600/40 to-green-600/40',
    },
    {
      id: 3,
      title: 'Solar Battery Storage',
      description: 'Store excess energy for backup power and energy independence. Advanced battery solutions for 24/7 renewable energy.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop',
      gradient: 'from-green-500/40 to-emerald-600/40',
    },
    {
      id: 4,
      title: 'System Maintenance & Support',
      description: 'Keep your solar system running at peak efficiency with our comprehensive maintenance and support services.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop',
      gradient: 'from-blue-500/40 to-cyan-600/40',
    },
  ];

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlay, carouselSlides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000); // Resume auto-play after 10 seconds
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  return (
    <>
      {/* Hero Carousel Section */}
      <section className="w-full h-96 lg:h-screen relative overflow-hidden bg-black">
        {/* Slides Container */}
        <div className="relative w-full h-full">
          {carouselSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />

              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`} />

              {/* Dark Overlay for Text Readability */}
              <div className="absolute inset-0 bg-black/30" />

              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fadeIn">
                  <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 lg:mb-6 leading-tight drop-shadow-lg">
                    {slide.title}
                  </h2>
                  <p className="text-base sm:text-lg lg:text-xl text-gray-100 max-w-2xl mx-auto drop-shadow-md mb-6 lg:mb-8">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                    <button className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
                      Get Free Quote
                    </button>
                    <button className="px-6 sm:px-8 py-2 sm:py-3 bg-white/20 backdrop-blur-sm border-2 border-white text-white font-semibold rounded-lg hover:bg-white/30 transition-all duration-300 text-sm sm:text-base">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Previous Button */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 transition-all duration-300 rounded-full p-2 sm:p-3 backdrop-blur-sm group"
          aria-label="Previous slide"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-gray-100 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 transition-all duration-300 rounded-full p-2 sm:p-3 backdrop-blur-sm group"
          aria-label="Next slide"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-gray-100 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2 sm:gap-3">
          {carouselSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? 'bg-white w-8 h-2 sm:w-10'
                  : 'bg-white/50 hover:bg-white/75 w-2 h-2'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 bg-black/40 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full text-white text-xs sm:text-sm font-semibold">
          {currentSlide + 1} / {carouselSlides.length}
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Green Sun Innovations?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              We deliver premium solar solutions with industry-leading expertise and customer support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: '⚡',
                title: 'Energy Efficient',
                description: 'Cutting-edge solar technology with maximum energy output and minimal waste.',
              },
              {
                icon: '💰',
                title: 'Cost Savings',
                description: 'Reduce your electricity bills by up to 80% with our solar solutions.',
              },
              {
                icon: '🌍',
                title: 'Eco-Friendly',
                description: 'Reduce your carbon footprint and contribute to a sustainable future.',
              },
              {
                icon: '✓',
                title: 'Warranty Backed',
                description: '25-year performance guarantee on all solar panels and equipment.',
              },
              {
                icon: '👨‍🔧',
                title: 'Expert Support',
                description: 'Professional installation and 24/7 customer support throughout the year.',
              },
              {
                icon: '📈',
                title: 'Property Value',
                description: 'Increase your home value with a modern solar energy system.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 lg:p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 lg:py-20 bg-gradient-to-r from-green-500 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6">
            Ready to Go Solar?
          </h2>
          <p className="text-base sm:text-lg text-green-50 max-w-2xl mx-auto mb-8">
            Get a free solar assessment and discover how much you can save on your energy bills.
          </p>
          <button className="px-8 py-3 bg-white text-green-600 font-semibold rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
            Get Your Free Quote Today
          </button>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Impact Stats Section */}
      <ImpactStats />

      {/* Featured Projects Section */}
      <FeaturedProjects />

      {/* Process Steps Section */}
      <ProcessSteps />

      {/* Testimonials Section */}
      <Testimonials />
    </>
  );
}
