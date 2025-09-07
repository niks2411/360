import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { AvatarCirclesDemo } from './AvatarCirclesDemo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Story', path: '/about-us' },
    { name: 'Services', path: '/services' },
    { name: 'SEO Tools', path: '/seo-tools' },
    { name: 'Marketing Tools', path: '/marketing-tools' },
    { name: 'Analytics', path: '/analytics' },
    { name: 'Contact Us', path: '/contact' }
  ];


  return (
    <footer 
      className="text-white relative overflow-hidden" 
      style={{ 
        width: '100vw', 
        marginLeft: 'calc(-50vw + 50%)', 
        backgroundImage: 'url(/bg1.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="w-full py-20 px-4 sm:px-6 lg:px-8" style={{ width: '100%' }}>
        {/* Free Consultancy Section - Now at the top */}
        <div className="mb-16 pb-12 border-b border-gray-600">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Digital Presence?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Book a free 30-minute consultancy session with our experts to discuss your digital marketing goals and get personalized recommendations.
            </p>
            <button 
              className="bg-green-600 hover:bg-green-700 text-white font-semibold mb-8 px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              onClick={() => window.open('/contact', '_blank')}
            >
              Book Free 30-Min Consultancy
            </button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Large Logo Section - Left Side */}
          <div className="lg:w-1/3 flex justify-center lg:justify-start -mt-0">
            <img 
              src="/lohgo.png" 
              alt="360 Logo" 
              className="w-80 h-96 object-contain"
            />
          </div>

          {/* Content Columns - Right Side */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Company Info */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">Our Company</h3>
                <p className="text-gray-300 mb-6 text-sm">
                  Comprehensive digital solutions for SEO, marketing, and analytics. 
                  We Build Brands with Tech, Media & Marketing.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">contact@360websitecontrol.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">123 Business St, City, State 12345</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
                <ul className="space-y-2">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="text-gray-300 hover:text-white transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Team Section */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">Our Team</h3>
                <div className="mt-4">
                  <AvatarCirclesDemo />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-700 mt-8 pt-8 w-full" style={{ width: '100%' }}>
          <div className="flex flex-col md:flex-row justify-between items-center w-full">
            <p className="text-gray-400 text-sm">
              © {currentYear} 360 Website Control. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
