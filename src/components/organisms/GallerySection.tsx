'use client';
import Image from 'next/image';
import { HTMLAttributes } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import { ScrollDragContainer } from '../../components/organisms/SliderContainer';
// import SliderContainer from '../../components/organisms/SliderContainer';

export default function GallerySection() {
  return (
    <div id="gallery" className="overflow-x-hidden bg-phenix-background2 pb-8 pt-16">
      <AnimationOnScroll
        animateOnce={true}
        animateIn="animate__zoomIn"
        animatePreScroll={true}
        className="mx-auto w-full max-w-[90rem] overflow-x-hidden"
      >
        <div className="phenix-title-001 mb-16 text-center">
          Gallery<span className="text-phenix-primary">.</span>
        </div>
        <ScrollDragContainer>
          <div className="flex shrink-0 flex-row space-x-4">
            <GalleryItem src="/images/about/gallery-img-1.png" />
            <GalleryItem src="/images/about/gallery-img-2.png" />
            <GalleryItem src="/images/about/gallery-img-1.png" />
          </div>
        </ScrollDragContainer>
      </AnimationOnScroll>
    </div>
  );
}

// const aspectRation = (473 / 810) * 100;

type GalleryItemProps = {
  src: string;
} & HTMLAttributes<HTMLDivElement>;

function GalleryItem({ src, className }: GalleryItemProps) {
  return (
    <div className={className}>
      {/* <div className="relative w-full" style={{ paddingTop: `${aspectRation}%` }}> */}
      <Image
        src={src}
        alt="Gallery Item"
        width={810}
        height={473}
        className="h-[29.5625rem] w-full lg:max-h-[calc(100vw_/_2)]"
        draggable={false}
      />
      {/* </div> */}
    </div>
  );
}
