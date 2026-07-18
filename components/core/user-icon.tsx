'use client';

import { motion, useAnimation } from 'motion/react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface UserIconProps {
  className?: string;
  color?: string; // Frame color
  userColor?: string; // User silhouette color
  size?: number;
  isAnimating?: boolean;
  startOnHover?: boolean;
  animationType?: 'bounce' | 'hi' | 'pulse';
}

export function UserIcon({
  className,
  color = 'currentColor', // Black frame typically
  userColor,
  size = 24,
  isAnimating = false,
  startOnHover = true,
  animationType = 'bounce',
}: UserIconProps) {
  const controls = useAnimation();
  const userControls = useAnimation(); // For the inner user shape
  const [isHovered, setIsHovered] = useState(false);
  const shouldAnimate = isAnimating || (startOnHover && isHovered);

  const finalUserColor = userColor || color;

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
      } else if (animationType === 'hi') {
        // A generic "wave" or "tilt" animation for the user silhouette
        userControls.start({
          rotate: [0, -10, 10, -5, 5, 0],
          transition: {
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 1, // Pause between waves
            ease: 'easeInOut',
          },
        });
      } else if (animationType === 'pulse') {
        userControls.start({
          scale: [1, 1.1, 1],
          opacity: [1, 0.8, 1],
          transition: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        });
      }
    } else {
      controls.stop();
      controls.set({ y: 0 });
      userControls.stop();
      userControls.set({ rotate: 0, scale: 1, opacity: 1 });
    }
  }, [shouldAnimate, animationType, controls, userControls]);

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
        {/* Frame: Outer Circle */}
        <motion.circle
          animate={controls}
          cx='12'
          cy='12'
          r='10'
          stroke={color}
        />

        {/* User Silhouette: Head + Body */}
        <motion.g
          animate={userControls}
          style={{ originX: '12px', originY: '12px' }}
        >
          {/* Head */}
          <circle cx='12' cy='8' r='4' stroke={finalUserColor} />
          {/* Body (Shoulders/Torso) */}
          <path
            d='M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2'
            stroke={finalUserColor}
          />
        </motion.g>
      </svg>
    </div>
  );
}
