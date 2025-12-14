'use client';

export default function CareerCulture() {
  const benefits = [
    {
      icon: '💰',
      title: 'Competitive Salary',
      description: 'Industry-leading compensation based on experience and role.',
    },
    {
      icon: '🏥',
      title: 'Health Insurance',
      description: 'Comprehensive medical, dental, and vision coverage for you and family.',
    },
    {
      icon: '💼',
      title: '401(k) Plan',
      description: 'Generous company match to help you build your future.',
    },
    {
      icon: '📚',
      title: 'Training & Development',
      description: 'Continuous learning opportunities and professional certifications.',
    },
    {
      icon: '🌍',
      title: 'Impact Mission',
      description: 'Work on meaningful projects that contribute to global sustainability.',
    },
    {
      icon: '🤝',
      title: 'Team Culture',
      description: 'Collaborative, inclusive environment with amazing colleagues.',
    },
  ];

  const values = [
    {
      title: 'Sustainability',
      description: 'Committed to environmental responsibility and clean energy future.',
    },
    {
      title: 'Innovation',
      description: 'Embracing new technologies and creative problem-solving.',
    },
    {
      title: 'Integrity',
      description: 'Operating with honesty and transparency in all interactions.',
    },
    {
      title: 'Excellence',
      description: 'Delivering exceptional quality in everything we do.',
    },
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Benefits Section */}
        <div className="mb-20">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Benefits & Perks
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We invest in our team members because we believe great people deserve great benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-xl border-2 border-gray-200 hover:border-green-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gradient-to-r from-green-500/10 to-blue-600/10 p-8 lg:p-12 rounded-2xl border border-green-200">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every team member embodies these values in their work every day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
