'use client';

import { ShareIcon } from '@/components/core/share-icon';

export default function ShareIconBasic() {
  return (
    <div className='flex flex-col items-center gap-4'>
      <div className='flex items-center gap-8'>
        <ShareIcon size={48} />
        <ShareIcon
          size={48}
          startOnHover={false}
          isAnimating={true}
          animationType='rotate'
          color='#000000' // Black Lines
          dotColor='#06b6d4' // Cyan Dots
        />
        <ShareIcon size={48} animationType='pulse' color='#ef4444' />
      </div>
      <p className='text-muted-foreground text-sm'>
        Hover to see animations. Center shows rotating graph with custom colors.
      </p>
    </div>
  );
}
