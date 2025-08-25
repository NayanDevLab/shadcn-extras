import { SpinnerSequentialPulse } from '@/components/core/spinner-sequential-pulse';

export function SpinnerSequentialPulseVariants() {
  return (
    <div className='grid gap-8 bg-black p-8 md:grid-cols-3'>
      <SpinnerSequentialPulse size={96} dotSize={7} color='#fff' />
      <SpinnerSequentialPulse
        size={128}
        dotSize={10}
        color='#e5e7eb'
        trackColor='rgba(229,231,235,0.15)'
      />
      <SpinnerSequentialPulse
        size={140}
        dotSize={8}
        color='#60a5fa'
        showSpokes={false}
        speed={0.9}
      />
    </div>
  );
}
