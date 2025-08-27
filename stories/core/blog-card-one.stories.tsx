import type { Meta, StoryObj } from '@storybook/react';
import {
  BlogCardOne,
  ModernBlogCard,
  CompactBlogCard,
  type BlogCardOneProps,
} from '@/components/core/blog-card-one';
import { action } from '@storybook/addon-actions';
import { within, userEvent, expect } from '@storybook/test';

const IMG =
  'https://raw.githubusercontent.com/nayanrdeveloper/shadcn-extras/refs/heads/dev/public/blog_1.jpg';
const AVATAR =
  'https://raw.githubusercontent.com/nayanrdeveloper/shadcn-extras/refs/heads/dev/public/avatars/man.png';

const meta: Meta<typeof BlogCardOne> = {
  title: 'Core/Blog/Blog Card One',
  component: BlogCardOne,
  tags: ['autodocs'], // Docs tab on
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A clean, accessible blog/article card with image, category, actions, and author meta. Two layouts: **image-left** (Modern) and **image-top** (Compact).',
      },
    },
  },
  argTypes: {
    variant: { control: 'inline-radio', options: ['image-left', 'image-top'] },
    showActions: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof BlogCardOne>;

const Frame = (args: BlogCardOneProps) => (
  <div className='max-w-3xl'>
    <BlogCardOne {...args} />
  </div>
);

/* -------------------- Stories (base component) -------------------- */

export const ModernLeft: Story = {
  render: Frame,
  args: {
    variant: 'image-left',
    href: '#',
    category: { label: 'Design', href: '#' },
    title: 'Crafting accessible UI components with shadcn-extras',
    excerpt:
      'Learn how to build composable, accessible components that keep SRP: presentation in the component, business logic outside.',
    image: { src: IMG, alt: 'Blog cover' },
    author: { name: 'Konnor Guzman', avatar: AVATAR, href: '#' },
    dateISO: '2025-08-01',
    dateLabel: 'Aug 1, 2025',
    showActions: true,
    onBookmark: (e?: unknown) => action('bookmark-click')(e),
    onMenu: (e) => action('menu-click')(e),
  },
  play: async ({ canvasElement }) => {
    const c = within(canvasElement);
    const bookmark = c.getByRole('button', { name: /bookmark/i });
    await userEvent.click(bookmark);
    await expect(bookmark).toBeInTheDocument();
  },
};

export const CompactTop: Story = {
  render: Frame,
  args: {
    variant: 'image-top',
    href: '#',
    category: { label: 'Engineering', href: '#' },
    title: 'From Figma to production: keeping tokens in sync',
    excerpt:
      'A pragmatic approach to design tokens, dark mode, and how to keep Tailwind + tokens tidy.',
    image: { src: IMG, alt: 'Tokens diagram' },
    author: { name: 'Dev Singh', avatar: AVATAR, href: '#' },
    dateISO: '2025-07-21',
    dateLabel: 'Jul 21, 2025',
    showActions: true,
    onBookmark: (e?: unknown) => action('bookmark-click')(e),
    onMenu: (e) => action('menu-click')(e),
  },
};

export const NoImage: Story = {
  render: Frame,
  args: {
    variant: 'image-left',
    href: '#',
    category: { label: 'News' },
    title: 'Library updates: new Timeline Rail + Spinners',
    excerpt:
      'We shipped a vertical timeline, a minimal rail, and two SVG spinners with taper + alternating rotation.',
    author: { name: 'Asha Patel', avatar: AVATAR },
    dateISO: '2025-06-10',
    dateLabel: 'Jun 10, 2025',
    showActions: false,
  },
};

export const LongTextEdgeCases: Story = {
  render: Frame,
  args: {
    variant: 'image-top',
    href: '#',
    category: { label: 'Very Very Long Category That Wraps', href: '#' },
    title:
      'This title is intentionally long to showcase the two-line clamp behavior and ensure truncation styles are applied correctly',
    excerpt:
      'Also a long excerpt to make sure clamping to two lines works across different breakpoints and does not overflow the card container.',
    image: { src: IMG, alt: '' }, // decorative
    author: { name: 'Priya Sharma', avatar: AVATAR },
    dateISO: '2025-05-05',
    dateLabel: 'May 5, 2025',
    showActions: true,
    onBookmark: (e?: unknown) => action('bookmark-click')(e),
    onMenu: (e) => action('menu-click')(e),
  },
};

/* -------------------- Stories (preset exports) -------------------- */

export const PresetModern: StoryObj<typeof ModernBlogCard> = {
  name: 'Preset: ModernBlogCard',
  render: (args) => (
    <div className='max-w-3xl'>
      <ModernBlogCard {...args} />
    </div>
  ),
  args: {
    href: '#',
    category: { label: 'Guide', href: '#' },
    title: 'Modern preset mirrors the screenshot',
    excerpt:
      'Use `ModernBlogCard` for the left-image layout without passing `variant`.',
    image: { src: IMG, alt: 'Cover' },
    author: { name: 'Konnor Guzman', avatar: AVATAR, href: '#' },
    dateISO: '2025-08-01',
    dateLabel: 'Aug 1, 2025',
    showActions: true,
    onBookmark: (e?: unknown) => action('bookmark-click')(e),
    onMenu: (e) => action('menu-click')(e),
  },
};

export const PresetCompact: StoryObj<typeof CompactBlogCard> = {
  name: 'Preset: CompactBlogCard',
  render: (args) => (
    <div className='max-w-3xl'>
      <CompactBlogCard {...args} />
    </div>
  ),
  args: {
    href: '#',
    category: { label: 'Tips', href: '#' },
    title: 'Compact preset stacks the image on top',
    excerpt: 'Great for grids and narrow cards.',
    image: { src: IMG, alt: 'Cover' },
    author: { name: 'Dev Singh', avatar: AVATAR },
    dateISO: '2025-07-12',
    dateLabel: 'Jul 12, 2025',
    showActions: true,
    onBookmark: (e?: unknown) => action('bookmark-click')(e),
    onMenu: (e) => action('menu-click')(e),
  },
};
