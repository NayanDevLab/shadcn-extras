'use client';

import * as React from 'react';
import Link from 'next/link';
import { ThumbsUp, Bookmark } from 'lucide-react';
import { cn } from '@/lib/utils';

export type BlogCardThreeMeta = {
  author?: { name: string; avatar?: string; href?: string };
  readLabel?: string; // "2 min read"
};

export type BlogCardThreeProps = {
  /** Whole card link */
  href?: string;

  /** Title */
  title: string;

  /** Small square thumbnail */
  thumb?: { src: string; alt?: string };

  /** Meta row */
  meta?: BlogCardThreeMeta;

  /** Actions */
  onLike?: () => void;
  onBookmark?: () => void;

  /** Layout */
  variant?: 'thumb-right' | 'thumb-left';

  /** Slot overrides */
  className?: string;
  titleClassName?: string;
  thumbClassName?: string;
  metaClassName?: string;
  actionsClassName?: string;
};

export function BlogCardThree({
  href,
  title,
  thumb,
  meta,
  onLike,
  onBookmark,
  variant = 'thumb-right',
  className,
  titleClassName,
  thumbClassName,
  metaClassName,
  actionsClassName,
}: BlogCardThreeProps) {
  const Wrapper: any = href ? Link : 'article';
  const wrapperProps = href
    ? { href, 'aria-label': title }
    : { role: 'article' };

  const Thumb = (
    <div
      className={cn(
        'relative h-20 w-20 shrink-0 overflow-hidden rounded-xl ring-1 ring-black/5 dark:ring-white/10',
        thumbClassName
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {thumb?.src ? (
        <img
          src={thumb.src}
          alt={thumb.alt ?? ''}
          className='h-full w-full object-cover'
          loading='lazy'
        />
      ) : (
        <div className='grid h-full w-full place-items-center bg-zinc-100 text-xs text-zinc-400 dark:bg-zinc-800'>
          no image
        </div>
      )}
    </div>
  );

  return (
    <Wrapper
      {...(wrapperProps as any)}
      className={cn(
        'group flex items-start gap-4 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500',
        className
      )}
    >
      {/* optional left thumb */}
      {variant === 'thumb-left' && Thumb}

      <div className='flex min-w-0 flex-1 flex-col gap-6'>
        {/* title */}
        <h3
          className={cn(
            'line-clamp-2 text-[17px] font-semibold leading-snug text-zinc-900 group-hover:underline dark:text-zinc-50',
            titleClassName
          )}
        >
          {title}
        </h3>

        {/* bottom row */}
        <div className='flex items-center justify-between'>
          {/* meta */}
          <div className={cn('flex items-center gap-3', metaClassName)}>
            {meta?.author && (
              <span className='inline-flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300'>
                {meta.author.avatar && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={meta.author.avatar}
                    alt=''
                    className='h-6 w-6 rounded-full ring-1 ring-white dark:ring-zinc-900'
                    loading='lazy'
                  />
                )}
                {meta.author.href ? (
                  <a
                    href={meta.author.href}
                    onClick={(e) => e.stopPropagation()}
                    className='font-medium hover:underline'
                  >
                    {meta.author.name}
                  </a>
                ) : (
                  <span className='font-medium'>{meta.author.name}</span>
                )}
              </span>
            )}

            {meta?.readLabel && (
              <span className='text-sm text-zinc-500 dark:text-zinc-400'>
                {meta.readLabel}
              </span>
            )}
          </div>

          {/* actions */}
          <div
            className={cn(
              'flex items-center gap-2 text-zinc-500 dark:text-zinc-400',
              actionsClassName
            )}
          >
            <button
              type='button'
              aria-label='Like'
              onClick={(e) => {
                e.preventDefault();
                onLike?.();
              }}
              className='rounded-md p-1.5 hover:bg-zinc-100 hover:text-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-100'
            >
              <ThumbsUp className='h-4 w-4' aria-hidden />
            </button>
            <button
              type='button'
              aria-label='Bookmark'
              onClick={(e) => {
                e.preventDefault();
                onBookmark?.();
              }}
              className='rounded-md p-1.5 hover:bg-zinc-100 hover:text-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-100'
            >
              <Bookmark className='h-4 w-4' aria-hidden />
            </button>
          </div>
        </div>
      </div>

      {/* default: right thumb */}
      {variant === 'thumb-right' && Thumb}
    </Wrapper>
  );
}

/** Presets for convenience */
export function MinimalBlogCardRight(
  props: Omit<BlogCardThreeProps, 'variant'>
) {
  return <BlogCardThree {...props} variant='thumb-right' />;
}
export function MinimalBlogCardLeft(
  props: Omit<BlogCardThreeProps, 'variant'>
) {
  return <BlogCardThree {...props} variant='thumb-left' />;
}
