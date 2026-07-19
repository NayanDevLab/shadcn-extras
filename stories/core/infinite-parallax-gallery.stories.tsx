import type { Meta, StoryObj } from '@storybook/react';
import { InfiniteParallaxGallery } from '@/components/core/infinite-parallax-gallery';

const IMAGES = [
  'https://images.unsplash.com/photo-1448375240586-882707db888b',
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b',
  'https://images.unsplash.com/photo-1536431311719-398b6704d4cc',
  'https://images.unsplash.com/photo-1472396961693-142e6e269027',
  'https://images.unsplash.com/photo-1502082553048-f009c37129b9',
  'https://images.unsplash.com/photo-1530268578403-df6e89da0d30',
  'https://images.unsplash.com/photo-1542385151-efd9000785a0',
  'https://images.unsplash.com/photo-1555543431-7b98fbc18593',
  'https://images.unsplash.com/photo-1473448912268-2022ce9509d8',
];

const meta: Meta<typeof InfiniteParallaxGallery> = {
  title: 'Core/Core/Infinite Parallax Gallery',
  component: InfiniteParallaxGallery,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  decorators: [
    (Story) => (
      <div style={{ height: '600px', width: '100%' }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof InfiniteParallaxGallery>;

export const Default: Story = {
  args: {
    images: IMAGES,
    overlayText: 'Drag or scroll to explore',
  },
};

export const Dense: Story = {
  args: {
    images: IMAGES,
    depthLayers: 8,
    imagesPerLayer: 15,
    overlayText: 'Dense Layout (8 Layers)',
  },
};

export const Sparse: Story = {
  args: {
    images: IMAGES,
    depthLayers: 3,
    imagesPerLayer: 5,
    overlayText: 'Sparse Layout (3 Layers)',
  },
};

export const SmallImages: Story = {
  args: {
    images: IMAGES,
    maxImageWidth: 80,
    maxImageHeight: 80,
    overlayText: 'Small Image Sprites',
  },
};

export const LargeImages: Story = {
  args: {
    images: IMAGES,
    maxImageWidth: 280,
    maxImageHeight: 280,
    overlayText: 'Large Image Sprites',
  },
};
