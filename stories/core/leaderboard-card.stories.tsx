import type { Meta, StoryObj } from '@storybook/react';
import {
  LeaderboardCard,
  type LeaderboardCardProps,
} from '@/components/core/leaderboard-card';

const meta: Meta<typeof LeaderboardCard> = {
  title: 'Core/Dashboard/Leaderboard Card',
  component: LeaderboardCard,
  tags: ['autodocs'], // enables the Docs tab automatically
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Leaderboard-style profile card with avatar, amount pill, optional crown/rank badge, and progress bar. SRP: purely presentational.',
      },
    },
  },
  argTypes: {
    tone: { control: 'inline-radio', options: ['emerald', 'blue', 'zinc'] },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
    score: { control: { type: 'range', min: 0, max: 100, step: 1 } },
  },
};
export default meta;

type Story = StoryObj<typeof LeaderboardCard>;

// simple frame so the card has breathing room
const Frame = (args: LeaderboardCardProps) => (
  <div className='w-[360px] bg-transparent p-8'>
    <LeaderboardCard {...args} />
  </div>
);

export const Basic: Story = {
  render: Frame,
  args: {
    name: 'Asha Patel',
    amount: 8034,
    amountPrefix: '$',
    avatarSrc: '/avatars/woman.png',
    rank: 1,
    score: 86,
    label: 'Score',
    showCrown: true,
    tone: 'emerald',
    size: 'md',
  },
};

export const BlueTone: Story = {
  render: Frame,
  args: {
    name: 'Konnor Guzman',
    amount: 12050,
    amountPrefix: '$',
    avatarSrc: '/avatars/man.png',
    rank: 2,
    score: 72,
    tone: 'blue',
    size: 'md',
  },
};

export const ZincToneSmall: Story = {
  render: Frame,
  args: {
    name: 'Dev Singh',
    amount: '₹6,40,000',
    amountPrefix: '',
    avatarSrc: '/avatars/dev.png',
    rank: 3,
    score: 58,
    tone: 'zinc',
    size: 'sm',
  },
};

export const LargeWithCustoms: Story = {
  render: Frame,
  args: {
    name: 'Priya Sharma',
    amount: 152000,
    amountPrefix: '₹',
    avatarSrc: '/avatars/woman.png',
    rank: 1,
    score: 94,
    label: 'Completion',
    showCrown: true,
    tone: 'emerald',
    size: 'lg',
    // demonstrate customization hooks
    avatarRingClassName: 'outline outline-4 outline-emerald-400/70',
    progressClassName: 'bg-gradient-to-r from-emerald-500 to-emerald-400',
    pillClassName: 'shadow-sm',
  },
};
