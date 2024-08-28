'use client';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function OurStorySection() {
  return (
    <div
      id="our-story"
      className="min-h-[38.75rem] w-full bg-phenix-dark px-6 font-secondary text-white md:px-9"
    >
      <AnimationOnScroll
        animateOnce={true}
        animateIn="animate__zoomIn"
        animatePreScroll={true}
        className="mx-auto w-full max-w-[60rem] pt-[6.75rem]"
      >
        <div className="phenix-title-001 md:text-center">
          Our Story<span className="mb-[3.25rem] inline-block text-phenix-primary ">.</span>
        </div>
        <div className="mb-12 text-[2.0625rem] md:text-center md:text-[1.5rem]">
          Phenix Solutions delivers game changing aircraft worldwide in order to save lives and
          maximize demand on command.
        </div>
        <div className="our-story-content flex flex-row items-stretch gap-7 md:flex-col">
          <p>
            Phenix Solutions, Inc (PSI) was formed by a group of aviation professionals who have
            successfully collaborated over the past 20 years developing, certifying, and
            manufacturing aerial mission equipment, avionics, and advanced composite structures for
            civil and military aircraft operators worldwide serving aerial cargo/logistics,
            agricultural application, firefighting, utility constructions & maintenance, search &
            rescue, and other specialized aerial missions.
          </p>
          <p>
            Phenix’s founders have each brought their diverse and complimentary skills and
            experiences together to develop, certify, and manufacture truly heavy lift (above 3,000
            lbs MTOW) Remotely Piloted Aircraft (RPA) and specialized mission equipment for military
            and civil aircraft operators improving the safety, efficiency, and effectiveness of
            their next generation aerial operations.
          </p>
        </div>
      </AnimationOnScroll>
    </div>
  );
}
