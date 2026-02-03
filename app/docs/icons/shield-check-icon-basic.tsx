'use client';

import { ShieldCheckIcon } from '@/components/core/shield-check-icon';

export default function ShieldCheckIconBasic() {
  return (
    <div className='flex flex-col items-center gap-4'>
      <div className='flex items-center gap-8'>
        <ShieldCheckIcon size={48} />
        <ShieldCheckIcon
          size={48}
          startOnHover={false}
          isAnimating={true}
          animationType='draw'
          color='#000000' // Black Shield
          checkColor='#22c55e' // Green Check
        />
        <ShieldCheckIcon size={48} animationType='pulse' color='#3b82f6' />
      </div>
      <p className='text-muted-foreground text-sm'>
        Hover to see animations. Center shows drawing animation with custom
        colors.
      </p>
    </div>
  );
}
