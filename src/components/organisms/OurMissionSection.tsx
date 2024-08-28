'use client';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function OurMissionSection() {
  return (
    <div className="flex min-h-[25.5rem] items-center justify-center bg-phenix-dark px-6 text-white lg:px-20 md:px-9">
      <div className="w-full max-w-[62.5625rem] lg:py-[3.875rem]">
        <AnimationOnScroll
          animateOnce={true}
          animateIn="animate__fadeInDown"
          animatePreScroll={true}
          className="mb-5 font-primary text-[1.5625rem] font-bold text-phenix-primary"
        >
          OUR MISSION
        </AnimationOnScroll>
        <AnimationOnScroll
          animateOnce={true}
          animateIn="animate__fadeInDown"
          animatePreScroll={true}
          className="phenix-title-001 font-secondary leading-[4.625rem] md:text-[2rem] md:leading-[3.625rem]"
        >
          Provide game changing aviation solutions to meet modern challenges worldwide.
        </AnimationOnScroll>
      </div>
    </div>
  );
}
