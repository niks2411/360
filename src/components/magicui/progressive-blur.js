"use client";

import { cn } from "../../lib/utils";
import React, { useEffect, useRef, useState } from "react";

export function ProgressiveBlur({
  className,
  height = "30%",
  position = "bottom",
  blurLevels = [0.2, 0.5, 1, 2, 3, 4, 6, 8],
}) {
  const [showBlur, setShowBlur] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isInRange, setIsInRange] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [fadeProgress, setFadeProgress] = useState(0); // 0 => visible, 1 => hidden
  const scrollStopTimerRef = useRef(null);
  const fadeRafRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Start showing blur after hero section (approximately 100vh)
      const heroHeight = windowHeight;
      const footerStart = documentHeight - windowHeight;
      
      // Within range where blur is allowed
      const inRange = scrollY > heroHeight && scrollY < footerStart - 200;
      setIsInRange(inRange);

      // Mark as scrolling and set a small debounce to hide when stopping
      // User is scrolling: cancel any fade-out and make sure blur is visible within range
      setIsScrolling(true);
      setIsFading(false);
      setFadeProgress(0);
      if (fadeRafRef.current) cancelAnimationFrame(fadeRafRef.current);
      if (scrollStopTimerRef.current) clearTimeout(scrollStopTimerRef.current);
      scrollStopTimerRef.current = setTimeout(() => {
        // begin fade-out animation after short idle
        setIsFading(true);
        const start = performance.now();
        const duration = 350; // ms
        const tick = (now) => {
          const elapsed = now - start;
          const t = Math.min(1, elapsed / duration);
          // ease-out
          const eased = 1 - Math.pow(1 - t, 2);
          setFadeProgress(eased);
          if (t < 1) {
            fadeRafRef.current = requestAnimationFrame(tick);
          } else {
            setIsFading(false);
            setIsScrolling(false);
          }
        };
        fadeRafRef.current = requestAnimationFrame(tick);
      }, 150);

      // Update visibility based on range
      setShowBlur(inRange && true);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollStopTimerRef.current) clearTimeout(scrollStopTimerRef.current);
      if (fadeRafRef.current) cancelAnimationFrame(fadeRafRef.current);
    };
  }, []);

  // Show when scrolling or fading within the allowed range
  if (!(showBlur && (isScrolling || isFading) && isInRange)) return null;
  // Create array with length equal to blurLevels.length - 2 (for before/after pseudo elements)
  const divElements = Array(blurLevels.length - 2).fill(null);

  return (
    <div
      className={cn(
        "gradient-blur pointer-events-none fixed z-10 left-0 right-0",
        className,
        position === "top"
          ? "top-0"
          : position === "bottom"
            ? "bottom-0"
            : "inset-y-0",
      )}
      style={{
        width: "100%",
        height: position === "both" ? "100vh" : height,
        // Parent mask to fade out from top -> bottom while stopping
        maskImage:
          isFading
            ? `linear-gradient(to bottom, rgba(0,0,0,0) ${fadeProgress * 100}%, rgba(0,0,0,1) ${fadeProgress * 100}%)`
            : undefined,
        WebkitMaskImage:
          isFading
            ? `linear-gradient(to bottom, rgba(0,0,0,0) ${fadeProgress * 100}%, rgba(0,0,0,1) ${fadeProgress * 100}%)`
            : undefined,
      }}
    >
      {/* First blur layer (pseudo element) */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 1,
          backdropFilter: `blur(${blurLevels[0]}px)`,
          WebkitBackdropFilter: `blur(${blurLevels[0]}px)`,
          maskImage:
            position === "bottom"
              ? `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12.5%, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 37.5%)`
              : position === "top"
                ? `linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12.5%, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 37.5%)`
                : `linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,1) 5%, rgba(0,0,0,1) 95%, rgba(0,0,0,0) 100%)`,
          WebkitMaskImage:
            position === "bottom"
              ? `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12.5%, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 37.5%)`
              : position === "top"
                ? `linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12.5%, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 37.5%)`
                : `linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,1) 5%, rgba(0,0,0,1) 95%, rgba(0,0,0,0) 100%)`,
        }}
      />

      {/* Middle blur layers */}
      {divElements.map((_, index) => {
        const blurIndex = index + 1;
        const startPercent = blurIndex * 12.5;
        const midPercent = (blurIndex + 1) * 12.5;
        const endPercent = (blurIndex + 2) * 12.5;

        const maskGradient =
          position === "bottom"
            ? `linear-gradient(to bottom, rgba(0,0,0,0) ${startPercent}%, rgba(0,0,0,1) ${midPercent}%, rgba(0,0,0,1) ${endPercent}%, rgba(0,0,0,0) ${endPercent + 12.5}%)`
            : position === "top"
              ? `linear-gradient(to top, rgba(0,0,0,0) ${startPercent}%, rgba(0,0,0,1) ${midPercent}%, rgba(0,0,0,1) ${endPercent}%, rgba(0,0,0,0) ${endPercent + 12.5}%)`
              : `linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,1) 5%, rgba(0,0,0,1) 95%, rgba(0,0,0,0) 100%)`;

        return (
          <div
            key={`blur-${index}`}
            className="absolute inset-0"
            style={{
              zIndex: index + 2,
              backdropFilter: `blur(${blurLevels[blurIndex]}px)`,
              WebkitBackdropFilter: `blur(${blurLevels[blurIndex]}px)`,
              maskImage: maskGradient,
              WebkitMaskImage: maskGradient,
            }}
          />
        );
      })}

      {/* Last blur layer (pseudo element) */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: blurLevels.length,
          backdropFilter: `blur(${blurLevels[blurLevels.length - 1]}px)`,
          WebkitBackdropFilter: `blur(${blurLevels[blurLevels.length - 1]}px)`,
          maskImage:
            position === "bottom"
              ? `linear-gradient(to bottom, rgba(0,0,0,0) 87.5%, rgba(0,0,0,1) 100%)`
              : position === "top"
                ? `linear-gradient(to top, rgba(0,0,0,0) 87.5%, rgba(0,0,0,1) 100%)`
                : `linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,1) 5%, rgba(0,0,0,1) 95%, rgba(0,0,0,0) 100%)`,
          WebkitMaskImage:
            position === "bottom"
              ? `linear-gradient(to bottom, rgba(0,0,0,0) 87.5%, rgba(0,0,0,1) 100%)`
              : position === "top"
                ? `linear-gradient(to top, rgba(0,0,0,0) 87.5%, rgba(0,0,0,1) 100%)`
                : `linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,1) 5%, rgba(0,0,0,1) 95%, rgba(0,0,0,0) 100%)`,
        }}
      />
    </div>
  );
}
