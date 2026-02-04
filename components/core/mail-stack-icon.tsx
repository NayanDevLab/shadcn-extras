'use client';

import { motion, useAnimation } from 'motion/react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface MailStackIconProps {
  className?: string;
  color?: string; // Front envelope color
  stackColor?: string; // Background stack color
  size?: number;
  isAnimating?: boolean;
  startOnHover?: boolean;
  animationType?: 'bounce' | 'slide' | 'rotate';
}

export function MailStackIcon({
  className,
  color = 'currentColor', // Front envelope
  stackColor,
  size = 24,
  isAnimating = false,
  startOnHover = true,
  animationType = 'bounce',
}: MailStackIconProps) {
  const controls = useAnimation();
  const stackControls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const shouldAnimate = isAnimating || (startOnHover && isHovered);

  const finalStackColor = stackColor || color;

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
        stackControls.start({
          y: -4,
          transition: {
            duration: 0.5,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: 0.1, // Stagger effect
          },
        });
      } else if (animationType === 'slide') {
        stackControls.start({
          x: [0, 4, 0],
          y: [0, -4, 0],
          transition: {
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        });
      } else if (animationType === 'rotate') {
        stackControls.start({
          rotate: [0, -10, 0],
          transition: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
            originX: '12px',
            originY: '12px',
          },
        });
        controls.start({
          rotate: [0, 5, 0],
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
      controls.set({ x: 0, y: 0, rotate: 0 });
      stackControls.stop();
      stackControls.set({ x: 0, y: 0, rotate: 0 });
    }
  }, [shouldAnimate, animationType, controls, stackControls]);

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
        {/* Background Stack 2 (Furthest) */}
        <motion.path
          d='M21 7 L23 7 A 2 2 0 0 1 23 17 L21 17 ' // Simplified representation of back stack
          stroke={finalStackColor}
          animate={stackControls}
          fill='none'
          initial={{ x: 2, y: -2 }}
        />

        {/* Background Stack 1 (Middle) */}
        <motion.path
          d='M19 5 L21 5 A 2 2 0 0 1 21 19 L19 19'
          stroke={finalStackColor}
          animate={stackControls}
          fill='none'
        />

        {/* Front Envelope */}
        <motion.g animate={controls}>
          <rect
            x='2'
            y='5'
            width='16'
            height='14'
            rx='2'
            stroke={color}
            fill='none'
          />
          <path d='M2 7L10 13L18 7' stroke={color} fill='none' />
        </motion.g>
      </svg>
    </div>
  );
}
