import { EnlargeGallery } from '@/components/core/enlarge-gallery';

const ITEMS = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&h=900&q=80',
    alt: 'Forest path with light filtering through trees',
    title: 'Into the Pines',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at posuere magna. Nam eros purus, congue pulvinar turpis pretium, vulputate interdum turpis. Vivamus non arcu.',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&h=900&q=80',
    alt: 'Rocky mountain peak against blue sky',
    title: 'The High Country',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=1600&h=900&q=80',
    alt: 'Ocean waves at sunset',
    title: 'Last Light Offshore',
    description:
      'Praesent vel orci orci. Nam sed eleifend felis. Duis eget risus vel nisl feugiat semper eu ut ligula. Morbi eget lorem porttitor, gravida diam lobortis.',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1600&h=900&q=80',
    alt: 'City skyline at night',
    title: 'After Hours',
    description:
      'Ut pretium nibh vitae velit laoreet eleifend. Cras consectetur nisl elit, eu scelerisque ante placerat.',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1600&h=900&q=80',
    alt: 'Desert sand dunes',
    title: 'Sea of Sand',
    description:
      'Maecenas enim ex, pharetra ut efficitur accumsan, blandit in elit. Donec commodo sapien malesuada condimentum feugiat. Class aptent taciti sociosqu ad litora torquent per conubia.',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1600&h=900&q=80',
    alt: 'Northern lights over snowy landscape',
    title: 'Solar Winds',
    description:
      'Ut scelerisque non nulla ac scelerisque. Nulla sollicitudin suscipit dolor vitae lacinia. Quisque id dapibus est. Aenean eget magna id urna cursus congue.',
  },
];

export function EnlargeGalleryBasic() {
  return (
    <div className='h-[600px] w-full'>
      <EnlargeGallery items={ITEMS} />
    </div>
  );
}
