// components/core/shimmer-skeleton.tsx
'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

export type ShimmerVariant = 'line' | 'avatar' | 'card' | 'rect' | 'list';

export type ShimmerProps = {
  /** Which visual variant to render. */
  variant?: ShimmerVariant;

  /** Number of repeated items (useful for lists). */
  count?: number;

  /** Width as Tailwind friendly string or number (px). Applied to top-level when relevant. */
  width?: string | number;

  /** Height as Tailwind friendly string or number (px). Applied to top-level when relevant. */
  height?: string | number;

  /** Rounded corners style. */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';

  /** Tailwind color for base (e.g. 'bg-zinc-200 dark:bg-zinc-700') - accepts classes. */
  baseClassName?: string;

  /** Tailwind color for shimmer highlight (applied via gradient stop). */
  highlightClassName?: string;

  /** Animation speed multiplier (1 = default). */
  speed?: number;

  /** Gap between items when count > 1 (px). */
  gap?: number;

  /** Custom className on each item. */
  className?: string;

  /** When true, makes element accessible for screen readers with label. */
  ariaLabel?: string | null;

  /** If true, use reduced-motion friendly static style. */
  reduceMotion?: boolean;
};

const ROUND_MAP: Record<string, string> = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
};

function pxOrString(v?: string | number) {
  if (v === undefined) return undefined;
  return typeof v === 'number' ? `${v}px` : v;
}

/**
 * Shimmer/Skeleton component
 *
 * - Presentational, repeatable, accessible
 * - Use variant + count to produce multi-line lists/cards etc
 */
export default function Shimmer({
  variant = 'line',
  count = 1,
  width,
  height,
  rounded = 'md',
  baseClassName = 'bg-zinc-200 dark:bg-zinc-700',
  //   highlightClassName = 'bg-white/70',
  speed = 1,
  gap = 12,
  className,
  ariaLabel = null,
  reduceMotion = false,
}: ShimmerProps) {
  // animation duration in seconds
  const duration = Math.max(0.6, 1.6 / Math.max(0.25, speed));

  const itemStyle: React.CSSProperties = {
    width: pxOrString(width),
    height: pxOrString(height),
    marginBottom: count > 1 ? `${gap}px` : undefined,
  };

  // helper render single item depending on variant
  const renderItem = (i: number) => {
    const roundedCls = ROUND_MAP[rounded] ?? ROUND_MAP.md;
    const commonInner = (
      <div
        className={cn(
          'relative overflow-hidden',
          roundedCls,
          baseClassName,
          'h-full w-full',
          className
        )}
        style={itemStyle}
        aria-hidden={ariaLabel ? undefined : true}
      >
        {/* shimmer gradient overlay */}
        {!reduceMotion ? (
          <motion.div
            className={cn(
              'pointer-events-none absolute inset-0',
              // gradient using highlight class for center stop; we keep rest transparent
              'bg-gradient-to-r from-transparent via-white/50 to-transparent'
            )}
            initial={{ x: '-120%' }}
            animate={{ x: '120%' }}
            transition={{
              repeat: Infinity,
              ease: 'linear',
              duration,
            }}
            style={{ mixBlendMode: 'overlay' }}
          />
        ) : null}
        {/* A subtle overlay stripe for depth */}
        <div className='absolute inset-0 opacity-20' />
      </div>
    );

    switch (variant) {
      case 'avatar':
        return (
          <div
            key={i}
            className={cn('flex items-center', i > 0 ? 'mt-[12px]' : '')}
            style={itemStyle}
          >
            <div
              className={cn('flex-shrink-0', roundedCls, baseClassName)}
              style={{ width: 56, height: 56 }}
            />
            <div className='ml-4 flex-1'>
              <div
                className={cn('mb-2 h-3', baseClassName, ROUND_MAP.sm)}
                style={{ width: '40%' }}
              />
              <div
                className={cn('h-3', baseClassName, ROUND_MAP.sm)}
                style={{ width: '70%' }}
              />
            </div>
          </div>
        );
      case 'card':
        return (
          <div
            key={i}
            className={cn('p-4', 'shadow-sm', roundedCls, 'bg-white/0')}
          >
            <div className='mb-3' style={{ height: 160, borderRadius: 8 }}>
              {commonInner}
            </div>
            <div className='space-y-2'>
              <div
                className={cn('h-4', baseClassName, ROUND_MAP.sm)}
                style={{ width: '50%' }}
              />
              <div
                className={cn('h-3', baseClassName, ROUND_MAP.sm)}
                style={{ width: '80%' }}
              />
              <div
                className={cn('h-3', baseClassName, ROUND_MAP.sm)}
                style={{ width: '90%' }}
              />
            </div>
          </div>
        );
      case 'rect':
        return (
          <div
            key={i}
            className={cn('inline-block', roundedCls)}
            style={itemStyle}
          >
            {commonInner}
          </div>
        );
      case 'list':
        return (
          <div key={i} className='flex items-start space-x-4'>
            <div
              className={cn(
                'h-12 w-12 flex-shrink-0',
                baseClassName,
                roundedCls
              )}
            />
            <div className='flex-1'>
              <div
                className={cn('mb-2 h-3 w-1/3', baseClassName, ROUND_MAP.sm)}
              />
              <div
                className={cn('mb-2 h-3 w-full', baseClassName, ROUND_MAP.sm)}
              />
              <div className={cn('h-3 w-3/4', baseClassName, ROUND_MAP.sm)} />
            </div>
          </div>
        );
      case 'line':
      default:
        return (
          <div key={i} style={itemStyle}>
            <div className={cn('h-3', baseClassName, roundedCls)} />
          </div>
        );
    }
  };

  // container role/aria
  const roleProps = ariaLabel
    ? { role: 'status', 'aria-label': ariaLabel }
    : { 'aria-hidden': true };

  // render repeated items
  const items = Array.from({ length: Math.max(1, count) }, (_, i) =>
    renderItem(i)
  );

  return (
    <div {...(roleProps as any)} className={cn('select-none', 'w-full')}>
      {variant === 'list' ? (
        <div className='space-y-4'>{items}</div>
      ) : (
        <div>{items}</div>
      )}
    </div>
  );
}
