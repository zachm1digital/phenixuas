import { ContentProps } from '../index';

function getData(): ContentProps[] {
  return [
    {
      type: 'main_title',
      title: 'Phenix Ultra 2XL Imaging / Video',
      subTitle: (
        <>
          <div>Taking surveillance to the next level with UASs.</div>
        </>
      ),
      content:
        'Phenix Solutions Ultra 2XL is the right platform for a trusted eye in the sky. Our mission is simple: to provide unparalleled surveillance and imaging solutions to safeguard what matters most to the client or end user. The Ultra 2XL has a cutting-edge technology package for aerial observations, thus redefining the future of uncrewed surveillance.'
    },
    {
      type: 'two_column_section',
      title: 'Why Choose Us',
      items: [
        {
          title: 'Aerial Advantage',
          content:
            'This strategic advantage with our UAS, the Ultra 2XL allows you to protect your interests, enhance security measures, and stay one step ahead of potential threats.'
        },
        {
          title: 'Custom Solutions',
          content:
            'Every client is unique, and so is the surveillance of their needs. Our partners will work closely with you to design tailored solutions and address your concerns and objectives.'
        },
        {
          title: 'Rapid Response',
          content: (
            <>
              Ultra 2XL is ready to go at a moment&apos;s notice. Our swift response will ensure the
              information you need as fast as possible.
            </>
          )
        },
        {
          title: 'UAS Surveillance',
          content: (
            <>
              The Ultra 2XL can service properties or events by watching the comprehensive
              surveillance services we provide, real-time monitoring, and actionable insights from
              the air.
            </>
          )
        },
        {
          title: 'Security Patrols',
          content: (
            <>
              Intensify your security patrols with aerial support. We can cover large areas
              effectively in cameras, including thermal capability and your choice of video or still
              photos. The camera can also zoom, pan, & rotate from the RPAs chair. Swiftly ensure
              the safety of special events and gatherings with the Ultra 2XL multi-mission camera
              system that can be tailored to your requirements.
            </>
          )
        },
        {
          title: 'Asset Protection',
          content: (
            <>
              Whether high-value cargo in transit or critical infrastructure, the Ultra 2XL has the
              right surveillance capabilities to deter threats and minimize risk.
            </>
          )
        }
      ]
    },
    {
      type: 'main_features_section',
      title: 'Industries We Serve',
      items: [
        'Event Management',
        'Critical Infrastructure',
        'Law Enforcement & Public Safety',
        'Logistics & Transport',
        'Agriculture',
        'Energy and Utilities'
      ]
    },
    {
      type: 'title_content_section',
      title: 'Boost Security',
      content: (
        <>
          <p>
            The power of aerial surveillance and the peace of mind it brings is paramount. Contact
            us today to discuss your specific needs and schedule a consultation with our team so we
            can rise above the challenges for a more secure world.
          </p>
        </>
      )
    }
  ];
}

export default getData;
