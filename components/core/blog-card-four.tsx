'use client';

import * as React from 'react';
import Link from 'next/link';
import { CalendarDays } from 'lucide-react';
import { cn } from '@/lib/utils';

export type BlogCardFourProps = {
  /** Entire card link; if omitted renders as plain <article>. */
  href?: string;

  /** Cover image (top, rounded). */
  image: { src: string; alt?: string };

  /** Title and short description. */
  title: string;
  excerpt?: string;

  /** Footer meta. */
  author?: { name: string; avatar?: string; href?: string };
  dateISO?: string;
  dateLabel?: string;

  /** Visual tweaks */
  className?: string;
  imageClassName?: string;
  panelClassName?: string;
  titleClassName?: string;
  excerptClassName?: string;
  footerClassName?: string;

  /**
   * Layout variant:
   * - "attached": white panel slightly overlaps the image (screenshot look)
   * - "flush": panel sits directly under the image with no offset
   */
  variant?: 'attached' | 'flush';
};

export function BlogCardFour({
  href,
  image,
  title,
  excerpt = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi necessitatibus repellat voluptatibus?',
  author,
  dateISO,
  dateLabel,
  className,
  imageClassName,
  panelClassName,
  titleClassName,
  excerptClassName,
  footerClassName,
  variant = 'attached',
}: BlogCardFourProps) {
  const Wrapper: any = href ? Link : 'article';
  const wrapperProps = href
    ? { href, 'aria-label': title }
    : { role: 'article' };

  return (
    <Wrapper
      {...(wrapperProps as any)}
      className={cn(
        'group block w-full max-w-sm',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500',
        className
      )}
    >
      {/* Top cover image */}
      <div className='relative'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image.src}
          alt={image.alt ?? ''}
          loading='lazy'
          className={cn(
            'h-44 w-full rounded-3xl object-cover',
            'ring-1 ring-black/5 dark:ring-white/10',
            imageClassName
          )}
        />
      </div>

      {/* Info panel */}
      <div
        className={cn(
          'relative -mt-4 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm transition-shadow dark:border-zinc-800 dark:bg-zinc-900',
          variant === 'flush' && 'mt-2',
          panelClassName
        )}
      >
        <h3
          className={cn(
            'mb-2 text-[17px] leading-snug font-semibold text-zinc-900 dark:text-zinc-50',
            'group-hover:underline',
            titleClassName
          )}
        >
          {title}
        </h3>

        {excerpt && (
          <p
            className={cn(
              'mb-4 text-sm text-zinc-600 dark:text-zinc-400',
              excerptClassName
            )}
          >
            {excerpt}
          </p>
        )}

        <div
          className={cn('flex items-center justify-between', footerClassName)}
        >
          {/* author */}
          {author && (
            <div className='inline-flex items-center gap-2'>
              {author.avatar ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={author.avatar}
                  alt=''
                  className='h-6 w-6 rounded-full ring-1 ring-white dark:ring-zinc-900'
                  loading='lazy'
                />
              ) : (
                <div className='h-6 w-6 rounded-full bg-zinc-200 dark:bg-zinc-700' />
              )}
              {author.href ? (
                <a
                  href={author.href}
                  onClick={(e) => e.stopPropagation()}
                  className='text-sm font-medium text-zinc-700 hover:underline dark:text-zinc-300'
                >
                  {author.name}
                </a>
              ) : (
                <span className='text-sm font-medium text-zinc-700 dark:text-zinc-300'>
                  {author.name}
                </span>
              )}
            </div>
          )}

          {(dateLabel || dateISO) && (
            <time
              dateTime={dateISO}
              className='inline-flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400'
            >
              <CalendarDays className='h-4 w-4' aria-hidden />
              {dateLabel}
            </time>
          )}
        </div>
      </div>
    </Wrapper>
  );
}

/** Convenient preset matching the screenshot look */
export function OverlappedBlogCard(props: Omit<BlogCardFourProps, 'variant'>) {
  return <BlogCardFour {...props} variant='attached' />;
}
