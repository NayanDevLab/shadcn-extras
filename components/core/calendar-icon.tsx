'use client';

import { motion, useAnimation } from 'motion/react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface CalendarIconProps {
  className?: string;
  color?: string; // Frame/Grid color
  ringColor?: string; // Rings color
  size?: number;
  isAnimating?: boolean;
  startOnHover?: boolean;
  animationType?: 'bounce' | 'pulse' | 'slide';
}

export function CalendarIcon({
  className,
  color = 'currentColor',
  ringColor,
  size = 24,
  isAnimating = false,
  startOnHover = true,
  animationType = 'pulse',
}: CalendarIconProps) {
  const controls = useAnimation();
  const ringControls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const shouldAnimate = isAnimating || (startOnHover && isHovered);

  const finalRingColor = ringColor || color;

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
        // Pulse the rings
        ringControls.start({
          scaleY: [1, 1.2, 1],
          opacity: [1, 0.7, 1],
          transition: {
            duration: 1,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          },
        });
      } else if (animationType === 'slide') {
        // Slide animation? Or maybe shake?
        // Let's do a wiggle of the whole calendar
        controls.start({
          rotate: [0, -5, 5, -5, 0],
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
      controls.set({ y: 0, rotate: 0 });
      ringControls.stop();
      ringControls.set({ scaleY: 1, opacity: 1 });
    }
  }, [shouldAnimate, animationType, controls, ringControls]);

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
        {/* Calendar Frame */}
        <motion.g animate={controls}>
          <rect
            x='3'
            y='4'
            width='18'
            height='18'
            rx='2'
            ry='2'
            stroke={color}
          />
          <line x1='3' y1='10' x2='21' y2='10' stroke={color} />

          {/* Grid Days - 3x2 grid approx */}
          <path d='M8 14h.01' stroke={color} strokeWidth='2.5' />
          <path d='M12 14h.01' stroke={color} strokeWidth='2.5' />
          <path d='M16 14h.01' stroke={color} strokeWidth='2.5' />
          <path d='M8 18h.01' stroke={color} strokeWidth='2.5' />
          <path d='M12 18h.01' stroke={color} strokeWidth='2.5' />
          <path d='M16 18h.01' stroke={color} strokeWidth='2.5' />
        </motion.g>

        {/* Rings - 3 distinct rings */}
        {/* Left Ring */}
        <motion.line
          x1='7'
          y1='2'
          x2='7'
          y2='6'
          stroke={finalRingColor}
          animate={ringControls}
          style={{ originY: '4px' }}
        />
        {/* Center Ring */}
        <motion.line
          x1='12'
          y1='2'
          x2='12'
          y2='6'
          stroke={finalRingColor}
          animate={ringControls}
          style={{ originY: '4px' }}
        />
        {/* Right Ring */}
        <motion.line
          x1='17'
          y1='2'
          x2='17'
          y2='6'
          stroke={finalRingColor}
          animate={ringControls}
          style={{ originY: '4px' }}
        />
      </svg>
    </div>
  );
}
