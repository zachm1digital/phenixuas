'use client';
import { useHubspotForm, HubspotProvider, HubspotFormProps } from 'next-hubspot';
import Link from 'next/link';
import { HTMLAttributes, ReactNode, useLayoutEffect } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

type ContactItemProps = {
  title: ReactNode;
  phone?: ReactNode;
  email?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const ContactItem = ({ title, phone, email, ...props }: ContactItemProps) => (
  <div
    {...props}
    className="border-b border-b-gray-300 px-4 py-9 font-secondary text-[0.9375rem] last:border-b-0 lg:px-0 lg:py-6"
  >
    <h2 className="mb-6 text-[1.625rem] leading-[1] lg:mb-[1.6875rem] lg:text-[1.4375rem] md:text-[1.5625rem]">
      {title}
    </h2>
    {phone && <div className="[&_a]:hover:text-phenix-primary">{phone}</div>}
    {email && <div className="[&_a]:hover:text-phenix-primary">{email}</div>}
  </div>
);

const HubspotForm = () => {
  const state = useHubspotForm({
    region: 'na1',
    portalId: '39540374',
    formId: '1ef65fc8-0254-42b6-af45-2918496abd70',
    target: '#contact-form'
  } as HubspotFormProps);

  useLayoutEffect(() => {
    if (!state.formCreated) {
      const options = {
        region: 'na1',
        portalId: '39540374',
        formId: '1ef65fc8-0254-42b6-af45-2918496abd70',
        target: '#contact-form'
      };
      window.hbspt?.forms?.create(options as HubspotFormProps);
    }
  }, [state]);

  return <div id="contact-form" />;
};

export default function ContactSection() {
  return (
    <HubspotProvider>
      <div className="px-6 py-[6.875rem] lg:px-20 lg:py-[4.625rem] md:px-9">
        <h1 className="phenix-title-001 mb-9 hidden lg:block lg:text-center md:text-left">
          <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
            Get In Touch<span className="text-phenix-primary">.</span>
          </AnimationOnScroll>
        </h1>
        <div className="flex w-full flex-row items-center justify-center bg-phenix-background">
          <div className="mx-auto flex max-w-[73.75rem] flex-1 flex-row items-center gap-6 lg:gap-[2.125rem] md:flex-col md:items-center md:gap-y-[1.875rem]">
            <AnimationOnScroll
              animateOnce={true}
              animateIn="animate__fadeInLeft"
              animatePreScroll={true}
              className="phenix-form mx-auto flex-1 font-secondary lg:w-full"
            >
              <h1 className="phenix-title-001 mb-9 lg:hidden lg:text-center">
                Get In Touch<span className="text-phenix-primary">.</span>
              </h1>
              <HubspotForm />
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={true}
              animateIn="animate__fadeInRight"
              animatePreScroll={true}
              className="mx-auto flex-1 lg:w-full"
            >
              <ContactItem
                title="Products"
                phone={<Link href="tel:503-896-9225">503-896-9225</Link>}
                email={<Link href="mailto:info@phenixuas.com">info@phenixuas.com</Link>}
              />
              <ContactItem
                title="AOG Support Line (24/7)"
                phone={<Link href="tel:503-896-9225">503-896-9225</Link>}
                email={<Link href="mailto:support@phenixuas.com">support@phenixuas.com</Link>}
              />
              <ContactItem
                title="Careers"
                email={<Link href="mailto:hr@phenixuas.com">hr@phenixuas.com</Link>}
              />
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </HubspotProvider>
  );
}
