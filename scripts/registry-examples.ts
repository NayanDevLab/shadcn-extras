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
    name: 'accordion-basic',
    path: path.join(__dirname, '../app/docs/accordion/accordion-basic.tsx'),
    description:
      'Basic implementation of the accordion component with default styles.',
    componentName: 'accordion-basic',
    files: [
      {
        name: 'accordion.tsx',
        path: path.join(__dirname, '../components/core/accordion.tsx'),
        type: 'registry:ui',
      },
    ],
  },

  {
    name: 'accordion-icons',
    path: path.join(__dirname, '../app/docs/accordion/accordion-icons.tsx'),
    description:
      'Accordion implementation with custom icons that animate on state change.',
    componentName: 'accordion-icons',
    files: [
      {
        name: 'accordion.tsx',
        path: path.join(__dirname, '../components/core/accordion.tsx'),
        type: 'registry:ui',
      },
    ],
  },

  {
    name: 'accordion-variant',
    path: path.join(__dirname, '../app/docs/accordion/accordion-variant.tsx'),
    description:
      'Styled variant of the accordion component with custom appearance.',
    componentName: 'accordion-variant',
    files: [
      {
        name: 'accordion.tsx',
        path: path.join(__dirname, '../components/core/accordion.tsx'),
        type: 'registry:ui',
      },
    ],
  },

  {
    name: 'animated-card-background-hover',
    path: path.join(
      __dirname,
      '../app/docs/animated-background/animated-card-background-hover.tsx'
    ),
    description: 'Card component with animated background effects on hover.',
    componentName: 'animated-background',
    files: [
      {
        name: 'animated-background.tsx',
        path: path.join(
          __dirname,
          '../components/core/animated-background.tsx'
        ),
        type: 'registry:ui',
      },
    ],
  },

  {
    name: 'animated-tabs-hover',
    path: path.join(
      __dirname,
      '../app/docs/animated-background/animated-tabs-hover.tsx'
    ),
    description: 'Animated background tabs that respond to hover interactions.',
    componentName: 'animated-background',
    files: [
      {
        name: 'animated-background.tsx',
        path: path.join(
          __dirname,
          '../components/core/animated-background.tsx'
        ),
        type: 'registry:ui',
      },
    ],
  },

  {
    name: 'animated-tabs',
    path: path.join(
      __dirname,
      '../app/docs/animated-background/animated-tabs.tsx'
    ),
    description:
      'Tab interface with animated background highlighting the active tab.',
    componentName: 'animated-background',
    files: [
      {
        name: 'animated-background.tsx',
        path: path.join(
          __dirname,
          '../components/core/animated-background.tsx'
        ),
        type: 'registry:ui',
      },
    ],
  },

  {
    name: 'segmented-control',
    path: path.join(
      __dirname,
      '../app/docs/animated-background/segmented-control.tsx'
    ),
    description:
      'Segmented control UI element with animated background transitions.',
    componentName: 'segmented-control',
    files: [
      {
        name: 'animated-background.tsx',
        path: path.join(
          __dirname,
          '../components/core/animated-background.tsx'
        ),
      },
    ],
  },

  {
    name: 'animated-group-custom-variants-2',
    path: path.join(
      __dirname,
      '../app/docs/animated-group/animated-group-custom-variants-2.tsx'
    ),
    description:
      'Advanced custom variants for animated groups with additional animations.',
    componentName: 'animated-group-custom-variants-2',
    files: [
      {
        name: 'animated-group.tsx',
        path: path.join(__dirname, '../components/core/animated-group.tsx'),
      },
    ],
  },

  {
    name: 'animated-group-custom-variants',
    path: path.join(
      __dirname,
      '../app/docs/animated-group/animated-group-custom-variants.tsx'
    ),
    description: 'Custom animation variants for the animated group component.',
    componentName: 'animated-group-custom-variants',
    files: [
      {
        name: 'animated-group.tsx',
        path: path.join(__dirname, '../components/core/animated-group.tsx'),
      },
    ],
  },

  {
    name: 'animated-group-preset',
    path: path.join(
      __dirname,
      '../app/docs/animated-group/animated-group-preset.tsx'
    ),
    description: 'Preset animations for the animated group component.',
    componentName: 'animated-group-preset',
    files: [
      {
        name: 'animated-group.tsx',
        path: path.join(__dirname, '../components/core/animated-group.tsx'),
      },
    ],
  },
];
