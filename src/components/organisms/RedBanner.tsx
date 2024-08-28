'use client';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import CTAButton from '../atoms/CTAButton/CTAButton';

export default function RedBanner() {
  return (
    <div className="relative flex min-h-[33rem] flex-row items-center pt-[6.125rem] lg:min-h-[16.8125rem] md:min-h-[47.6875rem]">
      <div
        className="bg-top-center min-h-[26.875rem] w-full bg-phenix-primary 
                    bg-cover bg-no-repeat lg:min-h-[16.8125rem] md:absolute md:inset-0 md:h-[100%] md:bg-[calc(50%_-_1.5rem)_18.75rem]"
        style={{ backgroundImage: `url('/images/line-background-black-build-aircraft.png')` }}
      >
        <AnimationOnScroll
          animateOnce={true}
          animateIn="animate__fadeInLeft"
          animatePreScroll={true}
          className="absolute left-0 right-0 top-0 min-h-[36.5rem] bg-[length:60rem] 
                      bg-[calc(50%_-_20rem)_center] bg-no-repeat
                      lg:mt-[3rem] lg:min-h-[20em] lg:bg-[length:35.375rem] lg:bg-[calc(50%_-_13.5rem)_center] 
                      md:bottom-[3rem] md:top-auto md:bg-[length:40rem] md:bg-center"
          style={{ backgroundImage: `url('/images/ultra2xl-home-build-aircraft.png')` }}
        ></AnimationOnScroll>
        <div
          className="relative mx-auto flex h-full max-w-[73.75rem] flex-row items-center 
                      lg:mr-20 lg:justify-between md:mr-auto md:items-start"
        >
          <div className="flex-1 md:hidden"></div>
          <AnimationOnScroll
            animateOnce={true}
            animateIn="animate__fadeInRight"
            animatePreScroll={true}
            className="flex min-h-[26.875rem] flex-1 flex-col items-center justify-center 
                          font-secondary text-white lg:min-h-[16.8125rem] md:items-stretch md:px-9
                          md:pt-[3.125rem]"
          >
            <h1 className="phenix-title-001 text-center uppercase lg:mb-5 lg:text-[1.75rem] md:text-left md:text-[2.5rem] md:capitalize">
              Build Your Aircraft.
            </h1>
            {/* <p className="max-w-[25.8125rem] text-center text-[0.9375rem] md:text-left">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            </p> */}
            <CTAButton
              href="https://phenix.oneprotex.com/builder/"
              className="mt-8 max-w-[16.75rem] font-primary text-[0.9375rem] lg:mt-5 md:max-w-none"
            >
              CUSTOMIZE YOUR AIRCRAFT TODAY
            </CTAButton>
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  );
}
