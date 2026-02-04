import { getIconsData } from './get-icons-data';
import { IconGallery } from './icon-gallery';

export async function IconGalleryWrapper() {
  const icons = await getIconsData();

  return <IconGallery icons={icons} />;
}
