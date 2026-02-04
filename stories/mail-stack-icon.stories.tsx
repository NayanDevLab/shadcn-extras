import type { Meta, StoryObj } from '@storybook/react';
import { MailStackIcon } from '../components/core/mail-stack-icon';

const meta = {
  title: 'Core/MailStackIcon',
  component: MailStackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isAnimating: { control: 'boolean' },
    startOnHover: { control: 'boolean' },
    animationType: { control: 'radio', options: ['bounce', 'slide', 'rotate'] },
    size: { control: { type: 'number', min: 16, max: 128, step: 4 } },
    color: { control: 'color' },
    stackColor: { control: 'color' },
    className: { control: 'text' },
  },
} satisfies Meta<typeof MailStackIcon>;

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
    animationType: 'slide',
    size: 48,
    color: '#000000',
    stackColor: '#06b6d4',
  },
};

export const Rotate: Story = {
  args: {
    isAnimating: true,
    animationType: 'rotate',
    size: 48,
    color: '#ef4444',
  },
};
