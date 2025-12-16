'use client';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Manish Devi',
      location: 'Gorakhapur, Uttar Pradesh',
      rating: 5,
      text: 'Green Sun Innovations transformed my home with a seamless installation. The team was professional, punctual, and my energy bills dropped by 60%!',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    },
    {
      id: 2,
      name: 'Dr. Ak Verma',
      location: 'Pathology Lab,Ranchi',
      rating: 5,
      text: 'Best investment for my business! The ROI was faster than expected. Green Sun Innovations\'s monitoring system gives me complete visibility into my energy production.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    },
    {
      id: 3,
      name: 'Dr. Hemant Narayan Rai',
      location: 'Ranchi, Jharkhand',
      rating: 5,
      text: 'The financing options made going solar affordable. Their customer service is exceptional and they\'re always there when I need them.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    },
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-1 w-12 bg-gradient-to-r from-green-500 to-blue-600" />
            <span className="text-green-600 font-semibold text-sm tracking-wider uppercase">
              Customer Stories
            </span>
            <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-green-500" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Loved by <span className="bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">Our Customers</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from real people who switched to solar with Green Sun Innovations
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border border-gray-100"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">
                    ★
                  </span>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Divider */}
              <div className="h-1 w-12 bg-gradient-to-r from-green-500 to-blue-600 mb-6" />

              {/* User Info */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-green-500"
                />
                <div>
                  <h4 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6 text-lg">
            Join thousands of satisfied customers who are saving on energy costs
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Get Your Free Evaluation
          </button>
        </div>
      </div>
    </section>
  );
}
