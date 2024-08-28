import getFaqsData from './faqs.data';

export default function getCivilPageData() {
  const builderSection = {
    // title: 'BUILD YOUR AIRCRAFT',
    title: 'Build Your Aircraft',
    image: '/images/missions/red-line-background-mission-background.png'
  };

  const { faqs } = getFaqsData();

  return {
    builderSection,
    faqs
  };
}
