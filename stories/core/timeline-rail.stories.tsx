import type { Meta, StoryObj } from '@storybook/react';
import TimelineRail, {
  type TimelineRailProps,
} from '@/components/core/timeline-rail';
import { userEvent, within, expect } from '@storybook/test';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof TimelineRail> = {
  title: 'Core/Core/Timeline Rail',
  component: TimelineRail,
  tags: ['autodocs'], // enables Docs tab
  parameters: { layout: 'padded' }, // comfy spacing in Canvas
  argTypes: {
    size: { control: 'inline-radio', options: ['sm', 'md'] },
    labelAngle: { control: { type: 'range', min: 0, max: 80, step: 1 } },
    lineThickness: { control: { type: 'range', min: 2, max: 12, step: 1 } },
    // hide function props from controls
    renderLabel: { table: { disable: true } },
    renderCaption: { table: { disable: true } },
  },
};
export default meta;

type Story = StoryObj<typeof TimelineRail>;

const Frame = (args: TimelineRailProps) => (
  <div className='mx-auto max-w-5xl p-8'>
    <TimelineRail {...args} />
  </div>
);

export const Basic: Story = {
  render: Frame,
  args: {
    size: 'md',
    labelAngle: 50,
    emphasizeActiveTrail: true,
    items: [
      { label: 'headset', caption: '1910', active: true },
      { label: 'jungle gum', caption: '1920', active: true },
      { label: 'chocolate chip cookie', caption: '1930', active: true },
      { label: 'Jeep', caption: '1940' },
      { label: 'leaf blower', caption: '1950' },
      { label: 'mag stripe', caption: '1960' },
      { label: 'wireless LAN', caption: '1970' },
      { label: 'flash memory', caption: '1980' },
      { label: 'WWW', caption: '1990' },
      { label: 'AdWords', caption: '2000' },
    ],
  },
};

export const Compact: Story = {
  render: Frame,
  args: {
    size: 'sm',
    labelAngle: 40,
    gapClassName: 'gap-10',
    lineThickness: 4,
    items: [
      { label: 'Alpha', caption: 'Q1', active: true },
      { label: 'Beta', caption: 'Q2', active: true },
      { label: 'GA', caption: 'Q3' },
      { label: 'Scale', caption: 'Q4' },
    ],
  },
};

export const CustomColors: Story = {
  render: Frame,
  args: {
    emphasizeActiveTrail: true,
    lineColorClass: 'bg-emerald-200 dark:bg-emerald-900/40',
    dotClass: 'bg-emerald-300 dark:bg-emerald-800',
    dotActiveClass: 'bg-emerald-600 dark:bg-emerald-400',
    items: [
      { label: 'Design', caption: 'W1', active: true },
      { label: 'Build', caption: 'W2', active: true },
      { label: 'Test', caption: 'W3' },
      { label: 'Launch', caption: 'W4' },
    ],
  },
};

export const Interactions: Story = {
  render: Frame,
  args: {
    items: [
      {
        label: 'Spec',
        caption: '01',
        active: true,
        onClick: (e) => action('spec-click')(e),
      },
      {
        label: 'Implement',
        caption: '02',
        onClick: (e) => action('impl-click')(e),
      },
      { label: 'QA', caption: '03', href: '#' },
    ],
  },
  play: async ({ canvasElement }) => {
    const c = within(canvasElement);
    const btn = c.getByRole('button', { name: /Implement|02/ });
    await expect(btn).toBeInTheDocument();
    await userEvent.click(btn); // see Actions panel: impl-click
  },
};
