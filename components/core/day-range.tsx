'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

export interface DayRangeProps extends React.HTMLAttributes<HTMLDivElement> {
  low: number;
  high: number;
  current: number;
  currencySymbol?: string;
  lowLabel?: string;
  highLabel?: string;
  formatValue?: (value: number) => string;
}

export const DayRange = React.forwardRef<HTMLDivElement, DayRangeProps>(
  (
    {
      low,
      high,
      current,
      currencySymbol = '₹',
      lowLabel = "Today's low",
      highLabel = "Today's high",
      formatValue,
      className,
      ...props
    },
    ref
  ) => {
    // Ensure current is clamped between low and high
    const clampedCurrent = Math.max(low, Math.min(high, current));

    // Calculate percentage (0 to 100)
    const percentage =
      high === low ? 0 : ((clampedCurrent - low) / (high - low)) * 100;

    const defaultFormat = (val: number) =>
      new Intl.NumberFormat('en-IN', {
        maximumFractionDigits: 2,
      }).format(val);

    const formatter = formatValue || defaultFormat;

    return (
      <div
        ref={ref}
        className={cn('flex w-full flex-col space-y-3', className)}
        {...props}
      >
        {/* Top Labels */}
        <div className='flex w-full items-center justify-between'>
          <div className='flex flex-col gap-1'>
            <span className='text-sm font-medium text-red-700'>{lowLabel}</span>
            <span className='text-foreground text-xl font-bold'>
              {currencySymbol}
              {formatter(low)}
            </span>
          </div>
          <div className='flex flex-col items-end gap-1'>
            <span className='text-sm font-medium text-teal-700'>
              {highLabel}
            </span>
            <span className='text-foreground text-xl font-bold'>
              {currencySymbol}
              {formatter(high)}
            </span>
          </div>
        </div>

        {/* Range Bar */}
        <div className='relative mt-2 h-1.5 w-full rounded-full bg-slate-200 dark:bg-slate-800'>
          {/* Filled part */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className='absolute top-0 left-0 h-full rounded-full bg-blue-600'
          />

          {/* Current Value Tooltip/Indicator */}
          <motion.div
            initial={{ left: 0, opacity: 0, y: 10 }}
            animate={{ left: `${percentage}%`, opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            className='absolute top-3 -translate-x-1/2 transform'
          >
            {/* Tooltip triangle */}
            <div className='absolute -top-1.5 left-1/2 -translate-x-1/2 transform border-x-[6px] border-b-[6px] border-transparent border-b-blue-600' />
            <div className='whitespace-nowrap rounded bg-blue-600 px-2.5 py-1 text-sm font-medium text-white shadow-sm'>
              {currencySymbol}
              {formatter(current)}
            </div>
          </motion.div>
        </div>
      </div>
    );
  }
);
DayRange.displayName = 'DayRange';
