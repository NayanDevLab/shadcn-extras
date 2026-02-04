'use client';

import { motion, useAnimation } from 'motion/react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface PaperPlaneIconProps {
  className?: string;
  color?: string; // Plane color
  trailColor?: string; // Trail color
  size?: number;
  isAnimating?: boolean;
  startOnHover?: boolean;
  animationType?: 'bounce' | 'fly' | 'wobble';
}

export function PaperPlaneIcon({
  className,
  color = 'currentColor', // Plane
  trailColor,
  size = 24,
  isAnimating = false,
  startOnHover = true,
  animationType = 'bounce',
}: PaperPlaneIconProps) {
  const controls = useAnimation();
  const trailControls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const shouldAnimate = isAnimating || (startOnHover && isHovered);

  const finalTrailColor = trailColor || color;

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
        trailControls.start({
          opacity: [0, 1, 0],
          transition: {
            duration: 1,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        });
      } else if (animationType === 'fly') {
        controls.start({
          x: [0, 20],
          y: [0, -20],
          opacity: [1, 0],
          transition: {
            duration: 1,
            repeat: Infinity,
            ease: 'easeIn',
          },
        });
        trailControls.start({
          opacity: [1, 0],
          pathLength: [0, 1],
          transition: {
            duration: 1,
            repeat: Infinity,
            ease: 'easeIn',
          },
        });
      } else if (animationType === 'wobble') {
        controls.start({
          rotate: [0, -10, 10, -5, 5, 0],
          transition: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
            originX: '12px',
            originY: '12px',
          },
        });
      }
    } else {
      controls.stop();
      controls.set({ x: 0, y: 0, opacity: 1, rotate: 0 });
      trailControls.stop();
      trailControls.set({ opacity: 1, pathLength: 1 });
    }
  }, [shouldAnimate, animationType, controls, trailControls]);

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
        {/* Trail - Dashed line behind */}
        <motion.path
          d='M2 22 L7 17' // Roughly the dashed trail position based on image
          stroke={finalTrailColor}
          strokeDasharray='4 4'
          animate={trailControls}
        />
        <motion.path
          d='M4.5 19.5' // Extra dot or small dash if needed
          stroke='transparent'
        />

        {/* Paper Plane */}
        <motion.g
          animate={controls}
          style={{ originX: '12px', originY: '12px' }}
        >
          {/* Main Body */}
          <path d='M22 2L11 13' stroke={color} />
          <path d='M22 2L15 22L11 13L2 9L22 2Z' stroke={color} />
        </motion.g>
      </svg>
    </div>
  );
}
