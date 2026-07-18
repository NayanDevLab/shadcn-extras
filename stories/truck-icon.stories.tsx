import type { Meta, StoryObj } from '@storybook/react';
import { TruckIcon } from '../components/core/truck-icon';

const meta = {
  title: 'Core/Icons/TruckIcon',
  component: TruckIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isAnimating: { control: 'boolean' },
    startOnHover: { control: 'boolean' },
    animationType: { control: 'radio', options: ['drive', 'bounce'] },
    size: { control: { type: 'number', min: 16, max: 128, step: 4 } },
    color: { control: 'color' },
    className: { control: 'text' },
  },
} satisfies Meta<typeof TruckIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isAnimating: false,
    startOnHover: true,
    size: 48,
    animationType: 'drive',
  },
};

export const Drive: Story = {
  args: {
    isAnimating: true,
    animationType: 'drive',
    size: 48,
  },
};

export const Bounce: Story = {
  args: {
    isAnimating: true,
    animationType: 'bounce',
    size: 48,
    color: '#eab308', // yellow-500
  },
};

export const Large: Story = {
  args: {
    isAnimating: true,
    animationType: 'drive',
    size: 96,
  },
};
