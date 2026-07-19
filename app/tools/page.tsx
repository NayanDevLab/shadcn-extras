'use client';

import React, { useEffect, useState } from 'react';
import {
  AlignLeft,
  Blend,
  CreditCard,
  Droplets,
  Grid3x3,
  Layers,
  MousePointerClick,
  Palette,
  Scroll,
  Table2,
  Tag,
  TextCursorInput,
  Type,
  Waves,
  Wrench,
} from 'lucide-react';

import { BadgeGenerator } from '@/components/tools/badge-generator';
import { ButtonGenerator } from '@/components/tools/button-generator';
import { CardGenerator } from '@/components/tools/card-generator';
import { GlassmorphismGenerator } from '@/components/tools/glassmorphism-generator';
import { GradientGenerator } from '@/components/tools/gradient-generator';
import { GradientMeshGenerator } from '@/components/tools/gradient-mesh-generator';
import { InputGenerator } from '@/components/tools/input-generator';
import { NoiseGenerator } from '@/components/tools/noise-generator';
import { PatternGenerator } from '@/components/tools/pattern-generator';
import { ScrollbarGenerator } from '@/components/tools/scrollbar-generator';
import { ShadowGenerator } from '@/components/tools/shadow-generator';
import { SkeletonGenerator } from '@/components/tools/skeleton-generator';
import { TableGenerator } from '@/components/tools/table-generator';
import { TextGradientGenerator } from '@/components/tools/text-gradient-generator';
import { cn } from '@/lib/utils';

interface Tool {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  component: React.ComponentType;
}

interface ToolCategory {
  name: string;
  tools: Tool[];
}

const CATEGORIES: ToolCategory[] = [
  {
    name: 'UI Elements',
    tools: [
      {
        id: 'button',
        name: 'Button',
        description: 'Colors, radius, padding, shadow and hover effects.',
        icon: MousePointerClick,
        component: ButtonGenerator,
      },
      {
        id: 'input',
        name: 'Input',
        description: 'Borders and a live-testable focus ring.',
        icon: TextCursorInput,
        component: InputGenerator,
      },
      {
        id: 'card',
        name: 'Card',
        description: 'Border, radius, shadow presets and hover lift.',
        icon: CreditCard,
        component: CardGenerator,
      },
      {
        id: 'table',
        name: 'Table',
        description: 'Striped, hover, bordered and compact styles.',
        icon: Table2,
        component: TableGenerator,
      },
      {
        id: 'badge',
        name: 'Badge',
        description: 'Solid or soft-tinted, pill shape, status dot.',
        icon: Tag,
        component: BadgeGenerator,
      },
    ],
  },
  {
    name: 'Effects & Styles',
    tools: [
      {
        id: 'shadow',
        name: 'Shadow',
        description: 'Layered box-shadows with opacity and inset.',
        icon: Layers,
        component: ShadowGenerator,
      },
      {
        id: 'glassmorphism',
        name: 'Glassmorphism',
        description: 'Frosted glass — blur, opacity and saturation.',
        icon: Droplets,
        component: GlassmorphismGenerator,
      },
      {
        id: 'text-gradient',
        name: 'Text Gradient',
        description: 'Gradient headlines with bg-clip-text.',
        icon: Type,
        component: TextGradientGenerator,
      },
      {
        id: 'skeleton',
        name: 'Skeleton',
        description: 'Shimmer loading placeholders with keyframes.',
        icon: AlignLeft,
        component: SkeletonGenerator,
      },
      {
        id: 'scrollbar',
        name: 'Scrollbar',
        description: 'Custom cross-browser scrollbar styling.',
        icon: Scroll,
        component: ScrollbarGenerator,
      },
    ],
  },
  {
    name: 'Backgrounds',
    tools: [
      {
        id: 'gradient',
        name: 'Gradient',
        description: 'Linear, radial and conic gradients.',
        icon: Palette,
        component: GradientGenerator,
      },
      {
        id: 'mesh',
        name: 'Gradient Mesh',
        description: 'Soft multi-point mesh gradients.',
        icon: Blend,
        component: GradientMeshGenerator,
      },
      {
        id: 'pattern',
        name: 'Pattern',
        description: 'Dots, grids and geometric CSS patterns.',
        icon: Grid3x3,
        component: PatternGenerator,
      },
      {
        id: 'noise',
        name: 'Noise & Grain',
        description: 'Subtle SVG noise textures.',
        icon: Waves,
        component: NoiseGenerator,
      },
    ],
  },
];

const ALL_TOOLS = CATEGORIES.flatMap((category) => category.tools);

export default function ToolsPage() {
  const [selectedId, setSelectedId] = useState(ALL_TOOLS[0].id);

  // Support deep links like /tools#glassmorphism
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && ALL_TOOLS.some((tool) => tool.id === hash)) {
      setSelectedId(hash);
    }
  }, []);

  const selectTool = (id: string) => {
    setSelectedId(id);
    window.history.replaceState(null, '', `#${id}`);
  };

  const selected =
    ALL_TOOLS.find((tool) => tool.id === selectedId) ?? ALL_TOOLS[0];
  const SelectedComponent = selected.component;

  return (
    <div className='min-h-screen bg-zinc-50 dark:bg-zinc-950'>
      <main className='mx-auto max-w-7xl space-y-10 px-6 py-12'>
        <div className='max-w-2xl space-y-3'>
          <div className='inline-flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-800 dark:text-zinc-400'>
            <Wrench className='size-3.5' />
            Developer Tools
          </div>
          <h1 className='text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50'>
            {ALL_TOOLS.length} visual generators, one page
          </h1>
          <p className='text-zinc-600 dark:text-zinc-400'>
            Design buttons, cards, shadows, gradients and more with live
            previews — then copy the Tailwind classes or CSS straight into
            your project.
          </p>
        </div>

        <div className='space-y-6'>
          {CATEGORIES.map((category) => (
            <div key={category.name} className='space-y-3'>
              <h2 className='text-xs font-semibold tracking-wider text-zinc-400 uppercase dark:text-zinc-500'>
                {category.name}
              </h2>
              <div className='grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5'>
                {category.tools.map((tool) => {
                  const Icon = tool.icon;
                  const active = tool.id === selectedId;
                  return (
                    <button
                      key={tool.id}
                      type='button'
                      onClick={() => selectTool(tool.id)}
                      aria-pressed={active}
                      className={cn(
                        'flex flex-col gap-1.5 rounded-xl border p-4 text-left transition-all hover:-translate-y-0.5 hover:shadow-md',
                        active
                          ? 'border-blue-500 bg-blue-50 ring-1 ring-blue-500 dark:bg-blue-950/40'
                          : 'border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900'
                      )}
                    >
                      <Icon
                        className={cn(
                          'size-5',
                          active
                            ? 'text-blue-600 dark:text-blue-400'
                            : 'text-zinc-500 dark:text-zinc-400'
                        )}
                      />
                      <span className='text-sm font-semibold text-zinc-900 dark:text-zinc-100'>
                        {tool.name}
                      </span>
                      <span className='line-clamp-2 text-xs text-zinc-500 dark:text-zinc-400'>
                        {tool.description}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className='space-y-4 border-t border-zinc-200 pt-8 dark:border-zinc-800'>
          <div>
            <h2 className='text-xl font-bold text-zinc-900 dark:text-zinc-50'>
              {selected.name} Generator
            </h2>
            <p className='text-sm text-zinc-500 dark:text-zinc-400'>
              {selected.description}
            </p>
          </div>
          <SelectedComponent />
        </div>
      </main>
    </div>
  );
}
