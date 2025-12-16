'use client';

export default function JobOpenings() {
  const jobs = [
    {
      id: 1,
      title: 'Solar Installation Technician',
      department: 'Installation',
      location: 'Multiple Locations',
      type: 'Full-time',
      salary: '₹60K - ₹75K/year',
      description: 'Install and maintain solar panel systems on residential and commercial properties.',
      requirements: ['Valid driver\'s license', 'Physical fitness', 'Attention to detail', 'Team player'],
    },
    {
      id: 2,
      title: 'Solar System Designer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      salary: '₹70K - ₹90K/year',
      description: 'Design custom solar systems using CAD software and energy modeling tools.',
      requirements: ['CAD experience', 'Solar knowledge', 'Problem solving', 'Customer focus'],
    },
    {
      id: 3,
      title: 'Customer Success Manager',
      department: 'Support',
      location: 'Multiple Locations',
      type: 'Full-time',
      salary: '₹55K - ₹70K/year',
      description: 'Support customers post-installation and manage system performance monitoring.',
      requirements: ['Communication skills', 'Technical aptitude', 'Problem-solving', 'Passion for renewables'],
    },
    {
      id: 4,
      title: 'Sales Representative',
      department: 'Sales',
      location: 'Remote/Field',
      type: 'Full-time + Commission',
      salary: '₹45K - ₹65K/year + Commission',
      description: 'Identify customer needs and present solar solutions that maximize value.',
      requirements: ['Sales experience', 'Solar knowledge', 'Negotiation skills', 'Goal-oriented'],
    },
    {
      id: 5,
      title: 'Marketing Specialist',
      department: 'Marketing',
      location: 'Corporate Office',
      type: 'Full-time',
      salary: '₹65K - ₹85K/year',
      description: 'Create and execute marketing campaigns promoting solar energy solutions.',
      requirements: ['Digital marketing', 'Content creation', 'Analytics', 'Creativity'],
    },
    {
      id: 6,
      title: 'Operations Coordinator',
      department: 'Operations',
      location: 'Corporate Office',
      type: 'Full-time',
      salary: '₹50K - ₹65K/year',
      description: 'Coordinate installation schedules and manage operational efficiency.',
      requirements: ['Organizational skills', 'Project management', 'Communication', 'Excel proficiency'],
    },
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Open Positions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our growing team and help lead the solar energy revolution across America.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="group bg-gradient-to-br from-gray-50 to-gray-100 p-6 lg:p-8 rounded-xl border-2 border-gray-200 hover:border-green-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
            >
              {/* Header */}
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  {job.title}
                </h3>
                <div className="flex flex-wrap gap-3 text-sm">
                  <span className="px-3 py-1 bg-green-100 text-green-700 font-semibold rounded-full">
                    {job.department}
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 font-semibold rounded-full">
                    {job.location}
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 font-semibold rounded-full">
                    {job.type}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-4 leading-relaxed">
                {job.description}
              </p>

              {/* Salary */}
              <p className="text-lg font-bold text-green-600 mb-4">
                {job.salary}
              </p>

              {/* Requirements */}
              <div className="mb-6">
                <p className="font-semibold text-gray-900 mb-2">Requirements:</p>
                <ul className="space-y-1">
                  {job.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-green-500">✓</span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Apply Button */}
              <button className="w-full px-4 py-2 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
