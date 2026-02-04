'use client';

import { PaperPlaneIcon } from '@/components/core/paper-plane-icon';

export default function PaperPlaneIconBasic() {
  return (
    <div className='flex flex-col items-center gap-4'>
      <div className='flex items-center gap-8'>
        <PaperPlaneIcon size={48} />
        <PaperPlaneIcon
          size={48}
          startOnHover={false}
          isAnimating={true}
          animationType='fly'
          color='#000000' // Black Plane
          trailColor='#06b6d4' // Cyan Trail
        />
        <PaperPlaneIcon size={48} animationType='wobble' color='#ef4444' />
      </div>
      <p className='text-muted-foreground text-sm'>
        Hover to see animations. Center shows flying plane with custom colors.
      </p>
    </div>
  );
}
