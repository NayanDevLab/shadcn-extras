'use client';

import { motion, useAnimation } from 'motion/react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface MobileStoreIconProps {
  className?: string;
  color?: string; // Phone frame color
  cartColor?: string; // Inner cart color
  size?: number;
  isAnimating?: boolean;
  startOnHover?: boolean;
  animationType?: 'vibrate' | 'cart-bounce' | 'app-launch';
}

export function MobileStoreIcon({
  className,
  color = 'currentColor',
  cartColor,
  size = 24,
  isAnimating = false,
  startOnHover = true,
  animationType = 'cart-bounce',
}: MobileStoreIconProps) {
  const controls = useAnimation();
  const cartControls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const shouldAnimate = isAnimating || (startOnHover && isHovered);

  const finalCartColor = cartColor || color;

  useEffect(() => {
    if (shouldAnimate) {
      if (animationType === 'vibrate') {
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
      } else if (animationType === 'cart-bounce') {
        cartControls.start({
          y: [0, -3, 0],
          scale: [1, 1.1, 1],
          transition: {
            duration: 0.8,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          },
        });
      } else if (animationType === 'app-launch') {
        // Scale up content like an app opening
        cartControls.start({
          scale: [0, 1.2, 1],
          opacity: [0, 1, 1],
          transition: {
            duration: 0.8,
            ease: 'easeOut',
            repeat: Infinity,
            repeatDelay: 1.5,
          },
        });
      }
    } else {
      controls.stop();
      controls.set({ x: 0 });
      cartControls.stop();
      cartControls.set({ y: 0, scale: 1, opacity: 1 });
    }
  }, [shouldAnimate, animationType, controls, cartControls]);

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
        {/* Phone Frame */}
        <motion.g animate={controls}>
          {/* Body */}
          <rect
            x='5'
            y='2'
            width='14'
            height='20'
            rx='2'
            ry='2'
            stroke={color}
          />
          {/* Top Notch/Speaker */}
          <line x1='10' y1='5' x2='14' y2='5' stroke={color} />
          {/* Bottom Home Dot */}
          <circle cx='12' cy='19' r='1' fill={color} stroke='none' />
        </motion.g>

        {/* Inner Shopping Cart - Scaled and Centered */}
        <motion.g
          animate={cartControls}
          transform='translate(6.5, 7) scale(0.45)'
        >
          {/* Cart Path from CartIcon */}
          <path
            d='M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12'
            stroke={finalCartColor}
            strokeWidth='3' // Thicker stroke to compensate for scaling
          />
          {/* Wheels */}
          <circle cx='8' cy='21' r='2' fill={finalCartColor} stroke='none' />
          <circle cx='19' cy='21' r='2' fill={finalCartColor} stroke='none' />
        </motion.g>
      </svg>
    </div>
  );
}
