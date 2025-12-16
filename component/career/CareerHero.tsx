'use client';

export default function CareerHero() {
  return (
    <section className="w-full py-12 lg:py-24 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center gap-3">
              <div className="h-1 w-12 bg-gradient-to-r from-green-500 to-blue-600" />
              <span className="text-green-400 font-semibold text-sm tracking-wider">
                JOIN OUR TEAM
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Build Your Career in <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Clean Energy</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Be part of the solar revolution. Join talented teams dedicated to sustainable energy and making a real impact on America's energy future.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-fit">
              Explore Opportunities
            </button>
          </div>

          {/* Image */}
          <div className="relative h-96 lg:h-full rounded-2xl overflow-hidden shadow-2xl group">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop"
              alt="Green Sun Innovations team collaboration"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
