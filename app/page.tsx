import Link from 'next/link';
import React from 'react';
import XIcon from '@/components/website/icons/x';
import GitHubIcon from '@/components/website/icons/github';
import ThemeSwitch from '@/components/website/theme-switch';
import {
  ChevronRight,
  Zap,
  Layers,
  Code2,
  Paintbrush,
  Palette,
  Sparkles,
  Wrench,
  ArrowRight,
} from 'lucide-react';
import { CardExampleLanding } from '@/components/website/card-example-landing';
import { SELogo } from '@/components/website/icons/shadcn-extras-logo';
import LinkedinIcon from '@/components/website/icons/LinkedinIcon';

// Showcase Components
import { InfiniteParallaxGalleryBasic } from './docs/infinite-parallax-gallery/infinite-parallax-gallery-basic';
import { HolographicCardBasic } from './docs/holographic-card/holographic-card-basic';
import { GridNewspaperBasic } from './docs/grid-newspaper/grid-newspaper-basic';
import { CircularGalleryBasic } from './docs/circular-gallery/circular-gallery-basic';

function Button({
  children,
  variant = 'primary',
}: {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}) {
  const buttonVariants = {
    primary:
      'bg-zinc-950 border border-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-200 dark:text-zinc-950 dark:border-zinc-100',
    secondary:
      'bg-zinc-100 text-zinc-950 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:text-zinc-50 border border-zinc-200 dark:border-zinc-800',
  };

  return (
    <button
      className={`inline-flex items-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${buttonVariants[variant]}`}
    >
      {children}
    </button>
  );
}

function Header() {
  return (
    <header className='border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b px-6 py-3 backdrop-blur lg:px-8'>
      <div className='mx-auto flex w-full items-center justify-between md:max-w-7xl'>
        <a href='/' className='relative flex items-center space-x-2'>
          <SELogo className='h-6 w-auto' />
          <div className='text-sm font-bold text-zinc-950 dark:text-white'>
            shadcn-extras
          </div>
        </a>

        <div className='flex items-center space-x-6'>
          <nav className='hidden items-center space-x-6 sm:flex'>
            <Link
              href='/docs/infinite-parallax-gallery'
              className='text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white'
            >
              Components
            </Link>
            <Link
              href='/tools'
              className='text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white'
            >
              Tools
            </Link>
            <Link
              href='/themes'
              className='text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white'
            >
              Themes
            </Link>
            <Link
              href='/theme-generator'
              className='flex items-center gap-1.5 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300'
            >
              AI Themes
              <span className='relative flex h-2 w-2'>
                <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75'></span>
                <span className='relative inline-flex h-2 w-2 rounded-full bg-blue-500'></span>
              </span>
            </Link>
            <a
              href='https://NayanDevLab.github.io/shadcn-extras/storybook/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white'
            >
              StoryBook
            </a>
          </nav>
          <div className='hidden h-6 w-px bg-zinc-200 sm:flex dark:bg-zinc-800' />
          <nav className='flex items-center space-x-2'>
            <a
              href='https://www.linkedin.com/in/nayanradadiya/'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800'
            >
              <LinkedinIcon className='h-4 w-4 fill-zinc-950 dark:fill-white' />
            </a>
            <a
              href='https://x.com/nayan_radadiya6'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800'
            >
              <XIcon className='h-4 w-4 fill-zinc-950 dark:fill-white' />
            </a>
            <a
              href='https://github.com/NayanDevLab/shadcn-extras'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800'
            >
              <GitHubIcon className='h-4 w-4 fill-zinc-950 dark:fill-white' />
            </a>
            <ThemeSwitch />
          </nav>
        </div>
      </div>
    </header>
  );
}

