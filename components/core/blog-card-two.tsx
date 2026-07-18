'use client';

import * as React from 'react';
import Link from 'next/link';
import { Bookmark, Heart, Clock, Tag } from 'lucide-react';
import { cn } from '@/lib/utils';

export type BlogCardTwoMeta = {
  category?: string;
  categoryHref?: string;
  timeLabel?: string; // e.g. "48 min ago"
};

export type BlogCardTwoProps = {
  /** Card destination; if undefined, renders a plain <article>. */
  href?: string;

  /** Background image */
  image: { src: string; alt?: string };

  /** Title text (used for aria-label when href is present) */
  title: string;

  /** Bottom meta row */
  meta?: BlogCardTwoMeta;

  /** Action callbacks */
  onLike?: () => void;
  onBookmark?: () => void;

  /** Visual tuning */
  rounded?: string; // e.g. "rounded-2xl"
  overlayClassName?: string; // gradient overlay
  titleClassName?: string;
  metaClassName?: string;
  actionClassName?: string;
  className?: string;

  /** Overlay variants */
  variant?: 'bottom-gradient' | 'center-fade';
};

export function BlogCardTwo({
  href,
  image,
  title,
  meta,
  onLike,
  onBookmark,
  rounded = 'rounded-2xl',
  overlayClassName,
  titleClassName,
  metaClassName,
  actionClassName,
  className,
  variant = 'bottom-gradient',
}: BlogCardTwoProps) {
  const Wrapper: any = href ? Link : 'article';
  const wrapperProps = href
    ? { href, 'aria-label': title }
    : { role: 'article' };

  return (
    <Wrapper
      {...wrapperProps}
      className={cn(
        'group relative block overflow-hidden shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-md dark:ring-white/10',
        rounded,
        className
      )}
    >
      {/* cover image (no rounding on the img itself; container controls rounding) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image.src}
        alt={image.alt ?? ''}
        className='h-56 w-full object-cover sm:h-64 md:h-72'
        loading='lazy'
      />

      {/* overlay gradient */}
      <div
        className={cn(
          'pointer-events-none absolute inset-0',
          variant === 'bottom-gradient' &&
            'bg-gradient-to-t from-black/70 via-black/30 to-transparent',
          variant === 'center-fade' &&
            'bg-[radial-gradient(100%_60%_at_50%_80%,rgba(0,0,0,0.55),transparent)]',
          overlayClassName
        )}
      />

      {/* content row pinned to bottom */}
      <div className='absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-5'>
        <div className='min-w-0'>
          <h3
            className={cn(
              'line-clamp-2 text-lg font-semibold tracking-tight text-white drop-shadow-sm sm:text-xl',
              'group-hover:underline',
              titleClassName
            )}
          >
            {title}
          </h3>

          {(meta?.category || meta?.timeLabel) && (
            <div
              className={cn(
                'mt-2 flex flex-wrap items-center gap-3 text-sm text-zinc-200/95',
                metaClassName
              )}
            >
              {meta?.category && (
                <MetaPill
                  href={meta.categoryHref}
                  icon={<Tag className='h-3.5 w-3.5' aria-hidden />}
                >
                  {meta.category}
                </MetaPill>
              )}
              {meta?.timeLabel && (
                <span className='inline-flex items-center gap-2'>
                  <Clock className='h-3.5 w-3.5' aria-hidden />
                  {meta.timeLabel}
                </span>
              )}
            </div>
          )}
        </div>

        {/* actions */}
        <div
          className={cn(
            'flex shrink-0 items-center gap-2 text-white/90',
            actionClassName
          )}
        >
          <button
            type='button'
            aria-label='Like'
            onClick={(e) => {
              e.preventDefault();
              onLike?.();
            }}
            className='rounded-full bg-black/25 p-2 backdrop-blur hover:bg-black/35'
          >
            <Heart className='h-4 w-4' aria-hidden />
          </button>
          <button
            type='button'
            aria-label='Bookmark'
            onClick={(e) => {
              e.preventDefault();
              onBookmark?.();
            }}
            className='rounded-full bg-black/25 p-2 backdrop-blur hover:bg-black/35'
          >
            <Bookmark className='h-4 w-4' aria-hidden />
          </button>
        </div>
      </div>
    </Wrapper>
  );
}

function MetaPill({
  href,
  icon,
  children,
}: React.PropsWithChildren<{ href?: string; icon?: React.ReactNode }>) {
  const Comp: any = href ? Link : 'span';
  const props = href ? { href } : { role: 'text' };
  return (
    <Comp className='inline-flex items-center gap-2 text-white/95' {...props}>
      {icon}
      <span className='font-medium'>{children}</span>
      <span className='mx-2 opacity-60 select-none'>|</span>
    </Comp>
  );
}
