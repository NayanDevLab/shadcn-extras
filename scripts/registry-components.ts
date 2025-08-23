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

];
