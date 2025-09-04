import TextCircleScroll from '@/components/core/text-circle-scroll';

export function TextCircleNodes() {
  const items = [
    <span key={1} className='font-semibold'>
      Design
    </span>,
    <span key={2} className='opacity-70'>
      Motion
    </span>,
    <span key={3} className='italic'>
      UI
    </span>,
    <span key={4} className='opacity-70'>
      DX
    </span>,
    <span key={5} className='font-semibold'>
      A11y
    </span>,
    <span key={6} className='opacity-70'>
      Next.js
    </span>,
    <span key={7} className='font-semibold'>
      Tailwind
    </span>,
    <span key={8} className='opacity-70'>
      Framer
    </span>,
  ];

  return (
    <div className='min-h-[380px] rounded-xl bg-sky-50/60 p-10 dark:bg-sky-950/20'>
      <TextCircleScroll
        items={items}
        radius={95}
        innerGap={70}
        startAngle={-90}
        rotateOnScroll
        autoSpinDegPerSec={10}
        scrollDegrees={180}
        className='mx-auto max-w-md'
        textClassName='text-[14px] uppercase tracking-[0.18em] text-sky-700 dark:text-sky-200'
      />
    </div>
  );
}
