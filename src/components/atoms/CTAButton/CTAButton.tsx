import Link from 'next/link';
import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

type CTAButtonProps = {
  children?: ReactNode;
  className?: string;
  href: string;
};

export default function CTAButton({ children, className, href }: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        'flex w-full flex-row items-center justify-center border border-phenix-primary',
        'bg-phenix-background p-3 font-bold text-phenix-onbackground transition-all',
        'hover:border-black hover:bg-black hover:text-white ',
        className
      )}
    >
      {children}
    </Link>
  );
}
