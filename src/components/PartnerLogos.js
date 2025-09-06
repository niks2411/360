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
    <div className="relative flex h-16 w-screen items-center justify-start overflow-hidden bg-blue-50">
      {/* Single Marquee */}
      <Marquee
        pauseOnHover
        className="[--duration:20s]"
      >
        {partners.map((partner, index) => (
          <div
            key={index}
            className="flex items-center justify-center px-2 py-4 -mx-2"
          >
            <div className="flex items-center justify-center group">
              <img
                src={partner.logo}
                alt={partner.alt}
                className="h-6 w-auto opacity-80 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
              />
            </div>
          </div>
        ))}
      </Marquee>

      {/* Left Gradient */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-blue-50"></div>

      {/* Right Gradient */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-blue-50"></div>
    </div>
  );
};

export default PartnerLogos;
