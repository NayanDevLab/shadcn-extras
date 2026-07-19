import type { Meta, StoryObj } from '@storybook/react';
import { EnlargeGallery } from '@/components/core/enlarge-gallery';

const meta: Meta<typeof EnlargeGallery> = {
  title: 'Core/Core/Enlarge Gallery',
  component: EnlargeGallery,
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

type Story = StoryObj<typeof EnlargeGallery>;

const ITEMS = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1448375240586-882707db888b',
    alt: 'Forest path',
    title: 'Forest',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b',
    alt: 'Mountains',
    title: 'Mountains',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1536431311719-398b6704d4cc',
    alt: 'Coast',
    title: 'Coast',
  },
];

const ITEMS_WITH_DESCRIPTION = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1448375240586-882707db888b',
    alt: 'Forest path',
    title: 'The Great Forest',
    description: 'A beautiful misty path winding through ancient woods.',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b',
    alt: 'Mountains',
    title: 'Mountain Peak',
    description: 'Snowy mountains standing tall above the clouds.',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1536431311719-398b6704d4cc',
    alt: 'Coast',
    title: 'Rocky Coast',
    description: 'Waves crashing against a stunning jagged coastline.',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9',
    alt: 'Desert',
    title: 'Desert Dunes',
    description: 'Vast, endless sand dunes under a clear blue sky.',
  },
];

export const Basic: Story = {
  args: {
    items: ITEMS,
  },
};

export const WithDescriptions: Story = {
  args: {
    items: ITEMS_WITH_DESCRIPTION,
  },
};

export const ManyItems: Story = {
  args: {
    items: Array.from({ length: 8 }).map((_, i) => ({
      ...ITEMS_WITH_DESCRIPTION[i % 4],
      id: i,
    })),
  },
};
