import CTAButton from '@/components/atoms/CTAButton/CTAButton';

import { ContentProps } from '../index';

function getData(): ContentProps[] {
  return [
    {
      type: 'main_title',
      title: 'Phenix Ultra 2XL Search & Rescue',
      subTitle: 'Lifesaving UAS Search and Rescue (SAR) Aircraft',
      content: (
        <>
          Our Ultra 2XL configuration designed by SAR operators, which boasts a maximum aircraft
          range of nearly 1000NM, capable of multiple integrated cameras, and ease of mission
          planning so intermingling on joint operations with other UASs and crewed aircraft is
          safely achieved. Our training creates specialized RPAs that are ready for rescue
          operations with this swift and effective aircraft. We are dedicated to bringing everybody
          home safely in even the most challenging environments.
        </>
      )
    },
    {
      type: 'specialty_section',
      title: null,
      items: [
        {
          id: crypto.randomUUID(),
          // icon: '/images/missions/fire/fire-mission-aerial-fire-breaks-icon.svg',
          title: 'Emergency response',
          content: (
            <>
              <p>
                Immediate response is required when a ship starts to sink or a climber is lost on a
                mountainside. These distress calls require a wide range of needs and areas to be
                covered by affordable aerial assets like the Ultra 2XL. These life-and-death
                scenarios require urgent launch capability that is undeterred by fog or poor
                visibility. The Ultra 2XL is ready to take flight in under 15 minutes, and with RPAs
                controlling the Ultra 2XL, we can pre-position aircraft 24/7 in the right locations
                to be launched for immediate search and rescue operations.
              </p>
            </>
          )
        },
        {
          id: crypto.randomUUID(),
          // icon: '/images/missions/fire/fire-mission-aerial-fire-breaks-icon.svg',
          title: 'Precision Rescue Operations',
          content: (
            <>
              <p>
                Highly trained crews and aircraft combined for precision maneuvers, ensuring safe
                location and loiter services from rugged terrains, remote areas, and hazardous
                conditions. Also, the Ultra 2XL with cargo hook carousel can drop immediate support
                in safety equipment, rations, medical supplies, survival gear, etc.
              </p>
            </>
          )
        },
        {
          id: crypto.randomUUID(),
          // icon: '/images/missions/fire/fire-mission-aerial-fire-breaks-icon.svg',
          title: 'Search Missions',
          content: (
            <>
              <p>
                Using advanced technology and techniques, we conduct search missions to locate
                individuals in distress, lost, injured, or restrained.
              </p>
            </>
          )
        },
        {
          id: crypto.randomUUID(),
          // icon: '/images/missions/fire/fire-mission-aerial-fire-breaks-icon.svg',
          title: 'Night Operations',
          content: (
            <>
              <p>
                The Ultra 2XL doesn&apos;t stop when the night or most weather conditions creep into
                an area of operation. Our night operations ensure continuous SAR efforts to track,
                locate, protect, resupply, and situational awareness for crewed aircraft to complete
                the extraction.
              </p>
            </>
          )
        }
      ]
    },
    {
      type: 'two_column_section',
      title: 'Why choose the Ultra 2XL',
      items: [
        {
          title: 'Experience',
          content:
            'Our customers are the experts, and the Ultra 2XL configuration is the right tool for future SAR missions. Our RPA training provides our end users with a SAR specialty focus and continues to provide as a resource long after the Ultra 2XL is delivered.'
        },
        {
          title: 'Rapid Deployment',
          content:
            'We understand the urgency of our UAS deployment during these emergencies from strategically positioned through quick deployment. We have designed our aircraft to require minimized resources but state-of-the-art equipment, enabling us to navigate and operate in challenging conditions.'
        },
        {
          title: 'Compassion',
          content:
            'We treat every mission with the utmost care, empathy, and understanding of the importance of every life; our goal is that everyone comes home.'
        }
      ]
    },
    {
      type: 'title_content_section',
      title: 'Our Impact',
      content: (
        <>
          <p>
            Our team built the Ultra 2XL configuration with our operators, agencies, and governments
            to ensure our aircraft&apos;s highest quality and capability. Our unwavering commitment
            is to our community and to help prevent loss of life on the ground, at sea, or in the
            air.
          </p>
          <p>
            Ready to meet the needs of your community with an Ultra 2XL in your fleet with immediate
            deployment and unparalleled around-the-clock SAR capabilities? We are prepared to stand
            with you to save every life. Reach out to us today to discuss your SAR needs.
          </p>
        </>
      )
    },
    {
      type: 'title_content_section',
      title: null,
      content: (
        <>
          <div className="inline-block">
            <CTAButton href="/contact">Request for more information</CTAButton>
          </div>
        </>
      )
    }
  ];
}

export default getData;
