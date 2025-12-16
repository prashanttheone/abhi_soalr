'use client';

export default function Timeline() {
  const milestones = [
    {
      year: '2015',
      title: 'Green Sun Innovations Founded',
      description: 'Started with a mission to make solar energy accessible to every American household.',
    },
    {
      year: '2016',
      title: 'First 1,000 Systems',
      description: 'Milestone achievement in our first year of operations across 5 states.',
    },
    {
      year: '2018',
      title: 'Expanded to 25 States',
      description: 'Rapid growth and expansion of our solar installation services nationwide.',
    },
    {
      year: '2019',
      title: '25K+ Systems Installed',
      description: 'Reached 25,000 satisfied customers and 750MW of installed capacity.',
    },
    {
      year: '2021',
      title: 'Battery Storage Launch',
      description: 'Introduced advanced battery storage solutions for energy independence.',
    },
    {
      year: '2023',
      title: '50K+ Systems & Industry Leader',
      description: 'Became one of the leading solar providers in the India with 35+ states served.',
    },
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From a startup vision to industry leadership, explore the milestones that shaped Green Sun Innovations.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-500 via-blue-500 to-green-500" />

          <div className="space-y-8 lg:space-y-0">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex flex-col ₹{
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 lg:gap-0 items-center`}
              >
                {/* Content */}
                <div className="w-full lg:w-1/2 lg:px-8">
                  <div
                    className={`bg-gradient-to-br from-gray-50 to-gray-100 p-6 lg:p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 group ₹{
                      index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                    }`}
                  >
                    <div className="text-green-600 font-bold text-lg mb-2 group-hover:text-green-700">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden lg:flex w-auto justify-center">
                  <div className="relative flex items-center justify-center">
                    <div className="w-5 h-5 bg-gradient-to-br from-green-500 to-blue-600 rounded-full border-4 border-white shadow-lg" />
                  </div>
                </div>

                {/* Mobile Timeline Marker */}
                <div className="lg:hidden w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Vision */}
        <div className="mt-16 lg:mt-20 bg-gradient-to-r from-green-500/10 to-blue-500/10 p-8 lg:p-12 rounded-2xl border border-green-200 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Looking Forward
          </h3>
          <p className="text-gray-700 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
            We're committed to reaching 100K+ installations by 2025 and expanding to all 50 states. 
            Our vision is to make solar energy the primary power source for American homes and businesses.
          </p>
        </div>
      </div>
    </section>
  );
}
