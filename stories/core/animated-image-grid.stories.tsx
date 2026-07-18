import type { Meta, StoryObj } from '@storybook/react';
import { AnimatedImageGrid } from '@/components/core/animated-image-grid';

const meta: Meta<typeof AnimatedImageGrid> = {
  title: 'Core/Core/Animated Image Grid',
  component: AnimatedImageGrid,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};
export default meta;

type Story = StoryObj<typeof AnimatedImageGrid>;

const ITEMS = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  src: `https://i.pravatar.cc/150?img=${i + 1}`,
}));

export const Basic: Story = {
  args: {
    items: ITEMS,
  },
};
