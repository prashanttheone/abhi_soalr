'use client';

export default function AboutHero() {
  return (
    <section className="w-full py-12 lg:py-24 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center gap-3">
              <div className="h-1 w-12 bg-gradient-to-r from-green-500 to-blue-600" />
              <span className="text-green-400 font-semibold text-sm tracking-wider">
                ABOUT Green Sun Innovations
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Powering America with <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Sustainable Energy</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Since 2015, Green Sun Innovations has been at the forefront of solar energy revolution, transforming homes and businesses across the United States. We believe in clean energy, sustainable growth, and customer excellence.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div>
                <p className="text-3xl font-bold text-green-400">50K+</p>
                <p className="text-gray-400 text-sm">Systems Installed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-400">1.5GW</p>
                <p className="text-gray-400 text-sm">Solar Capacity</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-96 lg:h-full rounded-2xl overflow-hidden shadow-2xl group">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=600&fit=crop"
              alt="Solar installation team"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
