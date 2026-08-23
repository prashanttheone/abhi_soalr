import { noIndexSeo } from '@/lib/seo/noIndexSeo';
import ImageGallery from '@/component/admin/Image';

export const metadata = noIndexSeo;

export default function ImagesPage() {
  return <ImageGallery />;
}
