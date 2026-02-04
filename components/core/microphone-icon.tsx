'use client';

import { motion, useAnimation } from 'motion/react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface MicrophoneIconProps {
  className?: string;
  color?: string; // Mic body color
  standColor?: string; // Stand/Base color
  size?: number;
  isAnimating?: boolean;
  startOnHover?: boolean;
  animationType?: 'bounce' | 'shake' | 'pulse';
}

export function MicrophoneIcon({
  className,
  color = 'currentColor', // Mic body
  standColor,
  size = 24,
  isAnimating = false,
  startOnHover = true,
  animationType = 'bounce',
}: MicrophoneIconProps) {
  const controls = useAnimation();
  const standControls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const shouldAnimate = isAnimating || (startOnHover && isHovered);

  const finalStandColor = standColor || color;

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
        standControls.start({
          y: -4,
          transition: {
            duration: 0.5,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          },
        });
      } else if (animationType === 'shake') {
        controls.start({
          x: [-2, 2, -2, 2, 0],
          transition: {
            duration: 0.4,
            repeat: Infinity,
            repeatDelay: 1, // Periodic shake like voice input
            ease: 'easeInOut',
          },
        });
      } else if (animationType === 'pulse') {
        controls.start({
          scale: [1, 1.1, 1],
          opacity: [1, 0.8, 1],
          transition: {
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        });
      }
    } else {
      controls.stop();
      controls.set({ y: 0, x: 0, scale: 1, opacity: 1 });
      standControls.stop();
      standControls.set({ y: 0 });
    }
  }, [shouldAnimate, animationType, controls, standControls]);

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
        {/* Mic Body */}
        <motion.g
          animate={controls}
          style={{ originX: '12px', originY: '12px' }}
        >
          <rect x='8' y='2' width='8' height='14' rx='4' stroke={color} />
          <line x1='10' y1='6' x2='14' y2='6' stroke={color} />
          <line x1='10' y1='10' x2='14' y2='10' stroke={color} />
          <line x1='10' y1='14' x2='14' y2='14' stroke={color} />
        </motion.g>

        {/* Mic Stand */}
        <motion.g
          animate={standControls}
          style={{ originX: '12px', originY: '12px' }}
        >
          {/* U-Shape Holder */}
          <path d='M19 10v2a7 7 0 0 1-14 0v-2' stroke={finalStandColor} />
          {/* Stem */}
          <line x1='12' y1='19' x2='12' y2='22' stroke={finalStandColor} />
          {/* Base */}
          <line x1='8' y1='22' x2='16' y2='22' stroke={finalStandColor} />
        </motion.g>
      </svg>
    </div>
  );
}
