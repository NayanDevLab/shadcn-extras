'use client';

import { motion, useAnimation } from 'motion/react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface TrophyIconProps {
  className?: string;
  color?: string; // Trophy color (Cup + Handles + Base)
  starColor?: string; // Star color
  size?: number;
  isAnimating?: boolean;
  startOnHover?: boolean;
  animationType?: 'bounce' | 'wobble' | 'shine';
}

export function TrophyIcon({
  className,
  color = 'currentColor', // Black frame typically
  starColor,
  size = 24,
  isAnimating = false,
  startOnHover = true,
  animationType = 'bounce',
}: TrophyIconProps) {
  const controls = useAnimation();
  const starControls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const shouldAnimate = isAnimating || (startOnHover && isHovered);

  const finalStarColor = starColor || color;

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
      } else if (animationType === 'wobble') {
        controls.start({
          rotate: [0, -10, 10, -5, 5, 0],
          transition: {
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        });
      } else if (animationType === 'shine') {
        starControls.start({
          scale: [1, 1.3, 1],
          opacity: [1, 0.7, 1],
          rotate: [0, 15, -15, 0],
          transition: {
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        });
      }
    } else {
      controls.stop();
      controls.set({ y: 0, rotate: 0 });
      starControls.stop();
      starControls.set({ scale: 1, opacity: 1, rotate: 0 });
    }
  }, [shouldAnimate, animationType, controls, starControls]);

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
          {/* Cup */}
          <path
            d='M6 9C6 13 7 15 12 15C17 15 18 13 18 9V4H6V9Z'
            stroke={color}
          />
          {/* Handles */}
          <path d='M6 5H4C3 5 2 6 2 7C2 8 3 10 6 10' stroke={color} />
          <path d='M18 5H20C21 5 22 6 22 7C22 8 21 10 18 10' stroke={color} />
          {/* Base Stem */}
          <path d='M12 15V19' stroke={color} />
          {/* Base */}
          <path d='M9 20H15' stroke={color} strokeWidth='2.5' />
        </motion.g>

        {/* Star in Center */}
        <motion.g
          animate={starControls}
          style={{ originX: '12px', originY: '9px' }}
        >
          <path
            d='M12 6L13.5 8H15.5L14 9.5L14.5 11.5L12 10.5L9.5 11.5L10 9.5L8.5 8H10.5L12 6Z'
            fill={finalStarColor}
            stroke={finalStarColor}
            strokeWidth='1'
          />
        </motion.g>
      </svg>
    </div>
  );
}
