import type { Meta, StoryObj } from '@storybook/react';
import { ToolsIcon } from '../components/core/tools-icon';

const meta = {
  title: 'Core/Icons/ToolsIcon',
  component: ToolsIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isAnimating: { control: 'boolean' },
    startOnHover: { control: 'boolean' },
    animationType: {
      control: 'radio',
      options: ['bounce', 'wiggle', 'repair'],
    },
    size: { control: { type: 'number', min: 16, max: 128, step: 4 } },
    color: { control: 'color' },
    screwdriverColor: { control: 'color' },
    className: { control: 'text' },
  },
} satisfies Meta<typeof ToolsIcon>;

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
    animationType: 'repair',
    size: 48,
    color: '#000000',
    screwdriverColor: '#06b6d4',
  },
};

export const Wiggle: Story = {
  args: {
    isAnimating: true,
    animationType: 'wiggle',
    size: 48,
    color: '#ef4444',
  },
};
