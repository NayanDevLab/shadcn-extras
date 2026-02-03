import type { Meta, StoryObj } from '@storybook/react';
import { CalendarIcon } from '../components/core/calendar-icon';

const meta = {
  title: 'Core/CalendarIcon',
  component: CalendarIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isAnimating: { control: 'boolean' },
    startOnHover: { control: 'boolean' },
    animationType: { control: 'radio', options: ['bounce', 'pulse', 'slide'] },
    size: { control: { type: 'number', min: 16, max: 128, step: 4 } },
    color: { control: 'color' },
    ringColor: { control: 'color' },
    className: { control: 'text' },
  },
} satisfies Meta<typeof CalendarIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isAnimating: false,
    startOnHover: true,
    size: 48,
    animationType: 'pulse',
  },
};

export const CustomRings: Story = {
  args: {
    isAnimating: true,
    animationType: 'pulse',
    size: 48,
    color: '#000000',
    ringColor: '#06b6d4',
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

export const Slide: Story = {
  args: {
    isAnimating: true,
    animationType: 'slide',
    size: 48,
  },
};
