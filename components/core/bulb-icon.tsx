'use client';

import { motion, useAnimation } from 'motion/react';
import { Lightbulb } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface BulbIconProps {
  className?: string;
  color?: string;
  size?: number;
  isLit?: boolean;
  startOnHover?: boolean;
  animationType?: 'pulse' | 'flash';
}

export function BulbIcon({
  className,
  color = 'currentColor',
  size = 24,
  isLit = false,
  startOnHover = true,
  animationType = 'pulse',
}: BulbIconProps) {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const shouldAnimate = isLit || (startOnHover && isHovered);

  useEffect(() => {
    if (shouldAnimate) {
      if (animationType === 'pulse') {
        controls.start({
          scale: [1, 1.1, 1],
          opacity: [1, 0.8, 1],
          transition: {
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          },
        });
      } else if (animationType === 'flash') {
        controls.start({
          opacity: [1, 0.2, 1],
          transition: {
            duration: 0.5,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear',
          },
        });
      }
    } else {
      controls.stop();
      controls.set({ scale: 1, opacity: 1 });
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
      {shouldAnimate && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1.5 }}
          className={cn(
            'absolute rounded-full blur-md',
            animationType === 'pulse' ? 'bg-yellow-400/50' : 'bg-red-500/30'
          )}
          style={{ width: size, height: size }}
        />
      )}
      <motion.div animate={controls} className='relative z-10'>
        <Lightbulb
          size={size}
          color={
            shouldAnimate
              ? animationType === 'pulse'
                ? '#eab308'
                : color
              : color
          }
          className={cn(
            shouldAnimate &&
              animationType === 'pulse' &&
              'fill-yellow-400 text-yellow-500'
          )}
        />
      </motion.div>
    </div>
  );
}
