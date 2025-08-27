import type { Meta, StoryObj } from '@storybook/react';
import PricingCardOne from '@/components/core/pricing-card-one';
import type { PricingCardOneProps } from '@/components/core/pricing-card-one';
import { Car, Plane, Ship, Rocket } from 'lucide-react';
import { action } from '@storybook/addon-actions';

const clickBtn = action(
  'choose-plan-click'
) as React.MouseEventHandler<HTMLButtonElement>;

const meta: Meta<typeof PricingCardOne> = {
  title: 'Core/Pricing/Pricing Card One',
  component: PricingCardOne,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Clean pricing card with icon, price, features and CTA. SRP/presentational, themable via `tone`, `variant` and slot classNames.',
      },
    },
  },
  argTypes: {
    tone: {
      control: 'inline-radio',
      options: ['indigo', 'blue', 'emerald', 'zinc'],
    },
    variant: {
      control: 'inline-radio',
      options: ['outline', 'elevated', 'soft'],
    },
    recommended: { control: 'boolean' },
    features: { control: false },
    cta: { table: { disable: true } }, // keep CTA in stories (href/onClick union)
    className: { control: 'text' },
  },
};
export default meta;

type Story = StoryObj<typeof PricingCardOne>;

const featuresA: PricingCardOneProps['features'] = [
  { label: 'Lorem ipsum' },
  { label: 'Lorem set' },
  { label: 'Lorem ipsum dolor.' },
  { label: 'Lorem ipsum dolor sit amet, consectetur.', included: false },
  { label: 'Only lorem', included: false },
  { label: 'Lorem ipsum dolor.', included: false },
  { label: 'Lorem ipsum.', included: false },
];

const featuresB: PricingCardOneProps['features'] = [
  { label: 'Lorem ipsum' },
  { label: 'Lorem set' },
  { label: 'Lorem ipsum dolor.' },
  { label: 'Lorem ipsum dolor sit amet, consectetur.' },
  { label: 'Only lorem' },
  { label: 'Lorem ipsum dolor.', included: false },
  { label: 'Lorem ipsum.', included: false },
];

/* ------------------------------------------------------------------ */
/* Basic single card with controls                                     */
/* ------------------------------------------------------------------ */

export const Playground: Story = {
  args: {
    icon: <Car />,
    name: 'Basic',
    subtitle: 'the starter choise',
    price: 5,
    periodLabel: '/month',
    tone: 'blue',
    variant: 'outline',
    features: featuresA,
    // show both href and onClick patterns in different stories; here use onClick
    cta: { onClick: clickBtn, label: 'Choose Plan' },
  },
};

/* ------------------------------------------------------------------ */
/* Two-card grid like your screenshot                                  */
/* ------------------------------------------------------------------ */

export const TwoPlansLikeScreenshot: Story = {
  render: () => (
    <div className='grid gap-8 sm:grid-cols-2'>
      <PricingCardOne
        icon={<Car />}
        name='Basic'
        subtitle='the starter choise'
        price={5}
        periodLabel='/month'
        tone='blue'
        features={featuresA}
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
        features={featuresB}
        cta={{ href: '#', label: 'Choose Plan' }}
        variant='outline'
      />
    </div>
  ),
};

/* ------------------------------------------------------------------ */
/* Tones                                                               */
/* ------------------------------------------------------------------ */

export const Tones: Story = {
  name: 'Tones (indigo / blue / emerald / zinc)',
  render: () => (
    <div className='grid gap-8 lg:grid-cols-4'>
      <PricingCardOne
        icon={<Rocket />}
        name='Indigo'
        subtitle='starter'
        price={9}
        tone='indigo'
        features={featuresB}
        cta={{ onClick: clickBtn, label: 'Choose Plan' }}
      />
      <PricingCardOne
        icon={<Ship />}
        name='Blue'
        subtitle='team'
        price={19}
        tone='blue'
        features={featuresB}
        cta={{ onClick: clickBtn, label: 'Choose Plan' }}
      />
      <PricingCardOne
        icon={<Plane />}
        name='Emerald'
        subtitle='growth'
        price={29}
        tone='emerald'
        features={featuresB}
        cta={{ onClick: clickBtn, label: 'Choose Plan' }}
      />
      <PricingCardOne
        icon={<Car />}
        name='Zinc'
        subtitle='agency'
        price={39}
        tone='zinc'
        features={featuresB}
        cta={{ onClick: clickBtn, label: 'Choose Plan' }}
      />
    </div>
  ),
};

/* ------------------------------------------------------------------ */
/* Surface variants                                                    */
/* ------------------------------------------------------------------ */

export const ElevatedAndSoft: Story = {
  render: () => (
    <div className='grid gap-8 sm:grid-cols-2'>
      <PricingCardOne
        icon={<Car />}
        name='Elevated'
        subtitle='soft shadow'
        price={12}
        tone='indigo'
        features={featuresB}
        cta={{ href: '#', label: 'Choose Plan' }}
        variant='elevated'
      />
      <PricingCardOne
        icon={<Plane />}
        name='Soft'
        subtitle='translucent'
        price={24}
        tone='emerald'
        features={featuresB}
        cta={{ href: '#', label: 'Choose Plan' }}
        variant='soft'
        recommended
      />
    </div>
  ),
};
