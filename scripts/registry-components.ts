import path from 'path';
import { Schema, RegistryType } from './registry-schema';

type ComponentDefinition = Partial<
  Pick<
    Schema,
    | 'dependencies'
    | 'devDependencies'
    | 'registryDependencies'
    | 'cssVars'
    | 'tailwind'
  >
> & {
  name: string;
  path: string;
  description: string;
  files?: {
    name: string;
    path: string;
    type?: RegistryType;
  }[];
};

export const components: ComponentDefinition[] = [
  {
    name: 'accordion',
    path: path.join(__dirname, '../components/core/accordion.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
    description:
      'A collapsible content component with smooth animations for showing and hiding content.',
  },
  {
    name: 'animated-background',
    path: path.join(__dirname, '../components/core/animated-background.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
    description:
      'A component that provides animated background effects for UI elements.',
  },
  {
    name: 'animated-group',
    path: path.join(__dirname, '../components/core/animated-group.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
    description:
      'A container component that applies coordinated animations to a group of child elements.',
  },
  {
    name: 'kpi-card',
    path: path.join(__dirname, '../components/core/kpi-card.tsx'),
    registryDependencies: [],
    dependencies: ['lucide-react'], // used for optional icons
    description: 'Compact metric card with tone, delta and trend indicator.',
  },
  {
    name: 'leaderboard-card',
    path: path.join(__dirname, '../components/core/leaderboard-card.tsx'),
    registryDependencies: [],
    dependencies: ['lucide-react'],
    description:
      'Profile score card with avatar, crown/rank badge, amount pill and progress bar.',
  },
  {
    name: 'radial-dots-spinner',
    path: path.join(__dirname, '../components/core/radial-dots-spinner.tsx'),
    registryDependencies: [],
    dependencies: [],
    description:
      'Animated dotted spinner (SVG). Customizable spokes, rings, size and speed.',
  },
  {
    name: 'concentric-rings-spinner',
    path: path.join(
      __dirname,
      '../components/core/concentric-rings-spinner.tsx'
    ),
    registryDependencies: [],
    dependencies: [],
    description:
      'Dotted rings spinner (SVG). Customizable rings, dots, gap, taper, speed, and direction.',
  },
];
