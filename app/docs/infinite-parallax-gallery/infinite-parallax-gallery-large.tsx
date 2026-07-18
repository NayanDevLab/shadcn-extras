import { InfiniteParallaxGallery } from '@/components/core/infinite-parallax-gallery';

const IMAGE_PATHS = [
  'https://images.unsplash.com/photo-1602353195884-44ea7e76e196?w=400',
  'https://images.unsplash.com/photo-1582890158937-c11bebdc387f?w=400',
  'https://images.unsplash.com/photo-1583320901261-81b2160ac1eb?w=400',
];

export function InfiniteParallaxGalleryLarge() {
  return (
    <div className='relative h-[600px] w-full overflow-hidden rounded-lg border'>
      <InfiniteParallaxGallery
        images={IMAGE_PATHS}
        depthLayers={3}
        imagesPerLayer={3}
        maxImageWidth={400}
        maxImageHeight={400}
      />
    </div>
  );
}
