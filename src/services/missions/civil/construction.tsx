import { ContentProps } from '../index';

function getData(): ContentProps[] {
  return [
    {
      type: 'main_title',
      title: 'Phenix Ultra 2XL Construction',
      subTitle: (
        <>
          <div>Precision aerial solutions for dynamic projects</div>
        </>
      ),
      content:
        'Phenix Solutions is the right partner for revolutionizing construction projects from the sky. The Ultra 2XL is the right low-cost solution that redefines efficiency, speed, and versatility and tackles the most challenging endeavors in the most remote places in the world.'
    },
    {
      type: 'title_content_section',
      title: 'About Us',
      content: (
        <p>
          Phenix Solutions specializes in providing an innovative US construction method that
          addresses the unique demands of modern construction projects with our aircraft and
          commitment to reshaping how we construct our infrastructure.
        </p>
      )
    },
    {
      type: 'specialty_section',
      title: null,
      items: [
        {
          id: crypto.randomUUID(),
          icon: '/images/missions/Construction/construction-heavy-lifting-icon.svg',
          title: 'Heavy Lifting',
          content: (
            <>
              <p>
                Our UAS, the Ultra 2XL, is equipped to transport heavy construction materials to
                otherwise inaccessible or remote sites like never before.
              </p>
            </>
          )
        },
        {
          id: crypto.randomUUID(),
          icon: '/images/missions/Construction/construction-precision-placement-icon.svg',
          title: 'Precise Placement',
          content: (
            <>
              <p>
                The Ultra 2XL with an external long-line cargo hook setup can precisely place
                materials on demand, thus minimizing time loss and labor required in specific
                construction processes.
              </p>
            </>
          )
        },
        {
          id: crypto.randomUUID(),
          icon: '/images/missions/Construction/construction-aerial-surveys-icon.svg',
          title: 'Aerial Surveys',
          content: (
            <>
              <p>
                These surveys can be completed with real-time data to aid the on-site construction
                process with monitoring and quality control.
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
          title: 'Speed and Efficiency',
          content:
            'Our customers are the experts, and the Ultra 2XL SAR configuration is the right tool for future SAR missions. Our RPA training provides our end users with a SAR specialty focus and continues to provide as a resource long after the Ultra 2XL SAR is delivered.'
        },
        {
          title: 'Versatility',
          content:
            'We understand the urgency of our UAS deployment during these emergencies from strategically positioned through quick deployment. We have designed our aircraft to require minimized resources but state-of-the-art equipment, enabling us to navigate and operate in challenging conditions.'
        }
      ]
    },
    {
      type: 'title_content_section',
      title: 'Our Impact',
      content: (
        <>
          <p>
            Phenix can play a pivotal role in accelerating construction, logistics, and enhancing
            project outcomes in the future with the heavy-lifting capabilities of the Ultra 2XL.
            Think Ultra 2XL for cost-effectiveness and quick deployment when your projects require a
            heavy-lift asset. Please get in touch with us to discuss how Phenix or our partners can
            provide aerial solutions to enhance your construction endeavors.
          </p>
        </>
      )
    }
  ];
}

export default getData;
