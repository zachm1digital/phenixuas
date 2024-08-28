import { ContentProps } from '../index';

function getData(): ContentProps[] {
  return [
    {
      type: 'main_title',
      title: 'Phenix Ultra 2XL AG (Agriculture)',
      subTitle: 'Nurturing the world from above by UAS',
      content: (
        <>
          Phenix Solutions is your trusted partner to redefine and retool your aerial agricultural
          company or service. Flying the Ultra 2XL brings your team to a modern level of precision
          and efficiency in crop protection, land management, and environmental enhancement.
        </>
      )
    },
    {
      type: 'title_content_section',
      title: 'About Us',
      content: (
        <>
          <p>
            At Phenix Solutions, we specialize in providing advanced UAS aircraft that are
            tailor-made to meet the diverse needs of agriculture, forestry, and conservation
            industries. We are committed to innovation and sustainable practices that set us apart
            in supporting and delivering effective and eco-friendly solutions for our
            customers&apos; future needs.
          </p>
        </>
      )
    },
    {
      type: 'specialty_section',
      title: null,
      items: [
        {
          id: crypto.randomUUID(),
          icon: '/images/missions/fire/fire-mission-aerial-fire-breaks-icon.svg',
          title: 'Crop Protection',
          content: (
            <>
              <p>
                Our Ultra 2XL delivers targeted liquid spray applications for safeguarding crops
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
      ]
    },
    {
      type: 'two_column_section',
      title: 'Why Choose Us',
      items: [
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
            'We work closely with clients who develop tailored solutions that address their specific needs, and our goal is to meet those challenges. The Ultra 2XL is a multiple-mission tool limited by imagination only.'
        },
        {
          title: 'Economics',
          content:
            'The Ultra 2XL will become the premier UAS aircraft for the agricultural aviation industry by the simple numbers, it can lift the most, this allows it to spray the most acres per hour with the fewest ferries, and finally the most hours of operations. The sunset only signals a shift change, not the end of your day.'
        }
      ]
    },
    {
      type: 'title_content_section',
      title: 'Our Impact',
      content: (
        <>
          <p>
            Throughout our journey, we&apos;ve played a pivotal role in enhancing crop yields,
            restoring ecosystems, and contributing to sustainable Land Management practices. Our
            commitment is to excellent environmental stewardship and to keep our operators flying
            with the best technology available.
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
            Our experience, focus, determination, and commitment to the aerial agricultural industry
            is why we created the Ultra 2XL. We understand agriculture touches everyone globally and
            we are committed to supporting our futures. We hope to hear from you to discuss our role
            in making a better tomorrow.
          </p>
        </>
      )
    }
  ];
}

export default getData;
