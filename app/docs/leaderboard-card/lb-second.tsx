import { LeaderboardCard } from '@/components/core/leaderboard-card'

export function LbSecond() {
  return (
    <div className="max-w-sm">
      <LeaderboardCard
        name="Maya Rodriguez"
        amount={7040}
        avatarSrc="/avatars/man.png"
        rank={2}
        score={80}
        tone="blue"
      />
    </div>
  )
}
