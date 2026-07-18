'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import './circular-gallery.css';

export interface CircularGalleryItemProps {
  id: string;
  imageSrc: string;
  title: string;
}

export interface CircularGalleryProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  items: CircularGalleryItemProps[];
  title?: React.ReactNode;
  radius?: string;
}

export const CircularGallery = React.forwardRef<
  HTMLElement,
  CircularGalleryProps
>(({ className, items, title, radius = '40vmin', ...props }, ref) => {
  return (
    <section
      ref={ref}
      className={cn('circular-gallery-wrapper', className)}
      style={
        {
          '--cards': items.length,
          '--radius': radius,
        } as React.CSSProperties
      }
      {...props}
    >
      {items.map((item, index) => (
        <div
          key={item.id}
          id={item.id}
          data-title={item.title}
          style={
            {
              '--i': index + 1,
              '--bg-img': `url(${item.imageSrc})`,
            } as React.CSSProperties
          }
        >
          <a href={`#${item.id}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.imageSrc} alt={item.title} />
          </a>
        </div>
      ))}
      {title && <h1>{title}</h1>}
    </section>
  );
});
CircularGallery.displayName = 'CircularGallery';
