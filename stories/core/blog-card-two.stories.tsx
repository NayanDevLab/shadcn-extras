import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, expect } from '@storybook/test';
import { action } from '@storybook/addon-actions';
import {
  BlogCardTwo,
  type BlogCardTwoProps,
} from '@/components/core/blog-card-two';

const IMG =
  'https://raw.githubusercontent.com/nayanrdeveloper/shadcn-extras/refs/heads/dev/public/blog_1.jpg';

const meta: Meta<typeof BlogCardTwo> = {
  title: 'Core/Blog/Blog Card Two',
  component: BlogCardTwo,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Full-bleed image card with gradient/center-fade overlay, title, meta row, and like/bookmark actions. SRP: presentational only.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['bottom-gradient', 'center-fade'],
    },
    rounded: { control: 'text' },
    overlayClassName: { control: 'text' },
    titleClassName: { control: 'text' },
    metaClassName: { control: 'text' },
    actionClassName: { control: 'text' },
  },
};
export default meta;

type Story = StoryObj<typeof BlogCardTwo>;

const Frame = (args: BlogCardTwoProps) => (
  <div className='max-w-xl'>
    <BlogCardTwo {...args} />
  </div>
);

/* ----------------------- Stories ----------------------- */

export const BottomGradient: Story = {
  render: Frame,
  args: {
    href: '#',
    image: { src: IMG, alt: 'Blog hero' },
    title: 'Designing image-first cards that remain accessible',
    meta: { category: 'Design', categoryHref: '#', timeLabel: '48 min ago' },
    onLike: () => action('like-click')(),
    onBookmark: () => action('bookmark-click')(),
    rounded: 'rounded-2xl',
    variant: 'bottom-gradient',
  },
  play: async ({ canvasElement }) => {
    const c = within(canvasElement);
    const likeBtn = c.getByRole('button', { name: /like/i });
    await userEvent.click(likeBtn);
    await expect(likeBtn).toBeInTheDocument();
  },
};

export const CenterFade: Story = {
  render: Frame,
  args: {
    href: '#',
    image: { src: IMG, alt: 'Center fade cover' },
    title: 'Balancing contrast with radial overlays',
    meta: { category: 'UX', categoryHref: '#', timeLabel: '2h ago' },
    onLike: () => action('like-click')(),
    onBookmark: () => action('bookmark-click')(),
    rounded: 'rounded-2xl',
    variant: 'center-fade',
  },
};

export const NoLinkArticle: Story = {
  render: Frame,
  args: {
    image: { src: IMG, alt: '' }, // decorative
    title: 'Static article card (no link wrapper)',
    meta: { category: 'News', timeLabel: 'Yesterday' },
    rounded: 'rounded-2xl',
    variant: 'bottom-gradient',
  },
};

export const LongTitleAndCustomRound: Story = {
  render: Frame,
  args: {
    href: '#',
    image: { src: IMG, alt: 'Cover' },
    title:
      'Very long title to demonstrate two-line clamping and ensure the overlay keeps text readable across breakpoints',
    meta: {
      category: 'Engineering',
      categoryHref: '#',
      timeLabel: '5 min read',
    },
    rounded: 'rounded-3xl',
    variant: 'bottom-gradient',
  },
};
