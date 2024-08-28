'use client';
import Image from 'next/image';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { HistoryProps, getHistories } from 'src/services/about-data';

import { cn } from '@/lib/utils';

const staticData = getHistories();

export default function OurHistorySection({
  items = staticData || []
}: {
  items?: HistoryProps[];
}) {
  return (
    <div
      id="our-history"
      className="relative mt-[-1px] min-h-[38.75rem] w-full bg-phenix-dark px-6 pb-[10.75rem] font-secondary text-white md:px-9 md:pt-20"
    >
      <div
        className="absolute inset-0 bg-cover bg-[top] bg-no-repeat mix-blend-multiply"
        style={{ backgroundImage: `url('/images/about/eye-background-slant.png')` }}
      />
      <div className="relative mx-auto w-full max-w-[60rem]">
        <AnimationOnScroll
          animateOnce={true}
          animateIn="animate__fadeIn"
          animatePreScroll={true}
          className="phenix-title-001 mb-4 text-center"
        >
          Our History<span className="text-phenix-primary">.</span>
        </AnimationOnScroll>
        <div className="flex flex-col items-center text-center">
          {items.map((item: HistoryProps) => (
            <HistoryItem key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

function HistoryItem({ data }: { data: HistoryProps }) {
  return (
    <AnimationOnScroll
      animateOnce={true}
      animateIn="animate__fadeIn"
      animatePreScroll={true}
      className="max-w-[29.6875rem] text-[0.9375rem]"
    >
      <div className="mx-auto mb-4 h-[5.75rem] w-[1px] bg-phenix-primary"></div>
      <div data-role="date" className="pb-7 text-[2.0625rem]">
        {data?.date}
      </div>
      {data?.title && (
        <div data-role="short-headline" className="pb-4 text-[1.25rem]">
          {data?.title}
        </div>
      )}
      <div data-role="title" className="pb-8">
        {data?.description}
      </div>
      <div className="mx-auto max-w-[14.8125rem] bg-white md:w-full md:max-w-none">
        <div className="relative w-full pt-[77.21518987341773%]">
          <Image
            src={data.image || '/images/phenix-logo-learn-more.png'}
            width={300}
            height={300}
            alt="Photo"
            className={cn(
              'absolute inset-0 h-[100%] w-full',
              data.isCover ? ' object-cover' : 'object-contain'
            )}
          />
        </div>
      </div>
    </AnimationOnScroll>
  );
}
