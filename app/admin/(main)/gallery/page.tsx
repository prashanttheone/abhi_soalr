import { noIndexSeo } from '@/lib/seo/noIndexSeo';
import AdminGallery from '@/component/admin/Gallery';

export const metadata = noIndexSeo;

export default function GalleryPage() {
  return <AdminGallery />;
}
