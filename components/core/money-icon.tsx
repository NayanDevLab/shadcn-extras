'use client';

import { motion, useAnimation } from 'motion/react';
import { Banknote } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface MoneyIconProps {
  className?: string;
  color?: string;
  size?: number;
  isAnimating?: boolean;
  startOnHover?: boolean;
  animationType?: 'bounce' | 'flip';
}

export function MoneyIcon({
  className,
  color = 'currentColor',
  size = 24,
  isAnimating = false,
  startOnHover = true,
  animationType = 'bounce',
}: MoneyIconProps) {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const shouldAnimate = isAnimating || (startOnHover && isHovered);

  useEffect(() => {
    if (shouldAnimate) {
      if (animationType === 'bounce') {
        controls.start({
          y: [0, -5, 0, -3, 0],
          transition: {
            duration: 0.6,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeOut',
            repeatDelay: 1,
          },
        });
      } else if (animationType === 'flip') {
        controls.start({
          rotateY: [0, 180, 360],
          transition: {
            duration: 1.2,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
            repeatDelay: 0.5,
          },
        });
      }
    } else {
      controls.stop();
      controls.set({ y: 0, rotateY: 0 });
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
        <Banknote size={size} color={color} />
      </motion.div>
    </div>
  );
}
