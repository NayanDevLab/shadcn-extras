import type { Meta, StoryObj } from '@storybook/react';
import { MoneyIcon } from '../components/core/money-icon';

const meta = {
  title: 'Core/MoneyIcon',
  component: MoneyIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isAnimating: { control: 'boolean' },
    startOnHover: { control: 'boolean' },
    animationType: { control: 'radio', options: ['bounce', 'flip'] },
    size: { control: { type: 'number', min: 16, max: 128, step: 4 } },
    color: { control: 'color' },
    className: { control: 'text' },
  },
} satisfies Meta<typeof MoneyIcon>;

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

export const Bounce: Story = {
  args: {
    isAnimating: true,
    animationType: 'bounce',
    size: 48,
  },
};

export const Flip: Story = {
  args: {
    isAnimating: true,
    animationType: 'flip',
    size: 48,
    color: '#059669', // emerald-600
  },
};

export const Large: Story = {
  args: {
    isAnimating: true,
    animationType: 'bounce',
    size: 96,
  },
};
