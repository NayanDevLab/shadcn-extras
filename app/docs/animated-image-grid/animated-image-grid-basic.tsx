'use client';

import React, { useState } from 'react';
import { AnimatedImageGrid } from '@/components/core/animated-image-grid';
import { Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Helper to generate a random image from pravatar
const getRandomImage = (id: string | number) => ({
  id,
  src: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 40) + 1}`,
});

const INITIAL_ITEMS = Array.from({ length: 18 }, (_, i) => getRandomImage(i));

export function AnimatedImageGridBasic() {
  const [items, setItems] = useState(INITIAL_ITEMS);

  const handleAdd = () => {
    const newItem = getRandomImage(Date.now());

    // Randomly insert at beginning or at a random position to show off the reflow animation
    const position = Math.floor(Math.random() * (items.length + 1));
    const newItems = [...items];
    newItems.splice(position, 0, newItem);

    setItems(newItems);
  };

  const handleRemove = () => {
    if (items.length === 0) return;

    // Randomly remove an item to show off the reflow animation
    const position = Math.floor(Math.random() * items.length);
    const newItems = [...items];
    newItems.splice(position, 1);

    setItems(newItems);
  };

  return (
    <div className='flex min-h-[500px] w-full flex-col items-center rounded-xl bg-[#d3d9b3] p-8'>
      <div className='mb-8 flex gap-4'>
        <Button
          onClick={handleAdd}
          className='h-12 w-12 rounded-xl bg-[#8A9B0F] text-2xl text-white shadow-md hover:bg-[#6c790b]'
        >
          <Plus className='h-6 w-6' />
        </Button>
        <Button
          onClick={handleRemove}
          className='h-12 w-12 rounded-xl bg-[#BD1550] text-2xl text-white shadow-md hover:bg-[#9a1040]'
        >
          <Minus className='h-6 w-6' />
        </Button>
      </div>

      <div className='w-full max-w-4xl rounded-xl border-2 border-red-500 bg-[#d3d9b3]'>
        <AnimatedImageGrid items={items} gap='10px' size='130px' />
      </div>
    </div>
  );
}
