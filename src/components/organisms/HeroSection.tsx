import { ReactNode } from 'react';

import HeadlineCTA from '../molecules/HeadlineCTA';

export type HeroSectionProps = {
  title: ReactNode;
  content: ReactNode;
  ctaText: string;
  ctaLink?: string;
  image: string;
};

const bgImageShadow = '/images/civil-and-defense-pages/img-background-pattern.png';

export default function HeroSection({
  title,
  content,
  ctaText,
  ctaLink,
  image = '#'
}: HeroSectionProps) {
  return (
    <div className="relative mb-[-2.5rem] mt-4 px-6 lg:mb-14 lg:pl-20 md:flex md:flex-col md:items-stretch md:gap-12 md:px-0">
      <div
        className="animate__fadeInRight animate-1s absolute left-0 right-0 top-0 order-2 mx-auto flex min-h-[33.5625rem] 
        max-w-[90rem] flex-row lg:gap-16 md:relative md:min-h-0 md:w-full md:flex-col md:pl-9 md:pt-[76.03550%]
        "
      >
        <div className="flex-1 md:hidden"></div>
        <div className="relative w-[calc(50%_+_1.375rem)] flex-1 md:absolute md:inset-0 md:w-full">
          <div
            className="absolute bottom-[-2.875rem] left-[-2.875rem] h-[100%] w-[100%] bg-cover bg-no-repeat 
                        lg:bottom-[-1.5rem] lg:left-[-1.5rem] lg:bg-[length:100%] lg:bg-repeat md:bg-[length:75%]"
            style={{ backgroundImage: `url('${bgImageShadow}')` }}
          ></div>
          <div
            className="absolute inset-0 z-[2] bg-neutral-500 bg-cover bg-center md:left-[1.375rem]"
            style={{ backgroundImage: `url('${image}')` }}
          ></div>
        </div>
      </div>
      <div className="relative mx-auto flex w-full max-w-[72.5rem] flex-row items-center justify-between gap-16 md:flex-col">
        <div className="animate__fadeInLeft animate-1s w-full max-w-[29.5rem] flex-1 md:max-w-none md:px-9">
          <HeadlineCTA
            title={title}
            titleBold={true}
            titleSize="large"
            className="mt-0 gap-8 lg:mt-0"
            content={content}
            ctaText={ctaText}
            ctaLink={ctaLink}
            titleClassName="md:text-center"
          />
        </div>
        <div className="min-h-[33.5625rem] w-full max-w-[44.3125rem] flex-1 md:hidden"></div>
      </div>
    </div>
  );
}
