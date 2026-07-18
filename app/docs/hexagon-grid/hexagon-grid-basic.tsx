import { HexGrid, Hexagon } from '@/components/core/hexagon-grid';

const items = [
  {
    imageSrc: 'https://picsum.photos/id/1015/400/400',
    title: 'River Canyon',
    subtitle: 'Nature Photography',
  },
  {
    imageSrc: 'https://picsum.photos/id/1016/400/400',
    title: 'Mountain Peak',
    subtitle: 'Expedition 2026',
  },
  {
    imageSrc: 'https://picsum.photos/id/1018/400/400',
    title: 'Alpine Fog',
    subtitle: 'Winter Series',
  },
  {
    imageSrc: 'https://picsum.photos/id/1019/400/400',
    title: 'Coastal Waves',
    subtitle: 'Ocean View',
  },
  {
    imageSrc: 'https://picsum.photos/id/1020/400/400',
    title: 'Wilderness',
    subtitle: 'Wildlife Reserve',
  },
  {
    imageSrc: 'https://picsum.photos/id/1021/400/400',
    title: 'Deep Forest',
    subtitle: 'Canopy Exploration',
  },
  {
    imageSrc: 'https://picsum.photos/id/1022/400/400',
    title: 'Aurora',
    subtitle: 'Night Sky',
  },
  {
    imageSrc: 'https://picsum.photos/id/1023/400/400',
    title: 'The Journey',
    subtitle: 'Urban Transit',
  },
  {
    imageSrc: 'https://picsum.photos/id/1024/400/400',
    title: 'Flight',
    subtitle: 'Aerial Photography',
  },
  {
    imageSrc: 'https://picsum.photos/id/1025/400/400',
    title: 'Cozy Mornings',
    subtitle: 'Portrait Series',
  },
  {
    imageSrc: 'https://picsum.photos/id/1026/400/400',
    title: 'Barren Lands',
    subtitle: 'Desert Textures',
  },
  {
    imageSrc: 'https://picsum.photos/id/1027/400/400',
    title: 'Winter Solstice',
    subtitle: 'Fashion Editorial',
  },
  {
    imageSrc: 'https://picsum.photos/id/1028/400/400',
    title: 'Undergrowth',
    subtitle: 'Macro Nature',
  },
  {
    imageSrc: 'https://picsum.photos/id/1029/400/400',
    title: 'Concrete Oasis',
    subtitle: 'Cityscapes',
  },
];

export function HexagonGridBasic() {
  return (
    <div className='flex w-full items-center justify-center overflow-hidden bg-[#0d0e12] py-20 font-sans'>
      <HexGrid size={220} gap={16}>
        {items.map((item, index) => (
          <Hexagon
            key={index}
            imageSrc={item.imageSrc}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))}
      </HexGrid>
    </div>
  );
}
