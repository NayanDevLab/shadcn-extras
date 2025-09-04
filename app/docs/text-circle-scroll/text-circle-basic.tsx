import TextCircleScroll from '@/components/core/text-circle-scroll';

const WORDS = [
  'Bungalow',
  'Aurora',
  'Lullaby',
  'Labyrinth',
  'Idyllic',
  'Felicity',
  'Demure',
  'Chatoyant',
  'TheseDays',
  'Demure',
  'Aurora',
  'Bungalow',
];

export function TextCircleBasic() {
  return (
    <div className="min-h-[420px] rounded-xl bg-zinc-100/70 p-10 dark:bg-zinc-900/40">
      <TextCircleScroll
        items={WORDS}
        radius={110}
        innerGap={90}
        startAngle={-90}
        rotateOnScroll
        scrollDegrees={300}
        className="mx-auto max-w-xl"
        textClassName="text-[18px] font-serif text-zinc-800 dark:text-zinc-100"
      />
    </div>
  );
}
