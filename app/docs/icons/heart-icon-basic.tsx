'use client';

import { HeartIcon } from '@/components/core/heart-icon';

export default function HeartIconBasic() {
  return (
    <div className='flex flex-col items-center gap-4'>
      <div className='flex items-center gap-8'>
        <HeartIcon size={48} />
        <HeartIcon
          size={48}
          startOnHover={false}
          isAnimating={true}
          animationType='beat'
          color='#000000' // Black Heart
          shineColor='#06b6d4' // Cyan Shine
        />
        <HeartIcon size={48} animationType='pulse' color='#ef4444' />
      </div>
      <p className='text-muted-foreground text-sm'>
        Hover to see animations. Center shows beating heart with custom colors.
      </p>
    </div>
  );
}
