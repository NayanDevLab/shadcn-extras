import type { Meta, StoryObj } from '@storybook/react';
import { TrophyIcon } from '../components/core/trophy-icon';

const meta = {
  title: 'Core/Icons/TrophyIcon',
  component: TrophyIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isAnimating: { control: 'boolean' },
    startOnHover: { control: 'boolean' },
    animationType: { control: 'radio', options: ['bounce', 'wobble', 'shine'] },
    size: { control: { type: 'number', min: 16, max: 128, step: 4 } },
    color: { control: 'color' },
    starColor: { control: 'color' },
    className: { control: 'text' },
  },
} satisfies Meta<typeof TrophyIcon>;

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
    animationType: 'shine',
    size: 48,
    color: '#000000',
    starColor: '#fbbf24',
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
