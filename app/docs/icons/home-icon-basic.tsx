'use client';

import { HomeIcon } from '@/components/core/home-icon';

export default function HomeIconBasic() {
  return (
    <div className='flex flex-col items-center gap-4'>
      <div className='flex items-center gap-8'>
        <HomeIcon size={48} />
        <HomeIcon
          size={48}
          startOnHover={false}
          isAnimating={true}
          animationType='door-open'
          color='#000000' // Black house
          doorColor='#06b6d4' // Cyan door
        />
        <HomeIcon size={48} animationType='bounce' color='#ef4444' />
      </div>
      <p className='text-muted-foreground text-sm'>
        Hover to see animations. Center shows custom colors (Black Frame, Cyan
        Door).
      </p>
    </div>
  );
}
