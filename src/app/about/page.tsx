import { Metadata } from 'next';

import GallerySection from '@/components/organisms/GallerySection';
import LeadershipSection from '@/components/organisms/LeadershipSection';
import OurHistorySection from '@/components/organisms/OurHistorySection';
import OurPartnersSection from '@/components/organisms/OurPartnersSection';
import OurStorySection from '@/components/organisms/OurStorySection';
import PageBanner from '@/components/organisms/PageBanner';

import getLeadershipList from '../../services/about-data';

const dummyLinks = [
  {
    link: '#leadership',
    label: 'LEADERSHIP'
  },
  {
    link: '#our-story',
    label: 'STORY'
  },
  {
    link: '#our-history',
    label: 'HISTORY'
  },
  {
    link: '#gallery',
    label: 'GALLERY'
  },
  {
    link: '#partners',
    label: 'PARTNERS'
  }
];

const staticData = getLeadershipList();

export const metadata: Metadata = {
  title: 'About',
  description:
    'Phenix Solutions delivers game changing aircraft worldwide in order to save lives and maximize demand on command.'
};

function AboutPage() {
  // todo: replace get function
  const leaders = staticData;

  return (
    <>
      <PageBanner className="mt-[3.625rem]" label="ABOUT PHENIX" links={dummyLinks} />
      <LeadershipSection items={leaders} />
      <OurStorySection />
      <OurHistorySection />
      <GallerySection />
      <OurPartnersSection />
    </>
  );
}

export default AboutPage;
