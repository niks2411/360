"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const FocusCards = ({ cards }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className="relative group cursor-pointer"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="p-6 rounded-lg border border-gray-200 h-full flex flex-col" style={{ backgroundColor: 'rgb(13,32,20)' }}>
            <div className="aspect-video mb-4 bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={card.src}
                alt={card.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">{card.title}</h3>
            <div className="space-y-2 flex-grow">
              {card.services?.map((service, serviceIndex) => (
                <div key={serviceIndex} className="flex items-center text-sm text-gray-200">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 flex-shrink-0"></div>
                  {service}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
