import { Metadata } from 'next';

import Accordion from '@/components/molecules/Accordion';
import GallerySection from '@/components/organisms/GallerySection';
import OurPartnersSection from '@/components/organisms/OurPartnersSection';
import PageBanner from '@/components/organisms/PageBanner';

export const metadata: Metadata = {
  title: 'FAQs',
  description: `FREQUENTLY ASKED QUESTIONS`
};

export default function FAQsPage() {
  return (
    <>
      <PageBanner
        className="mt-[3.625rem]"
        label={
          <>
            <span className="lg:hidden">FREQUENTLY ASKED QUESTIONS</span>
            <span className="hidden lg:block">FAQs</span>
          </>
        }
      />
      <div className="mb-14  mt-[5.625rem] min-h-[26rem] px-6 lg:px-20 md:px-9">
        <div className="phenix-accordion animate-1s animate__fadeIn mx-auto w-full max-w-[47.75rem]">
          <Accordion activeIndex={0} className="flex flex-col gap-11" />
        </div>
      </div>
      <GallerySection />
      <OurPartnersSection />
    </>
  );
}
