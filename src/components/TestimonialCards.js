import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face&auto=format",
    quote: "XD MEDIA executed our digital marketing campaign for Shiprocket SHIVIR'24 seamlessly, ensuring smooth delivery with live tracking and competitive pricing. Their efficiency and ability to manage complex campaigns within tight timelines were truly impressive. Highly recommend for businesses looking for reliable execution!",
    name: "Muskaan Tandon",
    role: "Senior Director - Marketing, Shiprocket",
  },
  {
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face&auto=format",
    quote: "XD MEDIA transformed our digital presence completely. Their comprehensive approach to SEO and web development helped us achieve 300% growth in organic traffic within just 6 months. The team's expertise in modern frameworks and dedication to quality are unmatched.",
    name: "Rahul Sharma",
    role: "Founder, TechVenture",
  },
  {
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face&auto=format",
    quote: "Working with XD MEDIA has been a game-changer for our business. Their performance marketing strategies and analytics insights helped us optimize our conversion rates by 250%. The team is professional, responsive, and delivers exceptional results every time.",
    name: "Priya Mehta",
    role: "Marketing Director, GrowthLabs",
  },
  {
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face&auto=format",
    quote: "The website design and development team at XD MEDIA delivered beyond our expectations. From stunning UI/UX to blazing-fast performance, they built us a website that truly represents our brand and converts visitors into customers. Highly recommend their services!",
    name: "Amit Patel",
    role: "CEO, StartupNest",
  },
];

const TestimonialCards = () => {
  const [active, setActive] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const textContainerRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState('auto');
  const duration = 5; // seconds

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
    setAutoRotate(false);
  }, []);

  const handlePrev = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoRotate(false);
  }, []);

  // Auto-rotate
  useEffect(() => {
    if (!autoRotate) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, duration * 1000);
    return () => clearInterval(interval);
  }, [autoRotate]);

  // Height fix for text container
  useEffect(() => {
    if (textContainerRef.current) {
      setContainerHeight(`${textContainerRef.current.scrollHeight}px`);
    }
  }, [active]);

  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: 'rgb(12,33,21)' }}>
      {/* Background radial gradient */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2347BF72' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl text-white mb-4 leading-tight tracking-wide">
            The Impact We Deliver
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed max-w-xl mx-auto">
            Our clients don't just work with us, they win with us.
          </p>
        </motion.div>

        {/* Testimonial Slider , Inspira UI style */}
        <div className="mx-auto w-full max-w-3xl text-center">

          {/* Testimonial Avatar */}
          <div className="relative h-32 mb-2">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-[480px] max-w-full pointer-events-none">
              {/* Radial gradient glow */}
              <div
                className="absolute inset-0 -z-10 rounded-full"
                style={{
                  background: 'linear-gradient(to bottom, rgba(71,191,114,0.25) 0%, rgba(71,191,114,0.05) 25%, transparent 75%)',
                }}
              />
              <div
                className="h-32 overflow-hidden"
                style={{
                  maskImage: 'linear-gradient(0deg, transparent, white 20%, white)',
                  WebkitMaskImage: 'linear-gradient(0deg, transparent, white 20%, white)',
                }}
              >
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={`img-${active}`}
                    initial={{ opacity: 0, rotate: -60 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 60 }}
                    transition={{ duration: 0.7, ease: [0.68, -0.3, 0.32, 1] }}
                    className="absolute inset-0 -z-10 flex flex-col items-center"
                  >
                    <img
                      src={testimonials[active].img}
                      alt={testimonials[active].name}
                      className="relative top-11 rounded-full border-2 border-green-400/60 shadow-lg shadow-green-500/20"
                      width={60}
                      height={60}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Quote Text */}
          <div
            className="mb-8 transition-[height] duration-300 ease-in-out relative"
            style={{ height: containerHeight }}
          >
            <AnimatePresence mode="popLayout">
              <motion.div
                key={`text-${active}`}
                ref={textContainerRef}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20, position: 'absolute', top: 0, left: 0, right: 0 }}
                transition={{
                  enter: { duration: 0.5, ease: 'easeInOut', delay: 0.2 },
                  exit: { duration: 0.3, ease: 'easeOut' },
                }}
                className="w-full"
              >
                <p className="text-xl sm:text-2xl font-bold text-white leading-relaxed">
                  &ldquo;{testimonials[active].quote}&rdquo;
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Row: Prev , Name & Role , Next */}
          <div className="mt-4 flex w-full items-center justify-between gap-4 pt-8 sm:pt-0">
            <button
              onClick={handlePrev}
              className="group flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-green-600 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-5 h-5 text-white transition-transform duration-300 group-hover:rotate-12" />
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={`info-${active}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center gap-0.5"
              >
                <span className="text-base text-white font-semibold italic">{testimonials[active].name}</span>
                <span className="text-sm text-gray-400 italic">{testimonials[active].role}</span>
              </motion.div>
            </AnimatePresence>

            <button
              onClick={handleNext}
              className="group flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-green-600 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-5 h-5 text-white transition-transform duration-300 group-hover:-rotate-12" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCards;
