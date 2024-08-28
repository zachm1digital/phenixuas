'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { HTMLAttributes, useEffect, useState } from 'react';
import { MissionNavLinks } from 'src/services/missions';

import { cn } from '@/lib/utils';

export type CategoryBoxProps = {
  onSelectedChange: (link: MissionNavLinks) => void;
  defaultSelected?: string;
  items: MissionNavLinks[];
} & HTMLAttributes<HTMLDivElement>;

export default function CategoryBox({
  items,
  className,
  onSelectedChange,
  defaultSelected,
  ...props
}: CategoryBoxProps) {
  const params = useSearchParams();
  // const router = useRouter();
  const [selectedId, setSelectedId] = useState<string | number>(
    params.get('item') || defaultSelected || items[0]?.id
  );

  useEffect(() => {
    setSelectedId(params.get('item') || items[0]?.id);
  }, [params, items]);

  const handleItemClick = (data: MissionNavLinks) => {
    setSelectedId(data.key);
    typeof onSelectedChange === 'function' && onSelectedChange(data);
  };

  return (
    <div className="box-border lg:hidden lg:w-full md:px-9">
      <div
        className={cn(
          'border-phenix-stroke2 no-scrollbar box-border flex w-full max-w-[18.75rem] flex-col border lg:max-h-[3.875rem] lg:max-w-none lg:overflow-y-auto',
          className
        )}
        {...props}
      >
        {items.map((item, index: number) => (
          <Link
            href={item.href}
            key={index}
            className={cn(
              'categorybox-item border-b-phenix-stroke2 box-border cursor-pointer border-b px-7 py-[1.25rem] font-primary text-[0.9375rem] font-bold uppercase leading-[1.4] text-phenix-gray001 last:border-b-0',
              `${selectedId === item.key ? 'active' : ''}`
            )}
            onClick={(e) => {
              // router.replace(item.href, { scroll: false });
              window.history.pushState(null, 'redirect', item.href);
              e.preventDefault();
              handleItemClick(item);
            }}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
