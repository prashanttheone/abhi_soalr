'use client';

export default function WhyChooseUs() {
  const reasons = [
    {
      id: 1,
      icon: '⚡',
      title: 'Expert Installation',
      description: 'Certified technicians with 20+ years combined experience in solar installations',
    },
    {
      id: 2,
      icon: '💰',
      title: 'Affordable Financing',
      description: 'Multiple financing options available with competitive rates and flexible terms',
    },
    {
      id: 3,
      icon: '🛡️',
      title: '25-Year Warranty',
      description: 'Industry-leading warranty coverage protecting your investment for decades',
    },
    {
      id: 4,
      icon: '🌍',
      title: 'Eco-Friendly',
      description: 'Reduce your carbon footprint and contribute to a sustainable future',
    },
    {
      id: 5,
      icon: '📊',
      title: 'Real-Time Monitoring',
      description: 'Track your energy production 24/7 with our advanced monitoring system',
    },
    {
      id: 6,
      icon: '🎯',
      title: 'Custom Solutions',
      description: 'Personalized solar solutions tailored to your specific energy needs',
    },
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-1 w-12 bg-gradient-to-r from-green-500 to-blue-600" />
            <span className="text-green-600 font-semibold text-sm tracking-wider uppercase">
              Why Choose Green Sun Innovations
            </span>
            <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-green-500" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            The <span className="bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">Green Sun Innovations Difference</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover why thousands of homeowners and businesses trust us for their solar energy needs
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.id}
              className="group bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-green-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {reason.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>

              {/* Bottom Border Accent */}
              <div className="mt-6 h-1 w-0 bg-gradient-to-r from-green-500 to-blue-600 group-hover:w-full transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Trust Statement */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-green-50 to-blue-50 px-8 py-6 rounded-2xl border border-green-200">
            <p className="text-gray-700 text-lg">
              <span className="font-bold text-green-600">✓ Trusted by 50,000+ customers</span> across the United States
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
