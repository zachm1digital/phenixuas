'use client';
import { ButtonHTMLAttributes, useLayoutEffect, useRef, useState } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { MissionNavLinks, getCivilNavLinks, getDefenseNavLinks } from 'src/services/missions';

import styles from '@/styles/TabSection.module.css';

import { cn } from '@/lib/utils';

import CarouselItem from '../molecules/CarouselItem';
import { ScrollDragContainer } from './SliderContainer';
// import SliderContainer from './SliderContainer';

const items: { [x: string]: Array<MissionNavLinks> } = {
  civil: getCivilNavLinks(),
  defense: getDefenseNavLinks()
};

const TabButton = ({
  children,
  className,
  active = false,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { active?: boolean }) => {
  const activeStyle: string[] = [];
  active && activeStyle.push(styles.active);

  return (
    <button
      className={cn(
        'flex min-w-[11rem] flex-row justify-center text-[1.5625rem] font-bold outline-none sm:text-[1.5625rem]',
        className
      )}
      {...props}
    >
      <div className={cn('px-2', styles.tabLabel, ...activeStyle)}>{children}</div>
    </button>
  );
};

export type ChooseMissionSectionProps = {
  withTabs?: boolean;
  defaultCategory?: string;
};

const tabs = [
  {
    id: 1,
    uid: 'civil',
    label: 'CIVIL'
  },
  {
    id: 2,
    uid: 'defense',
    label: 'DEFENSE'
  }
];

export default function ChooseMissionSection({
  withTabs = true,
  defaultCategory
}: ChooseMissionSectionProps) {
  const [activeTabIndex, setActiveTabIndex] = useState(tabs[0]?.id || 0);
  const [category, setCategory] = useState<string>(defaultCategory || tabs[0]?.uid);

  return (
    <AnimationOnScroll
      animateOnce={true}
      animateIn="animate__fadeInUp"
      animatePreScroll={true}
      className="w-full pt-14"
    >
      <div className="phenix-title-001 px-6 text-center font-secondary">Choose Your Mission.</div>
      {withTabs && (
        <div className="mt-9 flex flex-row justify-center gap-5">
          {tabs.map((item, index) => (
            <TabButton
              key={index}
              onClick={() => {
                setActiveTabIndex(item.id);
                setCategory(item.uid);
              }}
              active={item.id === activeTabIndex}
            >
              {item.label}
            </TabButton>
          ))}
        </div>
      )}
      <div
        className={cn(
          'mx-auto mt-[5rem] w-full max-w-[90rem] md:mt-[2.5rem]',
          !withTabs && 'mt-[3.9375rem]'
        )}
      >
        <ScrollDragContainer key={category} className="animate-300 animate__fadeIn">
          <SideSpacer />
          {items[category].map((item, index: number) => (
            <div key={index}>
              <CarouselItem
                label={item.label}
                backgroundImage={item.imagePortrait}
                path={`/missions${item.href}`}
              />
            </div>
          ))}
          <SideSpacer />
        </ScrollDragContainer>
      </div>
    </AnimationOnScroll>
  );
}

export function SideSpacer() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [minWidth, setMinWidth] = useState(8.75);
  useLayoutEffect(() => {
    // todo:
    const onResize = () => {
      const docFontSizeInPx = parseFloat(getComputedStyle(document.documentElement).fontSize);
      const parent = ref.current?.parentNode as HTMLDivElement;
      const widthRem = parent.offsetWidth / docFontSizeInPx;
      // console.log('parent.offsetWidth: ', parent.offsetWidth);
      // console.log('new-width: ', 8.75 - (90 - widthRem));
      if (widthRem < 90) {
        let newWidth = 8.75 - (90 - widthRem) / 2;
        if (window.innerWidth < 768) {
          newWidth = 2.25;
        } else {
          newWidth = 5;
        }
        // if (newWidth < 0) newWidth = 0;
        setMinWidth(newWidth);
      }
    };

    onResize();

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <div style={{ minWidth: `${minWidth}rem` }} ref={ref}></div>;
}
