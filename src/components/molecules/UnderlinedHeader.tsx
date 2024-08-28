import { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export default function UnderlinedHeader({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'border-b-[2px] border-b-phenix-primary py-5 font-secondary text-[1.625rem]',
        className
      )}
      {...props}
    >
      <h2>{children}</h2>
    </div>
  );
}
