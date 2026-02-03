'use client';

import { motion, useAnimation } from 'motion/react';
import { Truck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface TruckIconProps {
  className?: string;
  color?: string;
  size?: number;
  isAnimating?: boolean;
  startOnHover?: boolean;
  animationType?: 'drive' | 'bounce';
}

export function TruckIcon({
  className,
  color = 'currentColor',
  size = 24,
  isAnimating = false,
  startOnHover = true,
  animationType = 'drive',
}: TruckIconProps) {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const shouldAnimate = isAnimating || (startOnHover && isHovered);

  useEffect(() => {
    if (shouldAnimate) {
      if (animationType === 'drive') {
        controls.start({
          x: [0, 3, -3, 0],
          transition: {
            duration: 0.5,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
            repeatDelay: 0.5,
          },
        });
      } else if (animationType === 'bounce') {
        controls.start({
          y: [0, -2, 0, -1, 0],
          transition: {
            duration: 0.5,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
            repeatDelay: 0.2,
          },
        });
      }
    } else {
      controls.stop();
      controls.set({ x: 0, y: 0 });
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
        <Truck size={size} color={color} />
      </motion.div>
    </div>
  );
}
