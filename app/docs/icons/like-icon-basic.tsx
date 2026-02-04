'use client';

import { LikeIcon } from '@/components/core/like-icon';

export default function LikeIconBasic() {
  return (
    <div className='flex flex-col items-center gap-4'>
      <div className='flex items-center gap-8'>
        <LikeIcon size={48} />
        <LikeIcon
          size={48}
          startOnHover={false}
          isAnimating={true}
          animationType='like'
          color='#000000' // Black Hand
          cuffColor='#06b6d4' // Cyan Cuff
        />
        <LikeIcon size={48} animationType='wiggle' color='#ef4444' />
      </div>
      <p className='text-muted-foreground text-sm'>
        Hover to see animations. Center shows &quot;like&quot; reaction with
        custom colors.
      </p>
    </div>
  );
}
