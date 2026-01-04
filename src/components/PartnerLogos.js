import React from 'react';
import Marquee from './Marquee';

const PartnerLogos = () => {
  const partners = [
    {
      name: 'Partner 1',
      logo: '/logomarque/1.png',
      alt: 'Partner 1'
    },
    {
      name: 'Partner 2',
      logo: '/logomarque/2.png',
      alt: 'Partner 2'
    },
    {
      name: 'Partner 3',
      logo: '/logomarque/3.png',
      alt: 'Partner 3'
    },
    {
      name: 'Partner 4',
      logo: '/logomarque/4.png',
      alt: 'Partner 4'
    },
    {
      name: 'Partner 5',
      logo: '/logomarque/5.png',
      alt: 'Partner 5'
    },
    {
      name: 'Partner 6',
      logo: '/logomarque/6.png',
      alt: 'Partner 6'
    }
  ];

  return (
    <div
      className="relative flex h-20 md:h-32 w-full items-center justify-start overflow-hidden transform-gpu"
      style={{
        backgroundColor: 'rgb(12,32,21)',
        willChange: 'transform'
      }}
    >
      {/* Single Marquee */}
      <Marquee
        pauseOnHover
        className="[--duration:20s] md:[--duration:15s]"
      >
        {partners.map((partner, index) => (
          <div
            key={index}
            className="flex items-center justify-center px-4 md:px-8 py-4 -mx-2 transform-gpu"
          >
            <div className="flex items-center justify-center group transform-gpu">
              <img
                src={partner.logo}
                alt={partner.alt}
                className="h-8 md:h-16 w-auto opacity-70 hover:opacity-100 transition-all duration-300 filter grayscale group-hover:grayscale-0 will-change-transform"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        ))}
      </Marquee>

      {/* Dual-edge fade overlay (same color as background) */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            linear-gradient(to right,
              rgba(12,32,21,1) 0%,
              rgba(12,32,21,0.98) 6%,
              rgba(12,32,21,0.92) 12%,
              rgba(12,32,21,0.8) 18%,
              rgba(12,32,21,0.6) 24%,
              rgba(12,32,21,0.4) 30%,
              rgba(12,32,21,0.2) 32%,
              rgba(12,32,21,0) 35%
            ),
            linear-gradient(to left,
              rgba(12,32,21,1) 0%,
              rgba(12,32,21,0.98) 6%,
              rgba(12,32,21,0.92) 12%,
              rgba(12,32,21,0.8) 18%,
              rgba(12,32,21,0.6) 24%,
              rgba(12,32,21,0.4) 30%,
              rgba(12,32,21,0.2) 32%,
              rgba(12,32,21,0) 35%
            )
          `,
        }}
      />
    </div>
  );
};

export default PartnerLogos;
