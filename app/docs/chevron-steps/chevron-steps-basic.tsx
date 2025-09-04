import ChevronSteps from '@/components/core/chevron-steps';

export function ChevronStepsBasic() {
  return (
    <div className='w-full px-6'>
      <ChevronSteps
        steps={[
          { label: 'Step 1' },
          { label: 'Step 2 some words' },
          { label: 'Step 3' },
          { label: 'Step 4' },
        ]}
        current={0}
        variant='brand'
        tailWidth={20}
        className='mx-auto max-w-4xl'
      />
    </div>
  );
}
