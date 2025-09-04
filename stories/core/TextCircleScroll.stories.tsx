import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import TextCircleScroll from '@/components/core/text-circle-scroll';
import type { TextCircleScrollProps } from '@/components/core/text-circle-scroll';

const WORDS = [
  'Bungalow',
  'Aurora',
  'Lullaby',
  'Labyrinth',
  'Idyllic',
  'Felicity',
  'Demure',
  'Chatoyant',
  'TheseDays',
  'Demure',
  'Aurora',
  'Bungalow',
];

const meta: Meta<typeof TextCircleScroll> = {
  title: 'Core/Animation/Text Circle Scroll',
  component: TextCircleScroll,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Arrange any text/nodes around a circle and rotate with page scroll and/or auto-spin. Fully presentational (SRP) and customizable.',
      },
    },
  },
  argTypes: {
    items: { control: 'object' },
    radius: { control: { type: 'range', min: 60, max: 200, step: 2 } },
    innerGap: { control: { type: 'range', min: 40, max: 160, step: 2 } },
    startAngle: { control: { type: 'range', min: -180, max: 180, step: 1 } },
    clockwise: { control: 'boolean' },
    rotateOnScroll: { control: 'boolean' },
    scrollDegrees: { control: { type: 'range', min: -720, max: 720, step: 10 } },
    autoSpinDegPerSec: { control: { type: 'range', min: -60, max: 60, step: 1 } },
    springStiffness: { control: { type: 'range', min: 0, max: 300, step: 10 } },
    height: { control: 'text' },
    className: { control: 'text' },
    ringClassName: { control: 'text' },
    itemClassName: { control: 'text' },
    textClassName: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof TextCircleScroll>;

/* --------------------------------------------------------------- */
/* Playground with controls                                        */
/* --------------------------------------------------------------- */

export const Playground: Story = {
  render: (args) => (
    <div className="relative min-h-[480px] rounded-xl bg-zinc-100 p-8 dark:bg-zinc-900">
      <TextCircleScroll {...args} />
    </div>
  ),
  args: {
    items: WORDS,
    radius: 110,
    innerGap: 90,
    startAngle: -90,
    clockwise: true,
    rotateOnScroll: true,
    scrollDegrees: 300,
    autoSpinDegPerSec: 0,
    springStiffness: 120,
    height: 340,
    textClassName: 'text-[18px] font-serif text-zinc-800 dark:text-zinc-100',
  } satisfies TextCircleScrollProps,
};

/* --------------------------------------------------------------- */
/* Like screenshot: scroll-driven serif words                      */
/* --------------------------------------------------------------- */

export const ScrollDriven: Story = {
  render: () => (
    <div className="relative min-h-[420px] rounded-xl bg-zinc-100 p-8 dark:bg-zinc-900">
      <TextCircleScroll
        items={WORDS}
        radius={110}
        innerGap={90}
        startAngle={-90}
        rotateOnScroll
        scrollDegrees={300}
        textClassName="text-[18px] font-serif text-zinc-800 dark:text-zinc-100"
      />
    </div>
  ),
};

/* --------------------------------------------------------------- */
/* Auto-spin only (counter-clockwise)                              */
/* --------------------------------------------------------------- */

export const AutoSpin: Story = {
  render: () => (
    <div className="relative min-h-[380px] rounded-xl bg-amber-50 p-8 dark:bg-amber-950/20">
      <TextCircleScroll
        items={Array.from({ length: 16 }, (_, i) =>
          (['Aurora', 'Lullaby', 'Labyrinth', 'Idyllic', 'Felicity'] as const)[i % 5]
        )}
        radius={120}
        innerGap={80}
        startAngle={-60}
        clockwise={false}
        rotateOnScroll={false}
        autoSpinDegPerSec={18}
        textClassName="text-[17px] tracking-wide text-zinc-700 dark:text-zinc-100"
      />
    </div>
  ),
};

/* --------------------------------------------------------------- */
/* Custom React nodes around the circle                            */
/* --------------------------------------------------------------- */

export const CustomNodes: Story = {
  render: () => (
    <div className="relative min-h-[380px] rounded-xl bg-sky-50 p-8 dark:bg-sky-950/20">
      <TextCircleScroll
        items={[
          <span key={1} className="font-semibold">Design</span>,
          <span key={2} className="opacity-70">Motion</span>,
          <span key={3} className="italic">UI</span>,
          <span key={4} className="opacity-70">DX</span>,
          <span key={5} className="font-semibold">A11y</span>,
          <span key={6} className="opacity-70">Next.js</span>,
          <span key={7} className="font-semibold">Tailwind</span>,
          <span key={8} className="opacity-70">Framer</span>,
        ]}
        radius={95}
        innerGap={70}
        startAngle={-90}
        rotateOnScroll
        autoSpinDegPerSec={10}
        scrollDegrees={180}
        textClassName="text-[14px] uppercase tracking-[0.18em] text-sky-700 dark:text-sky-200"
      />
    </div>
  ),
};
