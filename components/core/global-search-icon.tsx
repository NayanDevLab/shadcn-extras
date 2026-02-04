'use client';

import { motion, useAnimation } from 'motion/react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface GlobalSearchIconProps {
  className?: string;
  color?: string; // Glass Frame color
  globeColor?: string; // Globe color
  size?: number;
  isAnimating?: boolean;
  startOnHover?: boolean;
  animationType?: 'rotate' | 'search' | 'shake';
}

export function GlobalSearchIcon({
  className,
  color = 'currentColor', // Black frame typically
  globeColor,
  size = 24,
  isAnimating = false,
  startOnHover = true,
  animationType = 'rotate',
}: GlobalSearchIconProps) {
  const controls = useAnimation();
  const globeControls = useAnimation(); // For the inner globe
  const [isHovered, setIsHovered] = useState(false);
  const shouldAnimate = isAnimating || (startOnHover && isHovered);

  const finalGlobeColor = globeColor || color;

  useEffect(() => {
    if (shouldAnimate) {
      if (animationType === 'rotate') {
        globeControls.start({
          rotate: 360,
          transition: {
            duration: 4,
            repeat: Infinity,
            ease: 'linear',
          },
        });
      } else if (animationType === 'search') {
        controls.start({
          x: [0, 5, -5, 0, 5, -5, 0],
          y: [0, 5, 5, 0, -5, -5, 0],
          transition: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        });
      } else if (animationType === 'shake') {
        controls.start({
          x: [0, -3, 3, -3, 3, 0],
          transition: {
            duration: 0.5,
            repeat: Infinity,
            repeatDelay: 1,
            ease: 'easeInOut',
          },
        });
      }
    } else {
      controls.stop();
      controls.set({ x: 0, y: 0 });
      globeControls.stop();
      globeControls.set({ rotate: 0 });
    }
  }, [shouldAnimate, animationType, controls, globeControls]);

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
        {/* Magnifying Glass Handle */}
        <motion.path animate={controls} d='m21 21-4.3-4.3' stroke={color} />

        {/* Magnifying Glass Ring */}
        <motion.circle
          animate={controls}
          cx='11'
          cy='11'
          r='8'
          stroke={color}
        />

        {/* Globe Inside - Masked or just placed carefully inside */}
        <motion.g
          animate={globeControls}
          style={{ originX: '11px', originY: '11px' }}
        >
          <path
            d='M11 5a6 6 0 1 0 0 12 6 6 0 0 0 0-12'
            stroke={finalGlobeColor}
            strokeWidth='1.5'
          />
          <path
            d='M11 5c2 0 3.5 2.5 3.5 6S13 17 11 17'
            stroke={finalGlobeColor}
            strokeWidth='1.5'
          />
          <path
            d='M11 5c-2 0-3.5 2.5-3.5 6S9 17 11 17'
            stroke={finalGlobeColor}
            strokeWidth='1.5'
          />
          <path d='M5.5 11h11' stroke={finalGlobeColor} strokeWidth='1.5' />
        </motion.g>
      </svg>
    </div>
  );
}
