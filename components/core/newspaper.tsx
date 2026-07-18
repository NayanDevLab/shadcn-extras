import * as React from 'react';
import { cn } from '@/lib/utils';
import './newspaper.css';

export const Newspaper = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} className={cn('w-full', className)} {...props}>
      {children}
    </div>
  );
});
Newspaper.displayName = 'Newspaper';

export const NewspaperHeader = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => {
  return (
    <h1
      ref={ref}
      className={cn(
        'newspaper-header mt-4 mb-6 text-5xl md:text-6xl',
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
});
NewspaperHeader.displayName = 'NewspaperHeader';

export const NewspaperContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <section
      ref={ref}
      className={cn('flex flex-col gap-4 md:flex-row', className)}
      {...props}
    >
      {children}
    </section>
  );
});
NewspaperContent.displayName = 'NewspaperContent';

export interface NewspaperArticleProps extends React.HTMLAttributes<HTMLDivElement> {
  isBreaking?: boolean;
}

export const NewspaperArticle = React.forwardRef<
  HTMLDivElement,
  NewspaperArticleProps
>(({ className, isBreaking, children, ...props }, ref) => {
  return (
    <article
      ref={ref}
      className={cn(
        'newspaper-article mb-4',
        isBreaking ? 'flex-[2]' : 'flex-[1]',
        className
      )}
      {...props}
    >
      {children}
    </article>
  );
});
NewspaperArticle.displayName = 'NewspaperArticle';
