import { Metadata } from 'next';
import getCivilPageData from 'src/services/civil-data';
import '@/styles/globals.css';

import BuilderImageSection from '@/components/organisms/BuilderImageSection';
import ChooseMissionSection from '@/components/organisms/ChooseMissionSection';
import GallerySection from '@/components/organisms/GallerySection';
import HeadlineCTAAccordion from '@/components/organisms/HeadlineCTAAccordion';
import HeroSection from '@/components/organisms/HeroSection';
import OurPartnersSection from '@/components/organisms/OurPartnersSection';

const staticData = getCivilPageData();
const heroImage = '/images/civil-and-defense-pages/civil-hero-image.png';

export const metadata: Metadata = {
  title: 'Civil',
  description: `Experience in the future of flight: Our innovative Ultra 2XL combines state-of-art
  technology with unparalleled versatility. The Ultra 2XL swiftly transitions from mundane
  to complex missions with unmatched efficiency and execution. Discover a new realm of
  possibilities as you harness the power of cutting-edge aviation technology exceeding
  your expectation and achieving results that were once beyond reach.`
};

export default function CivilPage() {
  const { builderSection, faqs } = staticData;

  return (
    <>
      <HeroSection
        title={'Civil'}
        image={heroImage}
        content={
          <>
            <p>Let our aircraft do the dull, dirty, and dangerous missions.</p>
            <ul className="content-list">
              <li>Eliminate pilot/crew risk of aerial operations</li>
              <li>
                Increase the safety, speed, and effectiveness of performing essential missions
              </li>
              <li>Expands the window of operation where aerial assets can be utilizes</li>
              <li>
                Minimize changes to existing infrastructure increasing the rate of deployment &
                utilization of UAS
              </li>
            </ul>
          </>
        }
        ctaText="LEARN MORE"
        ctaLink="/missions?category=civil&item=fire"
      />
      <BuilderImageSection
        title={builderSection.title}
        image={builderSection.image}
        withLineBg={false}
        className="pb-0 lg:mt-[-5rem] md:mt-0"
      />
      <ChooseMissionSection withTabs={false} defaultCategory="civil" />
      <HeadlineCTAAccordion data={faqs} ctaAction="/contact" ctaText="CONTACT US" />
      <GallerySection />
      <OurPartnersSection />
    </>
  );
}
