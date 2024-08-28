import { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export default function CornerRedTriangle({
  className,
  children,
  style,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('h-[4.25rem] w-[4.25rem] bg-phenix-primary text-white', className)}
      style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%)', ...style }}
      {...props}
    >
      <div className="absolute right-0 top-0 flex h-[50%] w-[50%] items-center justify-center text-[2rem]">
        {children}
      </div>
    </div>
  );
}
