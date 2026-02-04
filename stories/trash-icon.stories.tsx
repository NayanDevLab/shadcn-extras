import type { Meta, StoryObj } from '@storybook/react';
import { TrashIcon } from '../components/core/trash-icon';

const meta = {
  title: 'Core/TrashIcon',
  component: TrashIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isAnimating: { control: 'boolean' },
    startOnHover: { control: 'boolean' },
    animationType: { control: 'radio', options: ['bounce', 'trash', 'shake'] },
    size: { control: { type: 'number', min: 16, max: 128, step: 4 } },
    color: { control: 'color' },
    lidColor: { control: 'color' },
    className: { control: 'text' },
  },
} satisfies Meta<typeof TrashIcon>;

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
    animationType: 'trash',
    size: 48,
    color: '#000000',
    lidColor: '#06b6d4',
  },
};

export const Shake: Story = {
  args: {
    isAnimating: true,
    animationType: 'shake',
    size: 48,
    color: '#ef4444',
  },
};
