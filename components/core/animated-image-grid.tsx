import * as React from 'react';
import { cn } from '@/lib/utils';
import './animated-image-grid.css';

import { cva, type VariantProps } from 'class-variance-authority';

const itemVariants = cva(
  'animated-image-grid-item overflow-hidden transition-all duration-300',
  {
    variants: {
      variant: {
        default: 'rounded-lg border-2 border-primary/20 shadow-sm',
        circle: 'rounded-full border-4 border-white shadow-md',
        polaroid: 'rounded-sm bg-white p-2 pb-8 shadow-lg',
        minimal: 'rounded-md shadow-none border-none',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface AnimatedImageGridItem {
  id: string | number;
  src: string;
  alt?: string;
}

export interface AnimatedImageGridProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof itemVariants> {
  items: AnimatedImageGridItem[];
  gap?: string;
  size?: string;
  itemClassName?: string;
  imageClassName?: string;
}

export const AnimatedImageGrid = React.forwardRef<
  HTMLDivElement,
  AnimatedImageGridProps
>(
  (
    {
      className,
      items,
      gap,
      size,
      variant,
      itemClassName,
      imageClassName,
      style,
      ...props
    },
    ref
  ) => {
    // Inject the customizable gap and size variables if provided
    const customStyle = {
      ...(gap ? { '--grid-gap': gap } : {}),
      ...(size ? { '--grid-size': size } : {}),
      ...style,
    } as React.CSSProperties;

    return (
      <div
        ref={ref}
        className={cn('animated-image-grid h-full w-full p-4', className)}
        style={customStyle}
        {...props}
      >
        {items.map((item, index) => (
          <div
            key={item.id}
            className={cn(itemVariants({ variant }), itemClassName)}
            style={{ '--index': index } as React.CSSProperties}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.src}
              alt={item.alt || `Grid image ${index}`}
              className={cn('h-full w-full object-cover', imageClassName)}
            />
          </div>
        ))}
      {/* Hidden filler element required to stretch the container height hack */}
      <div
        className='animated-image-grid-item animated-image-grid-filler'
        style={{ '--index': items.length } as React.CSSProperties}
      />
    </div>
  );
});
AnimatedImageGrid.displayName = 'AnimatedImageGrid';
