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

      {/* Who We Are + Team strip section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left card */}
            <div className="relative overflow-hidden rounded-2xl p-8 sm:p-10 pb-28" style={{ background: 'radial-gradient(120% 120% at 0% 0%, rgba(34,197,94,0.25) 0%, rgba(16,185,129,0.15) 30%, rgba(12,33,21,1) 100%)', backgroundColor: 'rgb(12,33,21)' }}>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Who We Are</h3>
              <p className="text-gray-200 max-w-xl mb-6">
                We’ve done all the heavy lifting so you don’t have to — get all the data you need
                to launch and grow your business faster.
              </p>
              <button className="inline-flex items-center justify-center text-white px-5 py-3 rounded-md text-sm font-medium" style={{ backgroundColor: '#47BF72', border: '0.5px solid white' }}>
                LEARN MORE
              </button>
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
              <div className="rounded-2xl overflow-hidden">
                <img src="/ba.jpg" alt="Team at work" className="w-full h-[260px] md:h-[340px] object-cover" />
              </div>
              <div className="relative rounded-2xl bg-gray-100 p-6">
                <div className="text-center mb-4">
                  <div className="text-lg font-semibold text-gray-800">Small Team</div>
                  <div className="text-lg font-semibold text-gray-800">Big Results</div>
                </div>
                <div className="relative">
                  <div className="grid grid-cols-8 gap-4 items-center">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <img key={i} src={`https://i.pravatar.cc/80?img=${i + 10}`} alt="avatar" className="w-12 h-12 rounded-full mx-auto" />
                    ))}
                  </div>
                  {/* edge fade */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl" style={{
                    background: `linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.95) 5%, rgba(255,255,255,0.8) 10%, rgba(255,255,255,0.4) 16%, rgba(255,255,255,0) 22%), linear-gradient(to left, rgba(255,255,255,1) 0%, rgba(255,255,255,0.95) 5%, rgba(255,255,255,0.8) 10%, rgba(255,255,255,0.4) 16%, rgba(255,255,255,0) 22%)`
                  }} />
                </div>
              </div>
            </div>
          </div>
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

      {/* CTA Section removed as requested */}
    </div>
  );
};

export default AboutUs;
