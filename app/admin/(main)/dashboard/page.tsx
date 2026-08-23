import { noIndexSeo } from '@/lib/seo/noIndexSeo';
import Dashboard from '@/component/admin/Dashboard';

export const metadata = noIndexSeo;

export default function DashboardPage() {
  return <Dashboard />;
}
