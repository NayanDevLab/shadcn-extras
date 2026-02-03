import type { Meta, StoryObj } from '@storybook/react';
import { BuildingIcon } from '../components/core/building-icon';

const meta = {
  title: 'Core/BuildingIcon',
  component: BuildingIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isAnimating: { control: 'boolean' },
    startOnHover: { control: 'boolean' },
    animationType: { control: 'radio', options: ['grow', 'lights', 'bounce'] },
    size: { control: { type: 'number', min: 16, max: 128, step: 4 } },
    color: { control: 'color' },
    lightColor: { control: 'color' },
    className: { control: 'text' },
  },
} satisfies Meta<typeof BuildingIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isAnimating: false,
    startOnHover: true,
    size: 48,
    animationType: 'lights',
  },
};

export const CustomLights: Story = {
  args: {
    isAnimating: true,
    animationType: 'lights',
    size: 48,
    color: '#000000',
    lightColor: '#06b6d4',
  },
};

export const Grow: Story = {
  args: {
    isAnimating: true,
    animationType: 'grow',
    size: 48,
    color: '#ef4444',
  },
};

export const Bounce: Story = {
  args: {
    isAnimating: true,
    animationType: 'bounce',
    size: 48,
    color: '#3b82f6',
  },
};
