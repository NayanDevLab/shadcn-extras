import type { Meta, StoryObj } from '@storybook/react';
import { CartIcon } from '../components/core/cart-icon';

const meta = {
  title: 'Core/CartIcon',
  component: CartIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isAnimating: { control: 'boolean' },
    startOnHover: { control: 'boolean' },
    animationType: {
      control: 'radio',
      options: ['bounce', 'roll', 'checkout'],
    },
    size: { control: { type: 'number', min: 16, max: 128, step: 4 } },
    color: { control: 'color' },
    wheelColor: { control: 'color' },
    className: { control: 'text' },
  },
} satisfies Meta<typeof CartIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isAnimating: false,
    startOnHover: true,
    size: 48,
    animationType: 'roll',
  },
};

export const CustomWheels: Story = {
  args: {
    isAnimating: true,
    animationType: 'roll',
    size: 48,
    color: '#000000',
    wheelColor: '#06b6d4',
  },
};

export const Bounce: Story = {
  args: {
    isAnimating: true,
    animationType: 'bounce',
    size: 48,
    color: '#ef4444',
    wheelColor: '#ef4444',
  },
};

export const Checkout: Story = {
  args: {
    isAnimating: true,
    animationType: 'checkout',
    size: 48,
    color: '#22c55e',
    wheelColor: '#000000',
  },
};
