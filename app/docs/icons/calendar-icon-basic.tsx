'use client';

import { CalendarIcon } from '@/components/core/calendar-icon';

export default function CalendarIconBasic() {
  return (
    <div className='flex flex-col items-center gap-4'>
      <div className='flex items-center gap-8'>
        <CalendarIcon size={48} />
        <CalendarIcon
          size={48}
          startOnHover={false}
          isAnimating={true}
          animationType='pulse'
          color='#000000'
          ringColor='#06b6d4'
        />
        <CalendarIcon size={48} animationType='slide' color='#ef4444' />
      </div>
      <p className='text-muted-foreground text-sm'>
        Hover to see animations. Center shows pulsing rings with custom color.
      </p>
    </div>
  );
}
