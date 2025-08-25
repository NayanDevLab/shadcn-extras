import { OverlappedBlogCard } from '@/components/core/blog-card-four';

export function BlogCardFourBasic() {
  return (
    <OverlappedBlogCard
      href='#'
      image={{
        src: 'https://raw.githubusercontent.com/nayanrdeveloper/shadcn-extras/refs/heads/dev/public/blog_1.jpg',
        alt: 'Abstract orbs',
      }}
      title='Food: A Simple Definition'
      excerpt='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi necessitatibus repellat voluptatibus?'
      author={{
        name: 'John Doe',
        avatar:
          'https://raw.githubusercontent.com/nayanrdeveloper/shadcn-extras/refs/heads/dev/public/avatars/man.png',
        href: '#',
      }}
      dateISO='2022-05-25'
      dateLabel='25 May, 2022'
      className='max-w-xs'
    />
  );
}
