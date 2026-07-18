import { CircularGallery } from '@/components/core/circular-gallery';

const items = [
  {
    id: 'item-1',
    title: 'Yoni Kaplan-Nadel',
    imageSrc: 'https://picsum.photos/id/27/1200/1200',
  },
  {
    id: 'item-2',
    title: 'Alejandro Escamilla',
    imageSrc: 'https://picsum.photos/id/25/1200/1200',
  },
  {
    id: 'item-3',
    title: 'Gabriel Santiago',
    imageSrc: 'https://picsum.photos/id/372/1200/1200',
  },
  {
    id: 'item-4',
    title: 'Michael Quinn',
    imageSrc: 'https://picsum.photos/id/380/1200/1200',
  },
  {
    id: 'item-5',
    title: 'Chris Brignola',
    imageSrc: 'https://picsum.photos/id/392/1200/1200',
  },
  {
    id: 'item-6',
    title: 'Matteo Minelli',
    imageSrc: 'https://picsum.photos/id/456/1200/1200',
  },
  {
    id: 'item-7',
    title: 'Matthew Clark',
    imageSrc: 'https://picsum.photos/id/469/1200/1200',
  },
  {
    id: 'item-8',
    title: 'Volkan Olmez',
    imageSrc: 'https://picsum.photos/id/497/1200/1200',
  },
  {
    id: 'item-9',
    title: 'Jeff Sheldon',
    imageSrc: 'https://picsum.photos/id/515/1200/1200',
  },
  {
    id: 'item-10',
    title: 'Christian Holzinger',
    imageSrc: 'https://picsum.photos/id/521/1200/1200',
  },
  {
    id: 'item-11',
    title: 'Artur Pokusin',
    imageSrc: 'https://picsum.photos/id/549/1200/1200',
  },
  {
    id: 'item-12',
    title: 'Sam Wheeler',
    imageSrc: 'https://picsum.photos/id/569/1200/1200',
  },
  {
    id: 'item-13',
    title: 'Griffin Keller',
    imageSrc: 'https://picsum.photos/id/637/1200/1200',
  },
  {
    id: 'item-14',
    title: 'Fré Sonneveld',
    imageSrc: 'https://picsum.photos/id/641/1200/1200',
  },
  {
    id: 'item-15',
    title: 'Luke Pamer',
    imageSrc: 'https://picsum.photos/id/669/1200/1200',
  },
  {
    id: 'item-16',
    title: 'Joshua Earle',
    imageSrc: 'https://picsum.photos/id/685/1200/1200',
  },
  {
    id: 'item-17',
    title: 'lee Scott',
    imageSrc: 'https://picsum.photos/id/699/1200/1200',
  },
  {
    id: 'item-18',
    title: 'Biegun Wschodni',
    imageSrc: 'https://picsum.photos/id/611/1200/1200',
  },
  {
    id: 'item-19',
    title: 'Drew Geraets',
    imageSrc: 'https://picsum.photos/id/480/1200/1200',
  },
  {
    id: 'item-20',
    title: 'Julia Caesar',
    imageSrc: 'https://picsum.photos/id/773/1200/1200',
  },
];

export function CircularGalleryBasic() {
  return (
    <div className='relative h-[80vh] min-h-[600px] w-full overflow-hidden bg-[#f8f4ee] font-sans dark:bg-[#101828]'>
      <CircularGallery items={items} title='Circular Gallery' radius='40vmin' />
      <a
        href='#'
        className='absolute bottom-4 left-1/2 z-50 -translate-x-1/2 text-sm text-black/50 underline hover:text-black dark:text-white/50 dark:hover:text-white'
      >
        close
      </a>
    </div>
  );
}
