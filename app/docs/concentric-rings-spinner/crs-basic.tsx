'use client';
import { ConcentricRingsSpinner } from '@/components/core/concentric-rings-spinner';

export function CrsBasic() {
  return (
    <div className='min-h-64 flex items-center justify-center rounded-xl bg-black'>
      <ConcentricRingsSpinner className='text-white' />
    </div>
  );
}
