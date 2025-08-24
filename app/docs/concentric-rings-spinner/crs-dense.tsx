'use client';
import { ConcentricRingsSpinner } from '@/components/core/concentric-rings-spinner';

export function CrsDense() {
  return (
    <div className='min-h-64 flex items-center justify-center rounded-xl bg-zinc-950'>
      <ConcentricRingsSpinner
        size={240}
        rings={16}
        dotsPerRing={42}
        ringGap={8}
        dotRadius={{ inner: 2.5, outer: 4.5 }}
        className='text-white/95'
        speed={2.6}
      />
    </div>
  );
}
