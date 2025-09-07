import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight
} from 'lucide-react';
import PartnerLogos from '../components/PartnerLogos';
import { FocusCardsDemo } from '../components/FocusCardsDemo';

import { ProgressiveBlur } from '../components/magicui/progressive-blur';
import { Marquee } from '../components/magicui/marquee';
import TestimonialCards from '../components/TestimonialCards';
import { HeroParallaxDemo } from '../components/HeroParallaxDemo';

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
      <section className="relative overflow-hidden min-h-screen w-full flex items-start pt-20 px-4 sm:px-6 lg:px-8" style={{
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
              className="text-left mt-8 ml-4"
            >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl leading-tight mb-6 sm:mb-8 tracking-tight">
                  <span className="text-white drop-shadow-lg font-inter font-normal">
                    We Build Brands with
                  </span>
                  <br />
                  <span className="text-white drop-shadow-lg font-fraunces italic font-light">
                    Tech, Media <span className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-normal">&</span> Marketing.
                  </span>
                </h1>
              <p className="text-base sm:text-lg text-white mb-6 sm:mb-8 leading-relaxed font-inter font-light drop-shadow-sm">
                From powerful websites and performance marketing to creative media that inspires, we give your brand clarity, growth, and direction.
              </p>
              <div className="flex">
                 <Link
                               to="/contact"
                               className="text-white px-8 py-4 font-medium uppercase tracking-wide text-sm transition-colors duration-200 shadow-lg"
                               style={{ 
                                 backgroundColor: '#47BF72',
                                 borderRadius: '8px',
                                 border: '1px solid white'
                               }}
                               onMouseEnter={(e) => e.target.style.backgroundColor = '#3aa85f'}
                               onMouseLeave={(e) => e.target.style.backgroundColor = '#47BF72'}
                             >
                               GET STARTED
                             </Link>
                
              </div>
            </motion.div>

            {/* Right Side Background Image */}
            <div className="hidden lg:block relative">
              <img
                src="/bgright.png"
                alt="Background Right"
                className="w-full h-full object-contain"
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
             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl leading-tight mb-6 sm:mb-8 tracking-tight">
                  <span className="text-black drop-shadow-lg font-inter font-medium">
                   Our Core
                  </span>
                  <span> </span>
                  <span className="text-black drop-shadow-lg font-fraunces italic font-light">
                    Expertise
                  </span>
                </h1>
            </div>
            <p className="text-base sm:text-lg text-black sm: leading-relaxed font-inter font-light drop-shadow-sm">
              Comprehensive solutions designed to elevate your digital presence and
            </p>
            <p className="text-base sm:text-lg text-black mb-6 sm:mb-8 leading-relaxed font-inter font-light drop-shadow-sm"> drive measurable results</p>
          </motion.div>
          <FocusCardsDemo />
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
      
      {/* Who We Are + Team strip section (replicated) */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left card */}
            <div className="relative overflow-hidden rounded-lg p-8 sm:p-10 pb-28" style={{ background: 'radial-gradient(120% 120% at 0% 0%, rgba(34,197,94,0.25) 0%, rgba(16,185,129,0.15) 30%, rgba(12,33,21,1) 100%)', backgroundColor: 'rgb(12,33,21)' }}>
              <h2 className="text-3xl md:text-3xl lg:text-4xl font-light text-white mb-6 leading-tight tracking-wide">
              Who We Are
            </h2>
              <p className="text-gray-200 max-w-xl mb-6">
                We’ve done all the heavy lifting so you don’t have to — get all the data you need
                to launch and grow your business faster.
              </p>
              <Link to="/about" className="inline-flex items-center justify-center text-white px-5 py-3 rounded-md text-sm font-medium" style={{ backgroundColor: '#47BF72', border: '0.5px solid white' }}>
                LEARN MORE
              </Link>
              {/* Stats pinned to bottom */}
              <div className="grid grid-cols-2 md:grid-cols-2 gap-x-16 gap-y-8 absolute left-8 right-8 bottom-6">
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-white">22,000+</div>
                  <div className="text-[11px] uppercase tracking-widest text-white/80 mt-2">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-white">8,000+</div>
                  <div className="text-[11px] uppercase tracking-widest text-white/80 mt-2">Clients Served</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-white">23+</div>
                  <div className="text-[11px] uppercase tracking-widest text-white/80 mt-2">Countries Served</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-white">9+</div>
                  <div className="text-[11px] uppercase tracking-widest text-white/80 mt-2">Average Client NPS</div>
                </div>
              </div>
            </div>

            {/* Right column: image + small team strip */}
            <div className="flex flex-col gap-6">
              <div className="rounded-lg overflow-hidden">
                <img src="/ba.png" alt="Team at work" className="w-full h-[260px] md:h-[340px] object-cover" />
              </div>
              <div className="relative rounded-lg bg-white p-8 overflow-hidden" style={{ background: '#f8fafc' }}>
                <div className="text-center mb-4">
                  <div className="text-lg font-light font-inter text-gray-800">We are Certified partners</div>
                  {/* <div className="text-sm text-gray-600">Our partners</div> */}
                </div>
                <div className="relative overflow-hidden h-24 md:h-28 flex items-center">
                  <Marquee pauseOnHover className="[--duration:18s] w-full">
                    {['/1.png','/2.png','/3.png','/1.png','/2.png','/3.png'].map((src, i) => (
                      <div key={i} className="px-4">
                        <img src={src} alt={`logo-${i}`} className="h-20 md:h-24 w-auto object-contain" />
                      </div>
                    ))}
                  </Marquee>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Testimonial Cards Section */}
      <TestimonialCards />

      {/* Hero Parallax Section */}
      <div className="mt-8 mb-32">
        <HeroParallaxDemo />
      </div>

      {/* New Section with sukhi.png background */}
      <section 
        className="py-40 flex items-center"
        style={{
          backgroundImage: 'url(/sukhi.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl leading-tight mb-6 sm:mb-8 tracking-tight">
                  <span className="text-white drop-shadow-lg font-inter font-normal">
                    Your 360°
                  </span>
                  <br />
                  <span className="text-white drop-shadow-lg font-fraunces italic font-light">
                    Marketing Partner  </span>
                </h2>
              <p className="text-lg md:text-xl text-white mb-8 leading-relaxed">
                From technology and creative media to performance-driven marketing, we deliver complete 360° solutions that build, scale, and sustain your brand in the digital era.
              </p>
              <Link 
                to="/contact" 
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
              >
                GET STARTED
              </Link>
            </motion.div>

            {/* Right Side - Empty for now, can add visual elements later */}
            <div className="hidden lg:block">
              {/* Space for future visual elements */}
            </div>
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
