export function getHomePageData() {
  const primaryHeroSection = {
    title: (
      <>
        Simply
        <br />
        <strong>Rugged</strong>
      </>
    ),
    descriptionBold: (
      <p className="uppercase">
        Persistent innovation, Customer centric, Technologic expertise, and effective teamwork.
      </p>
    ),
    descriptionThin: (
      <p>
        These competence connectively will ensure our companies competitive advantage and long term
        success.
      </p>
    ),
    cta: {
      label: 'CTA',
      action: '#'
    }
  };

  const titleContentCTAVideoSection = {
    title: 'Who We Are',
    content: (
      <>
        <p>
          Empowering the skies through cutting edge technology, Phenix is dedicated to
          revolutionizing aerial solutions guided by relentless pursuit of excellence we design
          develop and deploy unmanned aerial systems that push the boundaries transform industries
          and inspire progress committed to safety sustainability and efficiency we soar towards a
          future where our advanced UASs redefine possibilities and create a world of boundless
          opportunities
        </p>
        <br />
        <p>
          <strong>For a free demo, contact us today.</strong>
        </p>
      </>
    ),

    video: {
      url: '#',
      thumb: ''
    }
  };

  const redBannerSection = {
    title: 'BUILD YOUR AIRCRAFT',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    cta: {
      label: 'CUSTOMIZE YOUR AIRCRAFT TODAY',
      action: '#'
    }
  };

  const chooseYouMissionSection = {
    tabs: [],
    items: [
      {
        id: crypto.randomUUID(),
        label: 'CARGO',
        image: '/images/defense-cargo-mission-block-home.png',
        action: '#',
        category: 'civil'
      },
      {
        id: crypto.randomUUID(),
        label: 'HUMAN CARGO',
        image: '/images/defense-human-cargo-mission-block-home.png',
        action: '#',
        category: 'civil'
      },
      {
        id: crypto.randomUUID(),
        label: 'SURVEILLANCE',
        image: '/images/defense-surveillance-mission-block-home.png',
        action: '#',
        category: 'civil'
      },
      {
        id: crypto.randomUUID(),
        label: 'ARMORMENT',
        image: '/images/defense-armorment-mission-block-home.png',
        action: '#',
        category: 'civil'
      },
      {
        id: crypto.randomUUID(),
        label: 'NATURAL DISASTER RELIEF RESPONSE',
        image: '/images/defense-nat-disaster-relief-mission-block-home.png',
        action: '#',
        category: 'civil'
      }
    ]
  };

  const iconLabelRowSection = {
    items: [
      {
        title: 'NON-TRADITIONAL VETERAN OWNED',
        image: '/images/non-trad-vet-owned-icon.png'
      },
      {
        title: 'BASED IN THE U.S.A.',
        image: '/images/based-usa-icon.png'
      },
      {
        title: '100% EMPLOYEE OWNED',
        image: '/images/employee-owned-icon.png'
      }
    ],
    iconCTA: {
      label: 'LEARN MORE ABOUT PHENIX SOLUTIONS',
      action: '#',
      image: '/images/phenix-logo-learn-more.png'
    }
  };

  const ourMissionSection = {
    headline: 'OUR MISSION',
    title: 'Providing game changing aviation solutions to meet modern challenges worldwide.'
  };

  const ourPartnersSection = {
    title: 'Our Partners',
    items: [
      {
        name: 'Acuasi',
        image: '/images/partners/ACUASI.png',
        width: 129,
        height: 40
      },
      {
        name: 'Agility Prime',
        image: '/images/partners/agility-prime.png',
        width: 220,
        height: 40
      },
      {
        name: 'AAAA_mast_iMIS_retina',
        image: '/images/partners/AAAA_mast_iMIS_retina.png',
        width: 163,
        height: 59
      },
      {
        name: 'galois',
        image: '/images/partners/galois.png',
        width: 148,
        height: 39
      },
      {
        name: 'NWUAV',
        image: '/images/partners/NWUAV.png',
        width: 198,
        height: 71
      },
      {
        name: 'rolls-royce',
        image: '/images/partners/rolls-royce.png',
        width: 46,
        height: 60
      }
    ]
  };

  const newsSection = {
    title: 'In the News',
    items: [
      {
        id: crypto.randomUUID(),
        title: 'New Story Title',
        content:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.',
        cta: {
          label: 'READ MORE',
          action: '#'
        }
      },
      {
        id: crypto.randomUUID(),
        title: 'New Story Title',
        content:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.',
        cta: {
          label: 'READ MORE',
          action: '#'
        }
      }
    ],
    cta: {
      label: 'VIEW ALL',
      action: '#'
    }
  };

  return {
    primaryHeroSection,
    titleContentCTAVideoSection,
    redBannerSection,
    chooseYouMissionSection,
    iconLabelRowSection,
    ourMissionSection,
    ourPartnersSection,
    newsSection
  };
}
