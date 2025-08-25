'use client';

import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

export type SpinnerSequentialPulseProps = {
  /** Outer box size (px) */
  size?: number;
  /** Number of dots around the ring */
  count?: number;
  /** Dot diameter (px) */
  dotSize?: number;
  /** Dot color */
  color?: string;
  /** Track (ring) visibility */
  showTrack?: boolean;
  /** Track color */
  trackColor?: string;
  /** Track thickness (px) */
  trackWidth?: number;
  /** Show faint spokes from center to each dot */
  showSpokes?: boolean;
  /** Base cycle duration (seconds) */
  speed?: number;
  className?: string;
};

export function SpinnerSequentialPulse({
  size = 120,
  count = 12,
  dotSize = 8,
  color = '#fff',
  showTrack = true,
  trackColor = 'rgba(255,255,255,0.1)',
  trackWidth = 2,
  showSpokes = true,
  speed = 1.2,
  className,
}: SpinnerSequentialPulseProps) {
  const dots = Array.from({ length: count });
  const radius = size / 2 - dotSize * 1.25; // leave room for the dot
  const center = size / 2;

  return (
    <div
      className={cn('relative flex items-center justify-center', className)}
      style={{ width: size, height: size }}
      role='status'
      aria-label='Loading'
    >
      {/* Track ring */}
      {showTrack && (
        <span
          aria-hidden
          className='absolute rounded-full'
          style={{
            inset: dotSize,
            border: `${trackWidth}px solid ${trackColor}`,
          }}
        />
      )}

      {/* Spokes */}
      {showSpokes &&
        dots.map((_, i) => {
          const angle = (i * 360) / count;
          return (
            <span
              aria-hidden
              key={`spoke-${i}`}
              className='absolute origin-[0_50%]'
              style={{
                width: radius,
                height: 1,
                left: center,
                top: center,
                transform: `rotate(${angle}deg)`,
                background:
                  'linear-gradient(90deg, rgba(255,255,255,0.2), rgba(255,255,255,0))',
              }}
            />
          );
        })}

      {/* Dots */}
      {dots.map((_, i) => {
        const angle = (i * 360) / count;
        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);

        return (
          <motion.span
            aria-hidden
            key={`dot-${i}`}
            className='absolute rounded-full'
            style={{
              width: dotSize,
              height: dotSize,
              top: center - dotSize / 2 + y,
              left: center - dotSize / 2 + x,
              backgroundColor: color,
            }}
            initial={{ opacity: 0.2, scale: 0.9 }}
            animate={{ opacity: [0.2, 1, 0.2], scale: [0.9, 1.15, 0.9] }}
            transition={{
              duration: speed,
              repeat: Infinity,
              ease: 'easeInOut',
              // sequential delay
              delay: (i * speed) / count,
            }}
          />
        );
      })}
    </div>
  );
}
