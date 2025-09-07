import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight
} from 'lucide-react';
import PartnerLogos from '../components/PartnerLogos';
import { FocusCardsDemo } from '../components/FocusCardsDemo';
import { WobbleCardDemo } from '../components/WobbleCardDemo';
import { ProgressiveBlur } from '../components/magicui/progressive-blur';

const Home = () => {


  const stats = [
    { number: '10K+', label: 'Websites Optimized' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Countries Served' },
    { number: '24/7', label: 'Support Available' }
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
            </motion.div>

            {/* Right Side Background Image */}
            <div className="hidden lg:block absolute top-0 right-[-12%] w-1/2 h-full z-10">
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


      {/* Wobble Cards Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <WobbleCardDemo />
        </div>
      </section>

      {/* New Section */}
      <section 
        className="py-24 relative" 
        style={{ backgroundColor: 'rgb(68,16,151)' }}
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{ 
            backgroundImage: 'url(/glass.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: 10
          }}
        ></div>
        
        {/* Vertical Stripes Overlay */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{ 
            background: `
              linear-gradient(90deg, 
                rgba(68,16,151,0.8) 0%, 
                rgba(68,16,151,0.6) 8%, 
                rgba(68,16,151,0.8) 16%, 
                rgba(68,16,151,0.5) 24%, 
                rgba(68,16,151,0.7) 32%, 
                rgba(68,16,151,0.6) 40%, 
                rgba(68,16,151,0.8) 48%, 
                rgba(68,16,151,0.5) 56%, 
                rgba(68,16,151,0.7) 64%, 
                rgba(68,16,151,0.6) 72%, 
                rgba(68,16,151,0.8) 80%, 
                rgba(68,16,151,0.5) 88%, 
                rgba(68,16,151,0.8) 100%
              )
            `,
            zIndex: 15
          }}
        ></div>
        
        {/* Content */}
        <div className="container-max relative" style={{ zIndex: 20 }}>
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Foundry: <span className="italic">Casting the future</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Harnessing AI to Shape the Future
            </p>
            <Link 
              to="/services" 
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              DISCOVER AI FOUNDRY
            </Link>
          </motion.div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative rounded-lg overflow-hidden h-96 group cursor-pointer"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ 
                  backgroundImage: 'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop)'
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Ready-Made AI Solutions
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  30+ Ready-Made AI Solutions: Pre-built, scalable tools tailored to meet diverse business needs.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative rounded-lg overflow-hidden h-96 group cursor-pointer"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ 
                  backgroundImage: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop)'
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Tailored AI Partnerships
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  70+ Partners: A vast network of trusted collaborators and strategic alliances in the AI ecosystem.
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative rounded-lg overflow-hidden h-96 group cursor-pointer"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ 
                  backgroundImage: 'url(https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=400&fit=crop)'
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Elite AI Workforce
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  Expert AI Engineers: A powerhouse of 5,000+ skilled professionals driving innovation.
                </p>
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
