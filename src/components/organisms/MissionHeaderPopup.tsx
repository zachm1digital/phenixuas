'use client';

import Link from 'next/link';
import {
  forwardRef,
  useLayoutEffect,
  useRef,
  useImperativeHandle,
  ForwardedRef,
  useState
} from 'react';
import { createPortal } from 'react-dom';
import { MissionNavLinks, getCivilNavLinks, getDefenseNavLinks } from 'src/services/missions';

import { cn } from '@/lib/utils';

export type MissionHeaderPopupFunctions = {
  show: () => void;
  hide: () => void;
};

export type MissionItemProps = {
  id: string | number;
  title: string;
  image: string;
  path: string;
};

// const dummyData: MissionItemProps[] = [
//   {
//     id: crypto.randomUUID(),
//     title: 'Fire',
//     image: '/images/navigation/civil-fire-mission-block-home.png',
//     path: '/missions?category=civil&item=0'
//   },
//   {
//     id: crypto.randomUUID(),
//     title: 'Cargo',
//     image: '/images/navigation/civil-cargo-mission-block-home.png',
//     path: '/missions?category=civil&item=0'
//   },
//   {
//     id: crypto.randomUUID(),
//     title: 'Agriculture',
//     image: '/images/navigation/civil-agriculture-mission-block-home.png',
//     path: '/missions?category=civil&item=0'
//   },
//   {
//     id: crypto.randomUUID(),
//     title: 'Search & Rescue',
//     image: '/images/navigation/civil-search-rescue-mission-block-home.png',
//     path: '/missions?category=civil&item=0'
//   },
//   {
//     id: crypto.randomUUID(),
//     title: 'Public Safety',
//     image: '/images/navigation/civil-public-safety-mission-block-home.png',
//     path: '/missions?category=civil&item=0'
//   },
//   {
//     id: crypto.randomUUID(),
//     title: 'Natural Disaster Reflief Response',
//     image: '/images/navigation/civil-nat-disaster-mission-block-home.png',
//     path: '/missions?category=civil&item=0'
//   },
//   {
//     id: crypto.randomUUID(),
//     title: 'Utilities / Energy',
//     image: '/images/navigation/civil-utlities-energy-mission-block-home.png',
//     path: '/missions?category=civil&item=0'
//   },
//   {
//     id: crypto.randomUUID(),
//     title: 'Construction',
//     image: '/images/navigation/civil-construction-mission-block-home.png',
//     path: '/missions?category=civil&item=0'
//   },
//   {
//     id: crypto.randomUUID(),
//     title: 'Imaging/Video',
//     image: '/images/navigation/civil-imaging-video-mission-block-home.png',
//     path: '/missions?category=civil&item=0'
//   },
//   {
//     id: crypto.randomUUID(),
//     title: 'Research & Development',
//     image: '/images/navigation/civil-research-development-mission-block-home.png',
//     path: '/missions?category=civil&item=0'
//   },
//   {
//     id: crypto.randomUUID(),
//     title: 'Customer Provided Payload/Equipment',
//     image: '/images/navigation/civil-customer-payload-mission-block-home.png',
//     path: '/missions?category=civil&item=0'
//   }
// ];

// const dummyData2: MissionItemProps[] = [
//   {
//     id: crypto.randomUUID(),
//     title: 'Armorment',
//     image: '/images/navigation/defense-armorment-mission-block-home.png',
//     path: '/missions?category=defense&item=0'
//   },
//   {
//     id: crypto.randomUUID(),
//     title: 'Cargo',
//     image: '/images/navigation/defense-cargo-mission-block-home.png',
//     path: '/missions?category=defense&item=0'
//   },
//   {
//     id: crypto.randomUUID(),
//     title: 'Human Cargo',
//     image: '/images/navigation/defense-human-cargo-mission-block-home.png',
//     path: '/missions?category=defense&item=0'
//   },
//   {
//     id: crypto.randomUUID(),
//     title: 'NAT Disaster Relief',
//     image: '/images/navigation/defense-nat-disaster-relief-mission-block-home.png',
//     path: '/missions?category=defense&item=0'
//   },
//   {
//     id: crypto.randomUUID(),
//     title: 'Surveillance',
//     image: '/images/navigation/defense-surveillance-mission-block-home.png',
//     path: '/missions?category=defense&item=0'
//   }
// ];

