import React from "react";
import SpotlightCard from "./SpotlightCard";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "Technology",
      text: "Websites, SEO & automation built to scale your brand.",
      spotlightColor: "rgba(0, 255, 100, 0.3)"
    },
    {
      title: "Media & Design",
      text: "Creative visuals and content that tell your story with impact.",
      spotlightColor: "rgba(0, 255, 100, 0.3)"
    },
    {
      title: "Marketing",
      text: "Performance-driven campaigns to grow reach, leads & sales.",
      spotlightColor: "rgba(0, 255, 100, 0.3)"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {cards.map((card, index) => (
        <SpotlightCard
          key={index}
          className="w-full h-[450px] relative flex flex-col"
          spotlightColor={card.spotlightColor}
        >
          {/* Logo in top-left */}
          <div className="absolute top-4 left-4 z-10">
            <img
              src="/EDED.png"
              alt="Logo"
              className="w-12 h-12"
            />
          </div>

          {/* Leaf graphics on right side */}
          <div className="absolute top-0 right-0 w-32 h-full opacity-20">
            <div className="w-full h-full bg-gradient-to-br from-green-400/20 to-transparent rounded-full transform rotate-12 translate-x-8 -translate-y-4"></div>
            <div className="w-20 h-20 bg-gradient-to-br from-green-300/20 to-transparent rounded-full transform rotate-45 translate-x-12 translate-y-16"></div>
            <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-transparent rounded-full transform -rotate-12 translate-x-16 translate-y-32"></div>
          </div>

          {/* Content at bottom */}
          <div className="relative z-10 mt-auto pb-6">
            <h3 className="text-3xl text-white mb-4 font-inter font-medium">{card.title}</h3>
            <p className="text-white text-base leading-relaxed font-inter">{card.text}</p>
          </div>
        </SpotlightCard>
      ))}
    </div>
  );
}
