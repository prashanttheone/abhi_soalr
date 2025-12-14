import ContactHero from '@/component/contact/ContactHero';
import ContactForm from '@/component/contact/ContactForm';
import ContactInfo from '@/component/contact/ContactInfo';
import ContactCTA from '@/component/contact/ContactCTA';

export const metadata = {
  title: 'Contact SolarPro | Get Free Solar Consultation',
  description: 'Contact SolarPro for your free solar energy consultation. Call 1-800-SOLAR-PRO or fill out our contact form.',
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <ContactCTA />
    </>
  );
}
