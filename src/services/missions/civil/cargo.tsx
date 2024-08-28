import { ContentProps } from '../index';

function getData(): ContentProps[] {
  return [
    {
      type: 'main_title',
      title: 'Phenix Ultra 2XL Heavy-Lift',
      subTitle: 'ACTUAL HEAVY-LIFT UAS CARGO DELIVERY',
      content: (
        <>
          Phenix Solutions has built a heavy-lift UAS to meet the aerospace marketplace. Our Ultra
          2XL system redefines Heavy-Lift UAS with speed, reliability, precision, and transportation
          of goods. We specialize in providing our high-quality UAS cargo configuration with the
          capability that caters to our end users and their unique needs.
        </>
      )
    },
    {
      type: 'image',
      src: '/images/missions/cargo/cargo-heavy-lift-mission-craft-img.png',
      alt: 'Phenix Ultra 2XL Heavy-Lift'
    },
    {
      type: 'main_features_section',
      title: 'Main Features',
      items: [
        'POD DIMENSIONS',
        'LENGTH: 90IN',
        'BOTTOM WIDTH: 82IN',
        'TOP WIDTH: 44INS',
        'HEIGHT: 42IN',
        'DOOR DIMENSIONS WIDTH:42IN',
        'HEIGHT: 33IN',
        'CUBIC CARGO VOLUME: 137 FT³',
        'CARGO POD MAX WEIGHT IS 1500LBS CARGO POD EMPTY WEIGHT IS 200LBS',
        'GROUND CLEARANCE IS 5 INCHES',
        '15-MINUTE INSTALLATION AND REMOVAL',
        'ULTRA 2XL IS DELIVERED WITH AIRCRAFT MOUNTS TO ACCEPT',
        'EQUIPMENT INSTALLATION'
      ]
    },
    {
      type: 'specialty_section',
      title: null,
      items: [
        {
          id: crypto.randomUUID(),
          icon: '/images/missions/cargo/fire-mission-rapid-deployment-icon.svg',
          title: 'Rapid Transportation',
          content: (
            <>
              <p>
                Our Ultra 2XL is ready to transport your cargo swiftly with BVLOS capability by long
                line cargo hook, 463L pallet, or cargo pod, passing traffic obstacles and delivery
                directly to challenging urban or remote locations.
              </p>
            </>
          )
        },
        {
          id: crypto.randomUUID(),
          icon: '/images/missions/cargo/cargo-heavy-lift-specialized-cargo-icon.svg',
          title: 'Specialized Cargo',
          content: (
            <>
              <p>
                From construction materials, utility poles, or medical supplies, Ultra 2XL is
                equipped to transport a wide range of cargo, even in complex and sensitive
                situations and emergency delivery.
              </p>
            </>
          )
        },
        {
          id: crypto.randomUUID(),
          icon: '/images/missions/cargo/cargo-heavy-lift-emergency-delivery-icon.svg',
          title: 'Emergency Delivery',
          content: (
            <>
              <p>
                When urgency is paramount, we offer emergency cargo with a 15-minute ready-to-launch
                sequence from trailer to airborne delivery, getting your goods to their destination
                quickly and precisely.
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
              Ultra delivery eliminates road congestion and allows for point-to-point transport,
              saves time.
            </>
          )
        },
        {
          title: 'Versatility',
          content: (
            <>
              Ultra 2XL can access locations that are inaccessible for traditional transportation
              methods, making us a perfect choice for challenging deliveries.
            </>
          )
        },
        {
          title: 'Timeless',
          content: (
            <>
              We understand the importance of meeting the deadlines for on-time deliveries, we work
              to ensure our aircraft is ready to operate day or night, keeping your customer on
              track.
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
            Our design has always been focused on a UAS with Heavy-lift capabilities for missions
            that are repeatable throughout our development of the Ultra 2XL. When industries cannot
            meet their needs and streamlining their supply chains is required, looking at a low cost
            operator with an Ultra 2XL Cargo could be the correct answer. Our willpower to redefine
            the term Heavy-lift UAS shows our commitment to overcoming the logistical challenges to
            strive for excellence, which sets Phenix apart from other OEMs.
          </p>

          <p>
            Discover the efficiency and speed of the Ultra 2XL UAS and elevate your cargo
            transportation operation from the sky to your destination. We are ready to help you
            deliver precision and efficiency in real-world situations.
          </p>
        </>
      )
    }
  ];
}

export default getData;
