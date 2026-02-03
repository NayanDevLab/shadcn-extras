'use client';

import { NetworkIcon } from '@/components/core/network-icon';

export default function NetworkIconBasic() {
  return (
    <div className='flex flex-col items-center gap-4'>
      <div className='flex items-center gap-8'>
        <NetworkIcon size={48} />
        <NetworkIcon
          size={48}
          startOnHover={false}
          isAnimating={true}
          animationType='pulse'
          color='#3b82f6'
        />
        <NetworkIcon size={64} animationType='expand' />
      </div>
      <p className='text-muted-foreground text-sm'>
        Hover to see the network expand. Center shows active state.
      </p>
    </div>
  );
}
