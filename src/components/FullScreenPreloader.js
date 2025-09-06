import React, { useState, useEffect } from 'react';
import ParticleImage from './ParticleImage';

const FullScreenPreloader = ({ onComplete }) => {
  const [animationComplete, setAnimationComplete] = useState(false);

  // Fallback timer to ensure landing page opens
  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      console.log('Fallback timer: Opening landing page');
      onComplete();
    }, 5000); // Open after 5 seconds maximum

    return () => clearTimeout(fallbackTimer);
  }, [onComplete]);

  const handleParticleComplete = () => {
    console.log('Particle animation completed');
    setAnimationComplete(true);
    // Wait 1 second after animation completes
    setTimeout(() => {
      console.log('Opening landing page after 1 second delay');
      onComplete();
    }, 1000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black flex items-center justify-center"
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden'
      }}
    >
      <div className="w-full h-full flex items-center justify-center">
        <ParticleImage
          imageSrc="/docs/og-image.svg"
          responsiveWidth={true}
          onComplete={handleParticleComplete}
        />
      </div>
      
      {animationComplete && (
        <div className="absolute inset-0 bg-black opacity-0 animate-fade-in" />
      )}
    </div>
  );
};

export default FullScreenPreloader;