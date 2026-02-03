'use client';

import { BalanceIcon } from '@/components/core/balance-icon';

export default function BalanceIconBasic() {
  return (
    <div className='flex flex-col items-center gap-4'>
      <div className='flex items-center gap-8'>
        <BalanceIcon size={48} />
        <BalanceIcon
          size={48}
          startOnHover={false}
          isAnimating={true}
          animationType='sway'
          color='#000000' // Black Structure
          panColor='#06b6d4' // Cyan Pans
        />
        <BalanceIcon size={48} animationType='weigh' color='#ef4444' />
      </div>
      <p className='text-muted-foreground text-sm'>
        Hover to see animations. Center shows custom pan colors with sway.
      </p>
    </div>
  );
}
