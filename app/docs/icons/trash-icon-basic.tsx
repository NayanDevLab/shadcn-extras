'use client';

import { TrashIcon } from '@/components/core/trash-icon';

export default function TrashIconBasic() {
  return (
    <div className='flex flex-col items-center gap-4'>
      <div className='flex items-center gap-8'>
        <TrashIcon size={48} />
        <TrashIcon
          size={48}
          startOnHover={false}
          isAnimating={true}
          animationType='trash'
          color='#000000' // Black Bin
          lidColor='#06b6d4' // Cyan Lid
        />
        <TrashIcon size={48} animationType='shake' color='#ef4444' />
      </div>
      <p className='text-muted-foreground text-sm'>
        Hover to see animations. Center shows lid flipping with custom colors.
      </p>
    </div>
  );
}
