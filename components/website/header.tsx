import Link from 'next/link';
import { SELogo } from './icons/shadcn-extras-logo';
import XIcon from './icons/x';
import GitHubIcon from './icons/github';
import ThemeSwitch from './theme-switch';
import LinkedinIcon from './icons/LinkedinIcon';

export function Header() {
  return (
    <header className='sticky top-0 z-10 flex h-16 items-center justify-center border-b border-zinc-200 bg-white px-6 py-5 dark:border-white/10 dark:bg-zinc-950'>
      <div className='mx-auto flex w-full items-center justify-between md:max-w-7xl'>
        <Link href='/docs' className='relative flex items-center space-x-2'>
          <SELogo className='h-6 w-auto' />
          <div className='text-sm font-medium text-zinc-950 dark:text-white'>
            shadcn-extras
          </div>
          {/* <span className='mb-4 ml-0 rounded-sm bg-zinc-800 px-1.5 py-0.5 text-[10px] leading-none font-medium text-zinc-50 select-none'>
            beta
          </span> */}
        </Link>
        <div className='flex items-center space-x-6'>
          <nav className='hidden items-center space-x-6 sm:flex'>
            <Link
              href='/docs/kpi-card'
              className='text-sm font-medium text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white'
            >
              Components
            </Link>
            <a
              href='https://NayanDevLab.github.io/shadcn-extras/storybook/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-sm font-medium text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white'
            >
              StoryBook
            </a>
          </nav>
          <div className='hidden h-8 w-[0.5px] bg-zinc-200 sm:flex dark:bg-zinc-800' />
          <nav className='flex items-center space-x-2'>
            <a
              href='https://www.linkedin.com/in/nayanradadiya/'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex h-9 w-9 items-center justify-center'
            >
              <LinkedinIcon className='h-4 w-4 fill-zinc-950 dark:fill-white' />
            </a>
            <a
              href='https://x.com/nayan_radadiya6'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex h-9 w-9 items-center justify-center'
            >
              <XIcon className='h-4 w-4 fill-zinc-950 dark:fill-white' />
            </a>
            <a
              href='https://github.com/NayanDevLab/shadcn-extras'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex h-9 w-9 items-center justify-center'
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
