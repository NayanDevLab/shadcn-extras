import { KpiCard } from '@/components/core/kpi-card';
import { PieChart } from 'lucide-react';

export function KpiBasic() {
  return (
    <KpiCard
      label='Sessions'
      value={6132}
      delta={150}
      trend='up'
      caption='vs Previous 30 Days'
      tone='primary'
      icon={<PieChart className='h-4 w-4 text-blue-600 dark:text-blue-300' />}
    />
  );
}
