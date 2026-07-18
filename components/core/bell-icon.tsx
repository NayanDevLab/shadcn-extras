'use client';

import { motion, useAnimation } from 'motion/react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface BellIconProps {
  className?: string;
  color?: string; // Bell Body color
  clapperColor?: string; // Clapper/Ball color
  size?: number;
  isAnimating?: boolean;
  startOnHover?: boolean;
  animationType?: 'bounce' | 'ring' | 'shake';
}

export function BellIcon({
  className,
  color = 'currentColor', // Bell Body
  clapperColor,
  size = 24,
  isAnimating = false,
  startOnHover = true,
  animationType = 'bounce',
}: BellIconProps) {
  const controls = useAnimation();
  const clapperControls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const shouldAnimate = isAnimating || (startOnHover && isHovered);

  const finalClapperColor = clapperColor || color;

  useEffect(() => {
    if (shouldAnimate) {
      if (animationType === 'bounce') {
        controls.start({
          y: -4,
          transition: {
            duration: 0.5,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          },
        });
        clapperControls.start({
          y: -4,
          transition: {
            duration: 0.5,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          },
        });
      } else if (animationType === 'ring') {
        // Swing the bell body
        controls.start({
          rotate: [0, -15, 15, -10, 10, 0],
          transition: {
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
            originX: '12px',
            originY: '4px', // Pivot somewhat high
          },
        });
        // Clapper swings opposite or with delay for realism
        clapperControls.start({
          x: [0, 2, -2, 1, -1, 0],
          transition: {
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        });
      } else if (animationType === 'shake') {
        controls.start({
          x: [-2, 2, -2, 2, 0],
          transition: {
            duration: 0.4,
            repeat: Infinity,
            repeatDelay: 1,
            ease: 'easeInOut',
          },
        });
        clapperControls.start({
          x: [-2, 2, -2, 2, 0],
          transition: {
            duration: 0.4,
            repeat: Infinity,
            repeatDelay: 1,
            ease: 'easeInOut',
          },
        });
      }
    } else {
      controls.stop();
      controls.set({ y: 0, rotate: 0, x: 0 });
      clapperControls.stop();
      clapperControls.set({ y: 0, x: 0 });
    }
  }, [shouldAnimate, animationType, controls, clapperControls]);

  return (
    <div
      className={cn(
        'relative flex cursor-pointer items-center justify-center select-none',
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
        {/* Bell Body Group */}
        <motion.g
          animate={controls}
          style={{ originX: '12px', originY: '4px' }}
        >
          {/* Top Loop/Handle */}
          <path d='M10 4V3a2 2 0 0 1 4 0v1' stroke={color} />
          {/* Bell Dome */}
          <path
            d='M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9'
            stroke={color}
          />
        </motion.g>

        {/* Clapper (Ball) */}
        <motion.g
          animate={clapperControls}
          style={{ originX: '12px', originY: '12px' }}
        >
          <path d='M13.73 21a2 2 0 0 1-3.46 0' stroke={finalClapperColor} />
        </motion.g>
      </svg>
    </div>
  );
}
