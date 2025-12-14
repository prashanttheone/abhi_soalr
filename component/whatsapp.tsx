'use client';

export default function WhatsAppButton() {
  const phoneNumber = '+916209929429';
  const message = 'Hello! I would like to inquire about your solar panel installation services.';

  // Create WhatsApp URL
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 group"
      aria-label="Contact SolarPro on WhatsApp - Official Channel"
      title="Chat with SolarPro on WhatsApp"
    >
      {/* Main Button */}
      <div className="relative">
        {/* Pulse Animation Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 rounded-full animate-pulse opacity-75" />

        {/* Button Container */}
        <div className="relative w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2">
          {/* WhatsApp Icon from SVG file */}
          <img
            src="/whatsapp-svg.svg"
            alt="WhatsApp Icon"
            className="w-8 h-8 object-contain"
            title="Contact us on WhatsApp"
          />
        </div>

        {/* Tooltip */}
        <div className="absolute bottom-20 right-0 mb-2 px-4 py-2 bg-gray-900 text-white text-sm font-semibold rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
          Chat with us!
        </div>

        {/* Phone Number Label with Logos */}
        <div className="absolute bottom-4 -left-48 px-3 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-bold rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg flex items-center gap-2">
          <span>+91 62099 29429</span>
          {/* Open Source Logo Icons */}
          <div className="flex gap-1.5 ml-2 pl-2 border-l border-white/30">
            {/* Verified Badge */}
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            {/* Star Rating */}
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Background Circle Glow Effect */}
      <div className="absolute inset-0 bg-green-500/20 rounded-full blur-2xl animate-pulse" />
    </a>
  );
}
