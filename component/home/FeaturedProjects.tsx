'use client';

export default function FeaturedProjects() {
  const projects = [
    {
      id: 1,
      title: 'Suburban Home',
      location: 'Denver, CO',
      panelCount: '25 panels',
      savings: '₹1,200/year',
      image: 'https://images.unsplash.com/photo-1509391366360-2e938aa1ef14?w=400&h=300&fit=crop',
      type: 'Residential',
    },
    {
      id: 2,
      title: 'Commercial Building',
      location: 'Austin, TX',
      panelCount: '120 panels',
      savings: '₹18,000/year',
      image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=300&fit=crop',
      type: 'Commercial',
    },
    {
      id: 3,
      title: 'Farm Installation',
      location: 'California Valley',
      panelCount: '80 panels',
      savings: '₹12,500/year',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      type: 'Agricultural',
    },
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-1 w-12 bg-gradient-to-r from-green-500 to-blue-600" />
            <span className="text-green-600 font-semibold text-sm tracking-wider uppercase">
              Recent Work
            </span>
            <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-green-500" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our latest solar installations and real results from our customers
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Type Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-4 py-2 bg-green-500 text-white text-xs font-bold rounded-full">
                    {project.type}
                  </span>
                </div>

                {/* Content on Hover */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-green-200 font-semibold">
                    {project.location}
                  </p>
                </div>
              </div>

              {/* Details */}
              <div className="p-6">
                {/* Stats */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Solar Panels</span>
                    <span className="font-bold text-gray-900">{project.panelCount}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b-2 border-gray-200">
                    <span className="text-gray-600">Annual Savings</span>
                    <span className="font-bold text-green-600 text-lg">{project.savings}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full py-2 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6 text-lg">
            Ready to see similar results for your property?
          </p>
          <button className="px-8 py-3 border-2 border-green-500 text-green-600 font-bold rounded-lg hover:bg-green-50 transition-colors">
            View Full Portfolio
          </button>
        </div>
      </div>
    </section>
  );
}
