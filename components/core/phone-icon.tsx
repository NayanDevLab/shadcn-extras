'use client';

import { motion, useAnimation } from 'motion/react';
import { Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface PhoneIconProps {
  className?: string;
  color?: string;
  size?: number;
  isRinging?: boolean;
  startOnHover?: boolean;
}

export function PhoneIcon({
  className,
  color = 'currentColor',
  size = 24,
  isRinging = false,
  startOnHover = true,
}: PhoneIconProps) {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const shouldAnimate = isRinging || (startOnHover && isHovered);

  useEffect(() => {
    if (shouldAnimate) {
      controls.start({
        rotate: [0, -10, 10, -10, 10, 0],
        transition: {
          duration: 0.5,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
          repeatDelay: 1,
        },
      });
    } else {
      controls.stop();
      controls.set({ rotate: 0 });
    }
  }, [shouldAnimate, controls]);

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
        <>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: [0, 0.5, 0], scale: [1, 1.5, 2] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeOut',
            }}
            className='border-primary/50 absolute rounded-full border-2'
            style={{ width: size * 1.5, height: size * 1.5 }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: [0, 0.5, 0], scale: [1, 1.5, 2] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeOut',
              delay: 0.5,
            }}
            className='border-primary/30 absolute rounded-full border-2'
            style={{ width: size * 1.5, height: size * 1.5 }}
          />
        </>
      )}
      <motion.div animate={controls}>
        <Phone size={size} color={color} />
      </motion.div>
    </div>
  );
}