const staticData: { [x: string]: MissionNavLinks[] } = {
  civil: getCivilNavLinks(),
  defense: getDefenseNavLinks()
};

export type CategoryProps = { value: string; label: string };

const categories: Array<CategoryProps> = [
  {
    value: 'civil',
    label: 'Civil'
  },
  {
    value: 'defense',
    label: 'Defense'
  }
];

export default forwardRef(function MissionHeaderPopup(
  props,
  ref: ForwardedRef<MissionHeaderPopupFunctions>
) {
  const bodyRef = useRef<HTMLBodyElement | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [visible, setVisibility] = useState<boolean>(false);
  const [category, setCategory] = useState<string>('civil');
  const [missionItems, setMissionItems] = useState<MissionNavLinks[]>(staticData['civil']);

  useLayoutEffect(() => {
    // todo
    bodyRef.current = document.body as HTMLBodyElement;
  }, []);

  useLayoutEffect(() => {
    const target = document.querySelector('html');
    visible
      ? target?.setAttribute('style', 'overflow-y: hidden;')
      : target?.removeAttribute('style');
  }, [visible]);

  const show = () => {
    // todo
    if (timerRef.current) clearTimeout(timerRef.current);
    setVisibility(true);
  };
  const hide = () => {
    // todo:
    // setTimeout(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setVisibility(false);
    // }, 300);
  };

  const handleMouseOut = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (visible) {
      timerRef.current = setTimeout(() => {
        hide();
      }, 300);
    }
  };

  const handleMouseIn = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setVisibility(true);
  };

  const handleSelectCategory = (item: CategoryProps) => {
    // todo
    setCategory(item.value);
    setMissionItems(staticData[item.value] || []);
  };

  useImperativeHandle(
    ref,
    () => {
      return {
        show,
        hide
      };
    },
    []
  );

  return visible && bodyRef.current
    ? createPortal(
        <div
          className="animate-300 animate__fadeIn fixed bottom-0 left-0 right-0 top-[6rem] z-50 mx-auto max-h-[39.4375rem]
                   max-w-[90rem] bg-white shadow-lg"
          onPointerLeave={handleMouseOut}
          onPointerEnter={handleMouseIn}
        >
          <div className="border-t-phenix-stroke2 mx-auto mt-4 flex max-w-[73.75rem] flex-row border-t pt-10">
            <div className="flex min-w-[19rem] flex-col gap-6 px-[3.375rem] font-secondary text-[1.875rem] font-bold uppercase leading-[1]">
              {categories.map((item) => (
                <div
                  className={cn(
                    'cursor-pointer uppercase',
                    item.value === category ? 'text-black' : 'text-neutral-400'
                  )}
                  key={item.value}
                  onClick={() => handleSelectCategory(item)}
                >
                  {item.label}
                </div>
              ))}
            </div>
            <div className="flex-1 pr-4">
              <div className="grid w-auto max-w-[43.6875rem] grid-cols-3 gap-[0.75rem]">
                {missionItems.map((item) => {
                  return (
                    <Link
                      href={`/missions${item.href}` || '/missions'}
                      key={item.id}
                      className="animate-300 animate__fadeIn group  relative w-full bg-neutral-700 bg-cover pt-[35.55555555555556%]"
                      style={{ backgroundImage: `url('${item?.imageLandscape}')` }}
                      onClick={() => hide()}
                    >
                      <div className="absolute inset-0 flex flex-row items-center bg-black/30 px-[1.625rem] font-primary text-[0.9375rem] font-bold uppercase leading-[1] text-white">
                        {item?.label}
                      </div>
                      <div className="absolute inset-0 h-[100%] origin-bottom-right scale-0 transform-gpu bg-[url('/images/open-hover-button.svg')] bg-contain bg-[right_bottom] bg-no-repeat transition-all duration-200 group-hover:scale-100" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>,
        bodyRef.current
      )
    : null;
});
