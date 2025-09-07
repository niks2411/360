import React from 'react';
import Marquee from './Marquee';

const PartnerLogos = () => {
  const partners = [
    {
      name: 'Google Partner',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
      alt: 'Google Partner'
    },
    {
      name: 'Facebook Partner',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
      alt: 'Facebook Partner'
    },
    {
      name: 'Microsoft Partner',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
      alt: 'Microsoft Partner'
    },
    {
      name: 'Amazon Partner',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
      alt: 'Amazon Partner'
    },
  
    {
      name: 'Salesforce Partner',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg',
      alt: 'Salesforce Partner'
    },
    {
      name: 'Shopify Partner',
      logo: 'https://logos-world.net/wp-content/uploads/2020/11/Shopify-Logo.png',
      alt: 'Shopify Partner'
    },
    {
      name: 'Adobe Partner',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg',
      alt: 'Adobe Partner'
    }
  ];

  return (
    <div 
      className="relative flex h-24 w-screen items-center justify-start overflow-hidden"
      style={{ backgroundColor: 'rgb(12,32,21)' }}
    >
      {/* Single Marquee */}
      <Marquee
        pauseOnHover
        className="[--duration:20s]"
      >
        {partners.map((partner, index) => (
          <div
            key={index}
            className="flex items-center justify-center px-2 py-6 -mx-2"
          >
            <div className="flex items-center justify-center group">
              <img
                src={partner.logo}
                alt={partner.alt}
                className="h-8 w-auto opacity-80 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
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
