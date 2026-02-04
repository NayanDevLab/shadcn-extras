import type { Meta, StoryObj } from '@storybook/react';
import { GlobalSearchIcon } from '../components/core/global-search-icon';

const meta = {
  title: 'Core/GlobalSearchIcon',
  component: GlobalSearchIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isAnimating: { control: 'boolean' },
    startOnHover: { control: 'boolean' },
    animationType: { control: 'radio', options: ['rotate', 'search', 'shake'] },
    size: { control: { type: 'number', min: 16, max: 128, step: 4 } },
    color: { control: 'color' },
    globeColor: { control: 'color' },
    className: { control: 'text' },
  },
} satisfies Meta<typeof GlobalSearchIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isAnimating: false,
    startOnHover: true,
    size: 48,
    animationType: 'rotate',
  },
};

export const CustomColors: Story = {
  args: {
    isAnimating: true,
    animationType: 'search',
    size: 48,
    color: '#000000',
    globeColor: '#06b6d4',
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
