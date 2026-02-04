'use client';

import { BellIcon } from '@/components/core/bell-icon';

export default function BellIconBasic() {
  return (
    <div className='flex flex-col items-center gap-4'>
      <div className='flex items-center gap-8'>
        <BellIcon size={48} />
        <BellIcon
          size={48}
          startOnHover={false}
          isAnimating={true}
          animationType='ring'
          color='#000000' // Black Bell
          clapperColor='#06b6d4' // Cyan Clapper
        />
        <BellIcon size={48} animationType='shake' color='#ef4444' />
      </div>
      <p className='text-muted-foreground text-sm'>
        Hover to see animations. Center shows ringing bell with custom colors.
      </p>
    </div>
  );
}
