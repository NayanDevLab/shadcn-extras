import { MinimalBlogCardRight } from '@/components/core/blog-card-three';

export function BlogCardThreeRight() {
  return (
    <div className='max-w-2xl'>
      <MinimalBlogCardRight
        href='#'
        title='What is Tailwind CSS?'
        thumb={{
          src: 'https://raw.githubusercontent.com/nayanrdeveloper/shadcn-extras/refs/heads/dev/public/blog_1.jpg',
          alt: 'Abstract orbs',
        }}
        meta={{
          author: {
            name: 'John D.',
            avatar:
              'https://raw.githubusercontent.com/nayanrdeveloper/shadcn-extras/refs/heads/dev/public/avatars/man.png',
            href: '#',
          },
          readLabel: '2 min read',
        }}
      />
    </div>
  );
}
