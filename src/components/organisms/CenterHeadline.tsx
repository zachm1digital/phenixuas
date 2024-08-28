import { ReactNode } from 'react';
import { ClassNameValue } from 'tailwind-merge';

import { cn } from '@/lib/utils';

export default function CenterHeadline({
  title,
  content,
  className
}: {
  title: ReactNode;
  content: ReactNode;
  className?: ClassNameValue;
}) {
  return (
    <div
      className={cn('animate__fadeIn animate-500 mt-[3.625rem] px-6 lg:px-20 md:px-9', className)}
    >
      <div className="mx-auto w-full max-w-[47.375rem] text-center">
        <div className="phenix-title-001 mb-5 font-bold text-phenix-gray002">
          {title}
          <span className="text-phenix-primary">.</span>
        </div>
        <div className="center-headline-content font-secondary">{content}</div>
      </div>
    </div>
  );
}
