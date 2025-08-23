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
      {
        name: 'Accordion',
        href: '/docs/accordion',
      },
      {
        name: 'Animated Background',
        href: '/docs/animated-background',
        isNew: true,
      },
      {
        name: 'Animated Group',
        href: '/docs/animated-group',
        isUpdated: true,
      },
      {
  name: 'KPI Card',
  href: '/docs/kpi-card',
  isNew: true,
},

    ],
  },
];
