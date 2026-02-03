import type { Meta, StoryObj } from '@storybook/react';
import { BulbIcon } from '../components/core/bulb-icon';

const meta = {
  title: 'Core/BulbIcon',
  component: BulbIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isLit: { control: 'boolean' },
    startOnHover: { control: 'boolean' },
    animationType: { control: 'radio', options: ['pulse', 'flash'] },
    size: { control: { type: 'number', min: 16, max: 128, step: 4 } },
    color: { control: 'color' },
    className: { control: 'text' },
  },
} satisfies Meta<typeof BulbIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isLit: false,
    startOnHover: true,
    size: 48,
    animationType: 'pulse',
  },
};

export const Pulse: Story = {
  args: {
    isLit: true,
    animationType: 'pulse',
    size: 48,
  },
};

export const Flash: Story = {
  args: {
    isLit: true,
    animationType: 'flash',
    size: 48,
    color: '#ef4444', // red-500
  },
};

export const Large: Story = {
  args: {
    isLit: true,
    animationType: 'pulse',
    size: 96,
  },
};
