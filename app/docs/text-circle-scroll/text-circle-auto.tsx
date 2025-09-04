import TextCircleScroll from '@/components/core/text-circle-scroll';

export function TextCircleAuto() {
  const words = Array.from(
    { length: 16 },
    (_, i) =>
      (['Aurora', 'Lullaby', 'Labyrinth', 'Idyllic', 'Felicity'] as const)[
        i % 5
      ]
  );

  return (
    <div className='min-h-[380px] rounded-xl bg-amber-50/50 p-10 dark:bg-amber-950/20'>
      <TextCircleScroll
        items={words}
        radius={120}
        innerGap={80}
        startAngle={-60}
        clockwise={false}
        rotateOnScroll={false}
        autoSpinDegPerSec={18}
        className='mx-auto max-w-xl'
        textClassName='text-[17px] tracking-wide text-zinc-700 dark:text-zinc-100'
      />
    </div>
  );
}
