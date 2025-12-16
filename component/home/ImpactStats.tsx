'use client';

export default function ImpactStats() {
  const stats = [
    {
      id: 1,
      number: '50K+',
      label: 'Happy Customers',
      icon: '😊',
      color: 'from-green-500 to-emerald-600',
    },
    {
      id: 2,
      number: '1.5GW',
      label: 'Solar Capacity Installed',
      icon: '⚡',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      id: 3,
      number: '10K+',
      label: 'Customer Savings',
      icon: '💰',
      color: 'from-yellow-500 to-orange-600',
    },
    {
      id: 4,
      number: '2.5M',
      label: 'Tons CO2 Prevented',
      icon: '🌍',
      color: 'from-green-600 to-teal-600',
    },
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-gradient-to-r from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Impact</span> So Far
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Together, we're making a real difference in renewable energy adoption across America
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="group relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-green-500 transition-all duration-300"
            >
              {/* Gradient Background Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ₹{stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">
                  {stat.icon}
                </div>

                {/* Number */}
                <h3 className="text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                  {stat.number}
                </h3>

                {/* Label */}
                <p className="text-gray-300 text-lg font-medium">
                  {stat.label}
                </p>
              </div>

              {/* Bottom Accent Line */}
              <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ₹{stat.color} group-hover:w-full transition-all duration-300`} />
            </div>
          ))}
        </div>

        {/* Detailed Message */}
        <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/50 rounded-2xl p-8 lg:p-12 text-center">
          <p className="text-lg lg:text-xl leading-relaxed">
            Every installation contributes to a cleaner, more sustainable planet. By choosing solar with Green Sun Innovations, 
            <span className="font-bold text-green-400"> you're joining a movement</span> towards energy independence and environmental responsibility.
          </p>
        </div>
      </div>
    </section>
  );
}
