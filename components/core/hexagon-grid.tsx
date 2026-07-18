'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import './hexagon-grid.css';

export interface HexGridProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number; // Size in pixels
  gap?: number; // Gap in pixels
}

export const HexGrid = React.forwardRef<HTMLDivElement, HexGridProps>(
  ({ className, size = 220, gap = 16, children, ...props }, ref) => {
    return (
      <div className={cn('hex-grid-container', className)} ref={ref} {...props}>
        <div
          className='hex-grid'
          style={
            {
              '--hex-width': `${size}px`,
              '--hex-gap': `${gap}px`,
              '--sqrt3': '1.73205',
              '--hex-height': `calc(var(--hex-width) * 2 / var(--sqrt3))`,
              '--hex-margin-x': `calc(var(--hex-gap) / 2)`,
              '--hex-margin-y': `calc((var(--sqrt3) / 4 * var(--hex-gap)) - (0.125 * var(--hex-height)))`,
            } as React.CSSProperties
          }
        >
          {children}
        </div>
      </div>
    );
  }
);
HexGrid.displayName = 'HexGrid';

export interface HexagonProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  imageSrc: string;
  imageAlt?: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
}

export const Hexagon = React.forwardRef<HTMLDivElement, HexagonProps>(
  (
    {
      className,
      imageSrc,
      imageAlt = 'Hexagon image',
      title,
      subtitle,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn('hex', className)}
        tabIndex={0}
        role='button'
        {...props}
      >
        <div className='hex-shape'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imageSrc} alt={imageAlt} />
          {(title || subtitle) && (
            <div className='hex-caption'>
              {title && <h3>{title}</h3>}
              {subtitle && <p>{subtitle}</p>}
            </div>
          )}
        </div>
      </div>
    );
  }
);
Hexagon.displayName = 'Hexagon';
