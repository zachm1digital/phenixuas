'use client';
import Image from 'next/image';
import Link from 'next/link';
import {
  ReactNode,
  useState,
  useImperativeHandle,
  forwardRef,
  ForwardedRef,
  useRef,
  useEffect,
  HTMLAttributes
} from 'react';
import { createPortal } from 'react-dom';

import { cn } from '@/lib/utils';

import CornerRedTriangle from '../molecules/CornerRedTriangle';

export type LeaderModalContentProps = {
  id: string | number;
  name: string;
  linkText: string;
  phone?: string;
  email?: string;
  image: string;
  position: string;
  content: ReactNode;
};

export type LeaderModalFunctions = {
  showContent: (params: LeaderModalContentProps) => void;
  showModal: () => void;
  hideModal: () => void;
};

export type LeaderModalProps = HTMLAttributes<HTMLDivElement>;

// const profileImageAspectRatio = (220 / 180) * 100;

function LeaderModal(
  { className, ...props }: LeaderModalProps,
  ref: ForwardedRef<LeaderModalFunctions>
) {
  const [show, setShow] = useState(false);
  const [mounted, setMounted] = useState(false);
  const targetDom = useRef<Element | null>();
  const [content, setContent] = useState<LeaderModalContentProps>({
    id: '',
    name: '',
    linkText: '',
    phone: '',
    email: '',
    image: '',
    position: '',
    content: ''
  });

  useEffect(() => {
    targetDom.current = document.body;
    setMounted(true);
  }, []);

  useEffect(() => {
    const target = document.querySelector('html');
    show ? target?.setAttribute('style', 'overflow-y: hidden;') : target?.removeAttribute('style');
  }, [show]);

  const showContent = (props: LeaderModalContentProps) => {
    //todo: set content
    setContent(props);
    showModal();
  };

  const showModal = () => {
    setShow(true);
  };

  const hideModal = (callbackFunction?: () => void) => {
    setShow(false);
    typeof callbackFunction === 'function' && callbackFunction();
  };

  useImperativeHandle(ref, () => {
    return {
      showContent,
      showModal,
      hideModal
    };
  });

  return mounted && targetDom.current
    ? createPortal(
        show ? (
          <div
            className={cn(
              'no-scrollbar fixed inset-0 flex flex-row items-center overflow-y-auto overflow-x-hidden p-6 sm:p-0',
              className
            )}
            {...props}
          >
            <div
              className="animate-300 animate__fadeIn fixed inset-0 bg-gray-500/90"
              onClick={() => hideModal()}
            ></div>
            <div className="animate-300 animate__zoomIn relative m-auto w-full max-w-[60rem] bg-phenix-background shadow-xl">
              <div className="flex flex-row items-start gap-[2.625rem] px-[3.625rem] pb-[3.375rem] pt-[4.25rem] md:flex-col md:px-9 md:text-center">
                <div className="min-h-[22.5rem] w-full max-w-[13.375rem] px-4 pb-5 pt-6 font-secondary shadow-md md:mx-auto md:max-w-none">
                  <div
                    data-role="image"
                    className="relative w-full bg-slate-300 pt-[122.22222222222223%] md:pt-[100%]"
                    // style={{ paddingTop: `${profileImageAspectRatio}%` }}
                  >
                    {content?.image && (
                      <Image
                        src={content.image}
                        alt="Profile"
                        width={180}
                        height={219}
                        className="absolute inset-0 h-[100%] w-full object-cover"
                      />
                    )}
                  </div>
                  <div
                    data-role="contact-link"
                    className="mb-6 mt-6 font-secondary text-[0.75rem] font-bold text-phenix-primary"
                  >
                    <Link
                      href={content.linkText || (content.email && `mailto:${content.email}`) || '#'}
                    >
                      CONTACT {content.name.split(/\s+/)?.[0]?.toUpperCase()}
                    </Link>
                  </div>
                  {content.phone && <div data-role="phone">{content.phone}</div>}
                  {content.email && <div data-role="email">{content.email}</div>}
                </div>
                <div className="flex-1 md:text-left">
                  <div data-role="name" className="phenix-title-001 mb-2">
                    {content.name}
                  </div>
                  <div
                    data-role="position"
                    className="pb-[1.875rem] font-primary text-[1.25rem] font-bold uppercase tracking-wide"
                  >
                    {content.position}
                  </div>
                  <div data-role="content" className="leadership-m-content text-left">
                    {content.content}
                  </div>
                </div>
              </div>
              <CornerRedTriangle className="absolute right-0 top-0">
                <i
                  className="pi pi-times mr-1 mt-1 cursor-pointer text-[1.25rem]"
                  onClick={() => hideModal()}
                ></i>
              </CornerRedTriangle>
            </div>
          </div>
        ) : null,
        targetDom.current
      )
    : null;
}

export default forwardRef(LeaderModal);
