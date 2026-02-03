'use client';

import { BuildingIcon } from '@/components/core/building-icon';

export default function BuildingIconBasic() {
  return (
    <div className='flex flex-col items-center gap-4'>
      <div className='flex items-center gap-8'>
        <BuildingIcon size={48} />
        <BuildingIcon
          size={48}
          startOnHover={false}
          isAnimating={true}
          animationType='lights'
          color='#000000' // Black Structure
          lightColor='#06b6d4' // Cyan Lights
        />
        <BuildingIcon size={48} animationType='grow' color='#ef4444' />
      </div>
      <p className='text-muted-foreground text-sm'>
        Hover to see animations. Center shows flickering lights with custom
        color.
      </p>
    </div>
  );
}
