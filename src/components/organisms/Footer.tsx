'use client';
import { HubspotFormProps, useHubspotForm } from 'next-hubspot';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

// import { Button } from '../atoms/Button';
// import { InputText } from '../atoms/InputText';

export type NavItemProps = { name: string; path?: string; target?: string };

const navItems: NavItemProps[] = [
  {
    name: 'CIVIL'
  },
  {
    name: 'DEFENSE'
  },
  {
    name: 'BUILD YOUR AIRCRAFT',
    path: 'https://phenix.oneprotex.com/builder/',
    target: '_blank'
  },
  {
    name: 'MISSIONS',
    path: '/missions?category=civil&item=fire'
  },
  {
    name: 'MEDIA'
  },
  {
    name: 'ABOUT'
  },
  {
    name: 'FAQs'
  },
  {
    name: 'CONTACT'
  }
].map((item: NavItemProps) => {
  item.path = item.path || '/' + item.name.toLowerCase().replace(/\s+/gi, '-');

  return item;
});

const HubspotForm = () => {
  const state = useHubspotForm({
    region: 'na1',
    portalId: '39540374',
    formId: 'd60a13b2-9278-462d-b2a8-bac274224c58',
    target: '#subscribe-form'
  } as HubspotFormProps);

  useEffect(() => {
    if (!state.formCreated) {
      const options = {
        region: 'na1',
        portalId: '39540374',
        formId: 'd60a13b2-9278-462d-b2a8-bac274224c58',
        target: '#subscribe-form'
      };
      window.hbspt?.forms?.create(options as HubspotFormProps);
    }
  }, [state]);

  useEffect(() => {
    const mount = () => {
      if (document.querySelector(`#subscribe-form > iframe`)) return;
      const options = {
        region: 'na1',
        portalId: '39540374',
        formId: 'd60a13b2-9278-462d-b2a8-bac274224c58',
        target: '#subscribe-form'
      };
      window.hbspt?.forms?.create(options as HubspotFormProps);
      setTimeout(() => {
        mount();
      }, 1000);
    };

    mount();
  }, []);

  return <div id="subscribe-form" />;
};

export default function Footer() {
  return (
    <div
      className="relative flex min-h-[27.1875rem] w-full flex-col bg-phenix-dark text-phenix-ondark"
      // style={{backgroundImage: "url('/images/footer/footer-pattern.png')", mixBlendMode: 'screen'}}
    >
      <div
        data-role="bg-pattern"
        className="absolute inset-0 bg-transparent mix-blend-screen"
        style={{ backgroundImage: "url('/images/footer/footer-pattern.png')" }}
      ></div>
      <div className="relative mx-auto flex min-h-[23.25rem] w-full max-w-[60rem] flex-1 flex-row items-center justify-between bg-repeat px-8 lg:gap-9 lg:px-20 md:flex-col md:gap-8 md:px-9 md:py-14">
        <div className="text-[0.8125rem] tracking-wider md:text-center">
          <Image
            className="mb-5 md:mx-auto"
            src="/images/phenix-logo-white-footer.png"
            alt="phenix-logo-white-footer"
            width={136}
            height={75}
          />
          <p className="whitespace-pre">
            {[
              '11090 SW Durham Lane, Building G, Suite 4',
              'McMinnville, OR 97128',
              'United States'
            ].join('\n')}
          </p>
          <p className="mt-9">
            <Link href="mailto:info@phenixuas.com">info@phenixuas.com</Link> |{' '}
            {/* <Link href="tel:503-896-9225">503-896-9225</Link> */}
          </p>
        </div>
        <div className="w-full max-w-[23.5rem] lg:max-w-[18.5rem]">
          <div className="mb-5 md:text-center">SUBSCRIBE</div>
          {/* <InputText
            className="w-full rounded-none bg-phenix-dark px-5 text-phenix-ondark"
            enterKeyHint="send"
            placeholder="Email Address"
          />
          <Button className="mt-3 w-full" label="SUBMIT" /> */}
          <HubspotForm />
        </div>
      </div>
      <div className="relative w-full border-t border-t-phenix-stroke bg-phenix-dark py-6 lg:px-20 md:flex md:justify-center md:px-0">
        <ul
          className="mx-auto flex w-full max-w-[60rem] flex-row justify-between text-phenix-ondark 
                    lg:gap-2 lg:text-center lg:text-[0.9375rem] md:max-h-[10rem] md:max-w-[20rem]
                    md:flex-col md:flex-wrap md:items-center md:gap-x-0"
        >
          {navItems.map((item, index: number) => (
            <li key={index} className="md:w-full md:max-w-[8.5rem] md:flex-1 md:text-center">
              <Link href={item.path as string} target={item.target}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
