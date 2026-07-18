import type { Meta, StoryObj } from '@storybook/react';
import { MobileStoreIcon } from '../components/core/mobile-store-icon';

const meta = {
  title: 'Core/Icons/MobileStoreIcon',
  component: MobileStoreIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isAnimating: { control: 'boolean' },
    startOnHover: { control: 'boolean' },
    animationType: {
      control: 'radio',
      options: ['vibrate', 'cart-bounce', 'app-launch'],
    },
    size: { control: { type: 'number', min: 16, max: 128, step: 4 } },
    color: { control: 'color' },
    cartColor: { control: 'color' },
    className: { control: 'text' },
  },
} satisfies Meta<typeof MobileStoreIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isAnimating: false,
    startOnHover: true,
    size: 48,
    animationType: 'cart-bounce',
  },
};

export const CustomColors: Story = {
  args: {
    isAnimating: true,
    animationType: 'cart-bounce',
    size: 48,
    color: '#000000',
    cartColor: '#06b6d4',
  },
};

export const Vibrate: Story = {
  args: {
    isAnimating: true,
    animationType: 'vibrate',
    size: 48,
    color: '#ef4444',
  },
};

export const AppLaunch: Story = {
  args: {
    isAnimating: true,
    animationType: 'app-launch',
    size: 48,
    color: '#3b82f6',
  },
};
