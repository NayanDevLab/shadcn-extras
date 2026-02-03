'use client';

import { RefreshIcon } from '@/components/core/refresh-icon';

export default function RefreshIconBasic() {
  return (
    <div className='flex flex-col items-center gap-8 p-8'>
      <div className='flex flex-col items-center gap-2'>
        <RefreshIcon size={48} animationType='spin' className='text-blue-600' />
        <p className='text-muted-foreground text-sm'>Spin on Hover</p>
      </div>

      <div className='flex flex-col items-center gap-2'>
        <RefreshIcon
          size={48}
          animationType='pulse'
          className='text-indigo-600'
        />
        <p className='text-muted-foreground text-sm'>Pulse on Hover</p>
      </div>
    </div>
  );
}
