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
];
