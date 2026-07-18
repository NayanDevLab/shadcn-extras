import * as React from 'react';
import { cn } from '@/lib/utils';
import './holographic-card.css';

export interface GlitchTextProps extends React.HTMLAttributes<HTMLHeadingElement> {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  theme?: {
    c1?: string;
    c2?: string;
  };
}

export const GlitchText = React.forwardRef<HTMLHeadingElement, GlitchTextProps>(
  ({ className, text, as: Comp = 'h1', theme, style, ...props }, ref) => {
    const customStyle = {
      ...(theme?.c1 ? { '--holo-c1': theme.c1 } : {}),
      ...(theme?.c2 ? { '--holo-c2': theme.c2 } : {}),
      ...style,
    } as React.CSSProperties;

    return (
      <Comp
        ref={ref}
        className={cn('holographic-glitch', className)}
        data-text={text}
        style={customStyle}
        {...props}
      >
        {text}
      </Comp>
    );
  }
);
GlitchText.displayName = 'GlitchText';

export interface HolographicCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: React.ReactNode;
  description?: React.ReactNode;
  buttonText?: string;
  buttonHref?: string;
  theme?: {
    c1?: string;
    c2?: string;
    c3?: string;
  };
}

export const HolographicCard = React.forwardRef<
  HTMLDivElement,
  HolographicCardProps
>(
  (
    {
      className,
      title,
      description,
      buttonText,
      buttonHref,
      children,
      theme,
      style,
      ...props
    },
    ref
  ) => {
    const customStyle = {
      ...(theme?.c1 ? { '--holo-c1': theme.c1 } : {}),
      ...(theme?.c2 ? { '--holo-c2': theme.c2 } : {}),
      ...(theme?.c3 ? { '--holo-c3': theme.c3 } : {}),
      ...style,
    } as React.CSSProperties;

    return (
      <div className='holographic-card-wrapper flex h-full w-full items-center justify-center p-8'>
        <div
          ref={ref}
          className={cn(
            'holographic-card w-full max-w-[420px] p-10 text-white',
            className
          )}
          style={customStyle}
          {...props}
        >
          {title && <h2 className='mb-4 text-2xl font-bold'>{title}</h2>}

          {description && (
            <p className='leading-relaxed opacity-85'>{description}</p>
          )}

          {children}

          {buttonText && (
            <a
              href={buttonHref || '#'}
              className='holographic-btn mt-8 px-7 py-3 text-sm'
            >
              {buttonText}
            </a>
          )}
        </div>
      </div>
    );
  }
);
HolographicCard.displayName = 'HolographicCard';
