import { InfiniteParallaxGallery } from '@/components/core/infinite-parallax-gallery';

const IMAGE_PATHS = [
  'https://images.unsplash.com/photo-1602353195884-44ea7e76e196?w=200',
  'https://images.unsplash.com/photo-1582890158937-c11bebdc387f?w=200',
  'https://images.unsplash.com/photo-1583320901261-81b2160ac1eb?w=200',
  'https://images.unsplash.com/photo-1583705794539-ac40eb735193?w=200',
  'https://images.unsplash.com/photo-1585088316174-42ab5d3a99b2?w=200',
  'https://images.unsplash.com/photo-1585612155794-c83acbc99359?w=200',
];

export function InfiniteParallaxGalleryDense() {
  return (
    <div className='relative h-[600px] w-full overflow-hidden rounded-lg border'>
      <InfiniteParallaxGallery
        images={IMAGE_PATHS}
        depthLayers={8}
        imagesPerLayer={15}
        maxImageWidth={100}
        maxImageHeight={100}
      />
    </div>
  );
}
