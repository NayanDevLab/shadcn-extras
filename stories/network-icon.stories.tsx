import type { Meta, StoryObj } from '@storybook/react';
import { NetworkIcon } from '../components/core/network-icon';

const meta = {
  title: 'Core/Icons/NetworkIcon',
  component: NetworkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isAnimating: { control: 'boolean' },
    startOnHover: { control: 'boolean' },
    animationType: { control: 'radio', options: ['pulse', 'expand'] },
    size: { control: { type: 'number', min: 16, max: 128, step: 4 } },
    color: { control: 'color' },
    className: { control: 'text' },
  },
} satisfies Meta<typeof NetworkIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isAnimating: false,
    startOnHover: true,
    size: 48,
    animationType: 'expand',
  },
};

export const Expand: Story = {
  args: {
    isAnimating: true,
    animationType: 'expand',
    size: 48,
  },
};

export const Pulse: Story = {
  args: {
    isAnimating: true,
    animationType: 'pulse',
    size: 48,
    color: '#3b82f6', // blue-500
  },
};

export const Large: Story = {
  args: {
    isAnimating: true,
    animationType: 'expand',
    size: 96,
  },
};
