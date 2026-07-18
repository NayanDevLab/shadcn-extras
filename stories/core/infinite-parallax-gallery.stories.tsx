import type { Meta, StoryObj } from '@storybook/react';
import { InfiniteParallaxGalleryBasic } from '@/app/docs/infinite-parallax-gallery/infinite-parallax-gallery-basic';

const meta: Meta<typeof InfiniteParallaxGalleryBasic> = {
  title: 'Core/Core/Infinite Parallax Gallery',
  component: InfiniteParallaxGalleryBasic,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};
export default meta;

type Story = StoryObj<typeof InfiniteParallaxGalleryBasic>;

export const Basic: Story = {
  render: () => <InfiniteParallaxGalleryBasic />,
};
