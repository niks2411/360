"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const AnimatedTooltip = ({
  items,
  className,
}) => {
  const [activeId, setActiveId] = React.useState(null);

  return (
    <div
      className={cn(
        "flex flex-row items-center justify-center mb-10 w-full",
        className
      )}
    >
      {items.map((item) => (
        <div
          key={item.id}
          className="relative group"
          onMouseEnter={() => setActiveId(item.id)}
          onMouseLeave={() => setActiveId(null)}
        >
          {activeId === item.id && (
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-50">
              <div className="bg-black text-white text-xs rounded py-2 px-4 whitespace-nowrap">
                <div className="font-bold">{item.name}</div>
                <div className="text-gray-300">{item.designation}</div>
              </div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
            </div>
          )}
          <div className="w-12 h-12 rounded-full border-2 border-white shadow-lg overflow-hidden cursor-pointer">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
