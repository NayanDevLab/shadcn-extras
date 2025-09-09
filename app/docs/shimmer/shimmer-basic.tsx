// app/docs/shimmer/shimmer-basic.tsx
import Shimmer from '@/components/core/shimmer-skeleton';

export function ShimmerBasic() {
  return (
    <div className='p-6'>
      <h3 className='mb-4 text-lg font-medium'>Simple lines</h3>
      <Shimmer
        variant='line'
        count={4}
        gap={12}
        baseClassName='bg-zinc-200 dark:bg-zinc-700'
      />
    </div>
  );
}
