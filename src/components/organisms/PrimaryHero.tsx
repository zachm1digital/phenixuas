'use client';
import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

import { getHomePageData } from '../../services/home.data';
import CTAButton from '../atoms/CTAButton/CTAButton';

const titles = ['Rugged', 'Safe', 'Capable'];
const { primaryHeroSection } = getHomePageData();

export default function PrimaryHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((val) => {
        val += 1;
        if (val === 3) val = 0;

        return val;
      });
    }, 2500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="relative mt-7 min-h-[38.125rem] px-8 lg:min-h-[25rem] md:px-0 sm:px-0">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat lg:top-[17rem] lg:bg-[length:90rem] lg:bg-[calc(50%_-_-13rem)_40%]"
        style={{ backgroundImage: `url('/images/line-background-home-hero.png')` }}
      />
      <div className="animate-1s animate__fadeIn mx-auto flex max-w-[73.75rem] flex-row overflow-visible">
        <div className="relative z-10 pt-[3.125rem] lg:mx-auto lg:pt-0 lg:text-center sm:px-[2.3125rem]">
          <div
            data-role="title"
            className="font-secondary text-[6.25rem] leading-[6.25rem] sm:text-[4.4375rem] sm:leading-[5rem]"
          >
            Simply
            {/* <br /> */}
            <strong>
              <div className="h-[6.25rem] overflow-hidden">
                {titles.map((title, index) => (
                  <div
                    key={index}
                    data-id={index}
                    className={cn(
                      'animate-300 animate__fadeIn',
                      // 'animate-500 animate__flipInX',
                      index === activeIndex ? 'block' : 'hidden'
                    )}
                  >
                    {title}
                    <span className="text-[var(--color-primary)]">.</span>
                  </div>
                ))}
              </div>
            </strong>
          </div>
          <div
            data-role="description"
            className="mt-8 max-w-[25.75rem] py-6 font-secondary text-sm sm:mt-0 sm:pb-7 sm:pt-3"
          >
            <div className="font-bold">{primaryHeroSection.descriptionBold}</div>
            {/* <div>{primaryHeroSection.descriptionThin}</div> */}
          </div>
          <CTAButton
            className="mt-[2.625rem] max-w-[13.375rem] lg:mx-auto lg:mt-0 xsm:max-w-none"
            href="/contact"
          >
            Contact Us
          </CTAButton>
        </div>
      </div>
      <div
        className="animate-1s animate__fadeIn absolute left-0 right-0 top-0 min-h-[36.5rem] bg-contain bg-[calc(50%_-_-13.5rem)_calc(50%_-_0.9rem)] bg-no-repeat lg:relative lg:min-h-[25rem] lg:bg-[top_center] md:bg-[length:auto_20.5625rem]"
        style={{ backgroundImage: `url('/images/ultra2xl-home-hero.png')` }}
      ></div>
    </div>
  );
}
