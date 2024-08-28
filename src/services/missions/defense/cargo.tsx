import { ContentProps } from '../index';

function getData(): ContentProps[] {
  return [
    {
      type: 'main_title',
      title: 'Phenix Ultra 2XL Defense Cargo ',
      subTitle: '',
      content: ''
    },
    {
      type: 'title_content_section',
      title: 'Discover the future of Defense Aviation.',
      content: (
        <>
          Phenix Solutions is proud to introduce the pinnacle of defense aviation technology, the
          Ultra 2XL. This heavy-lift UAS is a paradigm shift into aerial mission superiority by
          redefining what&apos;s possible in performance, safety, and versatility.
        </>
      )
    },
    /*{
      type: 'title_content_section',
      title: 'Unmatched performance',
      content: (
        <>
          Our aircraft represents the perfect fusion of power, precision, and innovation; equipped
          with an FAA-certified Rolls Royce RR300 propulsion system, the Ultra 2XL never needs to
          recharge. The coaxial rotor system handles the most challenging terrain and weather
          conditions. It will ensure rapid response times, unmatched maneuverability, and lifting
          capacity that primes the Ultra 2XL for all critical missions when every second counts.
        </>
      )
    },
    {
      type: 'title_content_section',
      title: 'Multi-Mission Versatility',
      content: (
        <>
          Adaptability is critical to modern defense operations, and the Ultra 2XL eclipses all
          others in versatility. Whether you&apos;re transporting troops, equipment, supplies, ammo,
          food, or medicine, this UAS does it all. Customizable pre-position interior cargo pod or
          external cargo hook loading configurations provide flexibility for every mission scenario
          in a dynamically changing landscape.
        </>
      )
    },
    {
      type: 'title_content_section',
      title: 'Stealth and Endurance',
      content: (
        <>
          Due to the rotor system, a coaxial meets the Defense sector&apos;s desired noise reduction
          needs versus traditional helicopters or quad rotors, leading to a stealth element to the
          Ultra 2XL, adding a layer of security and keeping your personnel or cargo safe while
          meeting the objectives of the mission. The lifting capacity increases endurance for
          extending flight time for critical tasks configurable for diverse mission requirements.
        </>
      )
    },
    {
      type: 'title_content_section',
      title: 'Global Partnerships',
      content: (
        <>
          We collaborated and established relationships with defense and humanitarian organizations
          worldwide, ensuring seamless integration and support. Making the most of your investment,
          we are committed to arranging support for every Ultra 2XL to be mission-ready whenever
          duty calls.
        </>
      )
    },*/
    {
      type: 'specialty_section',
      // title: 'Ultra 2XL Heavy-Lift Specialty',
      items: [
        {
          id: crypto.randomUUID(),
          icon: '/images/missions/Defense%20Cargo/defense-cargo-unmatch-performance-icon.svg',
          title: 'Unmatched performance',
          content: (
            <>
              Our aircraft represents the perfect fusion of power, precision, and innovation;
              equipped with an FAA-certified Rolls Royce RR300 propulsion system, the Ultra 2XL
              never needs to recharge. The coaxial rotor system handles the most challenging terrain
              and weather conditions. It will ensure rapid response times, unmatched
              maneuverability, and lifting capacity that primes the Ultra 2XL for all critical
              missions when every second counts.
            </>
          )
        },
        {
          id: crypto.randomUUID(),
          icon: '/images/missions/Defense%20Cargo/defense-cargo-multi-mission-versatility-icon.svg',
          title: 'Multi-Mission Versatility',
          content: (
            <>
              Adaptability is critical to modern defense operations, and the Ultra 2XL eclipses all
              others in versatility. Whether you&apos;re transporting troops, equipment, supplies,
              ammo, food, or medicine, this UAS does it all. Customizable pre-position interior
              cargo pod or external cargo hook loading configurations provide flexibility for every
              mission scenario in a dynamically changing landscape.
            </>
          )
        },
        {
          id: crypto.randomUUID(),
          icon: '/images/missions/Defense%20Cargo/defense-cargo-stealth-endurance-icon.svg',
          title: 'Stealth and Endurance',
          content: (
            <>
              Due to the rotor system, a coaxial meets the Defense sector&apos;s desired noise
              reduction needs versus traditional helicopters or quad rotors, leading to a stealth
              element to the Ultra 2XL, adding a layer of security and keeping your personnel or
              cargo safe while meeting the objectives of the mission. The lifting capacity increases
              endurance for extending flight time for critical tasks configurable for diverse
              mission requirements.
            </>
          )
        },
        {
          id: crypto.randomUUID(),
          icon: '/images/missions/Defense%20Cargo/defense-cargo-global-partnership-icon.svg',
          title: 'Global Partnerships',
          content: (
            <>
              We collaborated and established relationships with defense and humanitarian
              organizations worldwide, ensuring seamless integration and support. Making the most of
              your investment, we are committed to arranging support for every Ultra 2XL to be
              mission-ready whenever duty calls.
            </>
          )
        }
      ]
    },
    {
      type: 'title_content_section',
      title: 'Embrace going Ultra',
      content: (
        <>
          The Ultra 2XL is more than a high-performance UAS; it&apos;s a force multiplier to elevate
          your defense cargo transportation capabilities and confirm a mission success..
        </>
      )
    }
  ];
}

export default getData;
