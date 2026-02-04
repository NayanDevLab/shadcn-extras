'use client';

import { ToolsIcon } from '@/components/core/tools-icon';

export default function ToolsIconBasic() {
  return (
    <div className='flex flex-col items-center gap-4'>
      <div className='flex items-center gap-8'>
        <ToolsIcon size={48} />
        <ToolsIcon
          size={48}
          startOnHover={false}
          isAnimating={true}
          animationType='repair'
          color='#000000' // Black Wrench
          screwdriverColor='#06b6d4' // Cyan Screwdriver
        />
        <ToolsIcon size={48} animationType='wiggle' color='#ef4444' />
      </div>
      <p className='text-muted-foreground text-sm'>
        Hover to see animations. Center shows &quot;repair&quot; with custom
        colors.
      </p>
    </div>
  );
}
