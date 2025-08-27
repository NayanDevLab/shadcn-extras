import PricingCardOne from '@/components/core/pricing-card-one';
import { Car, Plane } from 'lucide-react';

export function Pc1Basic() {
  return (
    <div className='grid gap-8 sm:grid-cols-2'>
      <PricingCardOne
        icon={<Car />}
        name='Basic'
        subtitle='the starter choise'
        price={5}
        periodLabel='/month'
        tone='blue'
        features={[
          { label: 'Lorem ipsum' },
          { label: 'Lorem set' },
          { label: 'Lorem ipsum dolor.' },
          {
            label: 'Lorem ipsum dolor sit amet, consectetur.',
            included: false,
          },
          { label: 'Only lorem', included: false },
          { label: 'Lorem ipsum dolor.', included: false },
          { label: 'Lorem ipsum.', included: false },
        ]}
        cta={{ href: '#', label: 'Choose Plan' }}
        variant='outline'
      />

      <PricingCardOne
        icon={<Plane />}
        name='Pro'
        subtitle='the starter choise'
        price={15}
        periodLabel='/month'
        recommended
        tone='blue'
        features={[
          { label: 'Lorem ipsum' },
          { label: 'Lorem set' },
          { label: 'Lorem ipsum dolor.' },
          { label: 'Lorem ipsum dolor sit amet, consectetur.' },
          { label: 'Only lorem' },
          { label: 'Lorem ipsum dolor.', included: false },
          { label: 'Lorem ipsum.', included: false },
        ]}
        cta={{ href: '#', label: 'Choose Plan' }}
        variant='outline'
      />
    </div>
  );
}
