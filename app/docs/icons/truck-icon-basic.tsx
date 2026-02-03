'use client';

import { TruckIcon } from '@/components/core/truck-icon';

export default function TruckIconBasic() {
  return (
    <div className='flex flex-col items-center gap-8 p-8'>
      <div className='flex flex-col items-center gap-2'>
        <TruckIcon
          size={48}
          animationType='drive'
          className='text-orange-600'
        />
        <p className='text-muted-foreground text-sm'>Drive (Slide)</p>
      </div>

      <div className='flex flex-col items-center gap-2'>
        <TruckIcon size={48} animationType='bounce' className='text-blue-600' />
        <p className='text-muted-foreground text-sm'>Bounce (Rough Road)</p>
      </div>
    </div>
  );
}
