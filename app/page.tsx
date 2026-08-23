import { homeSeo } from '@/lib/seo/homeSeo';
import Home from '@/component/home/Home';

export const metadata = homeSeo;

export default function Page() {
  return <Home />;
}
