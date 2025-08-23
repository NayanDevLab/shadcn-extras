import { KpiCard } from '@/components/core/kpi-card'

export function KpiNegative() {
  return (
    <KpiCard
      label="Bounce Rate"
      value="62.4%"
      delta={-8.2}
      trend="down"
      caption="vs Previous 30 Days"
      tone="danger"
    />
  )
}
