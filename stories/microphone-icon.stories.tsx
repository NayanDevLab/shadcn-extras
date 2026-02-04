import type { Meta, StoryObj } from '@storybook/react';
import { MicrophoneIcon } from '../components/core/microphone-icon';

const meta = {
  title: 'Core/MicrophoneIcon',
  component: MicrophoneIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isAnimating: { control: 'boolean' },
    startOnHover: { control: 'boolean' },
    animationType: { control: 'radio', options: ['bounce', 'shake', 'pulse'] },
    size: { control: { type: 'number', min: 16, max: 128, step: 4 } },
    color: { control: 'color' },
    standColor: { control: 'color' },
    className: { control: 'text' },
  },
} satisfies Meta<typeof MicrophoneIcon>;

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
    animationType: 'shake',
    size: 48,
    color: '#000000',
    standColor: '#06b6d4',
  },
};

export const Pulse: Story = {
  args: {
    isAnimating: true,
    animationType: 'pulse',
    size: 48,
    color: '#ef4444',
  },
};
