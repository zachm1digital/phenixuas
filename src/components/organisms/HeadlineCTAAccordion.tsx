'use client';
import { HTMLAttributes } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { FAQsProps } from 'src/services/faqs.data';

import { cn } from '@/lib/utils';

import Accordion from '../molecules/Accordion';
import HeadlineCTA from '../molecules/HeadlineCTA';

export type HeadlineCTAAccordionProps = {
  data: FAQsProps;
  ctaAction: string;
  ctaText: string;
} & HTMLAttributes<HTMLDivElement>;

const HeadlineCTAAccordion = ({
  data,
  className,
  ctaText,
  ctaAction,
  ...props
}: HeadlineCTAAccordionProps) => {
  return (
    <div
      className={cn('px-6 pb-[4.9375rem] pt-[14.125rem] lg:px-20 lg:pt-[4rem] md:px-9', className)}
      {...props}
    >
      <div className="mx-auto flex w-full max-w-[72.5rem] flex-row gap-[4.8125rem] lg:gap-x-[2.75rem] md:flex-col">
        <AnimationOnScroll
          animateOnce={true}
          animateIn="animate__fadeInLeft"
          animatePreScroll={true}
          className="mx-auto min-h-[20rem] w-full max-w-[25.8125rem] flex-1 lg:max-w-[47.75rem]"
        >
          <HeadlineCTA
            title={data.title}
            content={data.description}
            ctaText={ctaText}
            ctaLink={ctaAction}
          />
        </AnimationOnScroll>
        <AnimationOnScroll
          animateOnce={true}
          animateIn="animate__fadeInRight"
          animatePreScroll={true}
          className="hctaa phenix-accordion mx-auto min-h-[20rem] w-full max-w-[47.75rem] flex-1"
        >
          <Accordion activeIndex={0} className="flex flex-col gap-5" />
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default HeadlineCTAAccordion;
