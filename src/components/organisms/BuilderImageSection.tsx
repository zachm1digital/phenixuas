'use client';
import Image from 'next/image';
import Link from 'next/link';
import { HTMLAttributes } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import { cn } from '@/lib/utils';

import { Button } from '../atoms/Button';

// const largeImageAspectRatio = (722 / 1160) * 100;

// lg up = 62.241379310344826%
// md down = 62.241379310344826%

const useIframe = true;

export type BuilderImageSectionProps = {
  title: string;
  image: string;
  withLineBg?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export default function BuilderImageSection({
  className,
  withLineBg = true,
  ...props
}: BuilderImageSectionProps) {
  return (
    <div
      className={cn(
        'bg-cover bg-[center_bottom] md:bg-none',
        withLineBg && `bg-[url('/images/missions/red-line-background-mission-background.png')]`,
        className
      )}
      // style={{ ...(withLineBg && { backgroundImage: `url(${props.image})` }) }}
      {...props}
    >
      <div className={cn('relative mx-auto w-full max-w-[90rem]')}>
        <AnimationOnScroll
          animateIn="animate__fadeInLeft"
          animatePreScroll={true}
          animateOnce={true}
          className="absolute left-0 top-0 h-[37.916666666666664vw] w-[62.916666666666664vw] bg-phenix-dark xdCanvas:h-[34.125rem] xdCanvas:w-[56.625rem]
                     md:h-[135vw] md:w-full md:max-w-none"
        ></AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInLeft"
          animatePreScroll={true}
          animateOnce={true}
          className="relative flex h-[14.930555555555555vw] flex-col justify-end px-[9.722222222222223vw] 
                      xdCanvas:h-[13.4375rem] xdCanvas:px-[8.75rem] md:h-auto md:pb-[4.444444444444445vw] md:pt-[8vw]"
        >
          <div
            className="relative max-w-[36.388888888888886vw] py-[4.166666666666666vw] 
                      font-secondary text-[3.4722222222222223vw] text-white 
                      xdCanvas:max-w-[32.75rem] xdCanvas:py-[3.75rem] xdCanvas:text-[3.125rem]
                      md:max-w-none md:text-center md:text-[9.166666666666666vw]"
          >
            <div
              data-role="bg-pattern"
              className="absolute inset-0 m-auto bg-transparent bg-[length:8.402777777777779vw] 
                      bg-center bg-no-repeat xdCanvas:bg-[length:7.5625rem] md:bg-[length:18.380555555555556vw]"
              style={{ backgroundImage: "url('/images/eye-icon.svg')" }}
            ></div>
            <div className="relative uppercase leading-[1] md:capitalize">{props.title}</div>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInRight"
          animatePreScroll={true}
          animateOnce={true}
          className="relative mx-auto w-full px-[9.722222222222223vw] xdCanvas:px-[8.75rem]"
        >
          <div className="relative pt-[62.241379310344826%] shadow-[0px_0px_0px_2px_#343a40] md:min-h-[204.99999999999997vw] md:bg-[#343a40] md:pt-0">
            {useIframe ? (
              <>
                <iframe
                  frameBorder={0}
                  src="https://phenix.oneprotex.com/builder/"
                  className="absolute inset-0 box-border h-[100%] w-full
                          bg-[#343a40] bg-[length:110vw] md:relative md:mx-auto md:mt-[2.2222222222222223vw] md:min-h-[204.99999999999997vw] md:w-full md:border-b-0 md:bg-center"
                />
              </>
            ) : (
              <>
                <Image
                  src={'/images/missions/builder-image.png'}
                  width={1160}
                  height={722}
                  alt="builder image"
                  className="absolute inset-0 object-cover md:hidden"
                />

                <Image
                  src={'/images/missions/mobile-builder.png'}
                  width={1160}
                  height={722}
                  alt="builder image"
                  className="mx-auto hidden h-[105.27777777777779vw] w-[52.22222222222223vw] object-cover md:block"
                />

                <Image
                  src={'/images/missions/builder-circles.png'}
                  width={1160}
                  height={722}
                  alt="builder image"
                  className="mx-auto mt-[2.2222222222222223vw] hidden w-[21.666666666666668vw] md:block"
                />

                <div
                  style={{ backgroundImage: `url(${'/images/missions/builder-heli.png'})` }}
                  className="mx-auto mt-[2.2222222222222223vw] hidden h-[57.49999999999999vw] w-full bg-[length:110vw] bg-center md:block"
                />
              </>
            )}

            <div className="hidden bg-[#343a40] px-[5.555555555555555vw] py-[8.333333333333332vw] md:block">
              <Link href="/contact">
                <Button
                  className="w-full min-w-[8.625rem] py-4 font-secondary text-[1.25rem] leading-[1] xsm:py-[4.722222222222222vw]  xsm:text-[5.555555555555555vw]"
                  label="CONTACT US"
                />
              </Link>
            </div>
          </div>
        </AnimationOnScroll>
      </div>
    </div>
  );
}
