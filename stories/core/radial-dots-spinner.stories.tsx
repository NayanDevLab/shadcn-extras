import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';
import {
  RadialDotsSpinner,
  type RadialDotsSpinnerProps,
} from '@/components/core/radial-dots-spinner';

const meta: Meta<typeof RadialDotsSpinner> = {
  title: 'Core/Spinners/Radial Dots Spinner',
  component: RadialDotsSpinner,
  tags: ['autodocs'], // shows the Docs tab automatically
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'SVG spinner with radial spokes + center dotted rings. Fully controllable via props; presentational only (SRP).',
      },
    },
  },
  argTypes: {
    size: { control: { type: 'range', min: 80, max: 320, step: 4 } },
    spokes: { control: { type: 'range', min: 4, max: 32, step: 1 } },
    dotsPerSpoke: { control: { type: 'range', min: 1, max: 24, step: 1 } },
    innerRadius: { control: { type: 'range', min: 0, max: 40, step: 1 } },
    outerRadius: { control: { type: 'number' } },
    // union is awkward for controls — hide it; show in docs table automatically
    dotRadius: { table: { disable: true } },
    centerRings: { control: { type: 'range', min: 0, max: 4, step: 1 } },
    centerRingRadius: { control: { type: 'range', min: 4, max: 40, step: 1 } },
    centerRingGap: { control: { type: 'range', min: 2, max: 20, step: 1 } },
    centerRingDots: { control: { type: 'range', min: 6, max: 48, step: 2 } },
    speed: { control: { type: 'range', min: 0, max: 4, step: 0.1 } },
    className: { control: 'text' },
    dotClassName: { control: 'text' },
    label: { control: 'text' },
  },
};
export default meta;

type Story = StoryObj<typeof RadialDotsSpinner>;

// small frame with dark bg so white spinner pops
const Frame = (args: RadialDotsSpinnerProps) => (
  <div className='inline-flex items-center justify-center rounded-xl bg-black p-10'>
    <RadialDotsSpinner {...args} />
  </div>
);

export const Basic: Story = {
  render: Frame,
  args: {
    size: 160,
    spokes: 12,
    dotsPerSpoke: 10,
    innerRadius: 14,
    dotRadius: { inner: 2, outer: 3.5 },
    centerRings: 2,
    centerRingRadius: 10,
    centerRingGap: 6,
    centerRingDots: 16,
    speed: 1.6,
    className: 'text-white',
    dotClassName: 'opacity-90',
    label: 'Loading…',
  },
  // tiny a11y smoke test
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
    size: 200,
    spokes: 20,
    dotsPerSpoke: 14,
    innerRadius: 12,
    dotRadius: { inner: 1.8, outer: 3 },
    centerRings: 3,
    centerRingRadius: 8,
    centerRingGap: 5,
    centerRingDots: 24,
    speed: 1.2,
    className: 'text-white',
  },
};

export const NoSpin: Story = {
  render: Frame,
  args: {
    size: 160,
    spokes: 12,
    dotsPerSpoke: 10,
    innerRadius: 14,
    dotRadius: 3,
    centerRings: 1,
    speed: 0, // disable rotation
    className: 'text-white',
  },
};

export const TealGlow: Story = {
  render: Frame,
  args: {
    size: 180,
    spokes: 16,
    dotsPerSpoke: 12,
    innerRadius: 10,
    dotRadius: { inner: 2, outer: 4 },
    centerRings: 2,
    centerRingRadius: 10,
    centerRingGap: 6,
    centerRingDots: 18,
    speed: 1.4,
    className: 'text-teal-400',
    dotClassName: 'drop-shadow',
  },
};

export const BigSlow: Story = {
  render: Frame,
  args: {
    size: 280,
    spokes: 24,
    dotsPerSpoke: 16,
    innerRadius: 16,
    dotRadius: { inner: 2, outer: 4 },
    centerRings: 3,
    centerRingRadius: 12,
    centerRingGap: 6,
    centerRingDots: 30,
    speed: 2.5,
    className: 'text-white',
  },
};
