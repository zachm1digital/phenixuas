import { ContentProps } from '../index';

function getData(): ContentProps[] {
  return [
    {
      type: 'main_title',
      title: 'Phenix Ultra 2XL APEX (Armorment)',
      subTitle: (
        <>
          <div>Welcome to the Armory</div>
          <div>Precision, Power, Protection: Phenix Ultra 2XL</div>
        </>
      ),
      content: (
        <>
          <p>
            We are at the forefront of UAS armament, equipping your Ultra 2XL with weaponry that you
            need to meet your objectives with precision and confidence. Our advanced armory
            solutions are designed to empower your fleet with the firepower it requires to dominate
            in various roles, from military operations to law enforcement.
          </p>
        </>
      )
    },
    // {
    //   type: 'title_content_section',
    //   title: 'Advanced technology',
    //   content: (
    //     <>
    //       <p>
    //         We stay on the forefront of armament technology, ensuring your Ultra 2XL APEX is armed
    //         with the latest and most effective weaponry available.
    //       </p>
    //     </>
    //   )
    // },
    // {
    //   type: 'title_content_section',
    //   title: 'Custom Options',
    //   content: (
    //     <>
    //       <p>
    //         Your mission is unique, and so is your armament. We work closely with you to tailor your
    //         solutions to your specific requirements, providing the perfect arsenal for your mission.
    //       </p>
    //     </>
    //   )
    // },
    // {
    //   type: 'title_content_section',
    //   title: 'Safety and Reliability',
    //   content: (
    //     <>
    //       <p>
    //         Safety is paramount. Our armament systems are rigorously tested and maintained to
    //         guarantee reliability in the most demanding situations.
    //       </p>
    //     </>
    //   )
    // },
    // {
    //   type: 'title_content_section',
    //   title: 'Expert Support',
    //   content: (
    //     <>
    //       <p>
    //         Our team will consult armament experts & technicians to provide guidance, training, and
    //         support to ensure the maximum effectiveness of your Ultra 2XL armament.
    //       </p>
    //     </>
    //   )
    // },
    {
      type: 'specialty_section',
      title: <>Phenix Ultra 2XL</>,
      items: [
        {
          id: crypto.randomUUID(),
          icon: '/images/missions/Armorment/armorment-advanced-tech-icon.svg',
          title: 'Advanced technology',
          content: (
            <>
              <p>
                We stay on the forefront of armament technology, ensuring your Ultra 2XL APEX is
                armed with the latest and most effective weaponry available.
              </p>
            </>
          )
        },
        {
          id: crypto.randomUUID(),
          icon: '/images/missions/Armorment/armorment-custom-options-icon.svg',
          title: 'Custom Options',
          content: (
            <>
              <p>
                Your mission is unique, and so is your armament. We work closely with you to tailor
                your solutions to your specific requirements, providing the perfect arsenal for your
                mission.
              </p>
            </>
          )
        },
        {
          id: crypto.randomUUID(),
          icon: '/images/missions/Armorment/armorment-safety-reliability-icon.svg',
          title: 'Safety and Reliability',
          content: (
            <>
              <p>
                Safety is paramount. Our armament systems are rigorously tested and maintained to
                guarantee reliability in the most demanding situations.
              </p>
            </>
          )
        },
        {
          id: crypto.randomUUID(),
          icon: '/images/missions/Armorment/armorment-expert-support-icon.svg',
          title: 'Expert Support',
          content: (
            <>
              <p>
                Our team will consult armament experts & technicians to provide guidance, training,
                and support to ensure the maximum effectiveness of your Ultra 2XL armament.
              </p>
            </>
          )
        }
      ]
    },

    /*{
      type: 'title_content_section',
      title: 'Armament options',
      content: (
        <>
          <p></p>
        </>
      )
    },
    {
      type: 'title_content_section',
      title: 'Airborne weapon systems',
      content: (
        <>
          <p>
            Equipped your Ultra 2XL with airborne weapon systems, including guns, missiles, rockets,
            bombs, and more, to achieve air superiority and continue to complete dangerous missions.
          </p>
        </>
      )
    },
    {
      type: 'title_content_section',
      title: 'Precision Targeting systems',
      content: (
        <>
          <p>
            Enhance your accuracy with our precision targeting systems, ensuring you consistently
            hit your mark.
          </p>
        </>
      )
    },
    {
      type: 'title_content_section',
      title: 'Integrated defense solutions',
      content: (
        <>
          <p>
            Protect your Ultra 2XL and enhance survivability in hostile environments with our
            integrated defense solutions.
          </p>
        </>
      )
    },
    {
      type: 'title_content_section',
      title: 'Maintenance and Upgrades',
      content: (
        <>
          <p>
            We offer comprehensive maintenance and upgrade systems services to keep your armament
            systems in peak condition and ensure they remain ready and effective for years to come.
            Our Ultra 2XL armaments options are customizable and completed by designated facilities
            for the following industries:
          </p>
        </>
      )
    }, */

    {
      type: 'two_column_section',
      title: 'Armament options',
      items: [
        {
          title: 'Airborne weapon systems',
          content: (
            <>
              <p>
                Equipped your Ultra 2XL with airborne weapon systems, including guns, missiles,
                rockets, bombs, and more, to achieve air superiority and continue to complete
                dangerous missions.
              </p>
            </>
          )
        },
        {
          title: 'Precision Targeting systems',
          content: (
            <>
              <p>
                Enhance your accuracy with our precision targeting systems, ensuring you
                consistently hit your mark.
              </p>
            </>
          )
        },
        {
          title: 'Integrated defense solutions',
          content: (
            <>
              <p>
                Protect your Ultra 2XL and enhance survivability in hostile environments with our
                integrated defense solutions.
              </p>
            </>
          )
        },
        {
          title: 'Maintenance and Upgrades',
          content: (
            <>
              <p>
                We offer comprehensive maintenance and upgrade systems services to keep your
                armament systems in peak condition and ensure they remain ready and effective for
                years to come. Our Ultra 2XL armaments options are customizable and completed by
                designated facilities for the following industries:
              </p>
              <ul className="content-list mt-4">
                {[
                  'Military',
                  'Defense',
                  'Law enforcement',
                  'Border Patrol',
                  'Homeland Security',
                  'Private Security'
                ].map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            </>
          )
        }
      ]
    },

    // {
    //   type: 'title_content_section',
    //   title: 'Maintenance and Upgrades',
    //   content: (
    //     <>
    //       <p>
    //         We offer comprehensive maintenance and upgrade systems services to keep your armament
    //         systems in peak condition and ensure they remain ready and effective for years to come.
    //         Our Ultra 2XL armaments options are customizable and completed by designated facilities
    //         for the following industries:
    //       </p>
    //     </>
    //   )
    // },

    // {
    //   type: 'main_features_section',
    //   items: [
    //     'Military',
    //     'Defense',
    //     'Law enforcement',
    //     'Border Patrol',
    //     'Homeland Security',
    //     'Private Security'
    //   ]
    // },
    {
      type: 'title_content_section',
      title: '',
      content: (
        <>
          <p>
            Elevate your UAS capability with a Phenix Ultra 2XL by empowering your UAS with the
            armament it needs to take command of the mission. Explore our range of options and
            discover how we can uplift your UAS capability by contacting us today to schedule a
            consultation with our experts and discuss your needs.
          </p>
        </>
      )
    }
  ];
}

export default getData;
