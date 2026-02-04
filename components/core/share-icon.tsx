'use client';

import { motion, useAnimation } from 'motion/react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface ShareIconProps {
  className?: string;
  color?: string; // Lines/Connection color
  dotColor?: string; // Dots color
  size?: number;
  isAnimating?: boolean;
  startOnHover?: boolean;
  animationType?: 'bounce' | 'pulse' | 'rotate';
}

export function ShareIcon({
  className,
  color = 'currentColor', // Lines
  dotColor,
  size = 24,
  isAnimating = false,
  startOnHover = true,
  animationType = 'bounce',
}: ShareIconProps) {
  const controls = useAnimation();
  const dotControls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const shouldAnimate = isAnimating || (startOnHover && isHovered);

  const finalDotColor = dotColor || color;

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
      } else if (animationType === 'pulse') {
        dotControls.start({
          scale: [1, 1.3, 1],
          transition: {
            duration: 1,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        });
      } else if (animationType === 'rotate') {
        // Rotate the whole group or just the branches?
        // Let's rotate the whole icon for "share" loading effect, or maybe just the right dots around the left one.
        // Let's rotate connected dots if possible.
        // Actually, simple rotation of the whole icon around the center is easiest and looks "busy".
        // But pivoting around the left dot (cx=6, cy=12) is cooler.
        controls.start({
          rotate: 360,
          transition: {
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
            originX: '6px',
            originY: '12px', // Pivot around the left dot
          },
        });
      }
    } else {
      controls.stop();
      controls.set({ y: 0, rotate: 0 });
      dotControls.stop();
      dotControls.set({ scale: 1 });
    }
  }, [shouldAnimate, animationType, controls, dotControls]);

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
          style={{ originX: '6px', originY: '12px' }}
        >
          {/* Connections */}
          <path d='M4 12v0c0 0 0 0 0 0' stroke='transparent' />{' '}
          {/* Anchor point helper if needed */}
          <circle cx='18' cy='5' r='3' stroke={finalDotColor} />
          <circle cx='6' cy='12' r='3' stroke={finalDotColor} />
          <circle cx='18' cy='19' r='3' stroke={finalDotColor} />
          <motion.line
            x1='8.59'
            x2='15.42'
            y1='13.51'
            y2='17.49'
            stroke={color}
          />
          <motion.line
            x1='15.41'
            x2='8.59'
            y1='6.51'
            y2='10.49'
            stroke={color}
          />
          {/* Re-drawing circles on top if we want dots to pulse separately */}
          <motion.circle
            cx='18'
            cy='5'
            r='3'
            stroke={finalDotColor}
            animate={dotControls}
            style={{ originX: '18px', originY: '5px' }}
          />
          <motion.circle
            cx='6'
            cy='12'
            r='3'
            stroke={finalDotColor}
            animate={dotControls}
            style={{ originX: '6px', originY: '12px' }}
          />
          <motion.circle
            cx='18'
            cy='19'
            r='3'
            stroke={finalDotColor}
            animate={dotControls}
            style={{ originX: '18px', originY: '19px' }}
          />
        </motion.g>
      </svg>
    </div>
  );
}
