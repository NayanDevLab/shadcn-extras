'use client';

import { TrophyIcon } from '@/components/core/trophy-icon';

export default function TrophyIconBasic() {
  return (
    <div className='flex flex-col items-center gap-4'>
      <div className='flex items-center gap-8'>
        <TrophyIcon size={48} />
        <TrophyIcon
          size={48}
          startOnHover={false}
          isAnimating={true}
          animationType='shine'
          color='#000000' // Black Cup
          starColor='#fbbf24' // Amber/Gold Star
        />
        <TrophyIcon size={48} animationType='wobble' color='#fbbf24' />
      </div>
      <p className='text-muted-foreground text-sm'>
        Hover to see animations. Center shows pulsing star with custom colors.
      </p>
    </div>
  );
}
