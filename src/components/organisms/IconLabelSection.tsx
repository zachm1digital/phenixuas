'use client';
import Image from 'next/image';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import CTAButton from '../atoms/CTAButton/CTAButton';
import IconTextVertical from '../molecules/IconTextVertical';

const IconTextVerticalItems = [
  {
    title: 'NON-TRADITIONAL\nVETERAN OWNED',
    image: {
      url: '/images/non-trad-vet-owned-icon.png',
      alt: 'NON-TRADITIONAL VETERAN OWNED',
      dimensions: {
        width: 106.6,
        height: 34.64
      }
    }
  },
  {
    title: 'BASED IN\nTHE U.S.A.',
    image: {
      url: '/images/based-usa-icon.png',
      alt: 'BASED IN THE U.S.A.',
      dimensions: {
        width: 79.92,
        height: 56.57
      }
    }
  },
  {
    title: '100% EMPLOYEE\nOWNED',
    image: {
      url: '/images/employee-owned-icon.png',
      alt: '100% EMPLOYEE OWNED',
      dimensions: {
        width: 79.04,
        height: 63.58
      }
    }
  }
];

export default function IconLabelSection() {
  return (
    <AnimationOnScroll
      animateOnce={true}
      animateIn="animate__fadeInUp"
      animatePreScroll={true}
      className="mx-auto flex min-h-[24.125rem] max-w-[90rem] flex-row pt-[4.625rem] lg:min-h-[13.125rem] lg:pl-[5rem] md:px-0"
    >
      <div className="flex flex-[1.5] flex-row items-center justify-center md:hidden">
        <div
          className="flex flex-row items-start justify-center gap-[6.125rem] py-8 
                        lg:w-full lg:justify-between lg:gap-0 lg:pr-[1.625rem] sm:flex-col 
                        sm:items-center"
        >
          {IconTextVerticalItems.map((item, index: number) => (
            <IconTextVertical
              key={index}
              title={item.title}
              image={item.image?.url}
              width={item.image?.dimensions?.width}
              height={item.image?.dimensions?.height}
            />
          ))}
        </div>
      </div>
      <div
        className="flex max-w-[32.125rem] flex-[1] flex-row items-center justify-center
                  bg-phenix-background2 pb-[5.375rem] pt-[4.375rem] lg:max-w-[18rem] 
                  lg:justify-start lg:px-10 lg:py-8 md:max-w-none md:justify-center"
      >
        <div className="flex flex-col items-center gap-8 text-[1px] lg:items-start lg:text-[0.55px] md:w-full md:max-w-[30rem] md:items-center md:text-[1px]">
          <Image
            src="/images/phenix-logo-learn-more.png"
            alt="phenix-logo-learn-more"
            width={274}
            height={151}
            style={{
              height: 151 + 'em',
              width: 274 + 'em'
            }}
            className="lg:ml-2 xsm:object-contain"
          />

          <div className="hidden w-full flex-row justify-between gap-2 md:flex">
            {IconTextVerticalItems.map((item, index: number) => (
              <IconTextVertical
                key={index}
                title={item.title}
                image={item.image?.url}
                width={item.image?.dimensions?.width}
                height={item.image?.dimensions?.height}
              />
            ))}
          </div>

          <CTAButton
            href="/about"
            className="max-w-[18.875rem] text-base lg:max-w-[10.5rem] lg:text-center lg:text-[15px] lg:leading-[1] md:w-full md:max-w-none xsm:p-[3.333vw] xsm:text-[4.1vw]"
          >
            LEARN MORE ABOUT PHENIX SOLUTIONS
          </CTAButton>
        </div>
      </div>
    </AnimationOnScroll>
  );
}
