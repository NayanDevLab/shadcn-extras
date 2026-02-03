import type { Meta, StoryObj } from '@storybook/react';
import { ClockIcon } from '../components/core/clock-icon';

const meta = {
  title: 'Core/ClockIcon',
  component: ClockIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isAnimating: { control: 'boolean' },
    startOnHover: { control: 'boolean' },
    animationType: { control: 'radio', options: ['swing', 'shake'] },
    size: { control: { type: 'number', min: 16, max: 128, step: 4 } },
    color: { control: 'color' },
    className: { control: 'text' },
  },
} satisfies Meta<typeof ClockIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isAnimating: false,
    startOnHover: true,
    size: 48,
    animationType: 'swing',
  },
};

export const Swing: Story = {
  args: {
    isAnimating: true,
    animationType: 'swing',
    size: 48,
  },
};

export const Shake: Story = {
  args: {
    isAnimating: true,
    animationType: 'shake',
    size: 48,
    color: '#ef4444', // red-500
  },
};

export const Large: Story = {
  args: {
    isAnimating: true,
    animationType: 'swing',
    size: 96,
  },
};
