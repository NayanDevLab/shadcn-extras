'use client';

import { motion, useAnimation } from 'motion/react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface BuildingIconProps {
  className?: string;
  color?: string; // Building outline color
  lightColor?: string; // Lit window color
  size?: number;
  isAnimating?: boolean;
  startOnHover?: boolean;
  animationType?: 'grow' | 'lights' | 'bounce';
}

export function BuildingIcon({
  className,
  color = 'currentColor',
  lightColor,
  size = 24,
  isAnimating = false,
  startOnHover = true,
  animationType = 'lights',
}: BuildingIconProps) {
  const controls = useAnimation();
  const lightControls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const shouldAnimate = isAnimating || (startOnHover && isHovered);

  const finalLightColor = lightColor || color;

  // Window grid positions (approximate for 24x24 viewBox)
  // Center tower is roughly x=7 to x=17 (width 10).
  // Window columns around x=9, 12, 15.
  // Window rows y=8, 11, 14, 17.
  const windows = [
    { x: 9, y: 8, id: 1 },
    { x: 12, y: 8, id: 2 },
    { x: 15, y: 8, id: 3 },
    { x: 9, y: 11, id: 4 },
    { x: 12, y: 11, id: 5 },
    { x: 15, y: 11, id: 6 },
    { x: 9, y: 14, id: 7 },
    { x: 12, y: 14, id: 8 },
    { x: 15, y: 14, id: 9 },
    { x: 9, y: 17, id: 10 },
    { x: 12, y: 17, id: 11 },
    { x: 15, y: 17, id: 12 },
  ];

  // Specific windows to light up (based on image pattern or random)
  const defaultLitIndices = [0, 5, 8, 9, 11]; // Just some random ones

  useEffect(() => {
    if (shouldAnimate) {
      if (animationType === 'grow') {
        controls.start({
          scaleY: [0, 1],
          opacity: [0, 1],
          transition: {
            duration: 0.8,
            ease: 'easeOut',
            repeat: 1, // Grow once (or loop? usually grow is intro)
            repeatDelay: 2,
          },
        });
        // If we want it to loop the grow effect for demo:
        controls.start({
          scaleY: [0.3, 1, 1, 0.3],
          opacity: [0.5, 1, 1, 0.5],
          transition: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        });
      } else if (animationType === 'bounce') {
        controls.start({
          y: [0, -3, 0],
          transition: {
            duration: 0.6,
            repeat: Infinity,
            repeatDelay: 1,
          },
        });
      } else if (animationType === 'lights') {
        // Flicker lights
        lightControls.start((i) => ({
          opacity: [1, 0.3, 1],
          transition: {
            duration: Math.random() * 1 + 0.5,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: Math.random() * 0.5,
          },
        }));
      }
    } else {
      controls.stop();
      controls.set({ scaleY: 1, y: 0, opacity: 1 });
      lightControls.stop();
      lightControls.set({ opacity: 1 });
    }
  }, [shouldAnimate, animationType, controls, lightControls]);

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
        <motion.g animate={controls} style={{ originY: '24px' }}>
          {/* Side Wings */}
          <rect x='2' y='10' width='5' height='12' stroke={color} />
          <rect x='17' y='10' width='5' height='12' stroke={color} />

          {/* Center Tower */}
          <rect x='7' y='5' width='10' height='17' stroke={color} />
          {/* Antenna */}
          <line x1='12' y1='2' x2='12' y2='5' stroke={color} />
          <line x1='10' y1='2' x2='14' y2='2' stroke={color} />
        </motion.g>

        {/* Windows Overlay - Scale with building if bouncing, but we can keep separate if we want just lights */}
        <motion.g animate={controls} style={{ originY: '24px' }}>
          {windows.map((w, i) => {
            const isLit = defaultLitIndices.includes(i);
            // Render lit windows with specific color, others with stroke or lighter fill
            return (
              <motion.rect
                key={w.id}
                x={w.x - 0.5}
                y={w.y - 0.5}
                width='1'
                height='1'
                rx='0.5' // Dots
                fill={isLit ? finalLightColor : color}
                opacity={isLit ? 1 : 0.3} // Dim unlit ones
                stroke='none'
                animate={
                  isLit && animationType === 'lights'
                    ? lightControls
                    : undefined
                }
                custom={i}
              />
            );
          })}
        </motion.g>
      </svg>
    </div>
  );
}
