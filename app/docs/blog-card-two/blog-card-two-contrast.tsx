import { BlogCardTwo } from '@/components/core/blog-card-two';

export function BlogCardTwoContrast() {
  return (
    <div className='max-w-2xl'>
      <BlogCardTwo
        href='#'
        image={{
          src: 'https://raw.githubusercontent.com/nayanrdeveloper/shadcn-extras/refs/heads/dev/public/blog_1.jpg',
          alt: 'Abstract orbs',
        }}
        title='Workflow Hacks for Indie Teams'
        meta={{ category: 'Guides', timeLabel: '6 min read' }}
        variant='center-fade'
        overlayClassName='bg-[radial-gradient(120%_70%_at_50%_80%,rgba(0,0,0,0.65),transparent)]'
      />
    </div>
  );
}