export default function Motion() {
  return (
    <div className='relative flex min-h-screen flex-col bg-white dark:bg-zinc-950'>
      <Header />

      <main className='flex-1'>
        {/* HERO SECTION */}
        <section className='relative flex flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16 md:pt-32 md:pb-24'>
          {/* Background Gradients */}
          <div className='absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]' />

          <div className='flex w-full max-w-4xl flex-col items-center justify-center text-center'>
            <div className='mb-6 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-sm font-medium text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100'>
              <span className='mr-2 inline-block h-2 w-2 rounded-full bg-emerald-500'></span>
              New: AI Theme Generator, Theme Gallery & 14 Visual Tools
            </div>

            <h1 className='text-5xl font-extrabold tracking-tight text-balance text-zinc-950 sm:text-7xl dark:text-zinc-50'>
              The missing complex UI library for shadcn.
            </h1>

            <p className='mx-auto mt-6 max-w-2xl text-lg text-balance text-zinc-600 sm:text-xl dark:text-zinc-400'>
              While shadcn/ui provides the basic building blocks,{' '}
              <strong className='text-zinc-900 dark:text-white'>
                shadcn-extras
              </strong>{' '}
              gives you fully-realized, jaw-dropping components. Build high-end,
              production-ready layouts that WOW your users instantly.
            </p>

            <div className='mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row'>
              <Link href='/docs/infinite-parallax-gallery'>
                <Button>
                  Explore Components
                  <ChevronRight className='ml-1.5 h-4 w-4' />
                </Button>
              </Link>
              <a
                href='https://github.com/NayanDevLab/shadcn-extras'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Button variant='secondary'>
                  <GitHubIcon className='mr-1.5 h-4 w-4 fill-zinc-950 dark:fill-white' />
                  Star on GitHub
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* COMPARISON SECTION */}
        <section className='mx-auto max-w-5xl px-6 py-16 md:py-24'>
          <div className='grid gap-8 md:grid-cols-2'>
            {/* Shadcn/ui Box */}
            <div className='flex flex-col rounded-2xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900/50'>
              <div className='mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-200 dark:bg-zinc-800'>
                <Code2 className='h-6 w-6 text-zinc-700 dark:text-zinc-300' />
              </div>
              <h3 className='mb-2 text-2xl font-bold text-zinc-950 dark:text-white'>
                shadcn/ui
              </h3>
              <p className='mb-6 text-zinc-600 dark:text-zinc-400'>
                Perfect for simple primitives. Gives you buttons, inputs,
                modals, and dropdowns. Great for standard dashboards.
              </p>
              <ul className='mt-auto space-y-3 text-sm text-zinc-600 dark:text-zinc-400'>
                <li className='flex items-center'>
                  <ChevronRight className='mr-2 h-4 w-4 text-zinc-400' /> Basic
                  DOM Elements
                </li>
                <li className='flex items-center'>
                  <ChevronRight className='mr-2 h-4 w-4 text-zinc-400' />{' '}
                  Standard Flexbox
                </li>
                <li className='flex items-center'>
                  <ChevronRight className='mr-2 h-4 w-4 text-zinc-400' />{' '}
                  Functional focused
                </li>
              </ul>
            </div>

            {/* Shadcn-extras Box */}
            <div className='relative flex flex-col rounded-2xl border border-zinc-950 bg-zinc-950 p-8 text-white dark:border-zinc-800 dark:bg-zinc-900'>
              <div className='absolute -top-4 -right-4 rounded-full bg-indigo-500 px-4 py-1 text-sm font-bold shadow-lg'>
                Built for Impact
              </div>
              <div className='mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-800'>
                <Zap className='h-6 w-6 text-yellow-400' />
              </div>
              <h3 className='mb-2 text-2xl font-bold text-white'>
                shadcn-extras
              </h3>
              <p className='mb-6 text-zinc-300'>
                The WOW factor. Drag and drop WebGL physics, advanced CSS Grid
                layouts, and hardware-accelerated animations into your project
                in seconds.
              </p>
              <ul className='mt-auto space-y-3 text-sm text-zinc-300'>
                <li className='flex items-center'>
                  <Paintbrush className='mr-2 h-4 w-4 text-indigo-400' /> WebGL
                  (Three.js) Integrations
                </li>
                <li className='flex items-center'>
                  <Layers className='mr-2 h-4 w-4 text-indigo-400' /> Advanced
                  CSS Grid Masonry
                </li>
                <li className='flex items-center'>
                  <Zap className='mr-2 h-4 w-4 text-indigo-400' />{' '}
                  Device-orientation Holographics
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* TOOLKIT SECTION */}
        <section className='mx-auto max-w-5xl px-6 py-16 md:py-24'>
          <div className='mb-12 text-center'>
            <h2 className='text-3xl font-bold text-zinc-950 md:text-5xl dark:text-white'>
              More than components. A full toolkit.
            </h2>
            <p className='mt-4 text-lg text-zinc-600 dark:text-zinc-400'>
              Themes, AI generation and visual tools — everything you need to
              design faster.
            </p>
          </div>

          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
            <Link
              href='/themes'
              className='group flex flex-col rounded-2xl border border-zinc-200 bg-zinc-50 p-6 transition-all hover:-translate-y-1 hover:border-violet-500 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900/50'
            >
              <div className='mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-violet-100 dark:bg-violet-900/40'>
                <Palette className='h-6 w-6 text-violet-600 dark:text-violet-400' />
              </div>
              <h3 className='mb-2 text-lg font-bold text-zinc-950 dark:text-white'>
                Theme Gallery
              </h3>
              <p className='mb-4 flex-1 text-sm text-zinc-600 dark:text-zinc-400'>
                11 full-style themes — Glassmorphism, Newspaper, Gaming, Nature
                — with fonts, radius and effects. Copy or download the CSS.
              </p>
              <span className='inline-flex items-center gap-1 text-sm font-semibold text-violet-500 transition-all group-hover:gap-2'>
                Browse themes <ArrowRight className='h-4 w-4' />
              </span>
            </Link>

            <Link
              href='/theme-generator'
              className='group flex flex-col rounded-2xl border border-zinc-200 bg-zinc-50 p-6 transition-all hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900/50'
            >
              <div className='mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/40'>
                <Sparkles className='h-6 w-6 text-blue-600 dark:text-blue-400' />
              </div>
              <h3 className='mb-2 text-lg font-bold text-zinc-950 dark:text-white'>
                AI Theme Generator
              </h3>
              <p className='mb-4 flex-1 text-sm text-zinc-600 dark:text-zinc-400'>
                Describe any aesthetic — or upload a logo, screenshot or photo
                — and AI generates a complete shadcn theme with live preview.
              </p>
              <span className='inline-flex items-center gap-1 text-sm font-semibold text-blue-500 transition-all group-hover:gap-2'>
                Generate a theme <ArrowRight className='h-4 w-4' />
              </span>
            </Link>

            <Link
              href='/tools'
              className='group flex flex-col rounded-2xl border border-zinc-200 bg-zinc-50 p-6 transition-all hover:-translate-y-1 hover:border-emerald-500 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900/50'
            >
              <div className='mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900/40'>
                <Wrench className='h-6 w-6 text-emerald-600 dark:text-emerald-400' />
              </div>
              <h3 className='mb-2 text-lg font-bold text-zinc-950 dark:text-white'>
                14 Visual Generators
              </h3>
              <p className='mb-4 flex-1 text-sm text-zinc-600 dark:text-zinc-400'>
                Buttons, inputs, cards, tables, shadows, glassmorphism,
                skeletons and more — tweak live, copy Tailwind or CSS.
              </p>
              <span className='inline-flex items-center gap-1 text-sm font-semibold text-emerald-500 transition-all group-hover:gap-2'>
                Open the tools <ArrowRight className='h-4 w-4' />
              </span>
            </Link>

            <Link
              href='/tools#gradient'
              className='group flex flex-col rounded-2xl border border-zinc-200 bg-zinc-50 p-6 transition-all hover:-translate-y-1 hover:border-orange-500 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900/50'
            >
              <div className='mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900/40'>
                <Paintbrush className='h-6 w-6 text-orange-600 dark:text-orange-400' />
              </div>
              <h3 className='mb-2 text-lg font-bold text-zinc-950 dark:text-white'>
                Background Studio
              </h3>
              <p className='mb-4 flex-1 text-sm text-zinc-600 dark:text-zinc-400'>
                Gradient, mesh, pattern and noise generators for stunning page
                backgrounds — Tailwind-ready output.
              </p>
              <span className='inline-flex items-center gap-1 text-sm font-semibold text-orange-500 transition-all group-hover:gap-2'>
                Design a background <ArrowRight className='h-4 w-4' />
              </span>
            </Link>
          </div>
        </section>

        {/* SHOWCASE SECTION */}
        <section className='mx-auto max-w-5xl px-6 py-16 md:py-24'>
          <div className='mb-16 text-center'>
            <h2 className='text-3xl font-bold text-zinc-950 md:text-5xl dark:text-white'>
              Build things that stand out.
            </h2>
            <p className='mt-4 text-lg text-zinc-600 dark:text-zinc-400'>
              Check out a few of the high-end components you can add to your
              project right now.
            </p>
          </div>

          <div className='flex flex-col space-y-32'>
            {/* Showcase 1 */}
            <div className='group relative'>
              <div className='mb-6 flex items-center justify-between'>
                <div>
                  <h3 className='text-2xl font-bold text-zinc-950 dark:text-white'>
                    Infinite Parallax Gallery
                  </h3>
                  <p className='text-zinc-500 dark:text-zinc-400'>
                    A highly performant, WebGL-powered 3D infinite scrolling
                    gallery with interactive drag physics.
                  </p>
                </div>
                <Link
                  href='/docs/infinite-parallax-gallery'
                  className='hidden text-sm font-medium text-indigo-500 hover:underline md:block'
                >
                  View Source &rarr;
                </Link>
              </div>
              <CardExampleLanding hasReTrigger={false}>
                <InfiniteParallaxGalleryBasic />
              </CardExampleLanding>
            </div>

            {/* Showcase 2 */}
            <div className='group relative'>
              <div className='mb-6 flex items-center justify-between'>
                <div>
                  <h3 className='text-2xl font-bold text-zinc-950 dark:text-white'>
                    Grid Newspaper Layout
                  </h3>
                  <p className='text-zinc-500 dark:text-zinc-400'>
                    An advanced CSS Grid-based vintage newspaper layout with
                    masonry column spans.
                  </p>
                </div>
                <Link
                  href='/docs/grid-newspaper'
                  className='hidden text-sm font-medium text-indigo-500 hover:underline md:block'
                >
                  View Source &rarr;
                </Link>
              </div>
              <CardExampleLanding hasReTrigger={false}>
                <GridNewspaperBasic />
              </CardExampleLanding>
            </div>

            {/* Showcase 3 */}
            <div className='group relative'>
              <div className='mb-6 flex items-center justify-between'>
                <div>
                  <h3 className='text-2xl font-bold text-zinc-950 dark:text-white'>
                    Holographic Card
                  </h3>
                  <p className='text-zinc-500 dark:text-zinc-400'>
                    A stunning holographic trading card that reacts to device
                    orientation and mouse movement.
                  </p>
                </div>
                <Link
                  href='/docs/holographic-card'
                  className='hidden text-sm font-medium text-indigo-500 hover:underline md:block'
                >
                  View Source &rarr;
                </Link>
              </div>
              <CardExampleLanding hasReTrigger={false}>
                <div className='flex items-center justify-center p-12'>
                  <HolographicCardBasic />
                </div>
              </CardExampleLanding>
            </div>

            {/* Showcase 4 */}
            <div className='group relative'>
              <div className='mb-6 flex items-center justify-between'>
                <div>
                  <h3 className='text-2xl font-bold text-zinc-950 dark:text-white'>
                    Circular Gallery
                  </h3>
                  <p className='text-zinc-500 dark:text-zinc-400'>
                    A scroll-driven infinite circular wheel of images.
                  </p>
                </div>
                <Link
                  href='/docs/circular-gallery'
                  className='hidden text-sm font-medium text-indigo-500 hover:underline md:block'
                >
                  View Source &rarr;
                </Link>
              </div>
              <CardExampleLanding hasReTrigger={false}>
                <CircularGalleryBasic />
              </CardExampleLanding>
            </div>
          </div>
        </section>

        {/* FOOTER CTA */}
        <section className='border-t border-zinc-200 bg-zinc-50 px-6 py-24 text-center dark:border-zinc-900 dark:bg-zinc-950/50'>
          <h2 className='text-3xl font-bold text-zinc-950 dark:text-white'>
            Ready to impress your users?
          </h2>
          <p className='mt-4 text-zinc-600 dark:text-zinc-400'>
            Start adding shadcn-extras to your project today. It takes less than
            a minute.
          </p>
          <div className='mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row'>
            <Link href='/docs/infinite-parallax-gallery'>
              <Button>
                Get Started
                <ChevronRight className='ml-1.5 h-4 w-4' />
              </Button>
            </Link>
            <Link href='/tools'>
              <Button variant='secondary'>
                <Wrench className='mr-1.5 h-4 w-4' />
                Explore the Tools
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
