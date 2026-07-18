import type { Meta, StoryObj } from '@storybook/react';
import { HeartIcon } from '../components/core/heart-icon';

const meta = {
  title: 'Core/Icons/HeartIcon',
  component: HeartIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isAnimating: { control: 'boolean' },
    startOnHover: { control: 'boolean' },
    animationType: { control: 'radio', options: ['bounce', 'beat', 'pulse'] },
    size: { control: { type: 'number', min: 16, max: 128, step: 4 } },
    color: { control: 'color' },
    shineColor: { control: 'color' },
    className: { control: 'text' },
  },
} satisfies Meta<typeof HeartIcon>;

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

export const Beat: Story = {
  args: {
    isAnimating: true,
    animationType: 'beat',
    size: 48,
    color: '#000000',
    shineColor: '#06b6d4',
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
