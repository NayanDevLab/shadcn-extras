import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PricingCardTwo from '@/components/core/pricing-card-two';

describe('PricingCardTwo', () => {
  test('renders plan name, price and features', () => {
    render(
      <PricingCardTwo
        name='Team'
        price={15}
        periodLabel='/month'
        features={[
          { label: 'Feature A' },
          { label: 'Feature B', included: false },
        ]}
        cta={{ label: 'Choose Plan', onClick: () => {} }}
      />
    );

    expect(screen.getByRole('heading', { name: /team/i })).toBeInTheDocument();
    expect(screen.getByText(/\$?15/i)).toBeInTheDocument();
    expect(screen.getByText(/feature a/i)).toBeInTheDocument();
    expect(screen.getByText(/feature b/i)).toBeInTheDocument();
  });

  test('fires onClick CTA', async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();

    render(
      <PricingCardTwo
        name='Starter'
        price={9}
        periodLabel='/month'
        features={[]}
        cta={{ label: 'Choose Plan', onClick }}
      />
    );

    // accessible name is "Choose Starter" (component uses aria-label with plan name)
    const btn = screen.getByRole('button', { name: /choose/i });
    await user.click(btn);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('renders link CTA when href is provided', () => {
    render(
      <PricingCardTwo
        name='Business'
        price='€25'
        periodLabel='/month'
        features={[]}
        cta={{ href: '#', label: 'Choose Plan' }}
      />
    );

    // accessible name is "Choose Business"
    const link = screen.getByRole('link', { name: /choose/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '#');
  });
});
