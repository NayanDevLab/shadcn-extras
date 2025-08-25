import { CompactBlogCard } from '@/components/core/blog-card-one';

export function BlogCardOneCompact() {
  return (
    <div className='max-w-xl p-4'>
      <CompactBlogCard
        href='#'
        category={{ label: 'Programming Language', href: '#' }}
        title='What is PHP?'
        excerpt='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, provident quasi recusandae repudiandae rerum temporibus!'
        image={{
          src: 'https://raw.githubusercontent.com/nayanrdeveloper/shadcn-extras/refs/heads/dev/public/blog_1.jpg',
          alt: 'Camera on yellow',
        }}
        author={{
          name: 'Travis Fuller',
          avatar:
            'https://raw.githubusercontent.com/nayanrdeveloper/shadcn-extras/refs/heads/dev/public/avatars/man.png',
        }}
        dateISO='2022-03-14'
        dateLabel='March 14, 2022'
        showActions={false}
      />
    </div>
  );
}
