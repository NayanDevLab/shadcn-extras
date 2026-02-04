'use client';

import { PhoneIcon } from '@/components/core/phone-icon';

export default function PhoneIconBasic() {
  return (
    <div className='flex flex-col items-center gap-4 p-8'>
      <PhoneIcon size={48} className='text-primary' />
      <p className='text-muted-foreground text-sm'>Hover to ring</p>
    </div>
  );
}
