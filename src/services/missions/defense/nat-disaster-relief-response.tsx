import { ContentProps } from '../index';

function getData(): ContentProps[] {
  return [
    {
      type: 'main_title',
      title: 'Phenix Ultra 2XL Natural Disaster Relief Response',
      subTitle: 'Immediate Disaster Relief',
      content: (
        <>
          <p>Hope, help, and healing in the wake of natural disasters, Ultra 2XL</p>
          <br />
          <p>
            We are a trusted partner in our aircraft&apos;s capabilities to provide rapid and
            practical assistance during natural disasters when all other resources are deployed. Our
            mission is to work with first responders, delivering critical aid and relieving crewed
            aerial assets to handle recovery efforts for the communities in crisis.
          </p>
        </>
      )
    },
    {
      type: 'specialty_section',
      // title: 'Ultra 2XL capabilities and services',
      items: [
        {
          id: crypto.randomUUID(),
          icon: '/images/missions/Disaster%20Relief/disaster-relief-swift-response-icon.svg',
          title: 'Swift response',
          content: (
            <>
              <p>
                When disaster strikes, the Ultra 2XL is always ready to ship to the affected area
                and to deploy in 15 minutes after off-loading, ensuring the aid reaches effective
                regions quickly.
              </p>
            </>
          )
        },
        {
          id: crypto.randomUUID(),
          icon: '/images/missions/Disaster%20Relief/disaster-relief-sar-icon.svg',
          title: 'Search & Rescue',
          content: (
            <>
              <p>
                when lives are at stake, the Ultra 2XL is equipped with state-of-the-art technology
                to locate search and rescue individuals in the most challenging of conditions.
              </p>
            </>
          )
        },
        {
          id: crypto.randomUUID(),
          icon: '/images/missions/Disaster%20Relief/disaster-relief-supply-drops-icon.svg',
          title: 'Supply Drops',
          content: (
            <>
              <p>
                In areas cut off from conventional transportation, we deliver essential supplies,
                including food, water, medical, and shelter materials.
              </p>
            </>
          )
        },
        {
          id: crypto.randomUUID(),
          icon: '/images/missions/Disaster%20Relief/disaster-relief-aerial-surveys-icon.svg',
          title: 'Aerial Surveys',
          content: (
            <>
              <p>
                The Ultra 2XL can conduct rapid aerial assessments to help authorities provide and
                prioritize relief efforts, allocating resources effectively.
              </p>
            </>
          )
        },
        {
          id: crypto.randomUUID(),
          icon: '/images/missions/Disaster%20Relief/disaster-relief-community-aid-icon.svg',
          title: 'Community Aid',
          content: (
            <>
              <p>
                we prioritize the needs of the affected districts and work in close coordination
                with local authorities and relief organizations to provide the most effective
                assistance.
              </p>
            </>
          )
        }
      ]
    },
    {
      type: 'title_content_section',
      title: 'Our Commitment to Our Communities',
      content: (
        <>
          <p>
            Our partners and Ultra 2XL are driven to help our communities rebuild & recover after
            the devastating impact of natural disasters. We are dedicated to providing hope and help
            when needed.
          </p>
        </>
      )
    }
  ];
}

export default getData;
