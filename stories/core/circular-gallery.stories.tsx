import type { Meta, StoryObj } from '@storybook/react';
import { CircularGallery } from '@/components/core/circular-gallery';

const meta: Meta<typeof CircularGallery> = {
  title: 'Core/Core/Circular Gallery',
  component: CircularGallery,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};
export default meta;

type Story = StoryObj<typeof CircularGallery>;

const ITEMS = [
  { id: '1', imageSrc: 'https://images.unsplash.com/photo-1448375240586-882707db888b', title: 'Forest' },
  { id: '2', imageSrc: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b', title: 'Mountains' },
];

export const Basic: Story = {
  args: {
    items: ITEMS,
  },
};
