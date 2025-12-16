'use client';

export default function AboutCTA() {
  return (
    <section className="w-full py-16 lg:py-24 bg-gradient-to-r from-green-500 via-emerald-500 to-blue-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6 leading-tight">
          Ready to Join the Solar Revolution?
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto mb-8 lg:mb-10 leading-relaxed">
          Start your journey to energy independence and save thousands on your electricity bills. 
          Get your free solar assessment today and discover how much you can save.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12">
          <button className="px-8 py-3 bg-white text-green-600 font-bold rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-base sm:text-lg">
            Get Free Quote
          </button>
          <button className="px-8 py-3 bg-white/20 backdrop-blur-sm border-2 border-white text-white font-bold rounded-lg hover:bg-white/30 transition-all duration-300 text-base sm:text-lg">
            Schedule Consultation
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 text-white/80 text-sm sm:text-base">
          <div className="flex items-center gap-2">
            <span className="text-2xl">⭐</span>
            <span>4.9/5 Customer Rating</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-white/30" />
          <div className="flex items-center gap-2">
            <span className="text-2xl">✓</span>
            <span>50K+ Happy Customers</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-white/30" />
          <div className="flex items-center gap-2">
            <span className="text-2xl">🛡️</span>
            <span>30-Year Warranty</span>
          </div>
        </div>
      </div>
    </section>
  );
}
