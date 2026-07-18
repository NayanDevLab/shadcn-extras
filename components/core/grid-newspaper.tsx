import * as React from 'react';
import { cn } from '@/lib/utils';
import './grid-newspaper.css';

export const GridNewspaper = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('grid-newspaper-wrapper w-full', className)}
      {...props}
    >
      <div className='grid-newspaper-container'>
        <main className='grid-newspaper-main'>{children}</main>
      </div>
    </div>
  );
});
GridNewspaper.displayName = 'GridNewspaper';

export const GridNewspaperHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { title: string }
>(({ className, title, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('grid-newspaper-header-wrap', className)}
      {...props}
    >
      <h1>{title}</h1>
      <aside className='grid-newspaper-aside'>
        <div>{children}</div>
      </aside>
    </div>
  );
});
GridNewspaperHeader.displayName = 'GridNewspaperHeader';

export interface GridNewspaperArticleProps extends React.HTMLAttributes<HTMLDivElement> {
  withBorder?: boolean;
  hoverImage?: boolean;
  hoverBg?: boolean;
}

export const GridNewspaperArticle = React.forwardRef<
  HTMLDivElement,
  GridNewspaperArticleProps
>(({ className, withBorder, hoverImage, hoverBg, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        withBorder && 'gn-with-border',
        hoverImage && 'gn-hover-image',
        hoverBg && 'gn-hover-bg',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});
GridNewspaperArticle.displayName = 'GridNewspaperArticle';
