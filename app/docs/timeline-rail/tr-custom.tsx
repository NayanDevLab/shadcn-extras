'use client';
import { Rocket } from 'lucide-react';
import TimelineRail, { TimelineItem } from '@/components/core/timeline-rail';

const steps: TimelineItem[] = [
  { label: 'Design', caption: 'Week 1', active: true, href: '#' },
  { label: 'Dev', caption: 'Week 2', active: true, href: '#' },
  { label: 'Test', caption: 'Week 3', href: '#' },
  { label: 'Launch', caption: 'Week 4', href: '#' },
];

export function TrCustom() {
  return (
    <div className='max-w-4xl'>
      <TimelineRail
        items={steps}
        lineThickness={8}
        lineColorClass='bg-emerald-200 dark:bg-emerald-900/50'
        dotClass='bg-emerald-300 dark:bg-emerald-800'
        dotActiveClass='bg-emerald-600 dark:bg-emerald-400'
        renderLabel={(item, i) => (
          <span className='flex items-center gap-1'>
            {i === steps.length - 1 && <Rocket className='h-3 w-3' />}
            {item.label}
          </span>
        )}
        renderCaption={(item) => <time>{item.caption}</time>}
      />
    </div>
  );
}
