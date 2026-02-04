'use client';

import { motion, useAnimation } from 'motion/react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface HeartIconProps {
  className?: string;
  color?: string; // Heart outline color
  shineColor?: string; // Shine/Reflection color
  size?: number;
  isAnimating?: boolean;
  startOnHover?: boolean;
  animationType?: 'bounce' | 'beat' | 'pulse';
}

export function HeartIcon({
  className,
  color = 'currentColor', // Black typically
  shineColor,
  size = 24,
  isAnimating = false,
  startOnHover = true,
  animationType = 'bounce',
}: HeartIconProps) {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const shouldAnimate = isAnimating || (startOnHover && isHovered);

  const finalShineColor = shineColor || color;

  useEffect(() => {
    if (shouldAnimate) {
      if (animationType === 'bounce') {
        controls.start({
          y: -5,
          transition: {
            duration: 0.5,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          },
        });
      } else if (animationType === 'beat') {
        // Classic heartbeat: thump-thump... thump-thump...
        controls.start({
          scale: [1, 1.2, 1, 1.2, 1],
          transition: {
            duration: 1, // 1 second for the double beat
            repeat: Infinity,
            repeatDelay: 0.5, // Pause between beats
            ease: 'easeInOut',
          },
        });
      } else if (animationType === 'pulse') {
        controls.start({
          scale: [1, 1.1, 1],
          transition: {
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        });
      }
    } else {
      controls.stop();
      controls.set({ y: 0, scale: 1 });
    }
  }, [shouldAnimate, animationType, controls]);

  return (
    <div
      className={cn(
        'relative flex cursor-pointer select-none items-center justify-center',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={size}
        height={size}
        viewBox='0 0 24 24'
        fill='none'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <motion.g
          animate={controls}
          style={{ originX: '12px', originY: '12px' }}
        >
          {/* Heart Shape */}
          <path
            d='M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z'
            stroke={color}
          />
          {/* Shine - Top Right Lobe */}
          <path
            d='M18 6a3 3 0 0 1 2 3'
            stroke={finalShineColor}
            strokeLinecap='round'
          />
        </motion.g>
      </svg>
    </div>
  );
}
