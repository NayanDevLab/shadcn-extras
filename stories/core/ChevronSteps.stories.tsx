import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import ChevronSteps from '@/components/core/chevron-steps';
import type { ChevronStep } from '@/components/core/chevron-steps';
import { action } from '@storybook/addon-actions';

const stepClicked = action('step-click') as (
  index: number,
  step: ChevronStep
) => void;

const meta: Meta<typeof ChevronSteps> = {
  title: 'Core/Navigation/Chevron Steps',
  component: ChevronSteps,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Chevron-style stepper with arrow tails. Accessible (list + `aria-current="step"`), responsive, and fully customizable. Presentational (SRP) and controlled via props.',
      },
    },
  },
  argTypes: {
    steps: { control: 'object', description: 'Array of steps in order.' },
    current: {
      control: { type: 'number', min: 0 },
      description: 'Zero-based active index.',
    },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'inline-radio', options: ['brand', 'neutral'] },
    radius: { control: 'inline-radio', options: ['md', 'lg', 'xl', '2xl'] },
    tailWidth: { control: { type: 'range', min: 10, max: 32, step: 1 } },
    scrollable: { control: 'boolean' },
    className: { control: 'text' },
    stepClassName: { control: 'text' },
    stepActiveClassName: { control: 'text' },
    stepCompletedClassName: { control: 'text' },
    stepUpcomingClassName: { control: 'text' },
    onStepClick: { action: 'onStepClick', table: { disable: true } },
  },
};
export default meta;

type Story = StoryObj<typeof ChevronSteps>;

const basicSteps: ChevronStep[] = [
  { label: 'Step 1' },
  { label: 'Step 2 some words' },
  { label: 'Step 3' },
  { label: 'Step 4' },
];

/* --------------------------------------------------------------- */
/* Playground with controls                                        */
/* --------------------------------------------------------------- */

export const Playground: Story = {
  args: {
    steps: basicSteps,
    current: 0,
    size: 'md',
    variant: 'brand',
    radius: '2xl',
    tailWidth: 20,
    scrollable: true,
    onStepClick: stepClicked,
    className: 'mx-auto max-w-5xl',
  },
};

/* --------------------------------------------------------------- */
/* Screenshot-like (brand)                                         */
/* --------------------------------------------------------------- */

export const LikeScreenshot: Story = {
  render: () => (
    <div className='mx-auto max-w-5xl px-6'>
      <ChevronSteps
        steps={basicSteps}
        current={0}
        variant='brand'
        tailWidth={20}
        className='mx-auto'
        onStepClick={stepClicked}
      />
    </div>
  ),
};

/* --------------------------------------------------------------- */
/* Neutral Large                                                   */
/* --------------------------------------------------------------- */

export const NeutralLarge: Story = {
  render: () => (
    <div className='mx-auto max-w-3xl px-6'>
      <ChevronSteps
        steps={[{ label: 'Plan' }, { label: 'Build' }, { label: 'Ship' }]}
        current={1}
        size='lg'
        variant='neutral'
        tailWidth={22}
        onStepClick={stepClicked}
      />
    </div>
  ),
};

/* --------------------------------------------------------------- */
/* Many steps + scroll                                             */
/* --------------------------------------------------------------- */

export const ScrollableMany: Story = {
  render: () => (
    <div className='mx-auto max-w-4xl px-6'>
      <ChevronSteps
        steps={Array.from({ length: 10 }).map((_, i) => ({
          label: i === 3 ? `Step ${i + 1} with long label` : `Step ${i + 1}`,
        }))}
        current={4}
        size='md'
        tailWidth={18}
        onStepClick={stepClicked}
      />
    </div>
  ),
};

/* --------------------------------------------------------------- */
/* With a disabled step                                            */
/* --------------------------------------------------------------- */

export const WithDisabled: Story = {
  render: () => (
    <div className='mx-auto max-w-3xl px-6'>
      <ChevronSteps
        steps={[
          { label: 'Account' },
          { label: 'Details', disabled: true },
          { label: 'Verification' },
          { label: 'Done' },
        ]}
        current={2}
        onStepClick={stepClicked}
      />
    </div>
  ),
};

const InteractiveDemo = (args: React.ComponentProps<typeof ChevronSteps>) => {
  const [idx, setIdx] = React.useState(1);
  const steps: ChevronStep[] = [
    { label: 'Account' },
    { label: 'Details' },
    { label: 'Verify' },
    { label: 'Done' },
  ];

  return (
    <div className='mx-auto w-[820px] max-w-full px-6'>
      <ChevronSteps
        {...args}
        steps={steps}
        current={idx}
        onStepClick={(i, s) => {
          stepClicked(i, s);
          if (!s.disabled) setIdx(i);
        }}
      />
      <div className='mt-4 flex justify-center gap-2'>
        <button
          className='rounded-md border px-3 py-1.5 text-sm'
          onClick={() => setIdx((v) => Math.max(0, v - 1))}
        >
          Prev
        </button>
        <button
          className='rounded-md border px-3 py-1.5 text-sm'
          onClick={() => setIdx((v) => Math.min(steps.length - 1, v + 1))}
        >
          Next
        </button>
      </div>
    </div>
  );
};

/* --------------------------------------------------------------- */
/* Interactive (stateful demo)                                     */
/* --------------------------------------------------------------- */

export const Interactive: Story = {
  render: (args) => <InteractiveDemo {...args} />,
  args: {
    size: 'md',
    variant: 'brand',
    tailWidth: 20,
  },
};
