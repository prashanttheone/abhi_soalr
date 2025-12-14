'use client';

export default function ServicesHero() {
  return (
    <section className="w-full py-12 lg:py-24 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center gap-3">
              <div className="h-1 w-12 bg-gradient-to-r from-green-500 to-blue-600" />
              <span className="text-green-400 font-semibold text-sm tracking-wider">
                OUR SERVICES
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Complete Solar <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Solutions</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              From consultation to installation to long-term maintenance, we provide comprehensive solar energy solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Get Free Assessment
              </button>
              <button className="px-8 py-3 border-2 border-green-500 text-green-400 font-semibold rounded-lg hover:bg-green-500/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-96 lg:h-full rounded-2xl overflow-hidden shadow-2xl group">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop"
              alt="Solar installation service"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
