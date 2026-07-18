import type { Meta, StoryObj } from '@storybook/react';
import { DayRange } from '@/components/core/day-range';

const meta = {
  title: 'Core/DayRange',
  component: DayRange,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DayRange>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    low: 1527.3,
    high: 1585,
    current: 1572.9,
  },
};

export const NearLow: Story = {
  args: {
    low: 100,
    high: 200,
    current: 110,
  },
};

export const NearHigh: Story = {
  args: {
    low: 100,
    high: 200,
    current: 195,
  },
};

export const CustomLabels: Story = {
  args: {
    low: 50,
    high: 150,
    current: 75,
    lowLabel: '52-Week Low',
    highLabel: '52-Week High',
    currencySymbol: '$',
  },
};
