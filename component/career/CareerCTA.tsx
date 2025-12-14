'use client';

export default function CareerCTA() {
  return (
    <section className="w-full py-16 lg:py-24 bg-gradient-to-r from-green-500 via-emerald-500 to-blue-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6 leading-tight">
          Ready to Impact the Future of Energy?
        </h2>
        <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto mb-8 lg:mb-10 leading-relaxed">
          Join SolarPro and be part of a mission to transform how America powers its homes and businesses with clean, sustainable energy.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
          <button className="px-8 py-3 bg-white text-green-600 font-bold rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-base sm:text-lg">
            View All Jobs
          </button>
          <button className="px-8 py-3 bg-white/20 backdrop-blur-sm border-2 border-white text-white font-bold rounded-lg hover:bg-white/30 transition-all duration-300 text-base sm:text-lg">
            Contact HR
          </button>
        </div>
      </div>
    </section>
  );
}
