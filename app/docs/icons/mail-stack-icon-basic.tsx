'use client';

import { MailStackIcon } from '@/components/core/mail-stack-icon';

export default function MailStackIconBasic() {
  return (
    <div className='flex flex-col items-center gap-4'>
      <div className='flex items-center gap-8'>
        <MailStackIcon size={48} />
        <MailStackIcon
          size={48}
          startOnHover={false}
          isAnimating={true}
          animationType='slide'
          color='#000000' // Black Envelope
          stackColor='#06b6d4' // Cyan Stack
        />
        <MailStackIcon size={48} animationType='rotate' color='#ef4444' />
      </div>
      <p className='text-muted-foreground text-sm'>
        Hover to see animations. Center shows sliding stack with custom colors.
      </p>
    </div>
  );
}
