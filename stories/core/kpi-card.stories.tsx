import type { Meta, StoryObj } from '@storybook/react';
import { KpiCard, type KpiCardProps } from '@/components/core/kpi-card';
import { Activity, DollarSign, Users, ShoppingCart } from 'lucide-react';

const meta: Meta<typeof KpiCard> = {
  title: 'Core/Dashboard/KPI Card',
  component: KpiCard,
  tags: ['autodocs'], // -> Docs tab
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Minimal, dependency-light KPI card with label, value, delta, and trend (up/down/flat). SRP-only (presentational).',
      },
    },
  },
  argTypes: {
    tone: {
      control: 'inline-radio',
      options: ['default', 'primary', 'success', 'warning', 'danger'],
    },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
    trend: { control: 'inline-radio', options: ['up', 'down', 'flat'] },
    compact: { control: 'boolean' },
    // Let delta be number or string; keep control simple:
    delta: { control: 'text' },
  },
};
export default meta;

type Story = StoryObj<typeof KpiCard>;

const Frame = (args: KpiCardProps) => (
  <div className='max-w-xs'>
    <KpiCard {...args} />
  </div>
);

/* -------------------- Stories -------------------- */

export const PrimaryUp: Story = {
  render: Frame,
  args: {
    label: 'Revenue',
    value: 128345,
    delta: 12, // number -> auto adds %
    trend: 'up',
    caption: 'vs previous 30 days',
    tone: 'primary',
    size: 'md',
    icon: <DollarSign className='h-5 w-5' />,
  },
};

export const DangerDown: Story = {
  render: Frame,
  args: {
    label: 'Churn Rate',
    value: '3.2%',
    delta: -0.8,
    trend: 'down',
    caption: 'vs last month',
    tone: 'danger',
    size: 'md',
    icon: <Activity className='h-5 w-5' />,
  },
};

export const SuccessLargeCompact: Story = {
  render: Frame,
  args: {
    label: 'NPS',
    value: 72,
    delta: '+5%', // string also accepted
    trend: 'up',
    caption: 'rolling 90-day',
    tone: 'success',
    size: 'lg',
    compact: true,
    icon: <Users className='h-6 w-6' />,
  },
};

export const WarningFlatSmall: Story = {
  render: Frame,
  args: {
    label: 'AOV',
    value: '$86.40',
    delta: '±0%',
    trend: 'flat',
    caption: 'week over week',
    tone: 'warning',
    size: 'sm',
    icon: <ShoppingCart className='h-4 w-4' />,
  },
};

export const DefaultToneNoIcon: Story = {
  render: Frame,
  args: {
    label: 'Active Sessions',
    value: 1840,
    delta: 1.4,
    trend: 'up',
    caption: 'today',
    tone: 'default',
    size: 'md',
  },
};
