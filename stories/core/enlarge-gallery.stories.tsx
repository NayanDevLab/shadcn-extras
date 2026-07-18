import type { Meta, StoryObj } from '@storybook/react';
import { EnlargeGallery } from '@/components/core/enlarge-gallery';

const meta: Meta<typeof EnlargeGallery> = {
  title: 'Core/Core/Enlarge Gallery',
  component: EnlargeGallery,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};
export default meta;

type Story = StoryObj<typeof EnlargeGallery>;

const ITEMS = [
  { id: 1, src: 'https://images.unsplash.com/photo-1448375240586-882707db888b', alt: 'Forest path', title: 'Forest' },
  { id: 2, src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b', alt: 'Mountains', title: 'Mountains' },
];

export const Basic: Story = {
  args: {
    items: ITEMS,
  },
};
