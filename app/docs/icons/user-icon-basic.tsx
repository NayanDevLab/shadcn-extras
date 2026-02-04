'use client';

import { UserIcon } from '@/components/core/user-icon';

export default function UserIconBasic() {
  return (
    <div className='flex flex-col items-center gap-4'>
      <div className='flex items-center gap-8'>
        <UserIcon size={48} />
        <UserIcon
          size={48}
          startOnHover={false}
          isAnimating={true}
          animationType='hi'
          color='#000000' // Black Frame
          userColor='#06b6d4' // Cyan User
        />
        <UserIcon size={48} animationType='pulse' color='#ef4444' />
      </div>
      <p className='text-muted-foreground text-sm'>
        Hover to see animations. Center shows &quot;hi&quot; wave with custom
        colors.
      </p>
    </div>
  );
}
