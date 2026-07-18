import type { Meta, StoryObj } from '@storybook/react';
import { PaperPlaneIcon } from '../components/core/paper-plane-icon';

const meta = {
  title: 'Core/Icons/PaperPlaneIcon',
  component: PaperPlaneIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isAnimating: { control: 'boolean' },
    startOnHover: { control: 'boolean' },
    animationType: { control: 'radio', options: ['bounce', 'fly', 'wobble'] },
    size: { control: { type: 'number', min: 16, max: 128, step: 4 } },
    color: { control: 'color' },
    trailColor: { control: 'color' },
    className: { control: 'text' },
  },
} satisfies Meta<typeof PaperPlaneIcon>;

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
    animationType: 'fly',
    size: 48,
    color: '#000000',
    trailColor: '#06b6d4',
  },
};

export const Wobble: Story = {
  args: {
    isAnimating: true,
    animationType: 'wobble',
    size: 48,
    color: '#ef4444',
  },
};
