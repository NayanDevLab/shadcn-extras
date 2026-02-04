'use client';

import { motion, useAnimation } from 'motion/react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface GlobalIconProps {
  className?: string;
  color?: string; // Globe color
  pinColor?: string; // Pin color
  size?: number;
  isAnimating?: boolean;
  startOnHover?: boolean;
  animationType?: 'spin' | 'bounce' | 'ping';
}

export function GlobalIcon({
  className,
  color = 'currentColor',
  pinColor,
  size = 24,
  isAnimating = false,
  startOnHover = true,
  animationType = 'bounce',
}: GlobalIconProps) {
  const controls = useAnimation();
  const pinControls = useAnimation(); // For pins
  const [isHovered, setIsHovered] = useState(false);
  const shouldAnimate = isAnimating || (startOnHover && isHovered);

  const finalPinColor = pinColor || color;

  useEffect(() => {
    if (shouldAnimate) {
      if (animationType === 'spin') {
        controls.start({
          rotate: 360,
          transition: {
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          },
        });
      } else if (animationType === 'bounce') {
        pinControls.start({
          y: [0, -5, 0],
          transition: {
            duration: 1,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        });
      } else if (animationType === 'ping') {
        pinControls.start({
          scale: [1, 1.2, 1],
          opacity: [1, 0.7, 1],
          transition: {
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        });
      }
    } else {
      controls.stop();
      controls.set({ rotate: 0 });
      pinControls.stop();
      pinControls.set({ y: 0, scale: 1, opacity: 1 });
    }
  }, [shouldAnimate, animationType, controls, pinControls]);

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
        {/* Globe Group */}
        <motion.g
          animate={controls}
          style={{ originX: '12px', originY: '12px' }}
        >
          <circle cx='12' cy='12' r='10' stroke={color} />
          <line x1='2' y1='12' x2='22' y2='12' stroke={color} />
          <path
            d='M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z'
            stroke={color}
          />
        </motion.g>

        {/* Pin 1 - Top Left */}
        <motion.g
          animate={pinControls}
          style={{ originX: '4px', originY: '4px' }}
          transform='translate(-3, -3)' // Initial offset adjustments if needed
        >
          {/* Pin Shape */}
          <path
            d='M5 2C3 2 1.5 3.5 1.5 5.5C1.5 8 5 11 5 11C5 11 8.5 8 8.5 5.5C8.5 3.5 7 2 5 2Z'
            fill={finalPinColor}
            stroke={finalPinColor}
          />
          {/* Pin Dot */}
          <circle cx='5' cy='5.5' r='1.5' fill='black' />
        </motion.g>

        {/* Pin 2 - Bottom Right */}
        <motion.g
          animate={pinControls}
          style={{ originX: '20px', originY: '20px' }}
          transition={{ delay: 0.2 }} // Stagger
        >
          {/* Pin Shape - Scaled/Positioned at 19,19 approx */}
          <g transform='translate(14, 14)'>
            <path
              d='M5 2C3 2 1.5 3.5 1.5 5.5C1.5 8 5 11 5 11C5 11 8.5 8 8.5 5.5C8.5 3.5 7 2 5 2Z'
              fill={finalPinColor}
              stroke={finalPinColor}
            />
            <circle cx='5' cy='5.5' r='1.5' fill='black' />
          </g>
        </motion.g>
      </svg>
    </div>
  );
}
