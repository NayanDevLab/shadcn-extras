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
      { name: 'Testimonial', href: '/docs/testimonial', isUpdated: true },
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
        isNew: true,
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
      { name: 'Blog Card Three', href: '/docs/blog-card-three', isNew: true },
      { name: 'Blog Card Four', href: '/docs/blog-card-four', isNew: true },
    ],
  },
];
