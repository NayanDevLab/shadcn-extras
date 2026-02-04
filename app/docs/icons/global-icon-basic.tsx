'use client';

import { GlobalIcon } from '@/components/core/global-icon';

export default function GlobalIconBasic() {
  return (
    <div className='flex flex-col items-center gap-4'>
      <div className='flex items-center gap-8'>
        <GlobalIcon size={48} />
        <GlobalIcon
          size={48}
          startOnHover={false}
          isAnimating={true}
          animationType='bounce'
          color='#000000' // Black Globe
          pinColor='#06b6d4' // Cyan Pins
        />
        <GlobalIcon size={48} animationType='spin' color='#ef4444' />
      </div>
      <p className='text-muted-foreground text-sm'>
        Hover to see animations. Center shows bouncing pins with custom colors.
      </p>
    </div>
  );
}
