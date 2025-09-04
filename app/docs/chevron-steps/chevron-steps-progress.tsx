'use client';
import * as React from 'react';
import ChevronSteps from '@/components/core/chevron-steps';

export function ChevronStepsProgress() {
  const [idx, setIdx] = React.useState(2);
  return (
    <div className="w-full px-6">
      <ChevronSteps
        steps={[
          { label: 'Account' },
          { label: 'Details' },
          { label: 'Verification' },
          { label: 'Done' },
        ]}
        current={idx}
        onStepClick={setIdx}
        variant="brand"
        size="md"
        className="mx-auto max-w-3xl"
      />
      <div className="mt-4 flex gap-2 justify-center">
        <button
          className="rounded-md border px-3 py-1.5 text-sm"
          onClick={() => setIdx((v) => Math.max(0, v - 1))}
        >
          Prev
        </button>
        <button
          className="rounded-md border px-3 py-1.5 text-sm"
          onClick={() => setIdx((v) => Math.min(3, v + 1))}
        >
          Next
        </button>
      </div>
    </div>
  );
}
