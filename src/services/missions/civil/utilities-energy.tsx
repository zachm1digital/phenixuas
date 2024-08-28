import { ContentProps } from '../index';

function getData(): ContentProps[] {
  return [
    {
      type: 'main_title',
      title: 'Phenix Ultra 2XL Utilities / Energy',
      subTitle: (
        <>
          <div>Phenix Ultra 2XL UPAC</div>
          <div>Recasting Infrastructure with HVTOL</div>
        </>
      ),
      content: (
        <>
          <p>
            We have been working with stakeholders in the Utilities, Patrol, and Construction
            industries to design the Ultra 2XL aircraft to meet their specialized needs. Our design
            is custom-built to tackle these expansive ranges of missions upon delivery. However, the
            Ultra 2XL has built-in multi-mission flexibility, allowing operators to grow into other
            auxiliary workloads. We are committed to reshaping how vital utility work is done
            through innovation that sets us apart in supporting these industries.
          </p>
        </>
      )
    },
    {
      type: 'title_content_section',
      title: 'About Us',
      content: (
        <p>
          Phenix Solutions is your trusted partner in providing a future in utilities, patrol, and
          construction support services. We are raising the bar for these industries to expand and
          enhance their services, infrastructure, and maintenance capabilities for the public.
        </p>
      )
    },
    {
      type: 'specialty_section',
      title: 'Our Services',
      items: [
        {
          id: crypto.randomUUID(),
          // icon: '/images/missions/fire/fire-mission-aerial-fire-breaks-icon.svg',
          title: 'Power Line Inspection',
          content: (
            <>
              <p>
                Our Ultra 2XL will allow operators to conduct precise aerial inspections of utility
                assets. These patrols will be providing imaging for review to ensure efficiency and
                maintenance planning; this will minimize any equipment downtime.
              </p>
            </>
          )
        },
        {
          id: crypto.randomUUID(),
          // icon: '/images/missions/fire/fire-mission-aerial-fire-breaks-icon.svg',
          title: 'Pipeline Patrol',
          content: (
            <>
              <p>
                We provide comprehensive aerial surveillance of pipelines, detecting leaks and
                potential hazards to safeguard the equipment.
              </p>
            </>
          )
        },
        {
          id: crypto.randomUUID(),
          // icon: '/images/missions/fire/fire-mission-aerial-fire-breaks-icon.svg',
          title: 'Emergency Response',
          content: (
            <>
              <p>
                Our rapid response Ultra 2XL can assist in emergencies carrying cargo and equipment
                so crews can focus on the task and get the lights back on.
              </p>
            </>
          )
        },
        {
          id: crypto.randomUUID(),
          // icon: '/images/missions/fire/fire-mission-aerial-fire-breaks-icon.svg',
          title: 'Land Management Support',
          content: (
            <>
              <p>
                The Ultra 2XL can not only provide construction and infrastructure services, but as
                a multi-mission HVTOL, it can be the first on the scene in other emergencies like
                fire suppression, fire detection, and flood control.
              </p>
            </>
          )
        },
        {
          id: crypto.randomUUID(),
          // icon: '/images/missions/fire/fire-mission-aerial-fire-breaks-icon.svg',
          title: '',
          content: (
            <>
              <p>
                Our goal is to minimize interruption to the power needs of the public, loss of
                revenue, and disruption of power grids.
              </p>
            </>
          )
        }
      ]
    },
    {
      type: 'two_column_section',
      title: 'Why Choose Us',
      items: [
        {
          title: 'Efficiency',
          content: (
            <>
              <p>
                Our Ultra 2XL is the heavy lift option to cover a vast area quickly with a low
                operating cost, leading to reduced maintenance times.
              </p>
            </>
          )
        },
        {
          title: 'Access to Inaccessible',
          content: (
            <>
              <p>
                These areas, the ultra 2XL, allow us to reach remote, rugged, and difficult-to-reach
                locations for inspections, repairs, and cargo deliveries for the ground crew.
              </p>
            </>
          )
        },
        {
          title: 'Timely Insight',
          content: (
            <>
              <p>
                Aerial survey patrols provide accurate decision-making data, enabling proactive
                maintenance and better resource allocation.
              </p>
            </>
          )
        },
        {
          title: 'Safety and Reliability',
          content: (
            <>
              <p>
                Ultra 2XL prioritizes safety for the crew on the ground and in the air, ensuring
                operations are conducted seamlessly, securely, and safely.
              </p>
            </>
          )
        },
        {
          title: 'Economics',
          content: (
            <>
              <p>
                The Ultra 2XL will become the premier UAS aircraft for the UPAC community by the
                simple numbers: it can lift most, which allows the Ultra 2XL&apos;s versatility and
                the most hours of operations. The sunset only signals a shift change, not the end of
                your day.
              </p>
            </>
          )
        }
      ]
    },
    {
      type: 'title_content_section',
      title: 'Our Impacts',
      content: (
        <>
          <p>
            The history of aerial utility helicopters and aerial assets has played a significant
            role in the infrastructure and maintenance of our power grid. Phenix&apos;s goal is to
            be an integral part of this future by promoting multiple utility services to improve our
            infrastructure with innovation.
          </p>
        </>
      )
    },
    {
      type: 'title_content_section',
      title: 'Contact Us',
      content: (
        <>
          <p>
            Striving forward with utilities and operators alike, Phenix&apos;s ultra 2XL has built
            as another low-cost tool in the tool shed. We want to give future operations the best
            technology available in their stewardship of our utility and energy sectors. Reach out
            to us to learn more about this transformation.
          </p>
        </>
      )
    }
  ];
}

export default getData;
