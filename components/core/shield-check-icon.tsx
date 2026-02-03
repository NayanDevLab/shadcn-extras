'use client';

import { motion, useAnimation } from 'motion/react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface ShieldCheckIconProps {
  className?: string;
  color?: string; // Shield color
  checkColor?: string; // Checkmark color
  size?: number;
  isAnimating?: boolean;
  startOnHover?: boolean;
  animationType?: 'bounce' | 'pulse' | 'draw';
}

export function ShieldCheckIcon({
  className,
  color = 'currentColor',
  checkColor,
  size = 24,
  isAnimating = false,
  startOnHover = true,
  animationType = 'draw',
}: ShieldCheckIconProps) {
  const controls = useAnimation();
  const checkControls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const shouldAnimate = isAnimating || (startOnHover && isHovered);

  const finalCheckColor = checkColor || color;

  useEffect(() => {
    if (shouldAnimate) {
      if (animationType === 'bounce') {
        controls.start({
          y: [0, -4, 0, -2, 0],
          transition: {
            duration: 0.6,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeOut',
            repeatDelay: 1,
          },
        });
      } else if (animationType === 'pulse') {
        controls.start({
          scale: [1, 1.05, 1],
          transition: {
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          },
        });
      } else if (animationType === 'draw') {
        // Draw the checkmark
        checkControls.start({
          pathLength: [0, 1],
          opacity: [0, 1],
          transition: {
            duration: 0.6,
            ease: 'easeOut',
            repeat: Infinity,
            repeatDelay: 1,
          },
        });
      }
    } else {
      controls.stop();
      controls.set({ y: 0, scale: 1 });
      checkControls.stop();
      checkControls.set({ pathLength: 1, opacity: 1 });
    }
  }, [shouldAnimate, animationType, controls, checkControls]);

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
        {/* Shield Path */}
        <motion.path
          d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10'
          stroke={color}
          animate={controls}
        />

        {/* Checkmark Path */}
        <motion.path
          d='m9 12 2 2 4-4'
          stroke={finalCheckColor}
          animate={checkControls}
          initial={{ pathLength: 1, opacity: 1 }}
        />
      </svg>
    </div>
  );
}
