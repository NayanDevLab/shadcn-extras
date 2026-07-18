import { InfiniteParallaxGallery } from '@/components/core/infinite-parallax-gallery';

const IMAGE_PATHS = [
  'https://images.unsplash.com/photo-1602353195884-44ea7e76e196?w=200',
  'https://images.unsplash.com/photo-1582890158937-c11bebdc387f?w=200',
  'https://images.unsplash.com/photo-1583320901261-81b2160ac1eb?w=200',
  'https://images.unsplash.com/photo-1583705794539-ac40eb735193?w=200',
  'https://images.unsplash.com/photo-1585088316174-42ab5d3a99b2?w=200',
  'https://images.unsplash.com/photo-1585612155794-c83acbc99359?w=200',
  'https://images.unsplash.com/photo-1588367171393-c0f77a14faff?w=200',
  'https://images.unsplash.com/photo-1588501756867-865784321337?w=200',
  'https://images.unsplash.com/photo-1588608368947-c243aea32bff?w=200',
  'https://images.unsplash.com/photo-1591167068512-e96853b5a458?w=200',
  'https://images.unsplash.com/photo-1592926256627-488adc9a24f1?w=200',
  'https://images.unsplash.com/photo-1594063596316-aa5f41ceb8dc?w=200',
  'https://images.unsplash.com/photo-1595687825617-10c4d36566e7?w=200',
  'https://images.unsplash.com/photo-1595796098891-e6adfdc930bd?w=200',
  'https://images.unsplash.com/photo-1597426720982-d6d9d73de978?w=200',
  'https://images.unsplash.com/photo-1601574465779-76d6dbb88557?w=200',
  'https://images.unsplash.com/photo-1605815176963-328929c499cf?w=200',
  'https://images.unsplash.com/photo-1610642434561-956cd4111f42?w=200',
  'https://images.unsplash.com/photo-1612694790936-e4ac2ef03ec0?w=200',
  'https://images.unsplash.com/photo-1623572180554-d8d8d6ba8630?w=200',
  'https://images.unsplash.com/photo-1630155848269-94f37474ed8b?w=200',
  'https://images.unsplash.com/photo-1740919486071-1650afd5b694?w=200',
  'https://images.unsplash.com/photo-1738525052282-900818c83635?w=200',
  'https://images.unsplash.com/photo-1715615303987-b1168c876b0a?w=200',
  'https://images.unsplash.com/photo-1634545133513-b26b1d79bb34?w=200',
];

export function InfiniteParallaxGalleryBasic() {
  return (
    <div className='relative h-[600px] w-full overflow-hidden rounded-lg border'>
      <InfiniteParallaxGallery images={IMAGE_PATHS} />
    </div>
  );
}
