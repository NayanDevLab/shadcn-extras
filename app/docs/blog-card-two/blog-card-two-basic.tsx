import { BlogCardTwo } from '@/components/core/blog-card-two';

export function BlogCardTwoBasic() {
  return (
    <div className='max-w-2xl'>
      <BlogCardTwo
        href='#'
        image={{
          src: 'https://raw.githubusercontent.com/nayanrdeveloper/shadcn-extras/refs/heads/dev/public/blog_1.jpg',
          alt: 'Abstract orbs',
        }}
        title='10 Tips for Making a Good Camera Even Better'
        meta={{
          category: 'Technology',
          categoryHref: '#',
          timeLabel: '48 min ago',
        }}
      />
    </div>
  );
}
