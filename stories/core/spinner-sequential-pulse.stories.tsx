import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';
import {
  SpinnerSequentialPulse,
  type SpinnerSequentialPulseProps,
} from '@/components/core/spinner-sequential-pulse';

const meta: Meta<typeof SpinnerSequentialPulse> = {
  title: 'Core/Spinners/Spinner – Sequential Pulse',
  component: SpinnerSequentialPulse,
  tags: ['autodocs'], // shows the Docs tab automatically
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Loading indicator with sequentially pulsing dots around a radial track. Built with Motion + Tailwind. SRP-only (presentational).',
      },
    },
  },
  argTypes: {
    size: { control: { type: 'range', min: 80, max: 320, step: 4 } },
    count: { control: { type: 'range', min: 4, max: 24, step: 1 } },
    dotSize: { control: { type: 'range', min: 4, max: 20, step: 1 } },
    color: { control: 'color' },
    showTrack: { control: 'boolean' },
    trackColor: { control: 'color' },
    trackWidth: { control: { type: 'range', min: 1, max: 6, step: 1 } },
    showSpokes: { control: 'boolean' },
    speed: { control: { type: 'range', min: 0.2, max: 3, step: 0.1 } },
    className: { control: 'text' },
  },
};
export default meta;

type Story = StoryObj<typeof SpinnerSequentialPulse>;

// wrapper to give a dark backdrop so white dots are visible
const Frame = (args: SpinnerSequentialPulseProps) => (
  <div className='inline-flex items-center justify-center rounded-xl bg-black p-10'>
    <SpinnerSequentialPulse {...args} />
  </div>
);

/* ---------- Stories ---------- */

export const Basic: Story = {
  render: Frame,
  args: {
    size: 120,
    count: 12,
    dotSize: 8,
    color: '#ffffff',
    showTrack: true,
    trackColor: 'rgba(255,255,255,0.1)',
    trackWidth: 2,
    showSpokes: true,
    speed: 1.2,
  },
  // simple a11y smoke test
  play: async ({ canvasElement }) => {
    const c = within(canvasElement);
    await expect(
      c.getByRole('status', { name: /loading/i })
    ).toBeInTheDocument();
  },
};

export const Dense: Story = {
  render: Frame,
  args: {
    size: 160,
    count: 20,
    dotSize: 7,
    color: '#ffffff',
    showTrack: true,
    showSpokes: true,
    speed: 1.0,
  },
};

export const NoSpokes: Story = {
  render: Frame,
  args: {
    size: 140,
    count: 16,
    dotSize: 8,
    color: '#ffffff',
    showTrack: true,
    showSpokes: false,
    speed: 1.2,
  },
};

export const ThickTrack: Story = {
  render: Frame,
  args: {
    size: 160,
    count: 14,
    dotSize: 9,
    color: '#ffffff',
    showTrack: true,
    trackColor: 'rgba(255,255,255,0.25)',
    trackWidth: 4,
    showSpokes: true,
    speed: 1.1,
  },
};

export const TealOnDark: Story = {
  render: Frame,
  args: {
    size: 160,
    count: 12,
    dotSize: 8,
    color: '#2dd4bf', // teal-400
    showTrack: true,
    trackColor: 'rgba(45,212,191,0.2)',
    trackWidth: 2,
    showSpokes: true,
    speed: 1.3,
  },
};

export const BigAndSlow: Story = {
  render: Frame,
  args: {
    size: 240,
    count: 24,
    dotSize: 10,
    color: '#ffffff',
    showTrack: true,
    trackColor: 'rgba(255,255,255,0.12)',
    trackWidth: 3,
    showSpokes: true,
    speed: 2.4,
  },
};
