import Shimmer from '@/components/core/shimmer-skeleton';

export function ShimmerAvatar() {
  return (
    <div className='p-6'>
      <h3 className='mb-4 text-lg font-medium'>Avatar list</h3>
      <Shimmer variant='avatar' count={3} />
    </div>
  );
}
