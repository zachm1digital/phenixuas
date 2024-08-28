'use client';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import CTAButton from '../atoms/CTAButton/CTAButton';

const videoAspectRatio = (387 / 670) * 100;
const videoPatternBG = '/images/video-background-pattern.png';

export default function TitleMedia() {
  return (
    <AnimationOnScroll
      animateOnce={true}
      animateIn="animate__fadeInUp"
      animatePreScroll={true}
      className="px-6 lg:px-[4.75rem] md:px-[2.375rem]"
    >
      <div className="mx-auto flex max-w-[73.75rem] flex-row items-center gap-[4.6875rem] py-[3.75rem] font-secondary lg:max-w-none lg:flex-col md:gap-[2.125rem]">
        <div className="w-full max-w-[25.8125rem] lg:max-w-none">
          <h1 className="phenix-title-001 mb-8">
            Who We Are<span className="text-phenix-primary">.</span>
          </h1>
          <div className="text-[0.9375rem]">
            <p>
              Phenix Solutions Inc. is a privately held, veteran owned, small Oregon business with
              deep roots in aviation. Leadership team includes members with world leading design,
              manufacturing, and certification experience in aerial application systems; built over
              74 years of innovative designs, high quality craftsmanship and proven solutions
              worldwide.
            </p>
            {/* <br /> */}
            {/* <p className="text-left lg:text-center md:text-left">
              <strong>For a free demo, contact us today.</strong>
            </p> */}
          </div>
          <CTAButton
            href="/contact"
            className="mt-5 max-w-[13.375rem] font-primary lg:mx-auto md:hidden md:max-w-none"
          >
            Contact Us
          </CTAButton>
        </div>
        <div className="relative w-full max-w-[41.875rem] flex-1 lg:w-full lg:max-w-[28.25rem] md:mt-2 md:max-w-none">
          <div
            className="absolute left-[-2rem] top-[2rem] h-[100%] w-full bg-cover md:hidden"
            style={{ backgroundImage: `url('${videoPatternBG}')` }}
          ></div>
          <div
            className="relative w-full bg-white shadow-[0px_0px_60px_#17171726]"
            style={{ paddingTop: `${videoAspectRatio}%` }}
          >
            <div
              className="absolute inset-0 flex items-center justify-center bg-cover"
              style={{
                backgroundImage: `url('${encodeURI('/images/about/persons/Who We Are.webp')}')`
              }}
            >
              {/* this is play icon > will put back if the video is provided */}
              {/* <div
                className="flex h-[5.3125rem] w-[5.3125rem] cursor-pointer items-center 
                          justify-center rounded-full border-[2px] border-phenix-primary text-[2rem] 
                          font-thin text-phenix-primary drop-shadow-[0px_0px_1px_rgba(255,255,255,1)] 
                          sm:h-[4rem] sm:w-[4rem]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  width="1em"
                  version="1.1"
                  id="Capa_1"
                  viewBox="0 0 337.173 337.173"
                  className="ml-[0.25em]"
                >
                  <g>
                    <g>
                      <path
                        fill="currentColor"
                        d="M25.922,337.173V0l285.329,168.595L25.922,337.173z M42.179,28.491v280.2L279.29,168.595    L42.179,28.491z"
                      />
                    </g>
                  </g>
                </svg>
              </div> */}
            </div>
          </div>
        </div>
        <CTAButton
          href="/contact"
          className="hidden max-w-[13.375rem] font-primary lg:mx-auto md:flex md:max-w-none"
        >
          Contact Us
        </CTAButton>
      </div>
    </AnimationOnScroll>
  );
}
