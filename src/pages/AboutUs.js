import React from 'react';
import { motion } from 'framer-motion';
import { TimelineDemo } from '../components/TimelineDemo';
import { MarqueeDemo } from '../components/MarqueeDemo';

const AboutUs = () => {
  const stats = [
    { value: "112.5B+", label: "YouTube Views Delivered" },
    { value: "₹35+ Cr", label: "Group Annual Revenue" },
    { value: "1M+", label: "Combined Subscribers" },
    { value: "100+", label: "Brand Partnerships" }
  ];

  return (
    <div className="min-h-screen" style={{ background: '#0a0a0a' }}>
      {/* Hero Section - Dark Green Theme matching homepage */}
      <section
        className="py-32 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgb(12,33,21) 0%, rgb(20,50,35) 100%)'
        }}
      >
        {/* Subtle animated background */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-green-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container-max relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-6 py-2 rounded-full text-sm font-medium uppercase tracking-wider mb-8"
              style={{
                background: 'rgba(71, 191, 114, 0.2)',
                border: '1px solid rgba(71, 191, 114, 0.4)',
                color: '#47BF72'
              }}
            >
              About XD MEDIA
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl leading-tight mb-8 tracking-tight">
              <span className="text-white font-inter font-normal block mb-2">
                Creating Buzz.
              </span>
              <span className="text-white font-fraunces italic font-light">
                Building Brands.
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed font-inter font-light max-w-3xl mx-auto">
              A full-stack marketing, branding & technology agency backed by proven industry leaders.
              We deliver end-to-end solutions that drive real, measurable growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Grid - Dark Background like homepage */}
      <section className="py-20" style={{ background: '#0a0a0a' }}>
        <div className="container-max">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div
                  className="relative overflow-hidden rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-2xl backdrop-blur-xl border"
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderColor: 'rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <div className="text-5xl font-bold mb-3" style={{
                    background: 'linear-gradient(135deg, #47BF72 0%, #3aa85f 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider font-medium">
                    {stat.label}
                  </div>

                  {/* Hover accent */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                    style={{ background: '#47BF72' }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision - Dark gradient like homepage */}
      <section
        className="py-24 relative overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)'
        }}
      >
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-inter">
              Our Purpose
            </h2>
            <div className="w-20 h-1 mx-auto" style={{ background: '#47BF72' }}></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="group"
            >
              <div
                className="relative overflow-hidden rounded-3xl p-10 h-full transition-all duration-300 hover:shadow-2xl backdrop-blur-xl border"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderColor: 'rgba(255, 255, 255, 0.1)'
                }}
              >
                <div className="mb-6">
                  <h3 className="text-3xl font-bold mb-2" style={{ color: '#47BF72' }}>
                    Mission
                  </h3>
                  <div className="w-12 h-1" style={{ background: '#47BF72' }}></div>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">
                  To help brands grow <span className="font-semibold text-white">smarter, faster, and stronger</span> through innovation, creativity, and technology. We believe in delivering measurable results that transform businesses.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="group"
            >
              <div
                className="relative overflow-hidden rounded-3xl p-10 h-full transition-all duration-300 hover:shadow-2xl backdrop-blur-xl border"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderColor: 'rgba(255, 255, 255, 0.1)'
                }}
              >
                <div className="mb-6">
                  <h3 className="text-3xl font-bold mb-2" style={{ color: '#47BF72' }}>
                    Vision
                  </h3>
                  <div className="w-12 h-1" style={{ background: '#47BF72' }}></div>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">
                  To become the <span className="font-semibold text-white">most trusted marketing & tech partner worldwide</span>, where creativity meets performance and innovation drives success.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Are - Premium Card with dark theme */}
      <section className="py-24" style={{ background: '#0a0a0a' }}>
        <div className="container-max">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl p-12 shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, rgb(12,33,21) 0%, rgb(20,50,35) 100%)'
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-4xl font-bold text-white mb-6 font-inter">
                    Who We Are
                  </h3>
                  <p className="text-xl text-gray-200 leading-relaxed mb-8 font-light">
                    Backed by established ventures with ₹35+ crore annual revenue, 112.5+ billion YouTube views delivered, and 1M+ combined subscribers. This is the powerhouse behind XD MEDIA.
                  </p>
                  <button
                    className="px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105"
                    style={{
                      background: '#47BF72',
                      boxShadow: '0 10px 30px rgba(71, 191, 114, 0.3)'
                    }}
                  >
                    Learn More About Us
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <div className="text-4xl font-bold text-white mb-2">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-300 uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline - Dark gradient */}
      <section
        className="py-24 relative overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)'
        }}
      >
        <TimelineDemo />
      </section>

      {/* Testimonials - Dark background */}
      <section className="py-24" style={{ background: '#0a0a0a' }}>
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-inter">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
              Real results, real testimonials from brands we've helped grow
            </p>
            <div className="w-20 h-1 mx-auto mt-6" style={{ background: '#47BF72' }}></div>
          </motion.div>
          <MarqueeDemo />
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
