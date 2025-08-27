import PricingCardTwo from '@/components/core/pricing-card-two';
import { User, Users, Briefcase } from 'lucide-react';

export function Pc2Basic() {
  return (
    <div className='mx-auto grid max-w-6xl gap-8 md:grid-cols-3'>
      <PricingCardTwo
        tone='pink'
        icon={<User />}
        name='Personal'
        subtitle='the starter choise'
        price={5}
        periodLabel='/month'
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
      />

      <PricingCardTwo
        tone='blue'
        icon={<Users />}
        name='Team'
        subtitle='the starter choise'
        price={15}
        periodLabel='/month'
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
      />

      <PricingCardTwo
        tone='amber'
        icon={<Briefcase />}
        name='Business'
        subtitle='the starter choise'
        price={25}
        periodLabel='/month'
        features={[
          { label: 'Lorem ipsum' },
          { label: 'Lorem set' },
          { label: 'Lorem ipsum dolor.' },
          { label: 'Lorem ipsum dolor sit amet, consectetur.' },
          { label: 'Only lorem' },
          { label: 'Lorem ipsum dolor.' },
          { label: 'Lorem ipsum.' },
        ]}
        cta={{ href: '#', label: 'Choose Plan' }}
      />
    </div>
  );
}
