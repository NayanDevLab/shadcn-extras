import { LeaderboardCard } from '@/components/core/leaderboard-card';

export function LbFirst() {
  return (
    <div className='max-w-sm'>
      <LeaderboardCard
        name='Alex Brooks'
        amount={8034}
        avatarSrc='https://raw.githubusercontent.com/nayanrdeveloper/shadcn-extras/refs/heads/dev/public/avatars/man.png'
        rank={1}
        score={90}
        tone='emerald'
        size='md'
        avatarRingClassName='outline outline-4 outline-pink-500 ring-4 ring-white dark:ring-zinc-900'
      />
    </div>
  );
}
