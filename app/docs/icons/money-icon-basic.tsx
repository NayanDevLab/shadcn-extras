'use client';

import { MoneyIcon } from '@/components/core/money-icon';

export default function MoneyIconBasic() {
  return (
    <div className='flex flex-col items-center gap-8 p-8'>
      <div className='flex flex-col items-center gap-2'>
        <MoneyIcon
          size={48}
          animationType='bounce'
          className='text-green-600'
        />
        <p className='text-muted-foreground text-sm'>Bounce on Hover</p>
      </div>

      <div className='flex flex-col items-center gap-2'>
        <MoneyIcon
          size={48}
          animationType='flip'
          className='text-emerald-600'
        />
        <p className='text-muted-foreground text-sm'>Flip on Hover</p>
      </div>
    </div>
  );
}
