'use client';

import { motion, useAnimation } from 'motion/react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface TrashIconProps {
  className?: string;
  color?: string; // Bin color
  lidColor?: string; // Lid color
  size?: number;
  isAnimating?: boolean;
  startOnHover?: boolean;
  animationType?: 'bounce' | 'trash' | 'shake';
}

export function TrashIcon({
  className,
  color = 'currentColor', // Black typically
  lidColor,
  size = 24,
  isAnimating = false,
  startOnHover = true,
  animationType = 'bounce',
}: TrashIconProps) {
  const controls = useAnimation();
  const lidControls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const shouldAnimate = isAnimating || (startOnHover && isHovered);

  const finalLidColor = lidColor || color;

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
        lidControls.start({
          y: -5,
          transition: {
            duration: 0.5,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          },
        });
      } else if (animationType === 'trash') {
        // Lid flip animation
        lidControls.start({
          rotate: [0, -45, 0],
          originX: '2px',
          originY: '5px', // Pivot at left/bottom of lid
          transition: {
            duration: 0.8,
            repeat: Infinity,
            repeatDelay: 0.5,
            ease: 'easeInOut',
          },
        });
      } else if (animationType === 'shake') {
        controls.start({
          x: [-2, 2, -2, 2, 0],
          transition: {
            duration: 0.5,
            repeat: Infinity,
            repeatDelay: 1,
            ease: 'easeInOut',
          },
        });
        lidControls.start({
          x: [-2, 2, -2, 2, 0],
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
      controls.set({ y: 0, x: 0 });
      lidControls.stop();
      lidControls.set({ y: 0, x: 0, rotate: 0 });
    }
  }, [shouldAnimate, animationType, controls, lidControls]);

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
        {/* Bin Body */}
        <motion.g
          animate={controls}
          style={{ originX: '12px', originY: '12px' }}
        >
          <path d='M3 6h18' stroke='transparent' />{' '}
          {/* Spacer/invisible line if needed, or just rely on following paths */}
          <path d='M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6' stroke={color} />
          <path d='M10 11v6' stroke={color} />
          <path d='M14 11v6' stroke={color} />
        </motion.g>

        {/* Lid Group */}
        <motion.g
          animate={lidControls}
          style={{ originX: '12px', originY: '12px' }}
        >
          <path
            d='M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2'
            stroke={finalLidColor}
          />
          <line x1='3' y1='6' x2='21' y2='6' stroke={finalLidColor} />
          {/* We duplicate the top line of bin here essentially to make it part of the lid if we want it to move with it, 
                or we keep the line separated. Usually 'Trash' icon has a solid line across top. 
                Let's make the line x1=3 x2=21 part of the lid animation for 'trash' flip effect.
            */}
        </motion.g>
      </svg>
    </div>
  );
}
