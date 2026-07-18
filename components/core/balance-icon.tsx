'use client';

import { motion, useAnimation } from 'motion/react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface BalanceIconProps {
  className?: string;
  color?: string; // Structure color (pole/base)
  panColor?: string; // Pan color
  size?: number;
  isAnimating?: boolean;
  startOnHover?: boolean;
  animationType?: 'sway' | 'weigh' | 'pulse';
}

export function BalanceIcon({
  className,
  color = 'currentColor',
  panColor,
  size = 24,
  isAnimating = false,
  startOnHover = true,
  animationType = 'sway',
}: BalanceIconProps) {
  const controls = useAnimation();
  const beamControls = useAnimation();
  const leftPanControls = useAnimation();
  const rightPanControls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const shouldAnimate = isAnimating || (startOnHover && isHovered);

  const finalPanColor = panColor || color;

  useEffect(() => {
    if (shouldAnimate) {
      if (animationType === 'sway') {
        // Beam sways gently
        beamControls.start({
          rotate: [0, -5, 5, -3, 3, 0],
          transition: {
            duration: 2.5,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          },
        });
        // Pans counter-rotate to stay vertical-ish (optional, but adds realism)
        // Or simpler: just let them sway with the beam for a "rigid" look, or vertically correct them.
        // For an icon, simple beam rotation is usually enough.
        // Let's add slight vertical offset to pans if we want them to feel heavy.
      } else if (animationType === 'weigh') {
        // Simulate one side dropping (weighing something)
        beamControls.start({
          rotate: [0, -15, -12, -15],
          transition: {
            duration: 2,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatDelay: 1,
          },
        });
      } else if (animationType === 'pulse') {
        controls.start({
          scale: [1, 1.05, 1],
          transition: { duration: 1.5, repeat: Infinity },
        });
      }
    } else {
      controls.stop();
      controls.set({ scale: 1 });
      beamControls.stop();
      beamControls.set({ rotate: 0 });
      leftPanControls.stop();
      rightPanControls.stop();
    }
  }, [
    shouldAnimate,
    animationType,
    controls,
    beamControls,
    leftPanControls,
    rightPanControls,
  ]);

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
        {/* Base and Pole - Static (or pulsing) */}
        <motion.g animate={controls}>
          <rect x='4' y='20' width='16' height='2' rx='1' stroke={color} />
          <line x1='12' y1='20' x2='12' y2='4' stroke={color} />
          <path
            d='M12 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z'
            fill='none'
            stroke={color}
          />
        </motion.g>

        {/* Beam + Pans Group - Pivots at Top Center (12, 4) */}
        <motion.g
          animate={beamControls}
          style={{ originX: '12px', originY: '4px' }}
        >
          {/* The Beam */}
          <line x1='4' y1='8' x2='20' y2='8' stroke={color} />
          {/* Connector to pivot */}
          <line x1='12' y1='4' x2='12' y2='8' stroke={color} />

          {/* Left Pan Group */}
          <g transform='translate(4, 8)'>
            {/* Strings */}
            <path
              d='M0 0 L-3 6'
              stroke={finalPanColor}
              vectorEffect='non-scaling-stroke'
            />
            <path
              d='M0 0 L3 6'
              stroke={finalPanColor}
              vectorEffect='non-scaling-stroke'
            />
            {/* Pan */}
            <path
              d='M-3 6 H3 A3 3 0 0 1 0 9 A3 3 0 0 1 -3 6Z'
              stroke={finalPanColor}
              fill='none'
            />
          </g>

          {/* Right Pan Group */}
          <g transform='translate(20, 8)'>
            {/* Strings */}
            <path
              d='M0 0 L-3 6'
              stroke={finalPanColor}
              vectorEffect='non-scaling-stroke'
            />
            <path
              d='M0 0 L3 6'
              stroke={finalPanColor}
              vectorEffect='non-scaling-stroke'
            />
            {/* Pan */}
            <path
              d='M-3 6 H3 A3 3 0 0 1 0 9 A3 3 0 0 1 -3 6Z'
              stroke={finalPanColor}
              fill='none'
            />
          </g>
        </motion.g>
      </svg>
    </div>
  );
}
