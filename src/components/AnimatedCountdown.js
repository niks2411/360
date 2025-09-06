import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const AnimatedCountdown = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    websites: 0,
    clients: 0,
    team: 0,
    countries: 0
  });

  const targetValues = {
    websites: 10000,
    clients: 500,
    team: 50,
    countries: 25
  };

  const duration = 2000; // 2 seconds
  const interval = 50; // Update every 50ms

  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          startCountdown();
        }
      },
      { threshold: 0.3 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [isVisible]);

  const startCountdown = () => {
    const steps = duration / interval;
    const stepValues = {
      websites: targetValues.websites / steps,
      clients: targetValues.clients / steps,
      team: targetValues.team / steps,
      countries: targetValues.countries / steps
    };

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      
      setCounts({
        websites: Math.min(Math.floor(stepValues.websites * currentStep), targetValues.websites),
        clients: Math.min(Math.floor(stepValues.clients * currentStep), targetValues.clients),
        team: Math.min(Math.floor(stepValues.team * currentStep), targetValues.team),
        countries: Math.min(Math.floor(stepValues.countries * currentStep), targetValues.countries)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(targetValues);
      }
    }, interval);
  };

  const stats = [
    { 
      number: counts.websites.toLocaleString(), 
      suffix: '+', 
      label: 'Websites Optimized' 
    },
    { 
      number: counts.clients, 
      suffix: '+', 
      label: 'Happy Clients' 
    },
    { 
      number: counts.team, 
      suffix: '+', 
      label: 'Team Members' 
    },
    { 
      number: counts.countries, 
      suffix: '+', 
      label: 'Countries Served' 
    }
  ];

  return (
    <div ref={countRef} className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div 
            className="text-3xl md:text-4xl font-bold mb-2"
            style={{ color: 'rgb(83,0,169)' }}
            initial={{ scale: 0.8 }}
            animate={{ scale: isVisible ? 1 : 0.8 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {stat.number}{stat.suffix}
          </motion.div>
          <div className="text-gray-600 font-medium">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedCountdown;
