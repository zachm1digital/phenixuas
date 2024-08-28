import getFaqsData from './faqs.data';

export default function getDefensePageData() {
  const builderSection = {
    title: 'Build Your Aircraft',
    image: '/images/missions/red-line-background-mission-background.png'
  };

  const { faqs } = getFaqsData();

  return {
    builderSection,
    faqs
  };
}
