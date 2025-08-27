import { render, screen } from '@testing-library/react';
import TimelineRail from '@/components/core/timeline-rail';

describe('TimelineRail', () => {
  test('renders labels and captions', () => {
    render(
      <TimelineRail
        items={[
          { label: 'Spec', caption: '01', active: true, onClick: () => {} },
          { label: 'Implement', caption: '02', onClick: () => {} },
          { label: 'QA', caption: '03', href: '#' },
        ]}
      />
    );

    expect(screen.getByLabelText(/spec|01/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/implement|02/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/qa|03/i)).toBeInTheDocument();
  });
});
