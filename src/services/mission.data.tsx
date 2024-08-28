export function getMissionData() {
  const centerHeadlineSection = {
    title: 'Mission Sets',
    content: (
      <>
        <p>Ideas - Innovation informed by experience. We understand missions. Etc.</p>
        {/* <p>
          <strong>Choose lorem ipsum.</strong>
        </p> */}
      </>
    )
  };

  const tabsSection = {
    tabs: [
      {
        id: 'civil',
        label: 'CIVIL'
      },
      {
        id: 'defense',
        label: 'DEFENSE'
      }
    ]
  };

  const categories = [
    {
      id: crypto.randomUUID(),
      label: 'FIRE',
      key: 'fire',
      type: 'civil'
    },
    {
      id: crypto.randomUUID(),
      label: 'CARGO',
      key: 'cargo',
      type: 'civil'
    },
    {
      id: crypto.randomUUID(),
      label: 'AGRICULTURE',
      key: 'agriculture',
      type: 'civil'
    },
    {
      id: crypto.randomUUID(),
      label: 'SEARCH & RESCUE',
      key: 'search-and-rescue',
      type: 'civil'
    },
    {
      id: crypto.randomUUID(),
      label: 'PUBLIC SAFETY',
      key: 'public-safety',
      type: 'civil'
    },
    {
      id: crypto.randomUUID(),
      label: 'NATURAL DISASTER RELIEF RESPONSE',
      key: 'natural-disaster-relief-response',
      type: 'civil'
    },
    {
      id: crypto.randomUUID(),
      label: 'UTILITIES/ENERGY',
      key: 'utilities-energy',
      type: 'civil'
    },
    {
      id: crypto.randomUUID(),
      label: 'CONSTRUCTION',
      key: 'construction',
      type: 'civil'
    },
    {
      id: crypto.randomUUID(),
      label: 'IMAGING/VIDEO',
      key: 'imaging-video',
      type: 'civil'
    },
    {
      id: crypto.randomUUID(),
      label: 'RESEARCH & DEVELOPMENT',
      key: 'research-and-development',
      type: 'civil'
    },
    {
      id: crypto.randomUUID(),
      label: 'CUSTOMER PROVIDED PAYLOAD/ EQUIPMENT',
      key: 'customer-provided-payload-equipment',
      type: 'civil'
    }
  ];

  const allSpecs = [
    {
      id: crypto.randomUUID(),
      categoryId: categories[0].id,
      title: 'Phenix Ultra 2XL Fire',
      subtitle: 'UAS RAPID RESPONSE FIREFIGHTING AIRCRAFT',
      description:
        'Welcome to Phenix Ultra 2XL fire, the new hi-tech line of defense against wildfires. We provide cutting-edge UAS firefighting solutions to provide initial attack capability and contain wildfires, ensuring the safety of lives, communities, and natural resources at a low operational cost, day or night. We are dedicated to safeguarding our environment from the devastating impact of wildfires. With years of experience and state-of-the-art equipment, we are the leaders in UAS Firefighting Aircraft.',
      image: '/images/missions/fire/fire-mission-craft-img.png',
      mainFeatureText: 'Main Features',
      mainFeatures: [
        '150-GALLON CAPACITY',
        'TANK AND DOOR SYSTEM BUILD FOR MAX HEAD PRESSURE',
        'QUICK DISCONNECT HOVER PUMP SYSTEM',
        'DUAL GROUND FILL PORTS AND SIGHT GAGES',
        'VNE 100 KNTS',
        'DELIVERED WITH AIRCRAFT MOUNTSTO ACCEPT EQUIPMENT INSTALLATION',
        '15-MINUTE INSTALLATION AND REMOVAL',
        'TOTAL WEIGHT NOT TO EXCEED 175LBS'
      ],
      specialFeatures: [
        {
          id: crypto.randomUUID(),
          icon: '/images/missions/fire/fire-mission-aerial-fire-breaks-icon.svg',
          title: 'Rapid Deployment',
          content: (
            <>
              <p>
                When wildfires, time is of the essence. Ultra 2XL fire can be strategically
                stationed for rapid deployment in under 15 minutes, allowing us to be on the scene
                in moments.
              </p>
            </>
          )
        },
        {
          id: crypto.randomUUID(),
          icon: '/images/missions/fire/fire-mission-aerial-fire-breaks-icon.svg',
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
          title: 'AERIAL FIRE BREAKS',
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
          icon: '/images/missions/fire/fire-mission-aerial-fire-breaks-icon.svg',
          title: 'AERIAL FIRE BREAKS',
          content: (
            <>
              <p>
                The Ultra 2XL doesn’t rest when the sun sets. Our night operations ensure continuous
                firefighting efforts to combat the fire around the clock.
              </p>
            </>
          )
        }
      ],
      reasonsToChooseText: 'Why choose the Ultra 2XL Fire',
      reasonsToChooseProduct: [
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
                dynamically evolve with ever changing fire conditions and adapt to any future
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
                We understand the situations urgency. Our rapid response times ensure fires are met
                with immediate action.
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
                those most dangerous missions, emphasizing safety protocols within the airspace with
                other crewed or uncrewed aircraft. Safety is key.
              </p>
            </>
          )
        }
      ],

      ourImpact: {
        title: 'Our Impact',
        content: (
          <>
            <p>
              Throughout our years of service with aerial mission equipment, we have played a vital
              role in containing and suppressing wildfires, preventing extensive damage and loss of
              life. Our commitment to the environment and our communities drives us to push
              firefighting innovation in aviation future into Uncrewed Aerial Systems.
            </p>

            <p>
              Ready to start a firefighting operation or add an Ultra 2XL to your fleet with
              immediate deployment and unparalleled around the clock fire suppression capabilities?
              We are prepared to stand with you to confront the fires from above. Reach out to us
              today to discuss wildfire prevention needs.
            </p>
          </>
        )
      }
    },
    {
      id: crypto.randomUUID(),
      categoryId: categories[1].id,
      title: 'Phenix Ultra 2XL Heavy-Lift',
      subtitle: 'ACTUAL HEAVY-LIFT UAS CARGO DELIVERY',
      description:
        'Where the sky is not the limit for cargo delivery, Phenix Solutions has built a heavy-lift UAS to meet the aerospace marketplace. Our Ultra 2XL Heavy-Lift system redefines Heavy-Lift UAS with speed, reliability, precision, and transportation of goods. We specialize in providing our high-quality UAS cargo configuration with the capability that caters to our end users and their unique needs. Our Ultra 2XL Heavy lift, with its state-of-the-art equipment and our dedication to excellence, ensures our cargo reaches its destination every time, making us the leader in UAS Cargo delivery aircraft.',
      image: '/images/missions/cargo/cargo-heavy-lift-mission-craft-img.png',
      mainFeatureText: 'Main Features',
      mainFeatures: [
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
      ],
      specialFeatures: [
        {
          id: crypto.randomUUID(),
          icon: '/images/missions/fire/fire-mission-aerial-fire-breaks-icon.svg',
          title: 'Rapid Transportation',
          content: (
            <>
              <p>
                Our Ultra 2XL Heavy-lift is ready to transport your cargo swiftly with BVLOS
                capability by long line cargo hook, 463L pallet, or cargo pod, passing traffic
                obstacles and delivery directly to challenging urban or remote locations.
              </p>
            </>
          )
        },
        {
          id: crypto.randomUUID(),
          icon: '/images/missions/fire/fire-mission-aerial-fire-breaks-icon.svg',
          title: 'Specialized Cargo',
          content: (
            <>
              <p>
                From construction materials, utility poles, or medical supplies, Ultra 2XL
                Heavy-Lift is equipped to transport a wide range of cargo, even in complex and
                sensitive situations and emergency delivery.
              </p>
            </>
          )
        },
        {
          id: crypto.randomUUID(),
          icon: '/images/missions/fire/fire-mission-aerial-fire-breaks-icon.svg',
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
      ],
      reasonsToChooseText: 'Why Choose Us',
      reasonsToChooseProduct: [
        {
          title: 'Efficiency',
          content:
            'The Phenix Solutions team comprised of aerial firefighting equipment professionals with a proven record of providing the right equipment to stop fires in their tracks. We bring expertise to every mission.'
        },
        {
          title: 'Versatility',
          content:
            'The Phenix Solutions team comprised of aerial firefighting equipment professionals with a proven record of providing the right equipment to stop fires in their tracks. We bring expertise to every mission.'
        },
        {
          title: 'Timeless',
          content:
            'The Phenix Solutions team comprised of aerial firefighting equipment professionals with a proven record of providing the right equipment to stop fires in their tracks. We bring expertise to every mission.'
        }
      ],

      ourImpact: {
        title: 'Our Impact',
        content: (
          <>
            <p>
              Our design has always been focused on a UAS with Heavy-lift capabilities for missions
              that are repeatable throughout our development of the Ultra 2XL. When industries
              cannot meet their needs and streamlining their supply chains is required, looking at a
              low operator with an Ultra 2XL Cargo could be the correct answer. Our willpower to
              redefine the term Heavy-lift UAS shows our commitment to overcoming the logistical
              challenges to strive for excellence, which sets Phenix apart from other OEMs.
            </p>

            <p>
              Discover the efficiency and speed of the Ultra 2XL Heavy-lift UAS and elevate your
              cargo transportation operation from the sky to your destination. We are ready to
              support you. Don&apos;t hesitate to contact us so we can help you deliver precision
              and efficiency in real-world situations.
            </p>
          </>
        )
      }
    },
    {
      id: crypto.randomUUID(),
      categoryId: categories[2].id,
      title: 'Phenix Ultra 2XL AG',
      subtitle: 'Nurturing the world from above by UAS',
      description: (
        <>
          <p>
            Phenix Solutions is your trusted partner to redefine and retool your aerial agricultural
            company or service. Flying the Ultra 2XL AG with our state-of-the-art equipment and
            unrivaled capability brings your team to a modern level of precision and efficiency in
            crop protection, land management, and environmental enhancement.
          </p>
          <br />
          <strong>About Us:</strong>
          <p>
            At Phenix Solutions, we specialize in providing advanced UAS aircraft that are
            tailor-made to meet the diverse needs of agriculture, forestry, and conservation
            industries. We are committed to innovation and sustainable practices that set us apart
            in supporting and delivering effective and eco-friendly solutions for our
            customers&apos; future needs.
          </p>
        </>
      ),
      image: '/images/missions/cargo/cargo-heavy-lift-mission-craft-img.png',
      // mainFeatureText: 'Main Features',
      // mainFeatures: [
      //   'POD DIMENSIONS',
      //   'LENGTH: 90IN',
      //   'BOTTOM WIDTH: 82IN',
      //   'TOP WIDTH: 44INS',
      //   'HEIGHT: 42IN',
      //   'DOOR DIMENSIONS WIDTH:42IN',
      //   'HEIGHT: 33IN',
      //   'CUBIC CARGO VOLUME: 137 FT³',
      //   'CARGO POD MAX WEIGHT IS 1500LBS CARGO POD EMPTY WEIGHT IS 200LBS',
      //   'GROUND CLEARANCE IS 5 INCHES',
      //   '15-MINUTE INSTALLATION AND REMOVAL',
      //   'ULTRA 2XL IS DELIVERED WITH AIRCRAFT MOUNTS TO ACCEPT',
      //   'EQUIPMENT INSTALLATION'
      // ],
      specialFeatures: [
        {
          id: crypto.randomUUID(),
          icon: '/images/missions/fire/fire-mission-aerial-fire-breaks-icon.svg',
          title: 'Crop Protection',
          content: (
            <>
              <p>
                Our Ultra 2XL AG delivers targeted liquid spray applications for safeguarding crops
                while minimizing drift and other environmental impacts.
              </p>
            </>
          )
        },
        {
          id: crypto.randomUUID(),
          icon: '/images/missions/fire/fire-mission-aerial-fire-breaks-icon.svg',
          title: 'Reforestation Support',
          content: (
            <>
              <p>
                We assist in reforestation efforts by conducting precision fertilization and helping
                restore natural habitats and forest ecosystems.
              </p>
            </>
          )
        },
        {
          id: crypto.randomUUID(),
          icon: '/images/missions/fire/fire-mission-aerial-fire-breaks-icon.svg',
          title: 'Environmental Conservation',
          content: (
            <>
              <p>
                Our aerial spray system can help control invasive species and promote the growth of
                native plants and sensitive ecosystems.
              </p>
            </>
          )
        },
        {
          id: crypto.randomUUID(),
          icon: '/images/missions/fire/fire-mission-aerial-fire-breaks-icon.svg',
          title: 'Land Rehabilitation',
          content: (
            <>
              <p>
                From wildfire recovery to erosion control, we contribute to land rehabilitation
                projects by applying necessary treatments to restore land and health.
              </p>
            </>
          )
        }
      ],
      reasonsToChooseText: 'Why Choose Us',
      reasonsToChooseProduct: [
        {
          title: 'Precision Agriculture',
          content:
            'Our advanced spray technology ensures accurate and even distribution, minimizing waste and maximizing efficiency and effectiveness.'
        },
        {
          title: 'Eco-friendly Solutions',
          content:
            'We prioritize environmentally conscious practices using low drift nozzles and choosing products with minimal impact on non-targeted areas.'
        },
        {
          title: 'Expertise',
          content:
            'Our engineers, technicians, and C-suite managers have extensive experience in aerial spray equipment to assist in operations, guaranteeing reliable and effective results.'
        },
        {
          title: 'Custom Solutions',
          content:
            'We work closely with clients who develop tailored solutions that address their specific needs, and our goal is to meet those challenges. The Ultra 2XL AG is a multiple-mission tool limited by imagination only.'
        },
        {
          title: 'Economics',
          content:
            'The Ultra 2XL AG will become the premier UAS aircraft for the agricultural aviation industry by the simple numbers, it can lift the most at 1500lbs, this allows it to spray the most acres per hour with the fewest ferries, and finally the most hours of operations. The sunset only signals a shift change, not the end of your day.'
        }
      ],

      ourImpact: {
        title: 'Our Impact',
        content: (
          <>
            <p>
              Throughout our journey, we&apos;ve played a pivotal role in enhancing crop yields,
              restoring ecosystems, and contributing to sustainable Land Management practices. Our
              commitment is to excellent environmental stewardship and to keep our operators flying
              with the best technology available.
            </p>

            <p>
              Discover the efficiency and speed of the Ultra 2XL Heavy-lift UAS and elevate your
              cargo transportation operation from the sky to your destination. We are ready to
              support you. Don&apos;t hesitate to contact us so we can help you deliver precision
              and efficiency in real-world situations.
            </p>
          </>
        )
      }
    }
  ];

  const builderSection = {
    title: 'Build Your Aircraft',
    image: '/images/missions/red-line-background-mission-background.png'
  };

  return {
    centerHeadlineSection,
    tabsSection,
    categories,
    allSpecs,
    builderSection
  };
}
