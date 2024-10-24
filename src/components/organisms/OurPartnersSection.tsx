'use client';
import Image from 'next/image';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const partnerLogos = [
  {
    name: 'rolls-royce',
    image: '/images/partners/rolls-royce.png',
    width: 46,
    height: 60
  },
  {
    name: 'Acuasi',
    image: '/images/partners/ACUASI.png',
    width: 129,
    height: 40
  },
  {
    name: 'Agility Prime',
    image: '/images/partners/agility-prime.png',
    width: 200,
    height: 40
  },
  {
    name: 'AAAA_mast_iMIS_retina',
    image: '/images/partners/AAAA_mast_iMIS_retina.png',
    width: 163,
    height: 59
  },
  {
    name: 'galois',
    image: '/images/partners/galois.png',
    width: 148,
    height: 39
  },
  {
    name: 'NWUAV',
    image: '/images/partners/NWUAV.png',
    width: 165,
    height: 71
  },
  {
    name: 'Eagle',
    image: '/images/partners/eagle.png',
    width: 148,
    height: 71
  }
];

export default function OurPartnersSection() {
  return (
    <div
      id="partners"
      className="flex min-h-[26rem] flex-row items-center px-20 font-secondary lg:min-h-0 lg:px-20 lg:pb-[4.5rem] lg:pt-16 md:px-9"
    >
      <div className="mx-auto flex w-full max-w-[72.5rem] flex-col gap-[3.25rem]">
        <AnimationOnScroll
          animateOnce={true}
          animateIn="animate__fadeInDown"
          animatePreScroll={true}
          data-role="title"
          className="phenix-title-001 our-p-br-p md:text-center"
        >
          Our Partners<span className="text-phenix-primary">.</span>
        </AnimationOnScroll>
        <div
          data-role="logo-container"
          className="flex flex-row flex-wrap items-end justify-between text-[1px]
                      xl:text-[0.068vw] lg:gap-0 sm:max-h-[14rem] sm:flex-col sm:flex-wrap 
                      sm:items-center sm:justify-end sm:gap-y-[3.25rem] sm:text-[0.71px] xsm:text-[0.15vw]"
        >
          {partnerLogos.map((logo, index: number) => (
            <AnimationOnScroll
              animateOnce={true}
              animateIn="animate__fadeInDown"
              animatePreScroll={true}
              key={index}
            >
              <Image
                src={logo.image}
                height={logo.height || 72}
                width={logo.width || 220}
                alt={logo.name}
                style={{
                  height: logo.height + 'em',
                  width: logo.width + 'em'
                }}
              />
            </AnimationOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
}
