'use client';

import * as React from 'react';
import { Quote, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export interface TestimonialCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  role: string;
  content: string;
  avatarSrc: string;
  rating?: number;
}

export const TestimonialCard = React.forwardRef<
  HTMLDivElement,
  TestimonialCardProps
>(
  (
    { name, role, content, avatarSrc, rating = 5, className, ...props },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn('flex w-full max-w-sm flex-col items-center', className)}
        {...props}
      >
        {/* Main Bubble */}
        <div className='relative w-full rounded-2xl bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:bg-slate-900 dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)]'>
          <div className='flex flex-col items-center text-center'>
            <h3 className='text-lg font-semibold text-slate-900 dark:text-slate-100'>
              {name}
            </h3>
            <p className='mt-1 text-sm text-slate-500 dark:text-slate-400'>
              {role}
            </p>

            <div className='mt-6 flex justify-center text-blue-600 dark:text-blue-500'>
              <Quote className='h-8 w-8 fill-current' />
            </div>

            <p className='mt-6 text-sm leading-relaxed text-slate-600 dark:text-slate-300'>
              {content}
            </p>

            <div className='mt-6 flex items-center justify-center gap-1'>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    'h-4 w-4',
                    i < rating
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'fill-slate-200 text-slate-200 dark:fill-slate-700 dark:text-slate-700'
                  )}
                />
              ))}
            </div>
          </div>

          {/* Bubble Tail */}
          <div className='absolute -bottom-3 left-1/2 -translate-x-1/2 transform drop-shadow-md'>
            <div className='h-0 w-0 border-x-8 border-t-[12px] border-x-transparent border-t-white dark:border-t-slate-900' />
          </div>
        </div>

        {/* Avatar */}
        <div className='mt-6 h-16 w-16 overflow-hidden rounded-full border-4 border-white shadow-sm dark:border-slate-800'>
          <Image
            src={avatarSrc}
            alt={name}
            width={64}
            height={64}
            className='h-full w-full object-cover'
          />
        </div>
      </div>
    );
  }
);
TestimonialCard.displayName = 'TestimonialCard';
