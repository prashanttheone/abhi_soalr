import ContactHero from '@/component/contact/ContactHero';
import ContactForm from '@/component/contact/ContactForm';
import ContactInfo from '@/component/contact/ContactInfo';
import ContactCTA from '@/component/contact/ContactCTA';

export const metadata = {
  title: 'Contact Green Sun Innovations | Get Free Solar Consultation',
  description: 'Contact Green Sun Innovations for your free solar energy consultation. Call+91620029429 or fill out our contact form.',
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
