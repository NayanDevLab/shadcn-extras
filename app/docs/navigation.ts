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
    name: 'Dashboard Components',
    children: [
      {
        name: 'KPI Card',
        href: '/docs/kpi-card',
        isNew: true,
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
        isNew: true,
      },
      {
        name: 'Concentric Rings',
        href: '/docs/concentric-rings-spinner',
        isNew: true,
      },
      {
        name: 'Sequential Pulse',
        href: '/docs/spinner-sequential-pulse',
        isNew: true,
      },
    ],
  },
];
