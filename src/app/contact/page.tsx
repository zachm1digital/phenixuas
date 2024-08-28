import { Metadata } from 'next';

import ContactSection from '@/components/organisms/ContactSection';
import LocationSection from '@/components/organisms/LocationSection';
import PageBanner from '@/components/organisms/PageBanner';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: `Contact Phenix`
};

const ContactPage = () => (
  <div>
    <PageBanner className="mt-[3.625rem]" label="CONTACT" />
    <LocationSection />
    <ContactSection />
  </div>
);

export default ContactPage;
