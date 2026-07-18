import type { Meta, StoryObj } from '@storybook/react';
import { HomeIcon } from '../components/core/home-icon';

const meta = {
  title: 'Core/Icons/HomeIcon',
  component: HomeIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isAnimating: { control: 'boolean' },
    startOnHover: { control: 'boolean' },
    animationType: {
      control: 'radio',
      options: ['bounce', 'door-open', 'shake'],
    },
    size: { control: { type: 'number', min: 16, max: 128, step: 4 } },
    color: { control: 'color' },
    doorColor: { control: 'color' },
    className: { control: 'text' },
  },
} satisfies Meta<typeof HomeIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isAnimating: false,
    startOnHover: true,
    size: 48,
    animationType: 'door-open',
  },
};

export const OpenDoor: Story = {
  args: {
    isAnimating: true,
    animationType: 'door-open',
    size: 48,
    color: '#000000',
    doorColor: '#06b6d4',
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

export const Shake: Story = {
  args: {
    isAnimating: true,
    animationType: 'shake',
    size: 48,
  },
};
