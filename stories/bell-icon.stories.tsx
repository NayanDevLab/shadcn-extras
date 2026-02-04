import type { Meta, StoryObj } from '@storybook/react';
import { BellIcon } from '../components/core/bell-icon';

const meta = {
  title: 'Core/BellIcon',
  component: BellIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isAnimating: { control: 'boolean' },
    startOnHover: { control: 'boolean' },
    animationType: { control: 'radio', options: ['bounce', 'ring', 'shake'] },
    size: { control: { type: 'number', min: 16, max: 128, step: 4 } },
    color: { control: 'color' },
    clapperColor: { control: 'color' },
    className: { control: 'text' },
  },
} satisfies Meta<typeof BellIcon>;

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
    animationType: 'ring',
    size: 48,
    color: '#000000',
    clapperColor: '#06b6d4',
  },
};

export const Shake: Story = {
  args: {
    isAnimating: true,
    animationType: 'shake',
    size: 48,
    color: '#ef4444',
  },
};
