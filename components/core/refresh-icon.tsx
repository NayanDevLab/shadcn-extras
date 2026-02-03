'use client';

import { motion, useAnimation } from 'motion/react';
import { RefreshCcw } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface RefreshIconProps {
  className?: string;
  color?: string;
  size?: number;
  isRefreshing?: boolean;
  startOnHover?: boolean;
  animationType?: 'spin' | 'pulse';
}

export function RefreshIcon({
  className,
  color = 'currentColor',
  size = 24,
  isRefreshing = false,
  startOnHover = true,
  animationType = 'spin',
}: RefreshIconProps) {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const shouldAnimate = isRefreshing || (startOnHover && isHovered);

  useEffect(() => {
    if (shouldAnimate) {
      if (animationType === 'spin') {
        controls.start({
          rotate: 360,
          transition: {
            duration: 1,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
          },
        });
      } else if (animationType === 'pulse') {
        controls.start({
          scale: [1, 1.1, 1],
          opacity: [1, 0.7, 1],
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
      if (animationType === 'spin') {
        controls.set({ rotate: 0 });
      } else {
        controls.set({ scale: 1, opacity: 1 });
      }
    }
  }, [shouldAnimate, animationType, controls]);

  return (
    <div
      className={cn(
        'relative flex cursor-pointer select-none items-center justify-center',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div animate={controls}>
        <RefreshCcw size={size} color={color} />
      </motion.div>
    </div>
  );
}
