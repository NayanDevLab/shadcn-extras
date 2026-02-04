'use client';

import { GlobalSearchIcon } from '@/components/core/global-search-icon';

export default function GlobalSearchIconBasic() {
  return (
    <div className='flex flex-col items-center gap-4'>
      <div className='flex items-center gap-8'>
        <GlobalSearchIcon size={48} />
        <GlobalSearchIcon
          size={48}
          startOnHover={false}
          isAnimating={true}
          animationType='rotate'
          color='#000000' // Black Frame
          globeColor='#06b6d4' // Cyan Globe
        />
        <GlobalSearchIcon size={48} animationType='search' color='#ef4444' />
      </div>
      <p className='text-muted-foreground text-sm'>
        Hover to see animations. Center shows rotating globe with custom colors.
      </p>
    </div>
  );
}
