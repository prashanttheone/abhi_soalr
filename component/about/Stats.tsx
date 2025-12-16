'use client';

export default function Stats() {
  const stats = [
    {
      icon: '🏢',
      number: '15+',
      label: 'States Served',
      description: 'Expanding our presence across America',
    },
    {
      icon: '⚡',
      number: '10K+',
      label: 'Systems Installed',
      description: ' Combinadly Commercial & Residentils Solar systems installed annually',
    },
    {
      icon: '🌱',
      number: '1.5GW',
      label: 'Solar Capacity',
      description: 'Clean energy produced annually',
    },
    {
      icon: '⭐',
      number: '4.9/5',
      label: 'Customer Rating',
      description: 'Based on 10,000+ reviews',
    },
    {
      icon: '💰',
      number: '10Cr+',
      label: 'Customer Savings',
      description: 'Lifetime energy bill reductions',
    },
    {
      icon: '👥',
      number: '50+',
      label: 'Team Members',
      description: 'Dedicated solar professionals',
    },
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-gradient-to-r from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Our Impact by the Numbers
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Measurable results that demonstrate our commitment to renewable energy and customer success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 hover:border-green-500 transition-all duration-300 hover:shadow-2xl"
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative z-10">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <p className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </p>
                <p className="text-lg font-semibold text-green-400 mb-2">
                  {stat.label}
                </p>
                <p className="text-gray-400 text-sm">
                  {stat.description}
                </p>
              </div>

              {/* Decorative Line */}
              <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-green-500 to-blue-600 group-hover:w-full transition-all duration-300 rounded-t-xl" />
            </div>
          ))}
        </div>

        {/* Additional Impact Text */}
        <div className="mt-16 p-8 lg:p-12 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-2xl border border-green-500/30 text-center">
          <p className="text-lg lg:text-xl text-gray-100 leading-relaxed">
            Every solar installation at Green Sun Innovations represents a commitment to a sustainable future. 
            Our customers collectively save <span className="text-green-400 font-bold">10Cr+ annually</span> on energy costs 
            while preventing <span className="text-blue-400 font-bold">15 million tons of CO₂ emissions</span> from entering our atmosphere.
          </p>
        </div>
      </div>
    </section>
  );
}
