import { careerSeo } from '@/lib/seo/careerSeo';
import CareerHero from '@/component/career/CareerHero';
import JobOpenings from '@/component/career/JobOpenings';
import CareerCulture from '@/component/career/CareerCulture';
import CareerCTA from '@/component/career/CareerCTA';


export const metadata = careerSeo;

export default function CareerPage() {
  return (
    <>
      <CareerHero />
      <JobOpenings />
      <CareerCulture />
      <CareerCTA />
    </>
  );
}
