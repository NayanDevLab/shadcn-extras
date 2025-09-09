import Shimmer from '@/components/core/shimmer-skeleton';

export function ShimmerCard() {
  return (
    <div className='grid gap-6 p-6 md:grid-cols-2'>
      <Shimmer variant='card' />
      <Shimmer variant='card' />
    </div>
  );
}
