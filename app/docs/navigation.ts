type NavigationItem = {
  name: string;
  href: string;
  isNew?: boolean;
  isUpdated?: boolean;
};

type NavigationGroup = {
  name: string;
  children: NavigationItem[];
};

export const NAVIGATION: NavigationGroup[] = [
  {
    name: 'Getting Started',
    children: [
      {
        name: 'Introduction',
        href: '/docs',
      },
      {
        name: 'Installation',
        href: '/docs/installation',
      },
    ],
  },
  {
    name: 'Core Components',
    children: [
      { name: 'Timeline Rail', href: '/docs/timeline-rail' },
      { name: 'Testimonial', href: '/docs/testimonial' },
      { name: 'Testimonial Card', href: '/docs/testimonial-card', isNew: true },
      { name: 'Chevron Steps', href: '/docs/chevron-steps', isNew: true },
      { name: 'Shimmer / Skeleton', href: '/docs/shimmer', isNew: true },
      {
        name: 'Animated Icons',
        href: '/docs/icons',
        isNew: true,
      },
      {
        name: 'Text Circle Scroll',
        href: '/docs/text-circle-scroll',
        isNew: true,
      },
    ],
  },
  {
    name: 'Pricing Card',
    children: [
      { name: 'Pricing Card One', href: '/docs/pricing-card-one' },
      { name: 'Pricing Card Two', href: '/docs/pricing-card-two' },
    ],
  },
  {
    name: 'Dashboard Components',
    children: [
      {
        name: 'KPI Card',
        href: '/docs/kpi-card',
      },
      {
        name: 'Leaderboard Card',
        href: '/docs/leaderboard-card',
        isUpdated: true,
      },
      {
        name: 'Day Range',
        href: '/docs/day-range',
        isNew: true,
      },
    ],
  },
  {
    name: 'Spinners',
    children: [
      {
        name: 'Radial Dots',
        href: '/docs/radial-dots-spinner',
      },
      {
        name: 'Concentric Rings',
        href: '/docs/concentric-rings-spinner',
      },
      {
        name: 'Sequential Pulse',
        href: '/docs/spinner-sequential-pulse',
      },
    ],
  },
  {
    name: 'Blogs',
    children: [
      {
        name: 'Blog Card One',
        href: '/docs/blog-card-one',
      },
      { name: 'Blog Card Two', href: '/docs/blog-card-two' },
      { name: 'Blog Card Three', href: '/docs/blog-card-three' },
      { name: 'Blog Card Four', href: '/docs/blog-card-four' },
    ],
  },
  {
    name: 'Backgrounds',
    children: [
      {
        name: 'Gradient Generator',
        href: '/docs/backgrounds/gradient',
        isNew: true,
      },
      {
        name: 'Gradient Mesh',
        href: '/docs/backgrounds/mesh',
        isNew: true,
      },
      {
        name: 'Pattern Generator',
        href: '/docs/backgrounds/pattern',
        isNew: true,
      },
      {
        name: 'Noise & Grain',
        href: '/docs/backgrounds/noise',
        isNew: true,
      },
      {
        name: 'Animated Presets',
        href: '/docs/backgrounds/animated',
        isNew: true,
      },
    ],
  },
];
