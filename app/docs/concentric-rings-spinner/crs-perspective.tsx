'use client';
import { ConcentricRingsSpinner } from '@/components/core/concentric-rings-spinner';

export function CrsPerspective() {
  return (
    <div className='min-h-64 flex items-center justify-center rounded-xl bg-zinc-900'>
      <ConcentricRingsSpinner
        size={220}
        rings={18}
        dotsPerRing={30}
        ringGap={7}
        fadeCenter={0.0}
        fadeEdge={0.55}
        dotRadius={{ inner: 4, outer: 2.2 }}
        alternate={true}
        speed={2.2}
        className='text-white'
      />
    </div>
  );
}
