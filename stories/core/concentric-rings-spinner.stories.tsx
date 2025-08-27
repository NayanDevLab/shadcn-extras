import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';
import {
  ConcentricRingsSpinner,
  type ConcentricRingsSpinnerProps,
} from '@/components/core/concentric-rings-spinner';

const meta: Meta<typeof ConcentricRingsSpinner> = {
  title: 'Core/Spinners/Concentric Rings Spinner',
  component: ConcentricRingsSpinner,
  tags: ['autodocs'], // enables Docs tab
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Multi-ring SVG spinner with alternating rotation, optional pulse, and center/edge fading. SRP-only (presentational).',
      },
    },
  },
  argTypes: {
    size: { control: { type: 'range', min: 100, max: 400, step: 10 } },
    rings: { control: { type: 'range', min: 1, max: 24, step: 1 } },
    dotsPerRing: { control: { type: 'range', min: 6, max: 80, step: 2 } },
    innerRadius: { control: { type: 'range', min: 0, max: 40, step: 1 } },
    ringGap: { control: { type: 'range', min: 4, max: 20, step: 1 } },
    // union type isn't control-friendly; keep visible in table but no control
    dotRadius: { table: { disable: true } },
    speed: { control: { type: 'range', min: 0.4, max: 6, step: 0.1 } },
    direction: { control: { type: 'inline-radio' }, options: [1, -1] },
    fadeCenter: { control: { type: 'range', min: 0, max: 1, step: 0.05 } },
    fadeEdge: { control: { type: 'range', min: 0, max: 1, step: 0.05 } },
    alternate: { control: 'boolean' },
    pulse: { control: 'boolean' },
    className: { control: 'text' },
    dotClassName: { control: 'text' },
    label: { control: 'text' },
  },
};
export default meta;

type Story = StoryObj<typeof ConcentricRingsSpinner>;

const Frame = (args: ConcentricRingsSpinnerProps) => (
  <div className='inline-flex items-center justify-center rounded-xl bg-black p-10'>
    <ConcentricRingsSpinner {...args} />
  </div>
);

export const Basic: Story = {
  render: Frame,
  args: {
    size: 200,
    rings: 12,
    dotsPerRing: 36,
    innerRadius: 10,
    ringGap: 8,
    dotRadius: { inner: 2, outer: 4 },
    speed: 2,
    direction: 1,
    fadeCenter: 0.15,
    fadeEdge: 0.35,
    alternate: true,
    pulse: true,
    className: 'text-white',
    dotClassName: 'opacity-90',
    label: 'Loading…',
  },
  play: async ({ canvasElement }) => {
    const c = within(canvasElement);
    await expect(
      c.getByRole('status', { name: /loading/i })
    ).toBeInTheDocument();
  },
};

export const FixedDotRadius: Story = {
  render: Frame,
  args: {
    size: 180,
    rings: 10,
    dotsPerRing: 32,
    dotRadius: 3, // fixed radius across rings
    alternate: true,
    className: 'text-white',
  },
};

export const ReverseDirection: Story = {
  render: Frame,
  args: {
    size: 200,
    rings: 12,
    dotsPerRing: 36,
    direction: -1, // ccw
    className: 'text-white',
  },
};

export const NoPulse: Story = {
  render: Frame,
  args: {
    size: 200,
    rings: 12,
    dotsPerRing: 36,
    pulse: false,
    className: 'text-white',
  },
};

export const DenseManyRings: Story = {
  render: Frame,
  args: {
    size: 240,
    rings: 16,
    dotsPerRing: 60,
    ringGap: 7,
    dotRadius: { inner: 1.6, outer: 3.2 },
    speed: 2.4,
    className: 'text-white',
  },
};

export const TealGlow: Story = {
  render: Frame,
  args: {
    size: 220,
    rings: 14,
    dotsPerRing: 40,
    dotRadius: { inner: 2, outer: 4 },
    speed: 1.8,
    alternate: true,
    pulse: true,
    className: 'text-teal-400',
    dotClassName: 'drop-shadow',
  },
};
