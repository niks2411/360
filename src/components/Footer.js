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
    <footer className="text-white relative overflow-hidden" style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)', backgroundColor: 'rgb(12,33,20)' }}>
      <div className="w-full py-20 px-4 sm:px-6 lg:px-8" style={{ width: '100%' }}>
        {/* Free Consultancy Section - Now at the top */}
        <div className="mb-12 pb-8 border-b border-gray-600">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Digital Presence?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Book a free 30-minute consultancy session with our experts to discuss your digital marketing goals and get personalized recommendations.
            </p>
            <button 
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              onClick={() => window.open('/contact', '_blank')}
            >
              Book Free 30-Min Consultancy
            </button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">360</span>
              </div>
              <span className="text-2xl font-bold text-green-400">Website Control</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Comprehensive digital solutions for SEO, marketing, and analytics. 
              Take complete control of your online presence with our 360° approach.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5" />
                <span>contact@360websitecontrol.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5" />
                <span>123 Business St, City, State 12345</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Team Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Team</h3>
            {/* <AnimatedTooltipPreview /> */}
            <div className="mt-4">
              <AvatarCirclesDemo />
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
      