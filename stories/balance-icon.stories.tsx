import type { Meta, StoryObj } from '@storybook/react';
import { BalanceIcon } from '../components/core/balance-icon';

const meta = {
  title: 'Core/BalanceIcon',
  component: BalanceIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isAnimating: { control: 'boolean' },
    startOnHover: { control: 'boolean' },
    animationType: { control: 'radio', options: ['sway', 'weigh', 'pulse'] },
    size: { control: { type: 'number', min: 16, max: 128, step: 4 } },
    color: { control: 'color' },
    panColor: { control: 'color' },
    className: { control: 'text' },
  },
} satisfies Meta<typeof BalanceIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isAnimating: false,
    startOnHover: true,
    size: 48,
    animationType: 'sway',
  },
};

export const CustomPans: Story = {
  args: {
    isAnimating: true,
    animationType: 'sway',
    size: 48,
    color: '#000000',
    panColor: '#06b6d4',
  },
};

export const Weighing: Story = {
  args: {
    isAnimating: true,
    animationType: 'weigh',
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
