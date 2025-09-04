'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export type ChevronStep = {
  id?: string | number;
  label: string;
  /** Optional accessible description (shown via title attr). */
  description?: string;
  /** Optional custom classes per step. */
  className?: string;
  /** Disable click for this step. */
  disabled?: boolean;
};

export type ChevronStepsProps = {
  /** Steps in order. */
  steps: ChevronStep[];

  /** Zero-based current step index. */
  current?: number;

  /** Called when a (non-disabled) step is clicked. */
  onStepClick?: (index: number, step: ChevronStep) => void;

  /** Sizes & look */
  size?: 'sm' | 'md' | 'lg';
  variant?: 'brand' | 'neutral';

  /** Tail (arrow) width in px (CSS variable) */
  tailWidth?: number;

  /** Roundness on the bar */
  radius?: 'md' | 'lg' | 'xl' | '2xl';

  /** Allow horizontal scroll on small screens */
  scrollable?: boolean;

  /** Root class */
  className?: string;

  /** Slot overrides */
  stepClassName?: string;
  stepActiveClassName?: string;
  stepCompletedClassName?: string;
  stepUpcomingClassName?: string;
};

/**
 * ChevronSteps: horizontally joined chevron items with a configurable arrow tail,
 * a11y-friendly (list+buttons), and simple API.
 */
export default function ChevronSteps({
  steps,
  current = 0,
  onStepClick,
  size = 'md',
  variant = 'brand',
  tailWidth = 18,
  radius = '2xl',
  scrollable = true,
  className,
  stepClassName,
  stepActiveClassName,
  stepCompletedClassName,
  stepUpcomingClassName,
}: ChevronStepsProps) {
  const h =
    size === 'sm' ? 'h-8 text-xs' : size === 'lg' ? 'h-14 text-base' : 'h-11 text-sm';
  const pad = size === 'sm' ? 'px-4' : size === 'lg' ? 'px-7' : 'px-6';
  const r =
    radius === 'md'
      ? 'rounded-md'
      : radius === 'lg'
      ? 'rounded-lg'
      : radius === 'xl'
      ? 'rounded-xl'
      : 'rounded-2xl';

  // The chevron shape uses a clip-path polygon with --twc-tail custom property
  // to create the arrow head. We mask the first/last to give rounded ends.
  const baseStep =
    'relative isolate flex grow select-none items-center justify-center whitespace-nowrap font-medium transition-colors';

  const theme =
    variant === 'brand'
      ? {
          active:
            'bg-blue-700 text-white',
          completed:
            'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200',
          upcoming:
            'bg-zinc-100 text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400',
          border: 'ring-1 ring-white/70 dark:ring-black/20',
        }
      : {
          active:
            'bg-zinc-800 text-white dark:bg-zinc-200 dark:text-zinc-900',
          completed:
            'bg-zinc-200 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200',
          upcoming:
            'bg-zinc-100 text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400',
          border: 'ring-1 ring-white/70 dark:ring-black/20',
        };

  const containerClasses = cn(
    'relative',
    r,
    scrollable ? 'overflow-x-auto' : 'overflow-hidden',
    'bg-transparent',
    className
  );

  return (
    <div className={containerClasses}>
      <ol
        className={cn(
          'relative flex w-max min-w-full items-center',
          r,
          // visually hide any overflow of the clip-path while keeping scroll smooth
          'mask-image-[linear-gradient(to_right,transparent,black_24px,black_calc(100%-24px),transparent)]'
        )}
        style={
          {
            // this is for Safari to ensure the mask works well
            WebkitMaskImage:
              'linear-gradient(to right, transparent, black 24px, black calc(100% - 24px), transparent)',
          } as React.CSSProperties
        }
        role="list"
        aria-label="Progress"
      >
        {steps.map((step, i) => {
          const state =
            i < current ? 'completed' : i === current ? 'active' : 'upcoming';

          const color =
            state === 'active'
              ? theme.active
              : state === 'completed'
              ? theme.completed
              : theme.upcoming;

          const override =
            state === 'active'
              ? stepActiveClassName
              : state === 'completed'
              ? stepCompletedClassName
              : stepUpcomingClassName;

          // leftmost and rightmost need rounded masks
          const roundLeft = i === 0 ? r : '';
          const roundRight = i === steps.length - 1 ? r : '';

          // Each step uses clip-path polygon to form a chevron.
          // We add a tiny overlap (-0.5px) to avoid hairline gaps between shapes.
          return (
            <li key={step.id ?? i} className="relative flex">
              <button
                type="button"
                className={cn(
                  baseStep,
                  h,
                  pad,
                  color,
                  theme.border,
                  roundLeft,
                  roundRight,
                  stepClassName,
                  override,
                  step.className
                )}
                style={
                  {
                    // tail width variable
                    ['--twc-tail' as any]: `${tailWidth}px`,
                    clipPath:
                      i === 0
                        ? `polygon(
                          0 0,
                          calc(100% - var(--twc-tail)) 0,
                          100% 50%,
                          calc(100% - var(--twc-tail)) 100%,
                          0 100%
                        )`
                        : i === steps.length - 1
                        ? `polygon(
                          0 0,
                          calc(100% - var(--twc-tail)) 0,
                          100% 50%,
                          calc(100% - var(--twc-tail)) 100%,
                          0 100%,
                          var(--twc-tail) 50%
                        )`
                        : `polygon(
                          0 0,
                          calc(100% - var(--twc-tail)) 0,
                          100% 50%,
                          calc(100% - var(--twc-tail)) 100%,
                          0 100%,
                          var(--twc-tail) 50%
                        )`,
                    // slight overlap to hide seams
                    marginLeft: i === 0 ? 0 : '-2px',
                  } as React.CSSProperties
                }
                title={step.description}
                aria-current={i === current ? 'step' : undefined}
                aria-disabled={step.disabled || undefined}
                onClick={() => {
                  if (!step.disabled && onStepClick) onStepClick(i, step);
                }}
              >
                {step.label}
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
