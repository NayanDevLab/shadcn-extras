'use client';
import { TestimonialCarousel } from '@/components/core/testimonial';

const items = [
  {
    avatar: 'https://i.pravatar.cc/160?img=12',
    name: 'Branson Cook',
    role: 'Actor',
    accent: '#3b82f6',
    quote:
      'Radio telescope something incredible is waiting to be known billions upon billions...',
  },
  {
    avatar: 'https://i.pravatar.cc/160?img=24',
    name: 'Ivy Ramirez',
    role: 'Founder',
    accent: '#10b981',
    quote:
      'We switched to Shadcn-Extras and shipped our new docs in days. Motion primitives are on point.',
  },
  {
    avatar: 'https://i.pravatar.cc/160?img=33',
    name: 'Takumi Aoki',
    role: 'Designer',
    accent: '#ef4444',
    quote:
      'Composable slots + Motion let me keep the exact art direction without fighting the API.',
  },
];

export function TestimonialBasic() {
  return (
    <div className='mx-auto max-w-5xl p-6'>
      <h2 className='mb-6 text-center text-3xl font-bold'>Our Reviews</h2>
      <TestimonialCarousel
        items={items}
        autoplay
        autoplayMs={6000}
        className='bg-white dark:bg-zinc-900'
      />
    </div>
  );
}
