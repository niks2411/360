import React from 'react';
import { cn } from '../lib/utils';

const Marquee = ({ 
  className, 
  reverse = false, 
  pauseOnHover = false, 
  vertical = false, 
  repeat = 4, 
  children 
}) => {
  return (
    <div
      className={cn(
        'group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]',
        vertical ? 'flex-col' : 'flex-row',
        className
      )}
    >
      {Array.from({ length: repeat }, (_, index) => (
        <div
          key={index}
          className={cn(
            'flex shrink-0 justify-around [gap:var(--gap)]',
            vertical ? 'animate-marquee-vertical flex-col' : 'animate-marquee flex-row',
            pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''
          )}
          style={{
            animationDirection: reverse ? 'reverse' : 'normal',
          }}
        >
          {children}
        </div>
      ))}
    </div>
  );
};

export default Marquee;
