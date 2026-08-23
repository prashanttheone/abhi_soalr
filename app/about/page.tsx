import { aboutSeo } from '@/lib/seo/aboutSeo';
import AboutHero from '@/component/about/AboutHero';
import MissionVision from '@/component/about/MissionVision';
import Team from '@/component/about/Team';
import Stats from '@/component/about/Stats';
import Timeline from '@/component/about/Timeline';
import Certifications from '@/component/about/Certifications';
import AboutCTA from '@/component/about/AboutCTA';


export const metadata = aboutSeo;

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
