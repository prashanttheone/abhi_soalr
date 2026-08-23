import { noIndexSeo } from '@/lib/seo/noIndexSeo';
import AdminTeam from '@/component/admin/About';

export const metadata = noIndexSeo;

export default function TeamManagementPage() {
  return <AdminTeam />;
}
