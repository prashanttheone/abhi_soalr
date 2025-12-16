'use client';

export default function Certifications() {
  const certifications = [
    {
      icon: '✓',
      name: 'NABCEP Certified',
      description: 'North Indian Board of Certified Energy Practitioners',
    },
    {
      icon: '🏆',
      name: 'Inc. 5000',
      description: 'Ranked among fastest-growing companies in India',
    },
    {
      icon: '⭐',
      name: '4.9/5 Rating',
      description: 'Customer satisfaction across all platforms',
    },
    {
      icon: '📜',
      name: 'EPA Partnership',
      description: 'Environmental Protection Agency partner',
    },
    {
      icon: '🔒',
      name: 'Insured & Licensed',
      description: 'Full insurance and state licensing in all service areas',
    },
    {
      icon: '🌐',
      name: 'Energy Star',
      description: 'Certified Energy Star installer for efficiency',
    },
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Certifications & Recognition
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted credentials that demonstrate our commitment to quality, safety, and customer excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-xl border-2 border-gray-200 hover:border-green-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {cert.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {cert.description}
                  </p>
                </div>
              </div>

              {/* Decorative Accent */}
              <div className="mt-4 h-1 w-0 bg-gradient-to-r from-green-500 to-blue-600 group-hover:w-full transition-all duration-300 rounded-full" />
            </div>
          ))}
        </div>

        {/* Trust Statement */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-600/20 rounded-2xl blur-3xl" />
          <div className="relative bg-white p-8 lg:p-12 rounded-2xl border-2 border-green-500/30 text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              Why Trust Green Sun Innovations?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="text-3xl font-bold text-green-600 mb-2">
                  20+ Years
                </p>
                <p className="text-gray-600">
                  Combined industry experience from our leadership team
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600 mb-2">
                  10K+ Reviews
                </p>
                <p className="text-gray-600">
                  Average rating of 4.9/5 from verified customers
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-green-600 mb-2">
                  30-Year Warranty
                </p>
                <p className="text-gray-600">
                  Comprehensive warranty on all solar panels and equipment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
