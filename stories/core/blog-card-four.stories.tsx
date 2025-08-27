import type { Meta, StoryObj } from '@storybook/react';
import {
  BlogCardFour,
  OverlappedBlogCard,
  type BlogCardFourProps,
} from '@/components/core/blog-card-four';

const IMG =
  'https://raw.githubusercontent.com/nayanrdeveloper/shadcn-extras/refs/heads/dev/public/blog_1.jpg';
const AVATAR =
  'https://raw.githubusercontent.com/nayanrdeveloper/shadcn-extras/refs/heads/dev/public/avatars/man.png';

const meta: Meta<typeof BlogCardFour> = {
  title: 'Core/Blog/Blog Card Four',
  component: BlogCardFour,
  tags: ['autodocs'], // enables Docs tab
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Cover image on top with a white info panel (attached overlap or flush). Accessible, presentational-only (SRP).',
      },
    },
  },
  argTypes: {
    variant: { control: 'inline-radio', options: ['attached', 'flush'] },
    className: { control: 'text' },
    imageClassName: { control: 'text' },
    panelClassName: { control: 'text' },
    titleClassName: { control: 'text' },
    excerptClassName: { control: 'text' },
    footerClassName: { control: 'text' },
  },
};
export default meta;

type Story = StoryObj<typeof BlogCardFour>;

const Frame = (args: BlogCardFourProps) => (
  <div className='max-w-sm'>
    <BlogCardFour {...args} />
  </div>
);

/* -------------------- Stories -------------------- */

export const AttachedOverlap: Story = {
  render: Frame,
  args: {
    href: '#',
    image: { src: IMG, alt: 'Cover' },
    title: 'Designing cards that adapt across breakpoints',
    excerpt:
      'A brief guide to spacing, contrast, and motion that keeps cards readable on any screen.',
    author: { name: 'Konnor Guzman', avatar: AVATAR, href: '#' },
    dateISO: '2025-08-01',
    dateLabel: 'Aug 1, 2025',
    variant: 'attached',
  },
};

export const FlushPanel: Story = {
  render: Frame,
  args: {
    href: '#',
    image: { src: IMG, alt: 'Cover' },
    title: 'Flush panel variant sits below the image',
    excerpt:
      'Use when you want a simpler silhouette without the overlapping shadow.',
    author: { name: 'Asha Patel', avatar: AVATAR, href: '#' },
    dateISO: '2025-07-22',
    dateLabel: 'Jul 22, 2025',
    variant: 'flush',
  },
};

export const NoExcerpt: Story = {
  render: Frame,
  args: {
    href: '#',
    image: { src: IMG, alt: '' }, // decorative
    title: 'Card without an excerpt keeps layout tidy',
    excerpt: '', // hide excerpt (component default would add one if omitted)
    author: { name: 'Dev Singh', avatar: AVATAR },
    dateISO: '2025-06-10',
    dateLabel: 'Jun 10, 2025',
    variant: 'attached',
  },
};

export const LongTextEdgeCase: Story = {
  render: Frame,
  args: {
    href: '#',
    image: { src: IMG, alt: 'Long text' },
    title:
      'Very long title to check wrapping and underline-on-hover without layout shift across screen sizes',
    excerpt:
      'Also a longer excerpt to validate spacing, truncation, and overall rhythm in the info panel area.',
    author: { name: 'Priya Sharma', avatar: AVATAR },
    dateISO: '2025-05-05',
    dateLabel: 'May 5, 2025',
    variant: 'attached',
  },
};

/* -------------------- Preset export -------------------- */

export const PresetOverlapped: StoryObj<typeof OverlappedBlogCard> = {
  name: 'Preset: OverlappedBlogCard',
  render: (args) => (
    <div className='max-w-sm'>
      <OverlappedBlogCard {...args} />
    </div>
  ),
  args: {
    href: '#',
    image: { src: IMG, alt: 'Cover' },
    title: 'Preset mirrors the screenshot look',
    excerpt:
      'Use the preset when you always want the attached/overlap style without passing `variant`.',
    author: { name: 'Konnor Guzman', avatar: AVATAR, href: '#' },
    dateISO: '2025-08-01',
    dateLabel: 'Aug 1, 2025',
  },
};
