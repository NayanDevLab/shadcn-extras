import { KpiCard } from '@/components/core/kpi-card'

export function KpiFlat() {
  return (
    <KpiCard
      label="Active Plans"
      value={10234}
      trend="flat"
      caption="month over month"
      tone="default"
    />
  )
}
