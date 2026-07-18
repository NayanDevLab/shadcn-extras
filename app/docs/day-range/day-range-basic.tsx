import { DayRange } from '@/components/core/day-range';

export function DayRangeBasic() {
  return (
    <div className='flex w-full items-center justify-center py-10'>
      <DayRange
        low={1527.3}
        high={1585}
        current={1572.9}
        currencySymbol='₹'
        lowLabel="Today's low"
        highLabel="Today's high"
      />
    </div>
  );
}
