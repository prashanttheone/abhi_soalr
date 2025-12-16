'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      { label: 'Residential Solar', href: '/service' },
      { label: 'Commercial Solar', href: '/service' },
      { label: 'Solar Maintenance', href: '/service' },
      { label: 'Battery Storage', href: '/service' },
    ],
    Company: [
      { label: 'About Us', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Careers', href: '/career' },
      { label: 'Contact', href: '/contact' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
    ],
    Contact: [
      { label: 'Email: 28point.greenenergy@gmail.com', href: 'mailto:28point.greenenergy@gmail.com' },
      { label: 'Phone:+91620029429', href: 'tel:+91620029429' },
      { label: 'Hours: Mon-Fri 9AM-6PM EST', href: '#' },
    ],
  };

  return (
    <footer className="w-full bg-gradient-to-b from-gray-900 to-black text-gray-100">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">☀</span>
              </div>
              <span className="text-xl font-bold text-white">Green Sun Innovations</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Powering homes and businesses across America with sustainable solar energy solutions.
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.Services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-green-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.Company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-green-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.Legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-green-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              {footerLinks.Contact.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-green-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors" aria-label="Facebook">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5C18.1.33 17.6.3 16.46.3 13.1.3 10.58 2.6 10.58 6.2v2.15h-3v3.7h3v11.6h3.75v-11.6h2.94l.35-3.7h-3.3v-1.9c0-1 .25-1.6 1.58-1.6z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors" aria-label="Twitter">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M19.94 4.23c-.82.36-1.7.6-2.6.71 1-.6 1.76-1.55 2.12-2.68-.93.55-1.96.95-3.06 1.17-.88-.93-2.13-1.53-3.51-1.53-2.66 0-4.81 2.16-4.81 4.81 0 .38.04.75.14 1.1C7.28 8.41 3.92 6.68 1.58 3.98c-.42.72-.66 1.56-.66 2.46 0 1.67.85 3.14 2.14 4.01-.79-.03-1.54-.24-2.19-.6v.06c0 2.33 1.66 4.28 3.86 4.72-.4.11-.83.17-1.27.17-.31 0-.62-.03-.92-.08.62 1.91 2.41 3.3 4.54 3.34-1.65 1.29-3.73 2.06-5.99 2.06-.39 0-.77-.02-1.15-.07 2.14 1.37 4.68 2.17 7.39 2.17 8.87 0 13.7-7.35 13.7-13.7 0-.21 0-.42-.01-.63.94-.68 1.76-1.53 2.41-2.5z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors" aria-label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.56 17.47h-2.9V13c0-1.25-.5-2.1-1.54-2.1-.83 0-1.33.56-1.55 1.1-.08.2-.1.48-.1.75v4.72h-2.9s.04-7.66 0-8.46h2.9v1.2c.37-.58 1.04-1.4 2.53-1.4 1.84 0 3.23 1.2 3.23 3.77v4.89zM4.46 5.37c-.99 0-1.64-.66-1.64-1.48 0-.85.67-1.48 1.68-1.48.99 0 1.63.65 1.65 1.48 0 .82-.65 1.48-1.69 1.48zm1.4 12.1H2.99V8.01h2.87v9.46zM18.66 0H1.34C.6 0 0 .6 0 1.34v17.32C0 19.4.6 20 1.34 20h17.32c.74 0 1.34-.6 1.34-1.34V1.34C20 .6 19.4 0 18.66 0z" />
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-400">
            <p>&copy; {currentYear} Green Sun Innovations. All rights reserved. | Serving multiple states of India with excellence.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
