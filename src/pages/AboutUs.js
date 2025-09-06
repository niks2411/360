import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  ArrowRight
} from 'lucide-react';
import { TimelineDemo } from '../components/TimelineDemo';
import { MarqueeDemo } from '../components/MarqueeDemo';
import AnimatedCountdown from '../components/AnimatedCountdown';

const AboutUs = () => {

  const milestones = [
    { year: '2018', event: 'Company Founded' },
    { year: '2019', event: 'First 100 Clients' },
    { year: '2020', event: 'Remote Team Expansion' },
    { year: '2021', event: 'International Expansion' },
    { year: '2022', event: 'AI Integration' },
    { year: '2023', event: '10,000+ Websites Optimized' }
  ];


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding" style={{ backgroundColor: 'rgb(13,33,21)' }}>
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Users className="w-10 h-10 text-white" />
            </div> */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Our Team
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              We're a passionate team of digital experts dedicated to helping businesses 
              achieve their online goals through innovative solutions and exceptional service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary inline-flex items-center justify-center">
                Meet Our Team
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="btn-secondary inline-flex items-center justify-center">
                Join Our Team
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Animated Stats */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we've helped businesses grow and succeed across the globe
            </p>
          </motion.div>
          <AnimatedCountdown />
        </div>
      </section>


      {/* Timeline */}
      <section className="section-padding bg-white">
        <TimelineDemo />
      </section>

      {/* Reviews Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </motion.div>
          <MarqueeDemo />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-dark-800 text-white">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that trust us with their digital success. 
              Let's work together to achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-dark-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-dark-800 transition-colors inline-flex items-center justify-center">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
