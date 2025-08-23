import { cn } from '@/lib/utils';
import * as React from 'react';
import type { SVGProps } from 'react';

export function MPLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg role='img'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 70 70'
      aria-label='MP Logo'
      width={70}
      height={70}
      className={cn('text-zinc-950 dark:text-white', props.className)}
      fill='none'
      {...props}>
  <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="38" cy="18" r="5" fill="currentColor" opacity="0.9"/>
    <path d="M10 40c4 6 13.5 10 22 10 10.5 0 19-5 21-12" strokeWidth="4" opacity="0.35"/>
    <path d="M10 34c3-8 12.5-13 22-13 8.5 0 16 3 19 7" strokeWidth="4"/>
  </g>
</svg>

  );
}
