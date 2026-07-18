'use client';

import { motion, useAnimation } from 'motion/react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface CartIconProps {
  className?: string;
  color?: string; // Basket color
  wheelColor?: string; // Wheel color
  size?: number;
  isAnimating?: boolean;
  startOnHover?: boolean;
  animationType?: 'bounce' | 'roll' | 'checkout';
}

export function CartIcon({
  className,
  color = 'currentColor',
  wheelColor,
  size = 24,
  isAnimating = false,
  startOnHover = true,
  animationType = 'roll',
}: CartIconProps) {
  const controls = useAnimation();
  const wheelControls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const shouldAnimate = isAnimating || (startOnHover && isHovered);

  const finalWheelColor = wheelColor || color;

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
      } else if (animationType === 'roll') {
        // Move cart back and forth
        controls.start({
          x: [0, 3, 0, -3, 0],
          transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          },
        });
        // Rotate wheels
        wheelControls.start({
          rotate: [0, 360],
          transition: {
            duration: 1,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
          },
        });
      } else if (animationType === 'checkout') {
        // Simple "move out" animation
        controls.start({
          x: [0, 20],
          opacity: [1, 0],
          transition: {
            duration: 0.8,
            ease: 'easeIn',
            repeat: Infinity,
            repeatDelay: 0.5,
          },
        });
        wheelControls.start({
          rotate: 360,
          transition: {
            duration: 0.8,
            ease: 'easeIn',
            repeat: Infinity,
            repeatDelay: 0.5,
          },
        });
      }
    } else {
      controls.stop();
      controls.set({ y: 0, x: 0, opacity: 1 });
      wheelControls.stop();
      wheelControls.set({ rotate: 0 });
    }
  }, [shouldAnimate, animationType, controls, wheelControls]);

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
        {/* Basket Path */}
        <motion.path
          d='M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12'
          stroke={color}
          animate={controls}
        />

        {/* Wheels */}
        <motion.g animate={controls}>
          {' '}
          {/* Wheels move with cart */}
          {/* Left Wheel */}
          <motion.circle
            cx='8'
            cy='21'
            r='1'
            stroke={finalWheelColor}
            animate={wheelControls}
            style={{ originX: '8px', originY: '21px' }}
          />
          {/* Right Wheel */}
          <motion.circle
            cx='19'
            cy='21'
            r='1'
            stroke={finalWheelColor}
            animate={wheelControls}
            style={{ originX: '19px', originY: '21px' }}
          />
        </motion.g>
      </svg>
    </div>
  );
}
