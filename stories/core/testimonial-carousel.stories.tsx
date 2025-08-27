import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, expect } from '@storybook/test';
import {
  TestimonialCarousel,
  type TestimonialCarouselProps,
  type TestimonialData,
} from '@/components/core/testimonial';
import React from 'react';
import { Quote } from 'lucide-react';

const AVATAR =
  'https://raw.githubusercontent.com/nayanrdeveloper/shadcn-extras/refs/heads/dev/public/avatars/man.png';

const baseItems: TestimonialData[] = [
  {
    id: 't1',
    avatar: AVATAR,
    name: 'Konnor Guzman',
    role: 'Senior Developer',
    quote:
      'The components feel thoughtfully engineered. Keeping SRP in the UI lets me plug them into any data layer without refactors.',
    accent: '#10b981', // emerald-500
  },
  {
    id: 't2',
    avatar: AVATAR,
    name: 'Asha Patel',
    role: 'Frontend Engineer',
    quote:
      'Slots + class overrides are 💯. I can retheme quickly without forking. Dark mode contrast is spot on.',
    accent: '#3b82f6', // blue-500
  },
  {
    id: 't3',
    name: 'Dev Singh',
    role: 'Product Designer',
    accent: '#eab308', // amber-500
    // Demonstrate custom render; receives { active, index }
    render: ({ active, index }) => (
      <div
        className={`max-w-2xl text-center transition ${
          active ? 'scale-100 opacity-100' : 'scale-95 opacity-70'
        }`}
      >
        <div className='mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-amber-500 text-white shadow'>
          <Quote className='h-6 w-6' />
        </div>
        <h3 className='text-xl font-semibold tracking-tight'>
          Custom Slide #{index + 1}
        </h3>
        <p className='mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300'>
          You can render anything here—charts, stats, or rich content. The
          carousel still handles focus, arrows, dots, and transitions.
        </p>
        <p className='mt-3 text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400'>
          Product Designer
        </p>
      </div>
    ),
  },
];

const meta: Meta<typeof TestimonialCarousel> = {
  title: 'Core/Carousels/Testimonial Carousel',
  component: TestimonialCarousel,
  tags: ['autodocs'], // Docs tab enabled
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Accessible testimonial carousel with Motion transitions, arrows, dots, autoplay, and an escape-hatch `render` per item. SRP-only (presentational).',
      },
    },
  },
  argTypes: {
    variant: { control: 'inline-radio', options: ['card', 'minimal'] },
    loop: { control: 'boolean' },
    autoplay: { control: 'boolean' },
    autoplayMs: { control: { type: 'range', min: 1500, max: 8000, step: 100 } },
    showArrows: { control: 'boolean' },
    showDots: { control: 'boolean' },
    allowKeyboard: { control: 'boolean' },
    initialIndex: { control: { type: 'number', min: 0, step: 1 } },
    className: { control: 'text' },
    contentClassName: { control: 'text' },
    cardClassName: { control: 'text' },
    avatarClassName: { control: 'text' },
    nameClassName: { control: 'text' },
    roleClassName: { control: 'text' },
    quoteClassName: { control: 'text' },
    onIndexChange: { table: { disable: true } }, // callback; not a control
  },
};
export default meta;

type Story = StoryObj<typeof TestimonialCarousel>;

const Frame = (args: TestimonialCarouselProps) => (
  <div className='mx-auto max-w-4xl'>
    <TestimonialCarousel {...args} />
  </div>
);

/* ------------------------ Stories ------------------------ */

export const BasicCard: Story = {
  render: Frame,
  args: {
    items: baseItems,
    variant: 'card',
    loop: true,
    autoplay: false,
    showArrows: true,
    showDots: true,
    allowKeyboard: true,
    initialIndex: 0,
  },
  play: async ({ canvasElement }) => {
    const c = within(canvasElement);
    // Click next and assert the slide label updates (uses aria-label "2 of 3")
    const next = c.getByRole('button', { name: /next testimonial/i });
    await userEvent.click(next);
    await expect(c.getByRole('group', { name: /2 of 3/i })).toBeInTheDocument();
  },
};

export const MinimalVariant: Story = {
  render: Frame,
  args: {
    items: baseItems,
    variant: 'minimal',
    showArrows: true,
    showDots: true,
  },
};

export const AutoplayLoop: Story = {
  render: Frame,
  args: {
    items: baseItems,
    variant: 'card',
    loop: true,
    autoplay: true,
    autoplayMs: 2200,
    showArrows: true,
    showDots: true,
  },
};

export const KeyboardOnlyNoLoop: Story = {
  render: Frame,
  args: {
    items: baseItems.slice(0, 2),
    variant: 'card',
    loop: false,
    autoplay: false,
    showArrows: false,
    showDots: true,
    allowKeyboard: true,
  },
};

export const CustomRendererSlide: Story = {
  name: 'Custom renderer (mixed items)',
  render: Frame,
  args: {
    items: baseItems,
    variant: 'card',
    loop: true,
    showArrows: true,
    showDots: true,
  },
};
