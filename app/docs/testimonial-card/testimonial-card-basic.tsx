'use client';

import * as React from 'react';
import { TestimonialCard } from '@/components/core/testimonial-card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Devon Lane',
    role: 'Marketing Coordinator',
    content:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC',
    avatarSrc: 'https://i.pravatar.cc/150?img=11',
  },
  {
    name: 'Esther Howard',
    role: 'Project Manager',
    content:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC',
    avatarSrc: 'https://i.pravatar.cc/150?img=32',
  },
  {
    name: 'Eleanor Pena',
    role: 'Software Engineer',
    content:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC',
    avatarSrc: 'https://i.pravatar.cc/150?img=47',
  },
  {
    name: 'Robert Fox',
    role: 'UI Designer',
    content:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC',
    avatarSrc: 'https://i.pravatar.cc/150?img=12',
  },
  {
    name: 'Jacob Jones',
    role: 'CEO',
    content:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC',
    avatarSrc: 'https://i.pravatar.cc/150?img=14',
  },
];

export function TestimonialCardBasic() {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className='relative w-full overflow-hidden bg-slate-50 py-16 dark:bg-slate-950'>
      {/* Optional Dot Pattern Background */}
      <div
        className='absolute inset-0 z-0 opacity-10'
        style={{
          backgroundImage: 'radial-gradient(#94a3b8 2px, transparent 2px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className='relative z-10 mx-auto w-full max-w-6xl px-4'>
        {/* Header Section */}
        <div className='mb-12 flex items-center justify-between'>
          <h2 className='text-3xl font-bold text-slate-900 dark:text-slate-50'>
            Advanced Engine Services
          </h2>
          <div className='flex items-center gap-3'>
            <button
              onClick={() => scroll('left')}
              className='flex h-10 w-10 items-center justify-center rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:outline-none dark:hover:bg-slate-800'
            >
              <ChevronLeft className='h-5 w-5' />
            </button>
            <button
              onClick={() => scroll('right')}
              className='flex h-10 w-10 items-center justify-center rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:outline-none dark:hover:bg-slate-800'
            >
              <ChevronRight className='h-5 w-5' />
            </button>
          </div>
        </div>

        {/* Carousel Section */}
        <div
          ref={scrollRef}
          className='flex w-full snap-x snap-mandatory [scrollbar-width:none] gap-8 overflow-x-auto pb-8 [&::-webkit-scrollbar]:hidden'
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className='w-full shrink-0 snap-center md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)]'
            >
              <TestimonialCard
                className='mx-auto'
                name={t.name}
                role={t.role}
                content={t.content}
                avatarSrc={t.avatarSrc}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
