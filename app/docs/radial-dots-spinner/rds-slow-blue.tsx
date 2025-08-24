'use client';
import { RadialDotsSpinner } from '@/components/core/radial-dots-spinner';

export function RdsSlowBlue() {
  return (
    <div className='min-h-64 flex items-center justify-center rounded-xl bg-zinc-50 dark:bg-zinc-900'>
      <RadialDotsSpinner
        size={160}
        spokes={16}
        dotsPerSpoke={12}
        className='text-blue-600 dark:text-blue-400'
        speed={2.4}
      />
    </div>
  );
}
