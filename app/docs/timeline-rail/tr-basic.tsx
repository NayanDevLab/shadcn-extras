'use client';
import TimelineRail from '@/components/core/timeline-rail';

export function TrBasic() {
  return (
    <div className='max-w-5xl'>
      <TimelineRail
        items={[
          { label: 'headset', caption: '1910', active: true },
          { label: 'jungle gum', caption: '1920', active: true },
          { label: 'chocolate chip cookie', caption: '1930', active: true },
          { label: 'Jeep', caption: '1940' },
          { label: 'leaf blower', caption: '1950' },
          { label: 'magnetic stripe card', caption: '1960' },
        ]}
        size='md'
        labelAngle={50}
        emphasizeActiveTrail
      />
    </div>
  );
}
