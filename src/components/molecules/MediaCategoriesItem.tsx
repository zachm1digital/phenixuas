import Link from 'next/link';
import { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

type MediaCategoriesItemProps = {
  name: string;
  count: number;
  href?: string;
} & HTMLAttributes<HTMLDivElement>;

export default function MediaCategoriesItem({
  name,
  count,
  href = '#',
  className,
  ...props
}: MediaCategoriesItemProps) {
  return (
    <Link href={href}>
      <div
        className={cn(
          'flex flex-row items-start gap-4 py-[0.9375rem] text-[1.125rem] font-semibold text-phenix-gray001 hover:text-phenix-primary',
          className
        )}
        {...props}
      >
        <div className="flex-1">{name}</div>
        <div>({count})</div>
      </div>
    </Link>
  );
}
