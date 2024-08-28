'use client';

import Image from 'next/image';
import Link from 'next/link';

type CarouselItemProps = {
  label: string;
  backgroundImage: string;
  path: string;
};

export default function CarouselItem({ label, backgroundImage, path }: CarouselItemProps) {
  return (
    <Link
      href={path || '#'}
      // prettier-ignore
      className="group block relative h-[34.375rem] min-w-[18.375rem] cursor-pointer bg-cover bg-center font-bold md:h-[19.125rem] md:max-w-[13.875rem] md:min-w-[13.875rem]"
      style={{
        backgroundImage: `url('${backgroundImage}')`
      }}
      draggable={false}
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-row items-center justify-center bg-black/30 p-6 text-center text-[1.5625rem] uppercase leading-[1.5625rem] text-white">
        {label}
      </div>
      {/* <Link href={path || '#'}> */}
      <Image
        className="absolute bottom-0 right-0 origin-bottom-right scale-0 transform-gpu transition-all duration-200 group-hover:scale-100"
        src="/images/open-hover-button.svg"
        alt="open-icon"
        width={92.54}
        height={92.54}
      />
      {/* </Link> */}
    </Link>
  );
}
