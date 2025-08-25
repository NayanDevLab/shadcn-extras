import { BlogCardFour } from '@/components/core/blog-card-four';

export function BlogCardFourMuted() {
  return (
    <BlogCardFour
      href='#'
      image={{
        src: 'https://raw.githubusercontent.com/nayanrdeveloper/shadcn-extras/refs/heads/dev/public/blog_1.jpg',
        alt: 'Abstract orbs',
      }}
      title='Design Principles for Daily UI'
      excerpt='Short, muted variation using the flush layout.'
      author={{
        name: 'Ava Patel',
        avatar:
          'https://raw.githubusercontent.com/nayanrdeveloper/shadcn-extras/refs/heads/dev/public/avatars/man.png',
      }}
      dateISO='2023-03-10'
      dateLabel='Mar 10, 2023'
      variant='flush'
      className='max-w-xs'
    />
  );
}
