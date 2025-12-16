'use client';

export default function ContactHero() {
  return (
    <section className="w-full py-12 lg:py-24 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center gap-3">
              <div className="h-1 w-12 bg-gradient-to-r from-green-500 to-blue-600" />
              <span className="text-green-400 font-semibold text-sm tracking-wider">
                GET IN TOUCH
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Let's Discuss Your <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Solar Journey</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Have questions about solar energy? Want to schedule a free consultation? We're here to help and ready to answer all your inquiries.
            </p>
            <div className="space-y-3 pt-6">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="font-semibold">Call Us</p>
                  <p className="text-gray-400">+91620029429</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">📧</span>
                <div>
                  <p className="font-semibold">Email Us</p>
                  <p className="text-gray-400">28point.greenenergy@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🕐</span>
                <div>
                  <p className="font-semibold">Business Hours</p>
                  <p className="text-gray-400">Mon-Fri 9AM-6PM EST</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-96 lg:h-full rounded-2xl overflow-hidden shadow-2xl group">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop"
              alt="Contact our solar team"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
