'use client';
import Image from 'next/image';
import { HTMLAttributes, ReactNode, useRef } from 'react';

import CornerRedTriangle from '../molecules/CornerRedTriangle';
import LeaderModal, { LeaderModalContentProps, LeaderModalFunctions } from './LeaderModal';

export type LeadershipSectionItem = {
  id: string | number;
  name: string;
  position: string;
  image?: string;
  phone?: string;
  email?: string;
  content?: ReactNode;
};

export type LeadershipSectionProps = {
  title?: string;
  items?: LeadershipSectionItem[];
  onItemClick?: (data: LeaderModalContentProps) => void;
} & HTMLAttributes<HTMLDivElement>;

function LeadershipSectionMain({
  title = 'Our Leadership',
  items = [],
  onItemClick
}: LeadershipSectionProps) {
  const handleItemClick = (item: LeadershipSectionItem) => {
    typeof onItemClick === 'function' && onItemClick(item as LeaderModalContentProps);
  };

  return (
    <div
      id="leadership"
      className="animate__fadeInUp animate-1s bg-contain bg-[bottom] bg-no-repeat px-20 newsbp:px-[5rem] md:px-9"
      style={{ backgroundImage: `url('/images/about/line-background-black-leadership.png')` }}
    >
      <div className="mx-auto w-full max-w-[72.375rem] pb-[7.25rem] pt-[6rem]">
        <div className="phenix-title-001 pb-[2.875rem] lg:pb-[1.625rem] sm:text-center sm:text-[2.47rem]">
          {title}
          <span className="text-phenix-primary">.</span>
        </div>
        <div className="grid grid-cols-5 gap-4 gap-y-7 lg:grid-cols-4 md:grid-cols-3 md:gap-[0.625rem] sm:grid-cols-2">
          {items.map((item, index) => (
            <LeaderItem
              id={item.id as string}
              name={item.name}
              image={item.image}
              position={item.position}
              key={index}
              onClick={() => handleItemClick(item)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const LeaderItem = (props: LeadershipSectionItem & HTMLAttributes<HTMLDivElement>) => {
  const { name, position, image, ...otherProps } = props;

  return (
    <div
      className="group relative min-h-[13.875rem] w-full cursor-pointer overflow-hidden p-0"
      {...otherProps}
    >
      <div data-role="image" className="relative bg-phenix-background2 pt-[100%]">
        {image && (
          <Image
            src={image}
            alt="profile"
            width={222}
            height={222}
            className="absolute inset-0 h-[100%] w-full object-cover"
          />
        )}
      </div>
      <div data-role="name" className="mt-5 font-secondary text-base md:text-center">
        {name}
      </div>
      <div
        data-role="position"
        className="font-primary text-[0.9375rem] font-bold uppercase md:text-center"
      >
        {position}
      </div>

      <CornerRedTriangle className="absolute right-0 top-0 h-[2.875rem] w-[2.875rem] origin-top-right scale-0 opacity-0 transition-all duration-150 group-hover:scale-100 group-hover:opacity-100">
        <i className="pi pi-plus mr-1 mt-1 text-[0.875rem]"></i>
      </CornerRedTriangle>
    </div>
  );
};

export default function LeadershipSection(props: LeadershipSectionProps) {
  const modalRef = useRef<LeaderModalFunctions | null>(null);

  const handleItemClick = (data: LeaderModalContentProps) => {
    modalRef.current?.showContent({ ...data });
  };

  return (
    <>
      <LeadershipSectionMain {...props} onItemClick={handleItemClick} />
      <LeaderModal ref={modalRef} />
    </>
  );
}
