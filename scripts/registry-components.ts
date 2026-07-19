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
    name: 'circular-gallery',
    path: path.join(__dirname, '../components/core/circular-gallery.tsx'),
    registryDependencies: [],
    dependencies: [],
    description: 'A 3D circular fan-out image gallery.',
    files: [
      {
        name: 'circular-gallery.tsx',
        path: path.join(__dirname, '../components/core/circular-gallery.tsx'),
        type: 'registry:ui',
      },
      {
        name: 'circular-gallery.css',
        path: path.join(__dirname, '../components/core/circular-gallery.css'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'enlarge-gallery',
    path: path.join(__dirname, '../components/core/enlarge-gallery.tsx'),
    registryDependencies: [],
    dependencies: ['lucide-react'],
    description:
      'A cinematic, full-screen image gallery with expanding thumbnails.',
    files: [
      {
        name: 'enlarge-gallery.tsx',
        path: path.join(__dirname, '../components/core/enlarge-gallery.tsx'),
        type: 'registry:ui',
      },
      {
        name: 'enlarge-gallery.css',
        path: path.join(__dirname, '../components/core/enlarge-gallery.css'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'infinite-parallax-gallery',
    path: path.join(
      __dirname,
      '../components/core/infinite-parallax-gallery.tsx'
    ),
    registryDependencies: [],
    dependencies: ['three'],
    description: 'An interactive, WebGL-powered 3D infinite parallax gallery.',
    files: [
      {
        name: 'infinite-parallax-gallery.tsx',
        path: path.join(
          __dirname,
          '../components/core/infinite-parallax-gallery.tsx'
        ),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'timed-cards',
    path: path.join(__dirname, '../components/core/timed-cards.tsx'),
    registryDependencies: [],
    dependencies: ['gsap', 'lucide-react'],
    description: 'A cinematic timed cards gallery with GSAP animations.',
    files: [
      {
        name: 'timed-cards.tsx',
        path: path.join(__dirname, '../components/core/timed-cards.tsx'),
        type: 'registry:ui',
      },
      {
        name: 'timed-cards.css',
        path: path.join(__dirname, '../components/core/timed-cards.css'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'grid-newspaper',
    path: path.join(__dirname, '../components/core/grid-newspaper.tsx'),
    registryDependencies: [],
    dependencies: [],
    description:
      'An advanced CSS Grid-based vintage newspaper layout component.',
    files: [
      {
        name: 'grid-newspaper.tsx',
        path: path.join(__dirname, '../components/core/grid-newspaper.tsx'),
        type: 'registry:ui',
      },
      {
        name: 'grid-newspaper.css',
        path: path.join(__dirname, '../components/core/grid-newspaper.css'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'newspaper',
    path: path.join(__dirname, '../components/core/newspaper.tsx'),
    registryDependencies: [],
    dependencies: [],
    description: 'A responsive, flex-based vintage newspaper layout component.',
    files: [
      {
        name: 'newspaper.tsx',
        path: path.join(__dirname, '../components/core/newspaper.tsx'),
        type: 'registry:ui',
      },
      {
        name: 'newspaper.css',
        path: path.join(__dirname, '../components/core/newspaper.css'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'animated-image-grid',
    path: path.join(__dirname, '../components/core/animated-image-grid.tsx'),
    registryDependencies: [],
    dependencies: [],
    description:
      'A fluid CSS grid that beautifully reflows items when they are added or removed.',
    files: [
      {
        name: 'animated-image-grid.tsx',
        path: path.join(
          __dirname,
          '../components/core/animated-image-grid.tsx'
        ),
        type: 'registry:ui',
      },
      {
        name: 'animated-image-grid.css',
        path: path.join(
          __dirname,
          '../components/core/animated-image-grid.css'
        ),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'holographic-card',
    path: path.join(__dirname, '../components/core/holographic-card.tsx'),
    registryDependencies: [],
    dependencies: [],
    description:
      'A 3D floating card with holographic gradients and glitch text.',
    files: [
      {
        name: 'holographic-card.tsx',
        path: path.join(__dirname, '../components/core/holographic-card.tsx'),
        type: 'registry:ui',
      },
      {
        name: 'holographic-card.css',
        path: path.join(__dirname, '../components/core/holographic-card.css'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'hexagon-grid',
    path: path.join(__dirname, '../components/core/hexagon-grid.tsx'),
    registryDependencies: [],
    dependencies: [],
    description: 'An interlocking hexagon grid gallery.',
    files: [
      {
        name: 'hexagon-grid.tsx',
        path: path.join(__dirname, '../components/core/hexagon-grid.tsx'),
        type: 'registry:ui',
      },
      {
        name: 'hexagon-grid.css',
        path: path.join(__dirname, '../components/core/hexagon-grid.css'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'testimonial-card',
    path: path.join(__dirname, '../components/core/testimonial-card.tsx'),
    registryDependencies: [],
    dependencies: ['lucide-react'],
    description:
      'A speech-bubble style testimonial card with an avatar placed below.',
  },
  {
    name: 'day-range',
    path: path.join(__dirname, '../components/core/day-range.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
    description:
      'A component to visualize a current value between a low and high range.',
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
  {
    name: 'pricing-card-one',
    path: path.join(__dirname, '../components/core/pricing-card-one.tsx'),
    registryDependencies: [],
    dependencies: [],
    description: 'Pricing card with icon, price, features, and CTA.',
  },
  {
    name: 'pricing-card-two',
    path: path.join(__dirname, '../components/core/pricing-card-two.tsx'),
    registryDependencies: [],
    dependencies: [],
    description:
      'Outlined pricing card with colored frame, icon, price and feature list.',
  },
  {
    name: 'chevron-steps',
    path: path.join(__dirname, '../components/core/chevron-steps.tsx'),
    registryDependencies: [],
    dependencies: [],
    description: 'Arrowed step progress bar with clickable segments.',
  },
  {
    name: 'text-circle-scroll',
    path: path.join(__dirname, '../components/core/text-circle-scroll.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
    description:
      'Circular text/nodes that rotate with scroll and/or auto-spin.',
  },
  {
    name: 'shimmer',
    path: path.join(__dirname, '../components/core/shimmer-skeleton.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
    description:
      'Shimmer/skeleton loading components: line, avatar, card, rect, list.',
  },
  {
    name: 'phone-icon',
    path: path.join(__dirname, '../components/core/phone-icon.tsx'),
    registryDependencies: [],
    dependencies: ['motion', 'lucide-react'],
    description: 'Animated phone icon with ringing effect.',
  },
  {
    name: 'rocket-icon',
    path: path.join(__dirname, '../components/core/rocket-icon.tsx'),
    registryDependencies: [],
    dependencies: ['motion', 'lucide-react'],
    description: 'Animated rocket icon with launch effect.',
  },
  {
    name: 'bulb-icon',
    path: path.join(__dirname, '../components/core/bulb-icon.tsx'),
    registryDependencies: [],
    dependencies: ['motion', 'lucide-react'],
    description: 'Animated lightbulb icon with pulse and flash effects.',
  },
  {
    name: 'money-icon',
    path: path.join(__dirname, '../components/core/money-icon.tsx'),
    registryDependencies: [],
    dependencies: ['motion', 'lucide-react'],
    description: 'Animated banknote icon with bounce and flip effects.',
  },
  {
    name: 'refresh-icon',
    path: path.join(__dirname, '../components/core/refresh-icon.tsx'),
    registryDependencies: [],
    dependencies: ['motion', 'lucide-react'],
    description: 'Animated refresh/sync icon with spin and pulse effects.',
  },
  {
    name: 'clock-icon',
    path: path.join(__dirname, '../components/core/clock-icon.tsx'),
    registryDependencies: [],
    dependencies: ['motion', 'lucide-react'],
    description: 'Animated clock icon with swing and shake effects.',
  },
  {
    name: 'truck-icon',
    path: path.join(__dirname, '../components/core/truck-icon.tsx'),
    registryDependencies: [],
    dependencies: ['motion', 'lucide-react'],
    description: 'Animated truck icon with drive and bounce effects.',
  },
];
