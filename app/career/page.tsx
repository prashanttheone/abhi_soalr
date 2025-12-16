import CareerHero from '@/component/career/CareerHero';
import JobOpenings from '@/component/career/JobOpenings';
import CareerCulture from '@/component/career/CareerCulture';
import CareerCTA from '@/component/career/CareerCTA';

export const metadata = {
  title: 'Careers at Green Sun Innovations | Join Our Solar Energy Team',
  description: 'Join Green Sun Innovations and build your career in clean energy. Explore open positions, benefits, and our company culture.',
};

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
