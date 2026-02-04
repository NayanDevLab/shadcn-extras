import type { Meta, StoryObj } from '@storybook/react';
import { ShareIcon } from '../components/core/share-icon';

const meta = {
  title: 'Core/ShareIcon',
  component: ShareIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isAnimating: { control: 'boolean' },
    startOnHover: { control: 'boolean' },
    animationType: { control: 'radio', options: ['bounce', 'pulse', 'rotate'] },
    size: { control: { type: 'number', min: 16, max: 128, step: 4 } },
    color: { control: 'color' },
    dotColor: { control: 'color' },
    className: { control: 'text' },
  },
} satisfies Meta<typeof ShareIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isAnimating: false,
    startOnHover: true,
    size: 48,
    animationType: 'bounce',
  },
};

export const CustomColors: Story = {
  args: {
    isAnimating: true,
    animationType: 'rotate',
    size: 48,
    color: '#000000',
    dotColor: '#06b6d4',
  },
};

export const Pulse: Story = {
  args: {
    isAnimating: true,
    animationType: 'pulse',
    size: 48,
    color: '#ef4444',
  },
};
