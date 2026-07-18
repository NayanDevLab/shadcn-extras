import type { Meta, StoryObj } from '@storybook/react';
import { LikeIcon } from '../components/core/like-icon';

const meta = {
  title: 'Core/Icons/LikeIcon',
  component: LikeIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isAnimating: { control: 'boolean' },
    startOnHover: { control: 'boolean' },
    animationType: { control: 'radio', options: ['bounce', 'like', 'wiggle'] },
    size: { control: { type: 'number', min: 16, max: 128, step: 4 } },
    color: { control: 'color' },
    cuffColor: { control: 'color' },
    className: { control: 'text' },
  },
} satisfies Meta<typeof LikeIcon>;

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
    animationType: 'like',
    size: 48,
    color: '#000000',
    cuffColor: '#06b6d4',
  },
};

export const Wiggle: Story = {
  args: {
    isAnimating: true,
    animationType: 'wiggle',
    size: 48,
    color: '#ef4444',
  },
};
