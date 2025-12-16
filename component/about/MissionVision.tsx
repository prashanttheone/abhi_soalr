'use client';

export default function MissionVision() {
  const values = [
    {
      icon: '🌱',
      title: 'Sustainability',
      description: 'Committed to reducing carbon footprint and promoting renewable energy for a greener future.',
    },
    {
      icon: '⚡',
      title: 'Innovation',
      description: 'Leveraging cutting-edge technology and best practices to deliver superior solar solutions.',
    },
    {
      icon: '🤝',
      title: 'Integrity',
      description: 'Operating with transparency and honesty in every interaction with our customers and partners.',
    },
    {
      icon: '💡',
      title: 'Excellence',
      description: 'Striving for excellence in every aspect of our service, from installation to support.',
    },
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Mission & Values
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are driven by a clear mission to accelerate the adoption of clean energy while maintaining the highest standards of customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group border border-gray-200"
            >
              <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mission & Vision Statements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 lg:mt-16">
          {/* Mission */}
          <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 p-8 lg:p-12 rounded-2xl border border-green-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white text-xl">
                🎯
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Our Mission
              </h3>
            </div>
            <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
              To empower individuals and businesses to transition to clean, sustainable solar energy while providing exceptional service, competitive pricing, and long-term support that transforms how India powers its future.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 p-8 lg:p-12 rounded-2xl border border-blue-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white text-xl">
                🌍
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Our Vision
              </h3>
            </div>
            <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
              To be the most trusted solar energy provider in India, recognized for innovation, reliability, and a genuine commitment to creating a sustainable world for future generations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
