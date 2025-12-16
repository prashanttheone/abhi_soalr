import AboutHero from '@/component/about/AboutHero';
import MissionVision from '@/component/about/MissionVision';
import Team from '@/component/about/Team';
import Stats from '@/component/about/Stats';
import Timeline from '@/component/about/Timeline';
import Certifications from '@/component/about/Certifications';
import AboutCTA from '@/component/about/AboutCTA';

export const metadata = {
  title: 'About Green Sun Innovations | Leading Solar Energy Provider',
  description: 'Learn about Green Sun Innovations, the trusted solar energy company serving 35+ states with 50K+ installations and 4.9/5 customer rating.',
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionVision />
      <Stats />
      <Team />
      <Timeline />
      <Certifications />
      <AboutCTA />
    </>
  );
}
