'use client';

import { BulbIcon } from '@/components/core/bulb-icon';

export default function BulbIconBasic() {
  return (
    <div className='flex flex-col items-center gap-8 p-8'>
      <div className='flex flex-col items-center gap-2'>
        <BulbIcon size={48} animationType='pulse' />
        <p className='text-muted-foreground text-sm'>Pulse on Hover</p>
      </div>

      <div className='flex flex-col items-center gap-2'>
        <BulbIcon size={48} animationType='flash' color='#ef4444' />
        <p className='text-muted-foreground text-sm'>Flash on Hover</p>
      </div>
    </div>
  );
}
