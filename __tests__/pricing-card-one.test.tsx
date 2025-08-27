import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PricingCardOne from '@/components/core/pricing-card-one';

describe('PricingCardOne', () => {
  test('renders plan name, subtitle, numeric price and period', () => {
    render(
      <PricingCardOne
        name='Starter'
        subtitle='the starter choice'
        price={9}
        currency='$'
        periodLabel='/month'
        features={[
          { label: 'Feature A' },
          { label: 'Feature B', included: false },
        ]}
      />
    );

    // ✅ match the actual plan name
    expect(
      screen.getByRole('region', { name: /starter plan/i })
    ).toBeInTheDocument();

    // ✅ and its heading
    expect(
      screen.getByRole('heading', { name: /starter/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/the starter choice/i)).toBeInTheDocument();

    // Price + period (numeric case uses currency + number)
    expect(screen.getByText(/\$9/)).toBeInTheDocument();
    expect(screen.getByText('/month')).toBeInTheDocument();

    // Features list & labels
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
    expect(screen.getByText(/feature a/i)).toBeInTheDocument();
    expect(screen.getByText(/feature b/i)).toBeInTheDocument();
  });

  test('invokes onClick when CTA is a button', async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();

    render(
      <PricingCardOne
        name='Starter'
        price={9}
        periodLabel='/month'
        features={[]}
        cta={{ label: 'Choose Plan', onClick }}
      />
    );

    // Accessible name defaults to "Choose <name>"
    const btn = screen.getByRole('button', { name: /choose starter/i });
    await user.click(btn);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('renders CTA as a link when href is provided', () => {
    render(
      <PricingCardOne
        name='Business'
        price='€25'
        periodLabel='/month'
        features={[]}
        cta={{ href: '#', label: 'Choose Plan' }}
      />
    );

    // Accessible name defaults to "Choose <name>"
    const link = screen.getByRole('link', { name: /choose business/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '#');
  });

  test('shows recommended badge and custom label', () => {
    render(
      <PricingCardOne
        name='Pro'
        price={49}
        periodLabel='/month'
        recommended
        recommendedLabel='Popular'
        features={[]}
      />
    );

    expect(screen.getByText(/popular/i)).toBeInTheDocument();
  });

  test('supports string price (e.g., "Free")', () => {
    render(
      <PricingCardOne
        name='Free Tier'
        price='Free'
        periodLabel='/forever'
        features={[{ label: 'Basic Usage' }]}
      />
    );

    // Exact match to avoid colliding with heading “Free Tier”
    expect(screen.getByText(/^Free$/i)).toBeInTheDocument();
    expect(screen.getByText('/forever')).toBeInTheDocument();
  });
});
