import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import BookingModal from './BookingModal';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Story', path: '/about-us' },
    { name: 'SEO Services', path: '/affordable-seo-services-in-india' },

    { name: 'Website Design & Development', path: '/website-design' },
    { name: 'Performance Marketing', path: '/performance-marketing' },
    { name: 'Contact Us', path: '/contact' }
  ];


  return (
    <>
      {/* CTA Banner , Let's Build Your Growth Engine */}
      <section
        className="py-28 md:py-40 flex items-center relative overflow-hidden"
        style={{
          backgroundImage: 'url(/sukhi.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40"></div>

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-white leading-tight mb-6 sm:mb-8 tracking-tight w-full">
                <span className="text-white drop-shadow-2xl block mb-2" style={{
                  textShadow: '0 0 40px rgba(71, 191, 114, 0.3), 0 4px 20px rgba(0,0,0,0.5)'
                }}>
                  Let's Build Your
                </span>
                <span className="text-white drop-shadow-2xl italic block" style={{
                  fontFamily: "'Georgia', 'Times New Roman', serif",
                  background: 'linear-gradient(135deg, #ffffff 0%, #47BF72 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.3))'
                }}>
                  Growth Engine
                </span>
              </h2>
              <p
                className="text-lg md:text-xl text-white/95 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0"
                style={{
                  textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                }}
              >
                If you want marketing that actually gets implemented, we should talk.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 lg:gap-8 flex-wrap lg:flex-nowrap w-full lg:w-auto">
                {/* Primary Button */}
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="text-white px-8 py-4 font-medium uppercase tracking-wide text-sm transition-all duration-300 shadow-lg whitespace-nowrap text-center"
                  style={{
                    backgroundColor: '#47BF72',
                    borderRadius: '5px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#3aa85f';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#47BF72';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  Book Strategy Call
                </button>

                {/* Secondary Button - Ghost style */}
                <Link
                  to="/contact"
                  className="text-white px-8 py-4 font-medium uppercase tracking-wide text-sm transition-all duration-300 border border-[#47BF72] hover:bg-[#47BF72]/10 rounded-[5px] whitespace-nowrap text-center"
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  Get Proposal
                </Link>

              </div>
            </div>

            {/* Right Side - Empty for background image to show */}
            <div className="hidden lg:block">
              {/* Space intentionally left for the background image visual */}
            </div>
          </div>
        </div>
      </section>

      <footer
        className="text-white relative bg-[#040d07] pt-16 pb-12"
        style={{
          width: '100%',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1.1fr_0.9fr_0.9fr_1.3fr] gap-6 lg:gap-8 pb-16">

            {/* Col 1: Brand Info */}
            <div className="space-y-4 pr-2">
              <div className="flex items-center space-x-3 mb-6">
                <img
                  src="/logo2.png"
                  alt="XD MEDIA"
                  className="h-10 w-auto object-contain"
                />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Comprehensive digital solutions for SEO, marketing, and analytics. We Build Brands with Tech, Media & Marketing.
              </p>
              <div className="pt-2 space-y-1.5 text-sm text-gray-400">
                <p><span className="text-gray-300 font-medium">Email:</span> connect@xdmedia.in</p>
                <p><span className="text-gray-300 font-medium">Phone:</span> +91 7901724043</p>
              </div>
            </div>

            {/* Col 2: Services */}
            <div>
              <h3 className="text-base font-bold text-white mb-5 tracking-wide">Services</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link to="/affordable-seo-services-in-india" className="hover:text-white transition-colors">SEO Services</Link></li>
                <li><Link to="/web-development-services" className="hover:text-white transition-colors">Web Development Services</Link></li>
                <li><Link to="/performance-marketing" className="hover:text-white transition-colors">Performance Marketing</Link></li>
                <li><Link to="/white-label-seo" className="hover:text-white transition-colors">White Label SEO</Link></li>
                <li><Link to="/white-label-digital-marketing" className="hover:text-white transition-colors">White Label Marketing</Link></li>
              </ul>
            </div>

            {/* Col 3: Company */}
            <div>
              <h3 className="text-base font-bold text-white mb-5 tracking-wide">Company</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link to="/about-us" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Col 4: Legal */}
            <div>
              <h3 className="text-base font-bold text-white mb-5 tracking-wide">Legal</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link to="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>

            {/* Col 5: Locations */}
            <div>
              <h3 className="text-base font-bold text-white mb-5 tracking-wide">Our Offices</h3>
              <div className="space-y-4 text-xs text-gray-400">
                <div>
                  <span className="font-semibold text-white block text-sm mb-1">Head Office , India</span>
                  <span className="leading-relaxed block">SCO-40, HLP Galleria, SAS Nagar Mohali, 160062, Chandigarh</span>
                </div>
                <div>
                  <span className="font-semibold text-white block text-sm mb-1">Branch Office , South Africa</span>
                  <span className="leading-relaxed block">Sandton, Johannesburg 2091, South Africa</span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex justify-between items-center text-sm text-gray-400">
            <p>© {currentYear} XD Media. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
};

export default Footer;
