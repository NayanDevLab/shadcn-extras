'use client';

import * as React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { cn } from '@/lib/utils';

export type TextCircleItem =
  | string
  | React.ReactNode;

export type TextCircleScrollProps = {
  /** Items placed on the ring in order (clockwise by default). */
  items: TextCircleItem[];

  /** Radius in px (distance from center to baseline of items). */
  radius?: number;

  /** Empty hole diameter in px (purely visual helper class on container). */
  innerGap?: number;

  /** Angle offset in degrees for the first item. */
  startAngle?: number;

  /** Clockwise (true) or counter-clockwise (false) item order. */
  clockwise?: boolean;

  /** If true, connects rotation to page scroll progress. */
  rotateOnScroll?: boolean;

  /**
   * How many degrees the ring rotates from top->bottom of the page when
   * rotateOnScroll = true. 360 = one full turn.
   */
  scrollDegrees?: number;

  /** Constant rotation (deg/s). Can be negative for reverse. */
  autoSpinDegPerSec?: number;

  /** Springiness for scroll rotation. Set 0 to disable spring. */
  springStiffness?: number;

  /** Container className */
  className?: string;

  /** Ring element className */
  ringClassName?: string;

  /** Per-item className */
  itemClassName?: string;

  /** Typography class for items (e.g. 'text-lg font-serif') */
  textClassName?: string;

  /** If provided, constrain the component height (useful in docs/examples). */
  height?: number | string;
};

/**
 * TextCircleScroll
 * - Places any text/nodes around a circle
 * - Rotates with scroll (and/or auto-spin)
 * - Purely presentational; does not manage layout outside itself
 */
export default function TextCircleScroll({
  items,
  radius = 110,
  innerGap = 90,
  startAngle = -90,
  clockwise = true,
  rotateOnScroll = true,
  scrollDegrees = 360,
  autoSpinDegPerSec = 0,
  springStiffness = 120,
  className,
  ringClassName,
  itemClassName,
  textClassName = 'text-base font-serif text-zinc-800 dark:text-zinc-200',
  height = 320,
}: TextCircleScrollProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  // --- Scroll-driven rotation
  const { scrollYProgress } = useScroll({
    // when the component is within the viewport
    target: ref,
    offset: ['start end', 'end start'],
  });

  const rawRotate = useTransform(scrollYProgress, [0, 1], [0, scrollDegrees]);
  const rotateSpring = useSpring(rawRotate, {
    stiffness: springStiffness || 120,
    damping: 18,
    mass: 0.6,
  });

  // --- Auto-spin via requestAnimationFrame
  const [autoAngle, setAutoAngle] = React.useState(0);
  React.useEffect(() => {
    if (!autoSpinDegPerSec) return;
    let raf = 0;
    let last = performance.now();
    const tick = (t: number) => {
      const dt = (t - last) / 1000;
      last = t;
      setAutoAngle((a) => a + autoSpinDegPerSec * dt);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [autoSpinDegPerSec]);

  // Combine scroll rotation + auto rotation.
  const [combined, setCombined] = React.useState(0);
  React.useEffect(() => {
    const unsub = rotateSpring.on('change', (v) => setCombined(v));
    return () => unsub();
  }, [rotateSpring]);

  const totalRotation = (rotateOnScroll ? combined : 0) + autoAngle;

  const n = items.length;
  const step = 360 / Math.max(1, n);
  const dir = clockwise ? 1 : -1;

  return (
    <div
      ref={ref}
      className={cn(
        'relative grid place-items-center overflow-visible',
        className
      )}
      style={{ height }}
      aria-label="Circular text animation"
      role="img"
    >
      {/* Visual inner hole helper */}
      <div
        aria-hidden
        className="pointer-events-none absolute rounded-full border border-zinc-300/40 dark:border-zinc-700/40"
        style={{ width: innerGap, height: innerGap }}
      />
      {/* Ring */}
      <motion.div
        className={cn('relative', ringClassName)}
        style={{
          rotate: totalRotation,
          width: radius * 2 + 40,
          height: radius * 2 + 40,
        }}
      >
        {items.map((item, i) => {
          const angle = startAngle + dir * i * step;
          // Place at angle: rotate container then translate then un-rotate
          const style: React.CSSProperties = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: `rotate(${angle}deg) translate(${radius}px) rotate(${clockwise ? 90 : -90}deg)`,
            transformOrigin: '0 0',
            whiteSpace: 'nowrap',
          };
          return (
            <div key={i} style={style} className={cn('select-none', itemClassName)}>
              <span className={textClassName}>
                {typeof item === 'string' ? item : item}
              </span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
