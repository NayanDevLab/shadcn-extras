import type { Meta, StoryObj } from '@storybook/react';
import { RefreshIcon } from '../components/core/refresh-icon';

const meta = {
  title: 'Core/Icons/RefreshIcon',
  component: RefreshIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isRefreshing: { control: 'boolean' },
    startOnHover: { control: 'boolean' },
    animationType: { control: 'radio', options: ['spin', 'pulse'] },
    size: { control: { type: 'number', min: 16, max: 128, step: 4 } },
    color: { control: 'color' },
    className: { control: 'text' },
  },
} satisfies Meta<typeof RefreshIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isRefreshing: false,
    startOnHover: true,
    size: 48,
    animationType: 'spin',
  },
};

export const Spin: Story = {
  args: {
    isRefreshing: true,
    animationType: 'spin',
    size: 48,
  },
};

export const Pulse: Story = {
  args: {
    isRefreshing: true,
    animationType: 'pulse',
    size: 48,
    color: '#3b82f6', // blue-500
  },
};

export const Large: Story = {
  args: {
    isRefreshing: true,
    animationType: 'spin',
    size: 96,
  },
};
