'use client';

import { motion, useAnimation } from 'motion/react';
import { Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface ClockIconProps {
  className?: string;
  color?: string;
  size?: number;
  isAnimating?: boolean;
  startOnHover?: boolean;
  animationType?: 'swing' | 'shake';
}

export function ClockIcon({
  className,
  color = 'currentColor',
  size = 24,
  isAnimating = false,
  startOnHover = true,
  animationType = 'swing',
}: ClockIconProps) {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const shouldAnimate = isAnimating || (startOnHover && isHovered);

  useEffect(() => {
    if (shouldAnimate) {
      if (animationType === 'swing') {
        controls.start({
          rotate: [0, 15, -15, 10, -10, 0],
          transition: {
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
            repeatDelay: 0.5,
          },
        });
      } else if (animationType === 'shake') {
        controls.start({
          x: [0, -2, 2, -2, 2, 0],
          transition: {
            duration: 0.2,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
            repeatDelay: 0.8,
          },
        });
      }
    } else {
      controls.stop();
      controls.set({ rotate: 0, x: 0 });
    }
  }, [shouldAnimate, animationType, controls]);

  return (
    <div
      className={cn(
        'relative flex cursor-pointer items-center justify-center select-none',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={controls}
        style={{ originY: animationType === 'swing' ? 0.2 : 0.5 }}
      >
        <Clock size={size} color={color} />
      </motion.div>
    </div>
  );
}
