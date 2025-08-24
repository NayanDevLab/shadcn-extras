'use client';
import { RadialDotsSpinner } from '@/components/core/radial-dots-spinner';

export function RdsCompact() {
  return (
    <div className='min-h-56 flex items-center justify-center rounded-xl bg-zinc-900'>
      <RadialDotsSpinner
        size={120}
        spokes={10}
        dotsPerSpoke={9}
        centerRings={1}
        centerRingRadius={8}
        className='text-white/90'
        speed={1.2}
      />
    </div>
  );
}
