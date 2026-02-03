'use client';

import { CartIcon } from '@/components/core/cart-icon';

export default function CartIconBasic() {
  return (
    <div className='flex flex-col items-center gap-4'>
      <div className='flex items-center gap-8'>
        <CartIcon size={48} />
        <CartIcon
          size={48}
          startOnHover={false}
          isAnimating={true}
          animationType='roll'
          color='#000000'
          wheelColor='#06b6d4'
        />
        <CartIcon
          size={48}
          animationType='checkout'
          color='#ef4444'
          wheelColor='#000000'
        />
      </div>
      <p className='text-muted-foreground text-sm'>
        Hover to see rolling. Center shows rolling with cyan wheels. Right is
        checkout.
      </p>
    </div>
  );
}
