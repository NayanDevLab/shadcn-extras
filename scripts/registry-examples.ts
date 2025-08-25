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
];
