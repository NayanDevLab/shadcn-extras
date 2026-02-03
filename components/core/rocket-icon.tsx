'use client';

import { motion, useAnimation } from 'motion/react';
import { Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface RocketIconProps {
  className?: string;
  color?: string;
  size?: number;
  isLaunching?: boolean;
  startOnHover?: boolean;
}

export function RocketIcon({
  className,
  color = 'currentColor',
  size = 24,
  isLaunching = false,
  startOnHover = true,
}: RocketIconProps) {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const shouldAnimate = isLaunching || (startOnHover && isHovered);

  useEffect(() => {
    if (shouldAnimate) {
      controls.start({
        x: [0, -2, 2, -2, 2, 0],
        y: [0, -2, 2, -2, 2, 0],
        transition: {
          duration: 0.2,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
        },
      });
    } else {
      controls.stop();
      controls.set({ x: 0, y: 0 });
    }
  }, [shouldAnimate, controls]);

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
        <Rocket size={size} color={color} />
      </motion.div>
      {shouldAnimate && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.5 }}
          animate={{ opacity: [0, 1, 0], y: [10, 20], scale: [0.5, 1] }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            ease: 'easeOut',
          }}
          className='absolute -bottom-2 h-4 w-2 rounded-full bg-orange-500 blur-sm'
        />
      )}
    </div>
  );
}
