import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  BarChart3, 
  Mail, 
  Users, 
  Settings, 
  ChevronDown,
  Menu,
  X,
  Code,
  Monitor,
  Cpu,
  Smartphone,
  Globe
} from 'lucide-react';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);
  const location = useLocation();

  const navigationItems = [
    {
      name: 'Home',
      path: '/',
      icon: null,
      preview: null,
      description: null
    },
    {
      name: 'Our Story',
      path: '/about-us',
      icon: null,
      preview: null,
      description: null
    },
    {
      name: 'Services',
      path: '/services',
      icon: null,
      preview: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
      description: 'Comprehensive digital solutions',
      hasDropdown: true,
      dropdownItems: [
        {
          name: 'Technology',
          path: '/seo-tools',
          icon: Cpu,
          description: 'Website Design & Development, SEO & Performance Optimization, Automation & Tech Solutions',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
          features: ['Website Design & Development', 'SEO & Performance Optimization', 'Automation & Tech Solutions'],
          price: 'Starting at $299/month'
        },
        {
          name: 'Media & Design',
          path: '/marketing-tools',
          icon: Mail,
          description: 'Creative Campaigns, Photography & Video Production, Branding & Visual Identity',
          image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop',
          features: ['Creative Campaigns', 'Photography & Video Production', 'Branding & Visual Identity'],
          price: 'Starting at $499/month'
        },
        {
          name: 'Marketing',
          path: '/analytics',
          icon: BarChart3,
          description: 'Social Media Management, PPC & Performance Marketing, Lead Generation & Growth',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
          features: ['Social Media Management', 'PPC & Performance Marketing', 'Lead Generation & Growth'],
          price: 'Starting at $199/month'
        }
      ]
    },
    {
      name: 'Contact Us',
      path: '/contact',
      icon: null,
      preview: null,
      description: null
    }
  ];

  const isActive = (path) => location.pathname === path;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDropdownOpen && !event.target.closest('.services-dropdown')) {
        setIsDropdownOpen(false);
        setActiveDropdown(null);
        setHoveredService(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  // Find the Services item
  const servicesItem = navigationItems.find(item => item.name === 'Services');

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: 'rgb(12,33,20)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <img 
                src="/360.png" 
                alt="360 Logo" 
                className="w-48 h-44"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {navigationItems.map((item) => (
                <div
                  key={item.name}
                  className={`relative ${item.name === 'Services' ? 'services-dropdown' : ''}`}
                  onMouseEnter={() => {
                    if (item.hasDropdown) {
                      setIsDropdownOpen(true);
                      setActiveDropdown(item.name);
                    }
                  }}
                  onMouseLeave={() => {
                    // Don't close on mouse leave - keep it open until user clicks elsewhere
                  }}
                >
                  <Link
                    to={item.path}
                    className={`relative flex items-center space-x-2 px-4 py-3 transition-all duration-300 group ${
                      isActive(item.path)
                        ? 'text-white font-light'
                        : 'text-white hover:text-green-200'
                    }`}
                    onClick={(e) => {
                      if (item.hasDropdown) {
                        e.preventDefault();
                        setIsDropdownOpen(!isDropdownOpen);
                        setActiveDropdown(item.name);
                      }
                    }}
                  >
                    {item.icon && <item.icon className="w-4 h-4" />}
                    <span className="uppercase tracking-wide text-sm font-light">{item.name}</span>
                    {item.hasDropdown && <ChevronDown className="w-3 h-3 text-white" />}
                    
                    {/* Animated Line */}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></div>
                  </Link>
                </div>
              ))}
            </div>

            {/* GET STARTED Button */}
            <div className="hidden lg:block">
              <Link
                to="/contact"
                className="text-white px-6 py-3 font-medium uppercase tracking-wide text-sm transition-colors duration-200 shadow-lg"
                style={{ 
                  backgroundColor: '#47BF72',
                  borderRadius: '5px',
                  border: '0.5px solid white'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#3aa85f'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#47BF72'}
              >
                GET STARTED
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-green-700 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>

        {/* Desktop Dropdown */}
        <AnimatePresence>
          {isDropdownOpen && activeDropdown === 'Services' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-1/2 transform -translate-x-1/2 rounded-xl mt-3 w-96 h-80 z-50 services-dropdown shadow-xl border border-gray-200"
              style={{ backgroundColor: 'rgb(12,33,20)' }}
              onMouseEnter={() => {
                setIsDropdownOpen(true);
                setActiveDropdown('Services');
              }}
              onMouseLeave={() => {
                // Don't close on mouse leave - keep it open until user clicks elsewhere
              }}
            >
              <div className="p-6 h-full">
                <div className="flex h-full">
                  {/* Service Links */}
                  <div className="w-40 flex-shrink-0 pr-4">
                    {servicesItem?.dropdownItems?.map((dropdownItem) => (
                                              <Link
                          key={dropdownItem.name}
                          to={dropdownItem.path}
                          className="block p-4 text-sm hover:bg-gray-700 transition-colors duration-200 rounded-lg mb-2 uppercase tracking-wide font-medium"
                        onMouseEnter={() => setHoveredService(dropdownItem)}
                        onMouseLeave={() => setHoveredService(null)}
                        onClick={() => {
                          setIsDropdownOpen(false);
                          setHoveredService(null);
                        }}
                      >
                        <div className="flex items-center space-x-3">
                          <dropdownItem.icon className="w-5 h-5 text-white" />
                          <span className="text-sm font-light text-white">{dropdownItem.name}</span>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Service Preview */}
                  <div className="flex-1 pl-4">
                    {hoveredService ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                        className="bg-gray-800 rounded-xl h-full overflow-hidden shadow-inner"
                      >
                        <img
                          src={hoveredService.image}
                          alt={hoveredService.name}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    ) : (
                      <div className="bg-gray-800 rounded-xl h-full overflow-hidden shadow-inner">
                        <img
                          src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop"
                          alt="Our Services"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-green-700" style={{ backgroundColor: 'rgb(12,33,20)' }}
            >
              <div className="px-4 py-6 space-y-2">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.path}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                        isActive(item.path)
                          ? 'bg-green-700 text-white font-semibold'
                          : 'text-white hover:bg-green-700 hover:text-white'
                      }`}
                      onClick={() => {
                        if (!item.hasDropdown) {
                          setIsMobileMenuOpen(false);
                        }
                      }}
                    >
                      {item.icon && <item.icon className="w-5 h-5" />}
                      <span>{item.name}</span>
                    </Link>
                    {item.hasDropdown && item.dropdownItems && (
                      <div className="ml-8 space-y-1">
                        {item.dropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors text-sm ${
                              isActive(dropdownItem.path)
                                ? 'bg-gray-100 text-dark-800 font-semibold'
                                : 'text-gray-500 hover:bg-gray-50 hover:text-dark-800'
                            }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <dropdownItem.icon className="w-4 h-4" />
                            <span>{dropdownItem.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;