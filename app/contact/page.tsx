import { contactSeo } from '@/lib/seo/contactSeo';
import ContactHero from '@/component/contact/ContactHero';
import ContactForm from '@/component/contact/ContactForm';
import ContactInfo from '@/component/contact/ContactInfo';
import ContactCTA from '@/component/contact/ContactCTA';


export const metadata = contactSeo;

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
