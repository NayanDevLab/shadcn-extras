import type { Meta, StoryObj } from '@storybook/react';
import { TestimonialCard } from '@/components/core/testimonial-card';

const meta = {
  title: 'Core/TestimonialCard',
  component: TestimonialCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TestimonialCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'Devon Lane',
    role: 'Marketing Coordinator',
    content:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC',
    avatarSrc: 'https://i.pravatar.cc/150?img=11',
    rating: 5,
  },
};

export const FourStars: Story = {
  args: {
    name: 'Jane Doe',
    role: 'Software Engineer',
    content:
      'This product has completely transformed the way our team works. Highly recommended!',
    avatarSrc: 'https://i.pravatar.cc/150?img=47',
    rating: 4,
  },
};
