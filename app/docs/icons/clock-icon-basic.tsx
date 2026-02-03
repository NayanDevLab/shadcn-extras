'use client';

import { ClockIcon } from '@/components/core/clock-icon';

export default function ClockIconBasic() {
  return (
    <div className='flex flex-col items-center gap-8 p-8'>
      <div className='flex flex-col items-center gap-2'>
        <ClockIcon size={48} animationType='swing' className='text-gray-600' />
        <p className='text-muted-foreground text-sm'>Swing (Pendulum)</p>
      </div>

      <div className='flex flex-col items-center gap-2'>
        <ClockIcon size={48} animationType='shake' className='text-red-500' />
        <p className='text-muted-foreground text-sm'>Shake (Alarm)</p>
      </div>
    </div>
  );
}
