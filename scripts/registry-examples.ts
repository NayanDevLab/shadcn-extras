import path from 'path';

type ExampleDefinition = {
  name: string;
  path: string;
  description: string;
  componentName: string;
  dependencies?: string[];
  files?: {
    name: string;
    path: string;
    type?: 'registry:hook' | 'registry:ui' | 'registry:lib';
  }[];
};

export const examples: ExampleDefinition[] = [
  {
    name: 'circular-gallery-basic',
    path: path.join(
      __dirname,
      '../app/docs/circular-gallery/circular-gallery-basic.tsx'
    ),
    description: 'Basic Circular Gallery.',
    componentName: 'circular-gallery-basic',
    files: [
      {
        name: 'circular-gallery.css',
        path: path.join(__dirname, '../components/core/circular-gallery.css'),
        type: 'registry:ui',
      },
      {
        name: 'circular-gallery.tsx',
        path: path.join(__dirname, '../components/core/circular-gallery.tsx'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'enlarge-gallery-basic',
    path: path.join(
      __dirname,
      '../app/docs/enlarge-gallery/enlarge-gallery-basic.tsx'
    ),
    description: 'Basic Enlarge Gallery.',
    componentName: 'enlarge-gallery-basic',
    files: [
      {
        name: 'enlarge-gallery.css',
        path: path.join(__dirname, '../components/core/enlarge-gallery.css'),
        type: 'registry:ui',
      },
      {
        name: 'enlarge-gallery.tsx',
        path: path.join(__dirname, '../components/core/enlarge-gallery.tsx'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'infinite-parallax-gallery-dense',
    path: path.join(
      __dirname,
      '../app/docs/infinite-parallax-gallery/infinite-parallax-gallery-dense.tsx'
    ),
    description: 'Dense Infinite Parallax Gallery.',
    componentName: 'infinite-parallax-gallery-dense',
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
    name: 'infinite-parallax-gallery-large',
    path: path.join(
      __dirname,
      '../app/docs/infinite-parallax-gallery/infinite-parallax-gallery-large.tsx'
    ),
    description: 'Large Minimal Infinite Parallax Gallery.',
    componentName: 'infinite-parallax-gallery-large',
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
    name: 'infinite-parallax-gallery-basic',
    path: path.join(
      __dirname,
      '../app/docs/infinite-parallax-gallery/infinite-parallax-gallery-basic.tsx'
    ),
    description: 'Basic Infinite Parallax Gallery.',
    componentName: 'infinite-parallax-gallery-basic',
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
    name: 'timed-cards-basic',
    path: path.join(
      __dirname,
      '../app/docs/timed-cards/timed-cards-basic.tsx'
    ),
    description: 'Basic Timed Cards Gallery.',
    componentName: 'timed-cards-basic',
    files: [
      {
        name: 'timed-cards.tsx',
        path: path.join(
          __dirname,
          '../components/core/timed-cards.tsx'
        ),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'grid-newspaper-basic',
    path: path.join(
      __dirname,
      '../app/docs/grid-newspaper/grid-newspaper-basic.tsx'
    ),
    description: 'Basic Grid Newspaper Layout.',
    componentName: 'grid-newspaper-basic',
    files: [
      {
        name: 'grid-newspaper.css',
        path: path.join(__dirname, '../components/core/grid-newspaper.css'),
        type: 'registry:ui',
      },
      {
        name: 'grid-newspaper.tsx',
        path: path.join(__dirname, '../components/core/grid-newspaper.tsx'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'newspaper-basic',
    path: path.join(__dirname, '../app/docs/newspaper/newspaper-basic.tsx'),
    description: 'Basic Newspaper Layout.',
    componentName: 'newspaper-basic',
    files: [
      {
        name: 'newspaper.css',
        path: path.join(__dirname, '../components/core/newspaper.css'),
        type: 'registry:ui',
      },
      {
        name: 'newspaper.tsx',
        path: path.join(__dirname, '../components/core/newspaper.tsx'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'animated-image-grid-basic',
    path: path.join(
      __dirname,
      '../app/docs/animated-image-grid/animated-image-grid-basic.tsx'
    ),
    description: 'Basic Animated Image Grid.',
    componentName: 'animated-image-grid-basic',
    files: [
      {
        name: 'animated-image-grid.css',
        path: path.join(
          __dirname,
          '../components/core/animated-image-grid.css'
        ),
        type: 'registry:ui',
      },
      {
        name: 'animated-image-grid.tsx',
        path: path.join(
          __dirname,
          '../components/core/animated-image-grid.tsx'
        ),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'holographic-card-basic',
    path: path.join(
      __dirname,
      '../app/docs/holographic-card/holographic-card-basic.tsx'
    ),
    description: 'Basic Holographic Card.',
    componentName: 'holographic-card-basic',
    files: [
      {
        name: 'holographic-card.css',
        path: path.join(__dirname, '../components/core/holographic-card.css'),
        type: 'registry:ui',
      },
      {
        name: 'holographic-card.tsx',
        path: path.join(__dirname, '../components/core/holographic-card.tsx'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'hexagon-grid-basic',
    path: path.join(
      __dirname,
      '../app/docs/hexagon-grid/hexagon-grid-basic.tsx'
    ),
    description: 'Basic Interlocking Hexagon Grid.',
    componentName: 'hexagon-grid-basic',
    files: [
      {
        name: 'hexagon-grid.css',
        path: path.join(__dirname, '../components/core/hexagon-grid.css'),
        type: 'registry:ui',
      },
      {
        name: 'hexagon-grid.tsx',
        path: path.join(__dirname, '../components/core/hexagon-grid.tsx'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'testimonial-card-basic',
    path: path.join(
      __dirname,
      '../app/docs/testimonial-card/testimonial-card-basic.tsx'
    ),
    description: 'Grid layout of speech bubble testimonial cards.',
    componentName: 'testimonial-card-basic',
    files: [
      {
        name: 'testimonial-card.tsx',
        path: path.join(__dirname, '../components/core/testimonial-card.tsx'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'day-range-basic',
    path: path.join(__dirname, '../app/docs/day-range/day-range-basic.tsx'),
    description: 'Basic Day Range.',
    componentName: 'day-range-basic',
    files: [
      {
        name: 'day-range.tsx',
        path: path.join(__dirname, '../components/core/day-range.tsx'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'kpi-basic',
    path: path.join(__dirname, '../app/docs/kpi-card/kpi-basic.tsx'),
    description: 'Basic KPI Card.',
    componentName: 'kpi-basic',
    files: [
      {
        name: 'kpi-card.tsx',
        path: path.join(__dirname, '../components/core/kpi-card.tsx'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'kpi-negative',
    path: path.join(__dirname, '../app/docs/kpi-card/kpi-negative.tsx'),
    description: 'Negative trend KPI Card.',
    componentName: 'kpi-negative',
    files: [
      {
        name: 'kpi-card.tsx',
        path: path.join(__dirname, '../components/core/kpi-card.tsx'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'kpi-flat',
    path: path.join(__dirname, '../app/docs/kpi-card/kpi-flat.tsx'),
    description: 'Flat trend KPI Card.',
    componentName: 'kpi-flat',
    files: [
      {
        name: 'kpi-card.tsx',
        path: path.join(__dirname, '../components/core/kpi-card.tsx'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'leaderboard-first',
    path: path.join(__dirname, '../app/docs/leaderboard-card/lb-first.tsx'),
    description: 'First place card using emerald tone and crown.',
    componentName: 'leaderboard-first',
    files: [
      {
        name: 'leaderboard-card.tsx',
        path: path.join(__dirname, '../components/core/leaderboard-card.tsx'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'leaderboard-second',
    path: path.join(__dirname, '../app/docs/leaderboard-card/lb-second.tsx'),
    description: 'Second place card using blue tone.',
    componentName: 'leaderboard-second',
    files: [
      {
        name: 'leaderboard-card.tsx',
        path: path.join(__dirname, '../components/core/leaderboard-card.tsx'),
        type: 'registry:ui',
      },
    ],
  },

  {
    name: 'rds-basic',
    path: path.join(__dirname, '../app/docs/radial-dots-spinner/rds-basic.tsx'),
    description: 'Basic spinner on dark background.',
    componentName: 'rds-basic',
    files: [
      {
        name: 'radial-dots-spinner.tsx',
        path: path.join(
          __dirname,
          '../components/core/radial-dots-spinner.tsx'
        ),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'rds-slow-blue',
    path: path.join(
      __dirname,
      '../app/docs/radial-dots-spinner/rds-slow-blue.tsx'
    ),
    description: 'Slow blue variant.',
    componentName: 'rds-slow-blue',
    files: [
      {
        name: 'radial-dots-spinner.tsx',
        path: path.join(
          __dirname,
          '../components/core/radial-dots-spinner.tsx'
        ),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'rds-compact',
    path: path.join(
      __dirname,
      '../app/docs/radial-dots-spinner/rds-compact.tsx'
    ),
    description: 'Compact density with one center ring.',
    componentName: 'rds-compact',
    files: [
      {
        name: 'radial-dots-spinner.tsx',
        path: path.join(
          __dirname,
          '../components/core/radial-dots-spinner.tsx'
        ),
        type: 'registry:ui',
      },
    ],
  },

  {
    name: 'crs-basic',
    path: path.join(
      __dirname,
      '../app/docs/concentric-rings-spinner/crs-basic.tsx'
    ),
    description: 'Basic spinner on dark background.',
    componentName: 'crs-basic',
    files: [
      {
        name: 'concentric-rings-spinner.tsx',
        path: path.join(
          __dirname,
          '../components/core/concentric-rings-spinner.tsx'
        ),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'crs-dense',
    path: path.join(
      __dirname,
      '../app/docs/concentric-rings-spinner/crs-dense.tsx'
    ),
    description: 'Higher density variant.',
    componentName: 'crs-dense',
    files: [
      {
        name: 'concentric-rings-spinner.tsx',
        path: path.join(
          __dirname,
          '../components/core/concentric-rings-spinner.tsx'
        ),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'crs-perspective',
    path: path.join(
      __dirname,
      '../app/docs/concentric-rings-spinner/crs-perspective.tsx'
    ),
    description: 'Tapered radii + outer fade for depth.',
    componentName: 'crs-perspective',
    files: [
      {
        name: 'concentric-rings-spinner.tsx',
        path: path.join(
          __dirname,
          '../components/core/concentric-rings-spinner.tsx'
        ),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'spinner-sequential-pulse-basic',
    path: path.join(
      __dirname,
      '../app/docs/spinner-sequential-pulse/spinner-sequential-pulse-basic.tsx'
    ),
    description: 'Basic usage of the Sequential Pulse spinner.',
    componentName: 'spinner-sequential-pulse-basic',
    files: [
      {
        name: 'spinner-sequential-pulse.tsx',
        path: path.join(
          __dirname,
          '../components/core/spinner-sequential-pulse.tsx'
        ),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'spinner-sequential-pulse-variants',
    path: path.join(
      __dirname,
      '../app/docs/spinner-sequential-pulse/spinner-sequential-pulse-variants.tsx'
    ),
    description: 'Variant showcase for the Sequential Pulse spinner.',
    componentName: 'spinner-sequential-pulse-variants',
    files: [
      {
        name: 'spinner-sequential-pulse.tsx',
        path: path.join(
          __dirname,
          '../components/core/spinner-sequential-pulse.tsx'
        ),
        type: 'registry:ui',
      },
    ],
  },

  {
    name: 'testimonial-basic',
    path: path.join(__dirname, '../app/docs/testimonial/testimonial-basic.tsx'),
    description:
      'Basic implementation of the testimonial carousel with avatar, name, role, and quote.',
    componentName: 'testimonial-basic',
    files: [
      {
        name: 'testimonial.tsx',
        path: path.join(__dirname, '../components/core/testimonial.tsx'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'testimonial-custom',
    path: path.join(
      __dirname,
      '../app/docs/testimonial/testimonial-custom.tsx'
    ),
    description:
      'Custom slide example showing how developers can override rendering with their own nodes.',
    componentName: 'testimonial-custom',
    files: [
      {
        name: 'testimonial.tsx',
        path: path.join(__dirname, '../components/core/testimonial.tsx'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'blog-card-one-basic',
    path: path.join(
      __dirname,
      '../app/docs/blog-card-one/blog-card-one-basic.tsx'
    ),
    description:
      'Modern layout with image on the left, actions, and author meta.',
    componentName: 'blog-card-one-basic',
    files: [
      {
        name: 'blog-card-one.tsx',
        path: path.join(__dirname, '../components/core/blog-card-one.tsx'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'blog-card-one-compact',
    path: path.join(
      __dirname,
      '../app/docs/blog-card-one/blog-card-one-compact.tsx'
    ),
    description: 'Compact layout with the image on top; great for grids.',
    componentName: 'blog-card-one-compact',
    files: [
      {
        name: 'blog-card-one.tsx',
        path: path.join(__dirname, '../components/core/blog-card-one.tsx'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'blog-card-two-basic',
    path: path.join(
      __dirname,
      '../app/docs/blog-card-two/blog-card-two-basic.tsx'
    ),
    description: 'Default bottom gradient overlay.',
    componentName: 'blog-card-two-basic',
    files: [
      {
        name: 'blog-card-two.tsx',
        path: path.join(__dirname, '../components/core/blog-card-two.tsx'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'blog-card-two-contrast',
    path: path.join(
      __dirname,
      '../app/docs/blog-card-two/blog-card-two-contrast.tsx'
    ),
    description: 'Center fade overlay variant with custom gradient.',
    componentName: 'blog-card-two-contrast',
    files: [
      {
        name: 'blog-card-two.tsx',
        path: path.join(__dirname, '../components/core/blog-card-two.tsx'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'blog-card-three-right',
    path: path.join(
      __dirname,
      '../app/docs/blog-card-three/blog-card-three-right.tsx'
    ),
    description: 'Thumbnail on the right (default).',
    componentName: 'blog-card-three-right',
    files: [
      {
        name: 'blog-card-three.tsx',
        path: path.join(__dirname, '../components/core/blog-card-three.tsx'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'blog-card-three-left',
    path: path.join(
      __dirname,
      '../app/docs/blog-card-three/blog-card-three-left.tsx'
    ),
    description: 'Thumbnail on the left.',
    componentName: 'blog-card-three-left',
    files: [
      {
        name: 'blog-card-three.tsx',
        path: path.join(__dirname, '../components/core/blog-card-three.tsx'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'blog-card-four-basic',
    path: path.join(
      __dirname,
      '../app/docs/blog-card-four/blog-card-four-basic.tsx'
    ),
    description: 'Attached panel variant (default).',
    componentName: 'blog-card-four-basic',
    files: [
      {
        name: 'blog-card-four.tsx',
        path: path.join(__dirname, '../components/core/blog-card-four.tsx'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'blog-card-four-muted',
    path: path.join(
      __dirname,
      '../app/docs/blog-card-four/blog-card-four-muted.tsx'
    ),
    description: 'Flush panel variant.',
    componentName: 'blog-card-four-muted',
    files: [
      {
        name: 'blog-card-four.tsx',
        path: path.join(__dirname, '../components/core/blog-card-four.tsx'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'tr-basic',
    path: path.join(__dirname, '../app/docs/timeline-rail/tr-basic.tsx'),
    description: 'Decades example (like screenshot).',
    componentName: 'tr-basic',
    files: [
      {
        name: 'timeline-rail.tsx',
        path: path.join(__dirname, '../components/core/timeline-rail.tsx'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'tr-compact',
    path: path.join(__dirname, '../app/docs/timeline-rail/tr-compact.tsx'),
    description: 'Compact version with smaller gap and thickness.',
    componentName: 'tr-compact',
    files: [
      {
        name: 'timeline-rail.tsx',
        path: path.join(__dirname, '../components/core/timeline-rail.tsx'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'tr-custom',
    path: path.join(__dirname, '../app/docs/timeline-rail/tr-custom.tsx'),
    description: 'Custom renderers and emerald theme.',
    componentName: 'tr-custom',
    files: [
      {
        name: 'timeline-rail.tsx',
        path: path.join(__dirname, '../components/core/timeline-rail.tsx'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'pc1-basic',
    path: path.join(__dirname, '../app/docs/pricing-card-one/pc1-basic.tsx'),
    description: 'Two plan example (Basic + Pro).',
    componentName: 'pc1-basic',
    files: [
      {
        name: 'pricing-card-one.tsx',
        path: path.join(__dirname, '../components/core/pricing-card-one.tsx'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'pc2-basic',
    path: path.join(__dirname, '../app/docs/pricing-card-two/pc2-basic.tsx'),
    description: 'Three cards (Personal / Team / Business).',
    componentName: 'pc2-basic',
    files: [
      {
        name: 'pricing-card-two.tsx',
        path: path.join(__dirname, '../components/core/pricing-card-two.tsx'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'chevron-steps-basic',
    path: path.join(
      __dirname,
      '../app/docs/chevron-steps/chevron-steps-basic.tsx'
    ),
    description: 'Brand variant like the reference screenshot.',
    componentName: 'chevron-steps-basic',
    files: [
      {
        name: 'chevron-steps.tsx',
        path: path.join(__dirname, '../components/core/chevron-steps.tsx'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'chevron-steps-progress',
    path: path.join(
      __dirname,
      '../app/docs/chevron-steps/chevron-steps-progress.tsx'
    ),
    description: 'Interactive progress with Prev/Next.',
    componentName: 'chevron-steps-progress',
    files: [
      {
        name: 'chevron-steps.tsx',
        path: path.join(__dirname, '../components/core/chevron-steps.tsx'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'chevron-steps-neutral',
    path: path.join(
      __dirname,
      '../app/docs/chevron-steps/chevron-steps-neutral.tsx'
    ),
    description: 'Neutral, large variant.',
    componentName: 'chevron-steps-neutral',
    files: [
      {
        name: 'chevron-steps.tsx',
        path: path.join(__dirname, '../components/core/chevron-steps.tsx'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'text-circle-scroll-basic',
    path: path.join(
      __dirname,
      '../app/docs/text-circle-scroll/text-circle-basic.tsx'
    ),
    description: 'Scroll-driven rotation with serif words around the ring.',
    componentName: 'text-circle-basic',
    files: [
      {
        name: 'text-circle-scroll.tsx',
        path: path.join(__dirname, '../components/core/text-circle-scroll.tsx'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'text-circle-scroll-auto',
    path: path.join(
      __dirname,
      '../app/docs/text-circle-scroll/text-circle-auto.tsx'
    ),
    description: 'Auto-spin demo (no scroll binding), counter-clockwise.',
    componentName: 'text-circle-auto',
    files: [
      {
        name: 'text-circle-scroll.tsx',
        path: path.join(__dirname, '../components/core/text-circle-scroll.tsx'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'text-circle-scroll-nodes',
    path: path.join(
      __dirname,
      '../app/docs/text-circle-scroll/text-circle-nodes.tsx'
    ),
    description: 'Custom React nodes (uppercase labels) + mixed scroll/auto.',
    componentName: 'text-circle-nodes',
    files: [
      {
        name: 'text-circle-scroll.tsx',
        path: path.join(__dirname, '../components/core/text-circle-scroll.tsx'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'shimmer-basic',
    path: path.join(__dirname, '../app/docs/shimmer/shimmer-basic.tsx'),
    description: 'Simple line skeletons.',
    componentName: 'shimmer-basic',
    files: [
      {
        name: 'shimmer-skeleton.tsx',
        path: path.join(__dirname, '../components/core/shimmer-skeleton.tsx'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'shimmer-card',
    path: path.join(__dirname, '../app/docs/shimmer/shimmer-card.tsx'),
    description: 'Card placeholders.',
    componentName: 'shimmer-card',
    files: [
      {
        name: 'shimmer-skeleton.tsx',
        path: path.join(__dirname, '../components/core/shimmer-skeleton.tsx'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'phone-icon-basic',
    path: path.join(__dirname, '../app/docs/icons/phone-icon-basic.tsx'),
    description: 'Basic usage of the Phone Icon.',
    componentName: 'phone-icon-basic',
    files: [
      {
        name: 'phone-icon.tsx',
        path: path.join(__dirname, '../components/core/phone-icon.tsx'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'rocket-icon-basic',
    path: path.join(__dirname, '../app/docs/icons/rocket-icon-basic.tsx'),
    description: 'Basic usage of the Rocket Icon.',
    componentName: 'rocket-icon-basic',
    files: [
      {
        name: 'rocket-icon.tsx',
        path: path.join(__dirname, '../components/core/rocket-icon.tsx'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'bulb-icon-basic',
    path: path.join(__dirname, '../app/docs/icons/bulb-icon-basic.tsx'),
    description: 'Basic usage of the Bulb Icon.',
    componentName: 'bulb-icon-basic',
    files: [
      {
        name: 'bulb-icon.tsx',
        path: path.join(__dirname, '../components/core/bulb-icon.tsx'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'money-icon-basic',
    path: path.join(__dirname, '../app/docs/icons/money-icon-basic.tsx'),
    description: 'Basic usage of the Money Icon.',
    componentName: 'money-icon-basic',
    files: [
      {
        name: 'money-icon.tsx',
        path: path.join(__dirname, '../components/core/money-icon.tsx'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'refresh-icon-basic',
    path: path.join(__dirname, '../app/docs/icons/refresh-icon-basic.tsx'),
    description: 'Basic usage of the Refresh Icon.',
    componentName: 'refresh-icon-basic',
    files: [
      {
        name: 'refresh-icon.tsx',
        path: path.join(__dirname, '../components/core/refresh-icon.tsx'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'clock-icon-basic',
    path: path.join(__dirname, '../app/docs/icons/clock-icon-basic.tsx'),
    description: 'Basic usage of the Clock Icon.',
    componentName: 'clock-icon-basic',
    files: [
      {
        name: 'clock-icon.tsx',
        path: path.join(__dirname, '../components/core/clock-icon.tsx'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'truck-icon-basic',
    path: path.join(__dirname, '../app/docs/icons/truck-icon-basic.tsx'),
    description: 'Basic usage of the Truck Icon.',
    componentName: 'truck-icon-basic',
    files: [
      {
        name: 'truck-icon.tsx',
        path: path.join(__dirname, '../components/core/truck-icon.tsx'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'network-icon-basic',
    path: path.join(__dirname, '../app/docs/icons/network-icon-basic.tsx'),
    description: 'Basic usage of the Network Icon.',
    componentName: 'network-icon-basic',
    files: [
      {
        name: 'network-icon.tsx',
        path: path.join(__dirname, '../components/core/network-icon.tsx'),
        type: 'registry:ui',
      },
      // Note: Network Icon uses Lucide's User icon, ensuring it's available.
    ],
  },
  {
    name: 'home-icon-basic',
    path: path.join(__dirname, '../app/docs/icons/home-icon-basic.tsx'),
    description: 'Basic usage of the Home Icon.',
    componentName: 'home-icon-basic',
    files: [
      {
        name: 'home-icon.tsx',
        path: path.join(__dirname, '../components/core/home-icon.tsx'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'cart-icon-basic',
    path: path.join(__dirname, '../app/docs/icons/cart-icon-basic.tsx'),
    description: 'Basic usage of the Cart Icon.',
    componentName: 'cart-icon-basic',
    files: [
      {
        name: 'cart-icon.tsx',
        path: path.join(__dirname, '../components/core/cart-icon.tsx'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'shield-check-icon-basic',
    path: path.join(__dirname, '../app/docs/icons/shield-check-icon-basic.tsx'),
    description: 'Basic usage of the Shield Check Icon.',
    componentName: 'shield-check-icon-basic',
    files: [
      {
        name: 'shield-check-icon.tsx',
        path: path.join(__dirname, '../components/core/shield-check-icon.tsx'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'calendar-icon-basic',
    path: path.join(__dirname, '../app/docs/icons/calendar-icon-basic.tsx'),
    description: 'Basic usage of the Calendar Icon.',
    componentName: 'calendar-icon-basic',
    files: [
      {
        name: 'calendar-icon.tsx',
        path: path.join(__dirname, '../components/core/calendar-icon.tsx'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'mobile-store-icon-basic',
    path: path.join(__dirname, '../app/docs/icons/mobile-store-icon-basic.tsx'),
    description: 'Basic usage of the Mobile Store Icon.',
    componentName: 'mobile-store-icon-basic',
    files: [
      {
        name: 'mobile-store-icon.tsx',
        path: path.join(__dirname, '../components/core/mobile-store-icon.tsx'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'balance-icon-basic',
    path: path.join(__dirname, '../app/docs/icons/balance-icon-basic.tsx'),
    description: 'Basic usage of the Balance Icon.',
    componentName: 'balance-icon-basic',
    files: [
      {
        name: 'balance-icon.tsx',
        path: path.join(__dirname, '../components/core/balance-icon.tsx'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'building-icon-basic',
    path: path.join(__dirname, '../app/docs/icons/building-icon-basic.tsx'),
    description: 'Basic usage of the Building Icon.',
    componentName: 'building-icon-basic',
    files: [
      {
        name: 'building-icon.tsx',
        path: path.join(__dirname, '../components/core/building-icon.tsx'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'global-icon-basic',
    path: path.join(__dirname, '../app/docs/icons/global-icon-basic.tsx'),
    description: 'Basic usage of the Global Icon.',
    componentName: 'global-icon-basic',
    files: [
      {
        name: 'global-icon.tsx',
        path: path.join(__dirname, '../components/core/global-icon.tsx'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'user-icon-basic',
    path: path.join(__dirname, '../app/docs/icons/user-icon-basic.tsx'),
    description: 'Basic usage of the User Icon.',
    componentName: 'user-icon-basic',
    files: [
      {
        name: 'user-icon.tsx',
        path: path.join(__dirname, '../components/core/user-icon.tsx'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'global-search-icon-basic',
    path: path.join(
      __dirname,
      '../app/docs/icons/global-search-icon-basic.tsx'
    ),
    description: 'Basic usage of the Global Search Icon.',
    componentName: 'global-search-icon-basic',
    files: [
      {
        name: 'global-search-icon.tsx',
        path: path.join(__dirname, '../components/core/global-search-icon.tsx'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'tools-icon-basic',
    path: path.join(__dirname, '../app/docs/icons/tools-icon-basic.tsx'),
    description: 'Basic usage of the Tools Icon.',
    componentName: 'tools-icon-basic',
    files: [
      {
        name: 'tools-icon.tsx',
        path: path.join(__dirname, '../components/core/tools-icon.tsx'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'trophy-icon-basic',
    path: path.join(__dirname, '../app/docs/icons/trophy-icon-basic.tsx'),
    description: 'Basic usage of the Trophy Icon.',
    componentName: 'trophy-icon-basic',
    files: [
      {
        name: 'trophy-icon.tsx',
        path: path.join(__dirname, '../components/core/trophy-icon.tsx'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'microphone-icon-basic',
    path: path.join(__dirname, '../app/docs/icons/microphone-icon-basic.tsx'),
    description: 'Basic usage of the Microphone Icon.',
    componentName: 'microphone-icon-basic',
    files: [
      {
        name: 'microphone-icon.tsx',
        path: path.join(__dirname, '../components/core/microphone-icon.tsx'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'like-icon-basic',
    path: path.join(__dirname, '../app/docs/icons/like-icon-basic.tsx'),
    description: 'Basic usage of the Like Icon.',
    componentName: 'like-icon-basic',
    files: [
      {
        name: 'like-icon.tsx',
        path: path.join(__dirname, '../components/core/like-icon.tsx'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'bell-icon-basic',
    path: path.join(__dirname, '../app/docs/icons/bell-icon-basic.tsx'),
    description: 'Basic usage of the Bell Icon.',
    componentName: 'bell-icon-basic',
    files: [
      {
        name: 'bell-icon.tsx',
        path: path.join(__dirname, '../components/core/bell-icon.tsx'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'heart-icon-basic',
    path: path.join(__dirname, '../app/docs/icons/heart-icon-basic.tsx'),
    description: 'Basic usage of the Heart Icon.',
    componentName: 'heart-icon-basic',
    files: [
      {
        name: 'heart-icon.tsx',
        path: path.join(__dirname, '../components/core/heart-icon.tsx'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'trash-icon-basic',
    path: path.join(__dirname, '../app/docs/icons/trash-icon-basic.tsx'),
    description: 'Basic usage of the Trash Icon.',
    componentName: 'trash-icon-basic',
    files: [
      {
        name: 'trash-icon.tsx',
        path: path.join(__dirname, '../components/core/trash-icon.tsx'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'share-icon-basic',
    path: path.join(__dirname, '../app/docs/icons/share-icon-basic.tsx'),
    description: 'Basic usage of the Share Icon.',
    componentName: 'share-icon-basic',
    files: [
      {
        name: 'share-icon.tsx',
        path: path.join(__dirname, '../components/core/share-icon.tsx'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'paper-plane-icon-basic',
    path: path.join(__dirname, '../app/docs/icons/paper-plane-icon-basic.tsx'),
    description: 'Basic usage of the Paper Plane Icon.',
    componentName: 'paper-plane-icon-basic',
    files: [
      {
        name: 'paper-plane-icon.tsx',
        path: path.join(__dirname, '../components/core/paper-plane-icon.tsx'),
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'mail-stack-icon-basic',
    path: path.join(__dirname, '../app/docs/icons/mail-stack-icon-basic.tsx'),
    description: 'Basic usage of the Mail Stack Icon.',
    componentName: 'mail-stack-icon-basic',
    files: [
      {
        name: 'mail-stack-icon.tsx',
        path: path.join(__dirname, '../components/core/mail-stack-icon.tsx'),
        type: 'registry:ui',
      },
    ],
  },
];
