'use client';
import {
  TestimonialCarousel,
  TestimonialData,
} from '@/components/core/testimonial';

const items: TestimonialData[] = [
  {
    render: () => (
      <div className='grid place-items-center gap-3'>
        <div className='rounded-full bg-indigo-600/10 px-3 py-1 text-xs font-semibold text-indigo-600'>
          Case Study
        </div>
        <blockquote className='max-w-xl text-center text-base leading-7 text-zinc-700 dark:text-zinc-300'>
          “This slide is fully custom. You can render forms, CTA buttons,
          anything.”
        </blockquote>
        <button className='mt-2 rounded-full border border-indigo-500 px-4 py-2 text-sm text-indigo-600 hover:bg-indigo-50 dark:hover:bg-zinc-800'>
          Read story
        </button>
      </div>
    ),
  },
  // … mix in normal items too
  {
    avatar: 'https://i.pravatar.cc/160?img=18',
    name: 'Jai Patel',
    role: 'Engineer',
    quote: 'API surface is tiny, but you can override everything.',
    accent: '#22c55e',
  },
];

export function TestimonialCustom() {
  return (
    <div className='mx-auto max-w-5xl p-6'>
      <TestimonialCarousel
        items={items}
        variant='minimal'
        showDots
        showArrows
        loop
      />
    </div>
  );
}
