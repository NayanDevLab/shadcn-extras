import type { Meta, StoryObj } from '@storybook/react';
import PricingCardTwo from '@/components/core/pricing-card-two';
import type { PricingCardTwoProps } from '@/components/core/pricing-card-two';
import { User, Users, Briefcase, Rocket, ShieldCheck } from 'lucide-react';
import { action } from '@storybook/addon-actions';
import * as React from 'react';

const clickBtn = action(
  'choose-plan-click'
) as React.MouseEventHandler<HTMLButtonElement>;

const meta: Meta<typeof PricingCardTwo> = {
  title: 'Core/Pricing/Pricing Card Two',
  component: PricingCardTwo,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Outlined pricing card with large icon, colored frame, feature list (✓/✕) and accent CTA. Presentational (SRP), controlled via props/slots.',
      },
    },
  },
  argTypes: {
    tone: {
      control: 'inline-radio',
      options: ['pink', 'blue', 'amber', 'emerald', 'zinc'],
    },
    name: { control: 'text' },
    subtitle: { control: 'text' },
    price: { control: 'text' },
    currency: { control: 'text' },
    periodLabel: { control: 'text' },
    features: { control: false },
    className: { control: 'text' },
  },
};
export default meta;

type Story = StoryObj<typeof PricingCardTwo>;

const featuresA: PricingCardTwoProps['features'] = [
  { label: 'Lorem ipsum' },
  { label: 'Lorem set' },
  { label: 'Lorem ipsum dolor.' },
  { label: 'Lorem ipsum dolor sit amet, consectetur.', included: false },
  { label: 'Only lorem', included: false },
  { label: 'Lorem ipsum dolor.', included: false },
  { label: 'Lorem ipsum.', included: false },
];

const featuresB: PricingCardTwoProps['features'] = [
  { label: 'Lorem ipsum' },
  { label: 'Lorem set' },
  { label: 'Lorem ipsum dolor.' },
  { label: 'Lorem ipsum dolor sit amet, consectetur.' },
  { label: 'Only lorem' },
  { label: 'Lorem ipsum dolor.', included: false },
  { label: 'Lorem ipsum.', included: false },
];

/* --------------------------------------------------------------- */
/* Playground with controls                                        */
/* --------------------------------------------------------------- */

export const Playground: Story = {
  args: {
    tone: 'blue',
    icon: <Rocket />,
    name: 'Starter',
    subtitle: 'the starter choise',
    price: 9,
    periodLabel: '/month',
    features: featuresA,
    cta: { onClick: clickBtn, label: 'Choose Plan' },
  },
};

/* --------------------------------------------------------------- */
/* Screenshot layout: three cards (Personal / Team / Business)     */
/* --------------------------------------------------------------- */

export const ThreePlansLikeScreenshot: Story = {
  render: () => (
    <div className='mx-auto grid max-w-6xl gap-8 md:grid-cols-3'>
      <PricingCardTwo
        tone='pink'
        icon={<User />}
        name='Personal'
        subtitle='the starter choise'
        price={5}
        periodLabel='/month'
        features={featuresA}
        cta={{ href: '#', label: 'Choose Plan' }}
      />
      <PricingCardTwo
        tone='blue'
        icon={<Users />}
        name='Team'
        subtitle='the starter choise'
        price={15}
        periodLabel='/month'
        features={featuresB}
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
  ),
};

/* --------------------------------------------------------------- */
/* Tones showcase                                                  */
/* --------------------------------------------------------------- */

export const Tones: Story = {
  render: () => (
    <div className='grid gap-8 lg:grid-cols-4'>
      <PricingCardTwo
        tone='pink'
        icon={<ShieldCheck />}
        name='Pink'
        subtitle='accent frame'
        price={9}
        features={featuresB}
        cta={{ onClick: clickBtn, label: 'Choose Plan' }}
      />
      <PricingCardTwo
        tone='blue'
        icon={<Users />}
        name='Blue'
        subtitle='accent frame'
        price={19}
        features={featuresB}
        cta={{ onClick: clickBtn, label: 'Choose Plan' }}
      />
      <PricingCardTwo
        tone='emerald'
        icon={<Rocket />}
        name='Emerald'
        subtitle='accent frame'
        price={29}
        features={featuresB}
        cta={{ onClick: clickBtn, label: 'Choose Plan' }}
      />
      <PricingCardTwo
        tone='zinc'
        icon={<Briefcase />}
        name='Zinc'
        subtitle='accent frame'
        price={39}
        features={featuresB}
        cta={{ onClick: clickBtn, label: 'Choose Plan' }}
      />
    </div>
  ),
};

/* --------------------------------------------------------------- */
/* Link vs onClick CTA                                             */
/* --------------------------------------------------------------- */

export const CTAExamples: Story = {
  render: () => (
    <div className='grid gap-8 sm:grid-cols-2'>
      <PricingCardTwo
        tone='blue'
        icon={<Rocket />}
        name='Link CTA'
        price={12}
        periodLabel='/mo'
        features={featuresA}
        cta={{ href: '#', label: 'Choose Plan' }}
      />
      <PricingCardTwo
        tone='emerald'
        icon={<ShieldCheck />}
        name='onClick CTA'
        price={18}
        periodLabel='/mo'
        features={featuresA}
        cta={{ onClick: clickBtn, label: 'Choose Plan' }}
      />
    </div>
  ),
};
