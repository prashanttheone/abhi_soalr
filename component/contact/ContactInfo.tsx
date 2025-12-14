'use client';

export default function ContactInfo() {
  const contactMethods = [
    {
      icon: '📞',
      title: 'Call Us',
      description: 'Speak directly with our solar experts',
      contact: '1-800-SOLAR-PRO',
      subtext: '(1-800-765-2776)',
      link: 'tel:1-800-7652776',
    },
    {
      icon: '📧',
      title: 'Email Us',
      description: 'Send us your inquiry via email',
      contact: 'info@solarpro.com',
      subtext: 'Response within 24 hours',
      link: 'mailto:info@solarpro.com',
    },
    {
      icon: '🏢',
      title: 'Visit Us',
      description: 'Come see our solar installations',
      contact: 'SolarPro HQ',
      subtext: '123 Solar Avenue, Denver, CO 80202',
      link: '#',
    },
    {
      icon: '🕐',
      title: 'Business Hours',
      description: 'When we are available to help',
      contact: 'Monday - Friday',
      subtext: '9:00 AM - 6:00 PM EST',
      link: '#',
    },
  ];

  const faqItems = [
    {
      question: 'How long does the solar installation process take?',
      answer: 'Typical residential installations are completed in 1-3 days. The timeline depends on your system size and roof complexity.',
    },
    {
      question: 'Do you offer financing options?',
      answer: 'Yes! We offer multiple financing options including loans, leases, and power purchase agreements to fit your budget.',
    },
    {
      question: 'What happens if my system needs repairs?',
      answer: 'We provide 24/7 support and maintenance services. Most issues are resolved within 24-48 hours.',
    },
    {
      question: 'Can I expand my solar system later?',
      answer: 'Absolutely! Our systems are designed to be scalable. You can add more panels or battery storage anytime.',
    },
    {
      question: 'What about shade and weather concerns?',
      answer: 'Modern solar panels work efficiently even in cloudy conditions. We conduct a free site assessment to ensure optimal placement.',
    },
    {
      question: 'What is your warranty coverage?',
      answer: 'We provide a 25-year performance warranty on all panels and 10-year coverage on equipment.',
    },
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Methods */}
        <div className="mb-20">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the contact method that works best for you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                className="group bg-white p-8 rounded-xl border-2 border-gray-200 hover:border-green-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  {method.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {method.description}
                </p>
                <p className="font-semibold text-gray-900 text-lg mb-1">
                  {method.contact}
                </p>
                <p className="text-gray-500 text-sm">
                  {method.subtext}
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gradient-to-r from-green-500/10 to-blue-600/10 p-8 lg:p-12 rounded-2xl border border-green-200">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find quick answers to common questions about solar energy and SolarPro.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white p-6 lg:p-8 rounded-xl border border-gray-200 hover:border-green-500 transition-all duration-300">
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-green-600">
                  {item.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
