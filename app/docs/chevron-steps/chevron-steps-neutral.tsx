import ChevronSteps from '@/components/core/chevron-steps';

export function ChevronStepsNeutral() {
  return (
    <div className='w-full px-6'>
      <ChevronSteps
        steps={[{ label: 'Plan' }, { label: 'Build' }, { label: 'Ship' }]}
        current={1}
        variant='neutral'
        size='lg'
        tailWidth={22}
        className='mx-auto max-w-2xl'
      />
    </div>
  );
}
