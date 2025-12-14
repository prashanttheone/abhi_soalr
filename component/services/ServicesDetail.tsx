'use client';

export default function ServicesDetail() {
  const services = [
    {
      id: 1,
      icon: '☀️',
      title: 'Residential Solar Installation',
      description: 'Transform your home with affordable solar energy solutions.',
      features: [
        'Custom system design for your home',
        'Professional installation by certified technicians',
        'Roof assessment and structural analysis',
        '25-year performance warranty',
        'Monitoring and maintenance support',
      ],
      image: 'https://images.unsplash.com/photo-1509391366360-2e938aa1ef14?w=500&h=400&fit=crop',
    },
    {
      id: 2,
      icon: '🏢',
      title: 'Commercial Solar Systems',
      description: 'Scale your business operations with enterprise solar solutions.',
      features: [
        'Large-scale system design and engineering',
        'Minimal business disruption during installation',
        'Commercial-grade equipment',
        'ROI optimization analysis',
        ' 24/7 monitoring and support',
      ],
      image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=500&h=400&fit=crop',
    },
    {
      id: 3,
      icon: '🔋',
      title: 'Battery Storage Solutions',
      description: 'Store energy for 24/7 power and energy independence.',
      features: [
        'Advanced lithium-ion battery systems',
        'Backup power during outages',
        'Time-of-use energy management',
        'Smart integration with solar panels',
        'Maximum efficiency optimization',
      ],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop',
    },
    {
      id: 4,
      icon: '🔧',
      title: 'System Maintenance & Support',
      description: 'Keep your solar system running at peak efficiency.',
      features: [
        'Regular system inspections',
        'Performance monitoring',
        'Panel cleaning and maintenance',
        'Component upgrades',
        'Emergency support 24/7',
      ],
      image: 'https://images.unsplash.com/photo-1581092335573-f02a6fb4a0db?w=500&h=400&fit=crop',
    },
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Service Offerings
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solar solutions for every need, from residential to commercial installations.
          </p>
        </div>

        <div className="space-y-12 lg:space-y-20">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-cols-2-reverse' : ''
              }`}
            >
              {/* Image */}
              <div
                className={`relative h-64 sm:h-80 rounded-xl overflow-hidden shadow-lg group ${
                  index % 2 === 1 ? 'lg:order-2' : ''
                }`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center text-white text-2xl">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <p className="text-lg text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3">
                  <p className="font-semibold text-gray-900">Key Features:</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
