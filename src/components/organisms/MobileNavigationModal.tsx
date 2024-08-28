'use client';
import Image from 'next/image';
import Link from 'next/link';
import {
  ForwardedRef,
  forwardRef,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState
} from 'react';
import { createPortal } from 'react-dom';

import { Button } from '../atoms/Button';

export type MobileNavigationModalFunctions = {
  show: () => void;
  hide: () => void;
};

export type MobileNavigationModalProps = {
  links?: Array<{ name: string; path: string }>;
};

export default forwardRef(function MobileNavigationModal(
  props: MobileNavigationModalProps,
  ref: ForwardedRef<MobileNavigationModalFunctions>
) {
  const [visible, setVisibility] = useState<boolean>(false);
  const bodyRef = useRef<HTMLBodyElement | null>(null);

  useLayoutEffect(() => {
    // todo
    bodyRef.current = document.body as HTMLBodyElement;
  }, []);

  useLayoutEffect(() => {
    const target = document.querySelector('html');
    visible
      ? target?.setAttribute('style', 'overflow-y: hidden;')
      : target?.removeAttribute('style');
  }, [visible]);

  const show = () => {
    //todo:
    setVisibility(true);
  };

  const hide = () => {
    //todo:
    setVisibility(false);
  };

  useImperativeHandle(
    ref,
    () => {
      return {
        show,
        hide
      };
    },
    []
  );

  return visible && bodyRef.current
    ? createPortal(
        <>
          <div className="animate-300 animate__fadeIn fixed inset-0 z-50 hidden flex-col items-center bg-phenix-dark lg:flex">
            <div className="md flex w-full flex-row items-center justify-between px-20 py-7 md:justify-center md:p-4">
              <Link
                className="relative h-[6.5625rem] w-[9.75rem] md:h-[4.3125rem] md:w-[6.3125rem]"
                href="/"
                onClick={hide}
              >
                <Image
                  src="/images/phenix-logo-white-footer.png"
                  // src="/images/phenix-logo-nav.png"
                  width={150}
                  height={105}
                  alt="logo"
                  className="absolute inset-0"
                />
              </Link>
              <button onClick={hide} className="md:absolute md:right-[1.625rem] md:top-[1.625rem]">
                <i className="pi pi-times text-[2rem] text-phenix-primary md:text-[1.5rem]" />
              </button>
            </div>
            <div className="flex w-full flex-1 flex-row items-center overflow-y-auto p-9">
              <div className="m-auto md:w-full md:flex-col md:items-center">
                <ul className="mx-auto grid grid-cols-1 gap-[2.125rem] md:max-w-[10.3125rem] md:gap-6">
                  {props?.links &&
                    props?.links.map((item, index: number) => (
                      <Link key={index} href={item.path || '#'} onClick={() => hide()}>
                        <li className="font-secondary text-[2.1875rem] capitalize leading-[1] text-phenix-ondark">
                          {item.name}
                        </li>
                      </Link>
                    ))}
                </ul>
                <Link href="/contact" onClick={hide}>
                  <Button
                    className="mt-[2.75rem] w-full font-secondary text-[1.25rem]"
                    label="CONTACT US"
                  />
                </Link>
              </div>
            </div>
          </div>
        </>,
        bodyRef.current
      )
    : null;
});
