import React, { useEffect, useRef } from 'react';
import { inspiraImageParticles } from '../lib/particle-image';

const ParticleImage = ({ imageSrc, responsiveWidth = true, onComplete }) => {
  const containerRef = useRef(null);
  const particleInstanceRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !imageSrc) return;

    const { InspiraImageParticle } = inspiraImageParticles();
    
    const options = {
      wrapperElement: containerRef.current,
      imageUrl: imageSrc,
      responsiveWidth: responsiveWidth,
      width: window.innerWidth,
      height: window.innerHeight,
      maxWidth: 400,
      maxHeight: 300,
      lifeCycle: true,
      growDuration: 100,
      waitDuration: 150,
      shrinkDuration: 100,
      fadePosition: "explode",
      fadeDirection: "random"
    };

    const particleInstance = new InspiraImageParticle(options);
    particleInstanceRef.current = particleInstance;

    // Auto-complete animation after a shorter time
    const autoCompleteTimer = setTimeout(() => {
      console.log('Auto-completing particle animation');
      if (particleInstance.state === 'running') {
        particleInstance.stop({
          fadePosition: "explode",
          fadeDirection: "random"
        });
      }
      // Call onComplete even if stop doesn't trigger the event
      if (onComplete) {
        setTimeout(() => {
          console.log('Calling onComplete from timer');
          onComplete();
        }, 500);
      }
    }, 3000); // Complete after 3 seconds

    // Listen for animation completion
    if (onComplete) {
      particleInstance.on('stopped', () => {
        console.log('Particle animation stopped event triggered');
        clearTimeout(autoCompleteTimer);
        onComplete();
      });
    }

    return () => {
      clearTimeout(autoCompleteTimer);
      if (particleInstanceRef.current) {
        particleInstanceRef.current.stop();
      }
    };
  }, [imageSrc, responsiveWidth, onComplete]);

  return (
    <div 
      ref={containerRef} 
      className="flex flex-col items-center justify-center"
      style={{ 
        width: '100%',
        height: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    />
  );
};

export default ParticleImage;