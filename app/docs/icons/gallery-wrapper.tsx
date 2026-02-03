import { getIconsData } from './get-icons-data';
import { IconGallery } from './icon-gallery';

export async function IconGalleryWrapper() {
  const icons = await getIconsData();
  // @ts-ignore - Valid React Node passing from Server to Client
  return <IconGallery icons={icons} />;
}
