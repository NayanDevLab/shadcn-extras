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
  {
    name: 'spinner-sequential-pulse',
    path: path.join(
      __dirname,
      '../components/core/spinner-sequential-pulse.tsx'
    ),
    registryDependencies: [],
    dependencies: ['motion'],
    description:
      'A sequential pulsing spinner with animated dots arranged in a circle.',
  },
  {
    name: 'testimonial',
    path: path.join(__dirname, '../components/core/testimonial.tsx'),
    description:
      'Animated testimonial carousel with data or custom node slides. Autoplay, arrows, dots, keyboard.',
    registryDependencies: [],
    dependencies: ['motion', 'lucide-react'],
  },
  {
    name: 'blog-card-one',
    path: path.join(__dirname, '../components/core/blog-card-one.tsx'),
    description:
      'Blog/article card with image, category chip, actions, and author meta. Variants: image-left, image-top.',
    registryDependencies: [],
    dependencies: [],
  },
  {
    name: 'blog-card-two',
    path: path.join(__dirname, '../components/core/blog-card-two.tsx'),
    description:
      'Full-bleed image blog card with gradient overlay, pinned meta and actions.',
    registryDependencies: [],
    dependencies: ['lucide-react'],
  },
  {
    name: 'blog-card-three',
    path: path.join(__dirname, '../components/core/blog-card-three.tsx'),
    description:
      'Minimal blog card with small rounded thumbnail and meta. Variants: thumbnail left or right.',
    registryDependencies: [],
    dependencies: ['lucide-react'],
  },
  {
    name: 'blog-card-four',
    path: path.join(__dirname, '../components/core/blog-card-four.tsx'),
    description:
      'Top rounded cover image with an attached white info panel. Variants: attached or flush.',
    registryDependencies: [],
    dependencies: ['lucide-react'],
  },
  {
    name: 'timeline-rail',
    path: path.join(__dirname, '../components/core/timeline-rail.tsx'),
    registryDependencies: [],
    dependencies: [],
    description: 'Horizontal timeline with dots, labels and captions.',
  },
];
