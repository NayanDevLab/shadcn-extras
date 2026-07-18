import type { Meta, StoryObj } from '@storybook/react';
import { UserIcon } from '../components/core/user-icon';

const meta = {
  title: 'Core/Icons/UserIcon',
  component: UserIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isAnimating: { control: 'boolean' },
    startOnHover: { control: 'boolean' },
    animationType: { control: 'radio', options: ['bounce', 'hi', 'pulse'] },
    size: { control: { type: 'number', min: 16, max: 128, step: 4 } },
    color: { control: 'color' },
    userColor: { control: 'color' },
    className: { control: 'text' },
  },
} satisfies Meta<typeof UserIcon>;

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
    animationType: 'hi',
    size: 48,
    color: '#000000',
    userColor: '#06b6d4',
  },
};

export const Pulse: Story = {
  args: {
    isAnimating: true,
    animationType: 'pulse',
    size: 48,
    color: '#3b82f6',
  },
};
