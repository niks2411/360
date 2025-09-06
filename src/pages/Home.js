import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle,
  Users,
  Target,
  Zap,
  BarChart3
} from 'lucide-react';
import PartnerLogos from '../components/PartnerLogos';
import { FocusCardsDemo } from '../components/FocusCardsDemo';
import { ProgressiveBlur } from '../components/magicui/progressive-blur';

const Home = () => {


  const stats = [
    { number: '10K+', label: 'Websites Optimized' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Countries Served' },
    { number: '24/7', label: 'Support Available' }
  ];

  const benefits = [
    'Complete SEO optimization',
    'Advanced marketing automation',
    'Real-time analytics dashboard',
    '24/7 expert support',
    'Custom solutions for your business',
    'Proven track record of success'
  ];

  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen w-full py-20 px-4 sm:px-6 lg:px-8" style={{
        backgroundImage: 'url(/bg1.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal leading-tight mb-8 tracking-tight">
                <span className="text-white drop-shadow-lg">Take Complete</span>
                <span className="text-yellow-300 drop-shadow-md block">360° Control</span>
                <span className="text-green-100 drop-shadow-sm">of Your Website</span>
              </h1>
              <p className="text-xl text-green-50 mb-8 leading-relaxed font-normal drop-shadow-sm">
                Comprehensive digital solutions combining SEO, marketing, and analytics 
                to maximize your online presence and drive real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/services" 
                  className="text-white px-6 py-3 font-medium uppercase tracking-wide text-sm transition-colors duration-200 shadow-lg inline-flex items-center justify-center"
                  style={{ 
                    backgroundColor: '#47BF72',
                    borderRadius: '5px',
                    border: '0.5px solid white'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#47BF72'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#47BF72'}
                >
                  GET STARTED
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                
              </div>
            </motion.div>

            {/* Right Side Background Image */}
            <div className="hidden lg:block absolute right-0 top-0 w-1/2 h-full z-10">
              <img
                src="/bgright.png"
                alt="Background Right"
                className="w-full h-full object-cover object-right"
                style={{ zIndex: 10 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos Section */}
      <PartnerLogos />

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-block">
              <span className="text-sm font-medium text-green-500 uppercase tracking-wider mb-4 block">
                What We Offer
              </span>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                Our Services
              </h2>
            </div>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive solutions designed to elevate your digital presence and drive measurable results
            </p>
          </motion.div>
          <FocusCardsDemo />
        </div>
      </section>


      {/* Benefits Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-normal text-dark-800 mb-6 tracking-tight">
                Why Choose Our Platform?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We provide comprehensive digital solutions that help businesses 
                achieve their online goals with proven strategies and cutting-edge tools.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <Users className="w-8 h-8 text-blue-500 mb-4" />
                  <h3 className="font-semibold text-dark-800 mb-2">Expert Team</h3>
                  <p className="text-sm text-gray-600">Certified professionals with years of experience</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <Target className="w-8 h-8 text-green-500 mb-4" />
                  <h3 className="font-semibold text-dark-800 mb-2">Proven Results</h3>
                  <p className="text-sm text-gray-600">Track record of successful campaigns</p>
                </div>
              </div>
              <div className="space-y-6 mt-8">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <Zap className="w-8 h-8 text-yellow-500 mb-4" />
                  <h3 className="font-semibold text-dark-800 mb-2">Fast Implementation</h3>
                  <p className="text-sm text-gray-600">Quick setup and immediate results</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <BarChart3 className="w-8 h-8 text-purple-500 mb-4" />
                  <h3 className="font-semibold text-dark-800 mb-2">Real-time Data</h3>
                  <p className="text-sm text-gray-600">Live analytics and reporting</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      
      {/* Progressive Blur Effect - Only after hero section */}
      <ProgressiveBlur 
        height="30%" 
        position="bottom" 
        blurLevels={[0.2, 0.5, 1, 2, 3, 4, 6, 8]}
        className="hidden md:block"
      />
    </div>
  );
};

export default Home;
