import type { Meta, StoryObj } from '@storybook/react';
import { PhoneIcon } from '../components/core/phone-icon';

const meta = {
  title: 'Core/Icons/PhoneIcon',
  component: PhoneIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isRinging: { control: 'boolean' },
    size: { control: { type: 'number', min: 16, max: 128, step: 4 } },
    color: { control: 'color' },
    className: { control: 'text' },
  },
} satisfies Meta<typeof PhoneIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isRinging: false,
    size: 48,
  },
};

export const Ringing: Story = {
  args: {
    isRinging: true,
    size: 48,
  },
};

export const Large: Story = {
  args: {
    isRinging: true,
    size: 96,
  },
};

export const CustomColor: Story = {
  args: {
    isRinging: true,
    size: 48,
    color: '#a855f7', // purple-500
    className: 'text-purple-500',
  },
};
