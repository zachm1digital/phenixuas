import { Metadata } from 'next';

import ChooseMissionSection from '@/components/organisms/ChooseMissionSection';
import IconLabelSection from '@/components/organisms/IconLabelSection';
import NewsSection from '@/components/organisms/NewsSection';
import OurMissionSection from '@/components/organisms/OurMissionSection';
import OurPartnersSection from '@/components/organisms/OurPartnersSection';
import PrimaryHero from '@/components/organisms/PrimaryHero';
import RedBanner from '@/components/organisms/RedBanner';
import TitleMedia from '@/components/organisms/TitleMedia';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'PERSISTENT INNOVATION, CUSTOMER CENTRIC,TECHNOLOGIC EXPERTISE, AND EFFECTIVE TEAMWORK.'
};

const HomePage = () => (
  <>
    <div>
      <PrimaryHero />
      <TitleMedia />
      <RedBanner />
      <ChooseMissionSection />
      <IconLabelSection />
      <OurMissionSection />
      <OurPartnersSection />
      <NewsSection />
    </div>
  </>
);

export default HomePage;
