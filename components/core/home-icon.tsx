'use client';

import { motion, useAnimation } from 'motion/react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface HomeIconProps {
  className?: string;
  color?: string; // House color
  doorColor?: string; // Specific door color
  size?: number;
  isAnimating?: boolean;
  startOnHover?: boolean;
  animationType?: 'bounce' | 'door-open' | 'shake';
}

export function HomeIcon({
  className,
  color = 'currentColor',
  doorColor, // Defaults to 'color' if not set, or specific default
  size = 24,
  isAnimating = false,
  startOnHover = true,
  animationType = 'door-open',
}: HomeIconProps) {
  const controls = useAnimation();
  const doorControls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const shouldAnimate = isAnimating || (startOnHover && isHovered);

  const finalDoorColor = doorColor || color;

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
      } else if (animationType === 'shake') {
        controls.start({
          x: [0, -2, 2, -2, 2, 0],
          transition: {
            duration: 0.4,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
            repeatDelay: 1,
          },
        });
      } else if (animationType === 'door-open') {
        // Animate door opening (scaleX from left)
        // Since it's a polyline 9 22 -> 9 12 -> 15 12 -> 15 22
        // We can mimic opening by scaling it or skewing.
        // Or simpler: change the path to look like it's opening?
        // Let's use scaleX with originX.
        // The door center is x=12. Width is 6 (9 to 15).
        // We need to target the door element specifically.
        doorControls.start({
          scaleX: [1, 0.2, 1], // Open and close
          originX: 0, // Pivot from left (approximate, needs separate grouping if using svg transforms on elements)
          transition: {
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          },
        });
      }
    } else {
      controls.stop();
      controls.set({ y: 0, x: 0 });
      doorControls.stop();
      doorControls.set({ scaleX: 1 });
    }
  }, [shouldAnimate, animationType, controls, doorControls]);

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
        {/* House Frame */}
        <motion.path
          d='m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'
          stroke={color}
          animate={controls}
        />

        {/* Door - Separated for coloring and animation */}
        {/* Polyline points="9 22 9 12 15 12 15 22" */}
        {/* To rotate opens properly, we should wrap it in a group with transform origin */}
        {/* The door x starts at 9. Center of door pivot (hinge) is 9. */}
        <motion.g
          animate={doorControls}
          style={{ originX: '9px', originY: '17px' }} // Hinge at x=9
        >
          <polyline points='9 22 9 12 15 12 15 22' stroke={finalDoorColor} />
        </motion.g>
      </svg>
    </div>
  );
}
