'use client';
import TimelineRail from '@/components/core/timeline-rail';

export function TrCompact() {
  return (
    <div className='max-w-3xl'>
      <TimelineRail
        size='sm'
        gapClassName='gap-10'
        lineThickness={4}
        lineColorClass='bg-zinc-200 dark:bg-zinc-800'
        items={[
          { label: 'Alpha', caption: 'Q1', active: true },
          { label: 'Beta', caption: 'Q2', active: true },
          { label: 'GA', caption: 'Q3' },
          { label: 'Scale', caption: 'Q4' },
        ]}
      />
    </div>
  );
}
