'use client';

import * as React from 'react';
import Link from 'next/link';
import { Bookmark, MoreVertical } from 'lucide-react';
import { cn } from '@/lib/utils';

export type BlogCardOneAuthor = {
  name: string;
  avatar?: string; // URL
  href?: string;
};

export type BlogCardOneProps = {
  /** Main link target for the whole card */
  href?: string;
  /** Category tag (clickable) */
  category?: { label: string; href?: string };
  /** Title (required for a11y, used as aria-label on the card) */
  title: string;
  /** Short summary */
  excerpt?: string;
  /** Image (decorative if alt is empty) */
  image?: { src: string; alt?: string };
  /** Author & date */
  author?: BlogCardOneAuthor;
  dateISO?: string; // e.g. "2024-08-15"
  dateLabel?: string; // e.g. "Aug 15, 2024"

  /** Buttons (bookmark/menu) visibility */
  showActions?: boolean;
  /** Called when bookmark clicked */
  onBookmark?: () => void;
  /** Called when menu clicked */
  onMenu?: (e: React.MouseEvent<HTMLButtonElement>) => void;

  /** Style variant */
  variant?: 'image-left' | 'image-top';

  /** Slot overrides */
  className?: string; // outer card
  imageClassName?: string;
  bodyClassName?: string;
  titleClassName?: string;
  excerptClassName?: string;
  tagClassName?: string;
};

export function BlogCardOne({
  href,
  category,
  title,
  excerpt,
  image,
  author,
  dateISO,
  dateLabel,
  showActions = true,
  onBookmark,
  onMenu,
  variant = 'image-left',
  className,
  imageClassName,
  bodyClassName,
  titleClassName,
  excerptClassName,
  tagClassName,
}: BlogCardOneProps) {
  const Wrapper: React.ElementType = href ? Link : 'article';
  const wrapperProps = href
    ? { href, 'aria-label': title }
    : { role: 'article' };

  const Figure = (
    <figure
      className={cn(
        'relative shrink-0 overflow-hidden rounded-l-xl sm:rounded-xl',
        variant === 'image-left' ? 'h-44 w-44 sm:h-40 sm:w-56' : 'h-48 w-full',
        imageClassName
      )}
    >
      {image?.src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={image.src}
          alt={image.alt ?? ''}
          className='h-full w-full object-cover'
          loading='lazy'
        />
      ) : (
        <div className='grid h-full w-full place-items-center bg-zinc-100 text-zinc-400 dark:bg-zinc-800'>
          <span className='text-xs'>No image</span>
        </div>
      )}
    </figure>
  );

  return (
    <Wrapper
      {...(wrapperProps as any)}
      className={cn(
        'group block rounded-xl bg-white ring-1 ring-zinc-200 transition-shadow hover:shadow-md dark:bg-zinc-900 dark:ring-zinc-800',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500',
        variant === 'image-left' ? 'p-2 sm:p-3' : 'p-2 sm:p-3',
        className
      )}
    >
      <div
        className={cn(
          variant === 'image-left'
            ? 'flex gap-4 sm:gap-5'
            : 'flex flex-col gap-3 sm:gap-4'
        )}
      >
        {/* image */}
        {Figure}

        {/* content */}
        <div className={cn('flex min-w-0 flex-1 flex-col', bodyClassName)}>
          {/* top row: tag + actions */}
          <div className='flex items-start justify-between gap-2'>
            {category?.label && (
              <CategoryTag href={category.href} className={tagClassName}>
                {category.label}
              </CategoryTag>
            )}
            {showActions && (
              <div className='flex items-center gap-1'>
                <button
                  type='button'
                  aria-label='Bookmark'
                  onClick={(e) => {
                    e.preventDefault();
                    onBookmark?.();
                  }}
                  className='rounded-md p-1.5 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100'
                >
                  <Bookmark className='h-4 w-4' aria-hidden />
                </button>
                <button
                  type='button'
                  aria-label='More options'
                  onClick={(e) => {
                    e.preventDefault();
                    onMenu?.(e);
                  }}
                  className='rounded-md p-1.5 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100'
                >
                  <MoreVertical className='h-4 w-4' aria-hidden />
                </button>
              </div>
            )}
          </div>

          {/* title */}
          <h3
            className={cn(
              'mt-1 line-clamp-2 text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50',
              'group-hover:underline',
              titleClassName
            )}
          >
            {title}
          </h3>

          {/* excerpt */}
          {excerpt && (
            <p
              className={cn(
                'mt-1.5 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-300',
                excerptClassName
              )}
            >
              {excerpt}
            </p>
          )}

          {/* meta */}
          {(author?.name || dateLabel) && (
            <div className='mt-3 flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-300'>
              {author?.name && (
                <span className='inline-flex items-center gap-2'>
                  {author.avatar && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={author.avatar}
                      alt=''
                      className='h-6 w-6 rounded-full object-cover ring-1 ring-white dark:ring-zinc-900'
                      loading='lazy'
                    />
                  )}
                  {author.href ? (
                    <Link
                      href={author.href}
                      onClick={(e) => e.stopPropagation()}
                      className='font-medium hover:underline'
                    >
                      {author.name}
                    </Link>
                  ) : (
                    <span className='font-medium'>{author.name}</span>
                  )}
                </span>
              )}
              {dateLabel && (
                <>
                  <span className='text-zinc-400 select-none'>|</span>
                  <time dateTime={dateISO}>{dateLabel}</time>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
}

/* ---------- helpers / subcomponents ---------- */

function CategoryTag({
  href,
  className,
  children,
}: React.PropsWithChildren<{ href?: string; className?: string }>) {
  const TagComp: any = href ? Link : 'span';
  const props = href ? { href } : { role: 'text' };
  return (
    <TagComp
      {...props}
      className={cn(
        'inline-flex items-center rounded-md border border-indigo-200 bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-700',
        'dark:border-indigo-900/50 dark:bg-indigo-950/40 dark:text-indigo-300',
        className
      )}
    >
      {children}
    </TagComp>
  );
}

/* ---------- Variant export with preset ---------- */

/** A preset that mirrors the screenshot: image on the left. */
export function ModernBlogCard(props: Omit<BlogCardOneProps, 'variant'>) {
  return <BlogCardOne variant='image-left' {...props} />;
}

/** Compact variant with the image stacked on top (great for grids). */
export function CompactBlogCard(props: Omit<BlogCardOneProps, 'variant'>) {
  return <BlogCardOne variant='image-top' {...props} />;
}
