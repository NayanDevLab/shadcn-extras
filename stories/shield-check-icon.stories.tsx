import type { Meta, StoryObj } from '@storybook/react';
import { ShieldCheckIcon } from '../components/core/shield-check-icon';

const meta = {
  title: 'Core/Icons/ShieldCheckIcon',
  component: ShieldCheckIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isAnimating: { control: 'boolean' },
    startOnHover: { control: 'boolean' },
    animationType: { control: 'radio', options: ['bounce', 'pulse', 'draw'] },
    size: { control: { type: 'number', min: 16, max: 128, step: 4 } },
    color: { control: 'color' },
    checkColor: { control: 'color' },
    className: { control: 'text' },
  },
} satisfies Meta<typeof ShieldCheckIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isAnimating: false,
    startOnHover: true,
    size: 48,
    animationType: 'draw',
  },
};

export const CustomCheck: Story = {
  args: {
    isAnimating: true,
    animationType: 'draw',
    size: 48,
    color: '#000000',
    checkColor: '#06b6d4',
  },
};

export const Bounce: Story = {
  args: {
    isAnimating: true,
    animationType: 'bounce',
    size: 48,
    color: '#ef4444',
  },
};

export const Pulse: Story = {
  args: {
    isAnimating: true,
    animationType: 'pulse',
    size: 48,
    color: '#3b82f6',
  },
};
