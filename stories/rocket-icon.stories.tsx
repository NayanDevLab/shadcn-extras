import type { Meta, StoryObj } from '@storybook/react';
import { RocketIcon } from '../components/core/rocket-icon';

const meta = {
  title: 'Core/Icons/RocketIcon',
  component: RocketIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isLaunching: { control: 'boolean' },
    size: { control: { type: 'number', min: 16, max: 128, step: 4 } },
    color: { control: 'color' },
    className: { control: 'text' },
  },
} satisfies Meta<typeof RocketIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isLaunching: false,
    size: 48,
  },
};

export const Launching: Story = {
  args: {
    isLaunching: true,
    size: 48,
  },
};

export const Large: Story = {
  args: {
    isLaunching: true,
    size: 96,
  },
};

export const CustomColor: Story = {
  args: {
    isLaunching: true,
    size: 48,
    color: '#f97316', // orange-500
    className: 'text-orange-500',
  },
};
