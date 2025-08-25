import { MinimalBlogCardLeft } from '@/components/core/blog-card-three';

export function BlogCardThreeLeft() {
  return (
    <div className='max-w-2xl'>
      <MinimalBlogCardLeft
        href='#'
        title='Using CSS Variables in Design Systems'
        thumb={{
          src: 'https://raw.githubusercontent.com/nayanrdeveloper/shadcn-extras/refs/heads/dev/public/blog_1.jpg',
          alt: 'Abstract orbs',
        }}
        meta={{
          author: {
            name: 'Ava Patel',
            avatar:
              'https://raw.githubusercontent.com/nayanrdeveloper/shadcn-extras/refs/heads/dev/public/avatars/man.png',
          },
          readLabel: '5 min read',
        }}
      />
    </div>
  );
}
