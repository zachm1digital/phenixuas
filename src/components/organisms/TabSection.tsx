'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HTMLAttributes, useState } from 'react';
import { MissionNavLinks, getCivilNavLinks, getDefenseNavLinks } from 'src/services/missions';

import styles from '@/styles/TabSection.module.css';

import { cn } from '@/lib/utils';

export type TabProps = {
  id: string | number;
  label: string;
};

type TabSectionProps = {
  tabs: TabProps[];
  defaultTabId?: number | string | null | undefined;
} & HTMLAttributes<HTMLDivElement>;

export default function TabSection({ tabs = [], children, defaultTabId }: TabSectionProps) {
  const [selectedTabIndex, setSelectedTabIndex] = useState<string | number>(
    defaultTabId || tabs[0]?.id || 1
  );

  const handleTabClick = (index: number | string) => {
    setSelectedTabIndex(index);
  };

  return (
    <div id="tab-section" className="animate-1s animate__fadeIn px-6 pb-6 pt-0 lg:px-20 md:px-0">
      <div className="border-b-phenix-stroke2 mx-auto mb-[2.375rem] flex w-full max-w-[72.5rem] flex-row items-center justify-center border-b-[2px] pb-9 lg:mb-0 lg:border-none md:px-9">
        {tabs.map((item, index: number) => {
          return (
            <TabItem
              key={index}
              data={item}
              active={item.id === selectedTabIndex}
              onClick={() => handleTabClick(item.id)}
            />
          );
        })}
      </div>
      <div className="mx-auto w-full max-w-[72.5rem] lg:max-w-none">{children}</div>
    </div>
  );
}

const categories: { [x: string]: MissionNavLinks[] } = {
  civil: getCivilNavLinks(),
  defense: getDefenseNavLinks()
};

export const TabItem = ({
  data,
  active = false,
  className,
  ...props
}: { data: TabProps; active?: boolean } & HTMLAttributes<HTMLAnchorElement>) => {
  const pathName = usePathname();

  return (
    <Link
      href={`${pathName}?category=${encodeURIComponent(data.id)}&item=${
        categories[data.id][0].key
      }`}
      key={data.id}
      className={cn('flex w-full max-w-[11rem] flex-row items-center justify-center', className)}
      {...props}
    >
      <div
        className={cn(
          'cursor-pointer px-2 text-[1.5625rem] font-bold',
          `${styles.tabLabel} ${active ? styles.active : ''}`
        )}
      >
        {data.label}
      </div>
    </Link>
  );
};
