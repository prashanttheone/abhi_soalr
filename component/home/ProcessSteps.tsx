'use client';

export default function ProcessSteps() {
  const steps = [
    {
      id: 1,
      number: '01',
      title: 'Free Consultation',
      description: 'Meet with our solar experts to discuss your energy needs and goals',
      icon: '📋',
    },
    {
      id: 2,
      number: '02',
      title: 'Site Assessment',
      description: 'We analyze your roof, sunlight exposure, and energy consumption',
      icon: '🔍',
    },
    {
      id: 3,
      number: '03',
      title: 'Custom Quote',
      description: 'Receive a personalized quote with financing options tailored to you',
      icon: '💵',
    },
    {
      id: 4,
      number: '04',
      title: 'Professional Install',
      description: 'Our certified technicians install your system with precision',
      icon: '🔧',
    },
    {
      id: 5,
      number: '05',
      title: 'Inspection & Permits',
      description: 'Complete all inspections and handle all paperwork and permits',
      icon: '✅',
    },
    {
      id: 6,
      number: '06',
      title: 'Energy Independence',
      description: 'Start enjoying clean energy and monthly savings immediately',
      icon: '⚡',
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
              How It Works
            </span>
            <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-green-500" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Simple & <span className="bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">Transparent</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our straightforward 6-step process makes going solar easy and stress-free
          </p>
        </div>

        {/* Timeline Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Connecting Line (Desktop) */}
              {index < steps.length - 1 && index % 3 !== 2 && (
                <div className="hidden lg:block absolute top-32 -right-4 w-8 h-1 bg-gradient-to-r from-green-500 to-blue-600" />
              )}

              {/* Step Card */}
              <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border-2 border-gray-100 hover:border-green-500 h-full">
                {/* Number Badge */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 text-white rounded-full font-bold text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Bottom Accent */}
                <div className="mt-6 h-1 w-0 bg-gradient-to-r from-green-500 to-blue-600 group-hover:w-full transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Visual (Mobile) */}
        <div className="mt-16 lg:mt-20 md:hidden">
          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.id} className="flex gap-6">
                {/* Timeline Dot */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-blue-600 text-white flex items-center justify-center font-bold text-xl">
                    {step.id}
                  </div>
                  {step.id < steps.length && (
                    <div className="w-1 h-12 bg-gradient-to-b from-green-500 to-blue-600 mt-2" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6 text-lg">
            Ready to start your solar journey? Get your free consultation today!
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Schedule Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
