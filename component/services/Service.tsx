import ServicesHero from '@/component/services/ServicesHero';
import ServicesDetail from '@/component/services/ServicesDetail';
import ServicesProcess from '@/component/services/ServicesProcess';
import ServicesCTA from '@/component/services/ServicesCTA';

export const metadata = {
  title: 'Solar Services | BRL RENEWABLE ENERGIES PVT LTD Installation & Support',
  description: 'Explore our comprehensive solar services: residential, commercial, battery storage, and maintenance solutions.',
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesDetail />
      <ServicesProcess />
      <ServicesCTA />
    </>
  );
}
