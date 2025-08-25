import { ModernBlogCard } from '@/components/core/blog-card-one';

export function BlogCardOneBasic() {
  return (
    <div className='p-4'>
      <ModernBlogCard
        href='#'
        category={{ label: 'Frameworks', href: '#' }}
        title='What is Tailwind CSS?'
        excerpt='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, provident quasi recusandae repudiandae rerum temporibus!'
        image={{
          src: 'https://raw.githubusercontent.com/nayanrdeveloper/shadcn-extras/refs/heads/dev/public/blog_1.jpg',
          alt: 'Pink chair',
        }}
        author={{
          name: 'John Doe',
          avatar:
            'https://raw.githubusercontent.com/nayanrdeveloper/shadcn-extras/refs/heads/dev/public/avatars/man.png',
          href: '#',
        }}
        dateISO='2021-06-23'
        dateLabel='June 23, 2021'
      />
    </div>
  );
}
