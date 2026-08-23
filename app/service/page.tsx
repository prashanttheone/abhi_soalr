import { serviceSeo } from '@/lib/seo/serviceSeo';
import Service from '@/component/services/Service';

export const metadata = serviceSeo;

export default function ServicesPage() {
  return <Service />;
}
