import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, expect } from '@storybook/test';
import { action } from '@storybook/addon-actions';
import {
  BlogCardThree,
  MinimalBlogCardLeft,
  MinimalBlogCardRight,
  type BlogCardThreeProps,
} from '@/components/core/blog-card-three';

const IMG =
  'https://raw.githubusercontent.com/nayanrdeveloper/shadcn-extras/refs/heads/dev/public/blog_1.jpg';
const AVATAR =
  'https://raw.githubusercontent.com/nayanrdeveloper/shadcn-extras/refs/heads/dev/public/avatars/man.png';

const meta: Meta<typeof BlogCardThree> = {
  title: 'Core/Blog/Blog Card Three',
  component: BlogCardThree,
  tags: ['autodocs'], // enables Docs tab
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Compact article card with square thumbnail (optional), title, meta, and like/bookmark actions. Two layouts: **thumb-right** (default) and **thumb-left**. SRP-only (presentational).',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['thumb-right', 'thumb-left'],
    },
  },
};
export default meta;

type Story = StoryObj<typeof BlogCardThree>;

const Frame = (args: BlogCardThreeProps) => (
  <div className='max-w-3xl'>
    <BlogCardThree {...args} />
  </div>
);

/* ----------------------- Base component stories ----------------------- */

export const RightThumb: Story = {
  render: Frame,
  args: {
    href: '#',
    title: 'Why compact cards beat long lists for scannability',
    thumb: { src: IMG, alt: 'Thumbnail' },
    meta: {
      author: { name: 'Konnor Guzman', avatar: AVATAR, href: '#' },
      readLabel: '2 min read',
    },
    variant: 'thumb-right',
    onLike: () => action('like-click')(),
    onBookmark: () => action('bookmark-click')(),
  },
  // simple interaction smoke test
  play: async ({ canvasElement }) => {
    const c = within(canvasElement);
    const likeBtn = c.getByRole('button', { name: /like/i });
    await userEvent.click(likeBtn);
    await expect(likeBtn).toBeInTheDocument();
  },
};

export const LeftThumb: Story = {
  render: Frame,
  args: {
    href: '#',
    title: 'Left-thumb variant for media-heavy lists',
    thumb: { src: IMG, alt: 'Thumbnail' },
    meta: {
      author: { name: 'Asha Patel', avatar: AVATAR, href: '#' },
      readLabel: '4 min read',
    },
    variant: 'thumb-left',
    onLike: () => action('like-click')(),
    onBookmark: () => action('bookmark-click')(),
  },
};

export const NoThumb: Story = {
  render: Frame,
  args: {
    href: '#',
    title: 'Card without a thumbnail still aligns neatly',
    meta: {
      author: { name: 'Dev Singh', avatar: AVATAR },
      readLabel: '5 min read',
    },
    variant: 'thumb-right',
    onLike: () => action('like-click')(),
    onBookmark: () => action('bookmark-click')(),
  },
};

export const LongTitleEdgeCase: Story = {
  render: Frame,
  args: {
    href: '#',
    title:
      'Very long headline to demonstrate two-line clamping and ensure the underline-on-hover persists without layout shift across breakpoints',
    thumb: { src: IMG, alt: '' }, // decorative
    meta: {
      author: { name: 'Priya Sharma', avatar: AVATAR },
      readLabel: '7 min read',
    },
    variant: 'thumb-right',
  },
};

export const OnlyMetaRead: Story = {
  render: Frame,
  args: {
    title: 'Minimal: only read time, no author link or avatar',
    thumb: { src: IMG, alt: 'Thumb' },
    meta: { readLabel: '1 min read' },
    variant: 'thumb-left',
  },
};

/* ----------------------- Preset wrappers ----------------------- */

export const PresetRight: StoryObj<typeof MinimalBlogCardRight> = {
  name: 'Preset: MinimalBlogCardRight',
  render: (args) => (
    <div className='max-w-3xl'>
      <MinimalBlogCardRight {...args} />
    </div>
  ),
  args: {
    href: '#',
    title: 'Preset uses right-side thumbnail',
    thumb: { src: IMG, alt: 'Thumb' },
    meta: {
      author: { name: 'Konnor Guzman', avatar: AVATAR },
      readLabel: '3 min read',
    },
    onLike: () => action('like-click')(),
    onBookmark: () => action('bookmark-click')(),
  },
};

export const PresetLeft: StoryObj<typeof MinimalBlogCardLeft> = {
  name: 'Preset: MinimalBlogCardLeft',
  render: (args) => (
    <div className='max-w-3xl'>
      <MinimalBlogCardLeft {...args} />
    </div>
  ),
  args: {
    href: '#',
    title: 'Preset uses left-side thumbnail',
    thumb: { src: IMG, alt: 'Thumb' },
    meta: {
      author: { name: 'Asha Patel', avatar: AVATAR, href: '#' },
      readLabel: '2 min read',
    },
    onLike: () => action('like-click')(),
    onBookmark: () => action('bookmark-click')(),
  },
};
