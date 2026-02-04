'use client';

import { MicrophoneIcon } from '@/components/core/microphone-icon';

export default function MicrophoneIconBasic() {
  return (
    <div className='flex flex-col items-center gap-4'>
      <div className='flex items-center gap-8'>
        <MicrophoneIcon size={48} />
        <MicrophoneIcon
          size={48}
          startOnHover={false}
          isAnimating={true}
          animationType='shake'
          color='#000000' // Black Mic
          standColor='#06b6d4' // Cyan Stand
        />
        <MicrophoneIcon size={48} animationType='pulse' color='#ef4444' />
      </div>
      <p className='text-muted-foreground text-sm'>
        Hover to see animations. Center shows shaking mic with custom colors.
      </p>
    </div>
  );
}
