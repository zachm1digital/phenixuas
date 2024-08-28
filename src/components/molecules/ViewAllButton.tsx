import Link from 'next/link';
import { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export default function ViewAllButton({ className, ...props }: HTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link
      href="/media"
      {...props}
      className={cn(
        'flex h-[11rem] w-[11rem] flex-col items-center justify-center bg-phenix-primary text-phenix-onprimary newsbp:flex-row newsbp:gap-4',
        className
      )}
    >
      <div>View All</div>
      <div className="text-2xl">→</div>
    </Link>
  );
}
