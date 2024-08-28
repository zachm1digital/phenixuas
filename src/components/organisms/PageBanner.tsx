'use client';
import { HTMLAttributes, ReactNode } from 'react';

import { cn } from '@/lib/utils';

export type PageBannerProps = {
  label: ReactNode;
  links?: Array<{ link: string; label: string }>;
};

export default function PageBanner({
  label,
  links = [],
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & PageBannerProps) {
  const onClickLink = (id: string) => {
    document.querySelector(id)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <div
      className={cn(
        'relative flex min-h-[16.75rem] w-full flex-col items-center justify-center bg-phenix-dark text-white',
        className
      )}
      {...props}
    >
      <div
        data-role="bg-pattern"
        className="absolute inset-0 bg-transparent bg-[length:180rem] opacity-60 mix-blend-multiply"
        style={{ backgroundImage: "url('/images/eye-pattern-background@2x.png')" }}
      ></div>

      <div
        data-role="bg-pattern"
        className="absolute inset-0 m-auto max-h-[5.72375rem] max-w-[7.5625rem] bg-transparent bg-contain bg-center"
        style={{ backgroundImage: "url('/images/eye-icon.svg')" }}
      ></div>

      <div className="relative box-border flex-1 p-2">
        <div className="invisible">_</div>
      </div>
      <div className="phenix-title-001 relative mx-auto flex flex-row items-center text-center font-secondary leading-[1]">
        <div className="animate-1s animate__fadeInUp">{label}</div>
      </div>
      <div className="relative box-border flex flex-1 flex-row items-center px-4">
        <ul className="animate-1s animate__fadeInUp page-banner-links mx-auto box-border flex flex-row flex-wrap items-center justify-center">
          {links.length === 0 && <div className="invisible">|</div>}

          {links?.map((item, index: number) => (
            <li key={index} onClick={() => onClickLink(item.link)} className="cursor-pointer">
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
