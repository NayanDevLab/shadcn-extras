import type { Meta, StoryObj } from '@storybook/react';
import { GlobalIcon } from '../components/core/global-icon';

const meta = {
  title: 'Core/GlobalIcon',
  component: GlobalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isAnimating: { control: 'boolean' },
    startOnHover: { control: 'boolean' },
    animationType: { control: 'radio', options: ['spin', 'bounce', 'ping'] },
    size: { control: { type: 'number', min: 16, max: 128, step: 4 } },
    color: { control: 'color' },
    pinColor: { control: 'color' },
    className: { control: 'text' },
  },
} satisfies Meta<typeof GlobalIcon>;

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

export const CustomPins: Story = {
  args: {
    isAnimating: true,
    animationType: 'bounce',
    size: 48,
    color: '#000000',
    pinColor: '#06b6d4',
  },
};

export const Spin: Story = {
  args: {
    isAnimating: true,
    animationType: 'spin',
    size: 48,
    color: '#3b82f6',
  },
};

export const Ping: Story = {
  args: {
    isAnimating: true,
    animationType: 'ping',
    size: 48,
    color: '#ef4444',
  },
};
