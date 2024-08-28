'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef } from 'react';

import { cn } from '@/lib/utils';

import { Button } from '../atoms/Button';
import MissionHeaderPopup, { MissionHeaderPopupFunctions } from './MissionHeaderPopup';
import MobileNavigationModal, { MobileNavigationModalFunctions } from './MobileNavigationModal';

const links = [
  {
    name: 'Civil',
    path: '/civil'
  },
  {
    name: 'Defense',
    path: '/defense'
  },
  {
    name: 'Build Your Aircraft',
    path: 'https://phenix.oneprotex.com/builder/',
    target: '_blank'
  },
  {
    name: 'Missions',
    path: '/missions?category=civil&item=fire'
  },
  {
    name: 'Media',
    path: '/media'
  },
  {
    name: 'About',
    path: '/about'
  },
  {
    name: 'FAQs',
    path: '/faqs'
  }
  // {
  //   name: 'Contacts',
  //   path: '/contact'
  // }
];

export default function Header() {
  const pathName = usePathname();
  const popupRef = useRef<MissionHeaderPopupFunctions | null>(null);
  const navPopupRef = useRef<MobileNavigationModalFunctions | null>(null);

  /* eslint-disable */
  const handleHover = (link: { name: string; path: string }) => {
    if (pathName.match(/^\/missions/gi)) return;
    if (link.path === '/missions?category=civil&item=fire') {
      popupRef.current?.show();
    } else {
      popupRef.current?.hide();
    }
  };

  /* eslint-disable */
  const handleHoverLeave = (link: { name: string; path: string }) => {
    if (link.path === '/missions') popupRef.current?.hide();
  };

  const handleMenuToggle = () => {
    navPopupRef.current?.show();
  };

  const onClick = (link: { name: string; path: string }) => {
    if (link.path === '/missions?category=civil&item=fire') popupRef.current?.hide();
  };

  return (
    <>
      <div className="block w-full px-6 lg:px-0">
        <div className="mx-auto mt-7 flex w-full max-w-[73.75rem] flex-row items-center gap-10 lg:px-[5rem] md:mt-6 md:flex-col md:justify-center md:gap-0">
          <div
            data-role="logo-holder"
            className="min-w-[8.5rem] max-w-[8.5rem] md:min-w-0 md:max-w-none"
          >
            <Link href="/">
              <Image
                src="/images/phenix-logo-nav.png"
                height={92}
                width={136}
                alt="Logo"
                className="md:h-[4.25rem] md:w-[6.25rem]"
              />
            </Link>
          </div>
          <div className="flex-1" />
          <div data-role="nav-links-holder" className="lg:hidden">
            <ul className="flex flex-row items-start gap-10">
              {links.map((link, index: number) => {
                const _path = pathName.replace(/^\//, '').split('/');
                const pattern = new RegExp(`^/${_path[0]}.*`);

                return (
                  <li
                    className={cn(
                      'header-link relative min-w-[2.875rem] py-[1.25rem] text-center text-sm font-bold uppercase',
                      pathName && pathName !== '/' && link.path.match(pattern) ? 'active' : '',
                      link.path === '/faqs' && 'hidden' //remove this if needed
                    )}
                    key={index}
                    onPointerEnter={() => handleHover(link)}
                    onPointerLeave={() => handleHoverLeave(link)}
                    onClick={() => onClick(link)}
                  >
                    <Link href={link.path} target={link.target}>
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <Link href="/contact">
            <Button className="min-w-[8.625rem] lg:hidden" label="CONTACT US" />
          </Link>
          <button
            className="hidden lg:block md:absolute md:right-[1.75rem] md:top-6"
            onClick={handleMenuToggle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={30.785}
              height={21.5}
              viewBox="0 0 30.785 21.5"
            >
              <g id="Group_430" data-name="Group 430" transform="translate(-300.5 -23.75)">
                <line
                  id="Line_116"
                  data-name="Line 116"
                  x2="30.785"
                  transform="translate(300.5 24.5)"
                  fill="none"
                  stroke="#b9262c"
                  strokeWidth="1.5"
                />
                <line
                  id="Line_117"
                  data-name="Line 117"
                  x2="30.785"
                  transform="translate(300.5 34.5)"
                  fill="none"
                  stroke="#b9262c"
                  strokeWidth="1.5"
                />
                <line
                  id="Line_118"
                  data-name="Line 118"
                  x2="30.785"
                  transform="translate(300.5 44.5)"
                  fill="none"
                  stroke="#b9262c"
                  strokeWidth="1.5"
                />
              </g>
            </svg>
          </button>
        </div>
      </div>
      {/* <div className="relative hidden flex-row items-center justify-center pt-6 md:flex">
        <div data-role="logo-holder" className="max-w-[8.5rem]">
          <Link href="/">
            <Image src="/images/phenix-logo-nav.png" height={92} width={136} alt="Logo" />
          </Link>
        </div>
        <button className="absolute left-6">
          <i className="pi pi-list text-3xl"></i>
        </button>
      </div> */}

      <MissionHeaderPopup ref={popupRef} />
      <MobileNavigationModal links={links} ref={navPopupRef} />
    </>
  );
}
