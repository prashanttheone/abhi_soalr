'use client';

export default function ServicesProcess() {
  const steps = [
    {
      number: '01',
      title: 'Free Consultation',
      description: 'Our solar experts analyze your home, energy needs, and roof condition.',
    },
    {
      number: '02',
      title: 'Custom Design',
      description: 'We design a tailored solar system that maximizes your savings.',
    },
    {
      number: '03',
      title: 'Installation',
      description: 'Professional installation by certified technicians with minimal disruption.',
    },
    {
      number: '04',
      title: 'Activation',
      description: 'System activation and inspection for optimal performance.',
    },
    {
      number: '05',
      title: 'Monitoring',
      description: 'Continuous monitoring with 24/7 support and maintenance.',
    },
    {
      number: '06',
      title: 'Savings',
      description: 'Start saving on electricity bills from day one.',
    },
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From consultation to savings, here's how we make your solar journey seamless.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-xl border-2 border-gray-200 hover:border-green-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
            >
              {/* Number */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                {step.number}
              </div>

              {/* Content */}
              <div className="pt-8 space-y-3">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Decorative Line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-green-500 to-blue-600 group-hover:w-full transition-all duration-300 rounded-b-xl" />
            </div>
          ))}
        </div>

        {/* Process Flow Line (Desktop Only) */}
        <div className="hidden lg:block mt-12 relative h-2 bg-gradient-to-r from-green-500 via-blue-500 to-green-500 rounded-full" />
      </div>
    </section>
  );
}
