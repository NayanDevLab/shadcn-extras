'use client';

import { RocketIcon } from '@/components/core/rocket-icon';

export default function RocketIconBasic() {
  return (
    <div className='flex flex-col items-center gap-4 p-8'>
      <RocketIcon size={48} className='text-primary' />
      <p className='text-muted-foreground text-sm'>Hover to launch</p>
    </div>
  );
}
