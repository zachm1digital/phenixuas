import CTAButton from '@/components/atoms/CTAButton/CTAButton';

import { ContentProps } from '../index';

function getData(): ContentProps[] {
  return [
    {
      type: 'main_title',
      title: 'Phenix Ultra 2XL Fire',
      subTitle: 'UAS RAPID RESPONSE FIREFIGHTING AIRCRAFT',
      content: (
        <>
          Welcome to Phenix Ultra 2XL, the new defense against wildfires. We designed the Ultra 2XL
          as a firefighting solution to provide initial attack suppression and contain wildfires,
          thus ensuring the safety of lives, communities, and natural resources at a low operational
          cost, day or night. We are dedicated to safeguarding our environment from the devastating
          impact of wildfires.
        </>
      )
    },
    {
      type: 'image',
      src: '/images/missions/fire/fire-mission-craft-img_new.png',
      alt: 'Phenix Ultra 2XL Fire'
    },
    {
      type: 'main_features_section',
      title: 'Main Features',
      items: [
        '150-GALLON CAPACITY',
        'TANK AND DOOR SYSTEM BUILD FOR MAX HEAD PRESSURE',
        'QUICK DISCONNECT HOVER PUMP SYSTEM',
        'DUAL GROUND FILL PORTS AND SIGHT GAGES',
        'VNE 100 KNTS',
        'DELIVERED WITH AIRCRAFT MOUNTSTO ACCEPT EQUIPMENT INSTALLATION',
        '15-MINUTE INSTALLATION AND REMOVAL',
        'TOTAL WEIGHT NOT TO EXCEED 175LBS'
      ]
    },
    {
      type: 'specialty_section',
      // title: 'Ultra 2XL Heavy-Lift Specialty',
      items: [
        {
          id: crypto.randomUUID(),
          icon: '/images/missions/fire/fire-mission-rapid-deployment-icon.svg',
          title: 'Rapid Deployment',
          content: (
            <>
              <p>
                When it comes to wildfires, time is of the essence. Ultra 2XL can be strategically
                stationed and can be ready for rapid deployment in under 15 minutes allowing the
                Ultra 2XL to be on the scene in moments.
              </p>
            </>
          )
        },
        {
          id: crypto.randomUUID(),
          icon: '/images/missions/fire/fire-mission-precision-water-drops-icon.svg',
          title: 'Precision Water Drops',
          content: (
            <>
              <p>
                Our expert mission computer with local authority-approved missions allows remote
                pilots to coordinate and deliver precision water drops directly at the heart of the
                fire, effectively reducing its intensity and slowing its spread.
              </p>
            </>
          )
        },
        {
          id: crypto.randomUUID(),
          icon: '/images/missions/fire/fire-mission-aerial-fire-breaks-icon.svg',
          title: 'Aerial Fire Breaks',
          content: (
            <>
              <p>
                The Ultra 2XL fire tank can create strategic fire breaks by dropping fire retardant
                chemicals in critical areas, halting the advance of fire and protecting vulnerable
                resources and regions.
              </p>
            </>
          )
        },
        {
          id: crypto.randomUUID(),
          icon: '/images/missions/fire/fire-mission-night-operations-icon.svg',
          title: 'Night Operations',
          content: (
            <>
              <p>
                The Ultra 2XL doesn&apos;t rest when the sun sets. Our night operations ensure
                continuous firefighting efforts to combat the fire around the clock
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
          content: (
            <>
              <p>
                The Phenix Solutions team comprised of aerial firefighting equipment professionals
                with a proven record of providing the right equipment to stop fires in their tracks.
                We bring expertise to every mission.
              </p>
            </>
          )
        },
        {
          title: 'Advanced Technology',
          content: (
            <>
              <p>
                Our Ultra 2XL is equipped with the latest firefighting technology, enabling us to
                dynamically modify with ever-changing fire conditions and adapt to any future
                technological advances in the firefighting space.
              </p>
            </>
          )
        },
        {
          title: 'Swift Response',
          content: (
            <>
              <p>
                We understand the situation and urgency. Our rapid response times ensure fires are
                met with immediate action.
              </p>
            </>
          )
        },
        {
          title: 'Safety First',
          content: (
            <>
              <p>
                The protection that Ultra 2XL provides is unmatched by its capability of tackling
                those dangerous missions, emphasizing safety protocols within the airspace with
                other crewed or uncrewed aircraft. Safety is key.
              </p>
            </>
          )
        }
      ]
    },
    {
      type: 'title_content_section',
      title: 'Our Impact',
      content: (
        <>
          <p>
            Throughout our years of service with aerial mission equipment, we have played a vital
            role in containing and suppressing wildfires, preventing extensive damage and loss of
            life. Our commitment to the environment and our communities drives us to push
            firefighting innovation in aviation future into UAS (Uncrewed Aerial Systems).
          </p>

          <p>
            Ready to start a firefighting operation? Or add an Ultra 2XL to your fleet with
            immediate deployment and unparalleled around the clock fire suppression capabilities?
            Reach out to us today to discuss wildfire prevention needs.
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
