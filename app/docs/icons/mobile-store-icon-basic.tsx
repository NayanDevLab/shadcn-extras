'use client';

import { MobileStoreIcon } from '@/components/core/mobile-store-icon';

export default function MobileStoreIconBasic() {
  return (
    <div className='flex flex-col items-center gap-4'>
      <div className='flex items-center gap-8'>
        <MobileStoreIcon size={48} />
        <MobileStoreIcon
          size={48}
          startOnHover={false}
          isAnimating={true}
          animationType='cart-bounce'
          color='#000000' // Black Phone
          cartColor='#06b6d4' // Cyan Cart
        />
        <MobileStoreIcon size={48} animationType='vibrate' color='#ef4444' />
      </div>
      <p className='text-muted-foreground text-sm'>
        Hover to see animations. Center shows custom colors (Mobile Shopping).
      </p>
    </div>
  );
}
