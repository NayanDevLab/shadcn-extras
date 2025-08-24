'use client';
import { RadialDotsSpinner } from '@/components/core/radial-dots-spinner';

export function RdsBasic() {
  return (
    <div className='min-h-64 flex items-center justify-center rounded-xl bg-black'>
      <RadialDotsSpinner className='text-white' size={180} />
    </div>
  );
}
