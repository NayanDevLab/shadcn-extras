import type { Meta, StoryObj } from '@storybook/react';
import Shimmer from '@/components/core/shimmer-skeleton';

const meta: Meta<typeof Shimmer> = {
  title: 'Core/Feedback/Shimmer',
  component: Shimmer,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Shimmer / skeleton loader for lists, avatars, cards and more.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['line', 'avatar', 'card', 'rect', 'list'],
    },
    count: { control: { type: 'range', min: 1, max: 8 } },
    rounded: {
      control: 'inline-radio',
      options: ['none', 'sm', 'md', 'lg', 'full'],
    },
    width: { control: 'text' },
    height: { control: 'text' },
    speed: { control: { type: 'range', min: 0.25, max: 3, step: 0.05 } },
    gap: { control: { type: 'range', min: 0, max: 32, step: 1 } },
    reduceMotion: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof Shimmer>;

export const Playground: Story = {
  render: (args) => (
    <div className='mx-auto max-w-3xl p-6'>
      <Shimmer {...(args as any)} />
    </div>
  ),
  args: {
    variant: 'line',
    count: 4,
    gap: 12,
    rounded: 'md',
    speed: 1,
  },
};

export const CardLayout: Story = {
  render: () => (
    <div className='grid gap-6 p-6 md:grid-cols-2'>
      <Shimmer variant='card' />
      <Shimmer variant='card' />
    </div>
  ),
};

export const AvatarList: Story = {
  render: () => (
    <div className='space-y-4 p-6'>
      <Shimmer variant='avatar' count={3} />
    </div>
  ),
};
