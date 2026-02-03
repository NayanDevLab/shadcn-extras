'use client';

import { motion, useAnimation } from 'motion/react';
import { User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface NetworkIconProps {
  className?: string;
  color?: string;
  size?: number;
  isAnimating?: boolean;
  startOnHover?: boolean;
  animationType?: 'pulse' | 'expand';
}

export function NetworkIcon({
  className,
  color = 'currentColor',
  size = 24,
  isAnimating = false,
  startOnHover = true,
  animationType = 'expand',
}: NetworkIconProps) {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const shouldAnimate = isAnimating || (startOnHover && isHovered);

  // Calculate sizes relative to the main size
  const userSize = size * 0.5;
  const nodeSize = size * 0.15;
  const radius = size * 0.35; // Distance from center to nodes

  useEffect(() => {
    if (shouldAnimate) {
      if (animationType === 'expand') {
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
      } else if (animationType === 'pulse') {
        controls.start({
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.05, 1],
          transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          },
        });
      }
    } else {
      controls.stop();
      controls.set({ scale: 1, opacity: 1 });
    }
  }, [shouldAnimate, animationType, controls]);

  // Node positions (normalized 0-1, centered at 0.5)
  // Top Left, Top Right, Bottom Left, Bottom Right
  const nodes = [
    { x: 0.2, y: 0.2 },
    { x: 0.8, y: 0.2 },
    { x: 0.2, y: 0.8 },
    { x: 0.8, y: 0.8 },
  ];

  return (
    <div
      className={cn(
        'relative flex cursor-pointer select-none items-center justify-center',
        className
      )}
      style={{ width: size, height: size }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Central User Icon */}
      <div className='bg-background relative z-10 flex items-center justify-center rounded-full'>
        <User size={userSize} color={color} />
      </div>

      {/* Connecting Lines and Nodes */}
      <svg
        className='pointer-events-none absolute inset-0'
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
      >
        {nodes.map((node, i) => {
          // Center of canvas
          const cx = size / 2;
          const cy = size / 2;

          // Node position
          const nx = node.x * size;
          const ny = node.y * size;

          return (
            <motion.g key={i} animate={controls}>
              {/* Line from center to node */}
              <line
                x1={cx}
                y1={cy}
                x2={nx}
                y2={ny}
                stroke={color}
                strokeWidth={2}
                opacity={0.6}
              />
              {/* Node circle */}
              <circle cx={nx} cy={ny} r={nodeSize / 2} fill={color} />
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
}
