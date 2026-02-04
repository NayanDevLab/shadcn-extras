'use client';

import { motion, useAnimation } from 'motion/react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface LikeIconProps {
  className?: string;
  color?: string; // Hand color
  cuffColor?: string; // Cuff/Sleeve color
  size?: number;
  isAnimating?: boolean;
  startOnHover?: boolean;
  animationType?: 'bounce' | 'like' | 'wiggle';
}

export function LikeIcon({
  className,
  color = 'currentColor', // Black typically
  cuffColor,
  size = 24,
  isAnimating = false,
  startOnHover = true,
  animationType = 'bounce',
}: LikeIconProps) {
  const controls = useAnimation();
  const thumbControls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const shouldAnimate = isAnimating || (startOnHover && isHovered);

  const finalCuffColor = cuffColor || color;

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
      } else if (animationType === 'like') {
        controls.start({
          scale: [1, 1.2, 1],
          rotate: [0, -15, 0],
          transition: {
            duration: 0.6,
            repeat: Infinity,
            repeatDelay: 1,
            ease: 'easeInOut',
          },
        });
      } else if (animationType === 'wiggle') {
        // Wiggle the thumb part specifically if possible, or the whole hand
        thumbControls.start({
          rotate: [0, -15, 15, -10, 10, 0],
          originX: '6px',
          originY: '14px', // Approximate pivot for thumb
          transition: {
            duration: 1,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        });
      }
    } else {
      controls.stop();
      controls.set({ y: 0, scale: 1, rotate: 0 });
      thumbControls.stop();
      thumbControls.set({ rotate: 0 });
    }
  }, [shouldAnimate, animationType, controls, thumbControls]);

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
          {/* Cuff / Sleeve */}
          <path
            d='M7 11V19A2 2 0 0 1 5 21H4A2 2 0 0 1 2 19V11A2 2 0 0 1 4 9H5A2 2 0 0 1 7 11Z'
            stroke={finalCuffColor}
          />

          {/* Hand Main Body (Fingers) */}
          <path
            d='M7 21H16.4C18.6 21.1 20.3 19.4 20.3 17.2V11A2 2 0 0 0 18.2 9H12'
            stroke={color}
          />

          {/* Thumb */}
          <motion.path
            animate={thumbControls}
            d='M7 13 8.6 6.3C9.1 4.2 11.2 3 13.2 4.2 14.1 4.7 14.5 5.8 14.2 6.8L12 13'
            stroke={color}
          />
        </motion.g>
      </svg>
    </div>
  );
}
