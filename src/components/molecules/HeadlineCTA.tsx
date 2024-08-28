import { CSSProperties, ReactNode } from 'react';
import { ClassNameValue } from 'tailwind-merge';

import { cn } from '@/lib/utils';

import CTAButton from '../atoms/CTAButton/CTAButton';

export type HeadlineCTAProps = {
  title: ReactNode;
  content: ReactNode;
  ctaText: ReactNode;
  ctaLink?: string;
  titleSize?: 'large' | undefined;
  titleBold?: boolean;
  className?: ClassNameValue;
  titleClassName?: ClassNameValue;
  style?: CSSProperties;
};

export default function HeadlineCTA({
  title,
  content,
  ctaText = 'CTA',
  ctaLink = '#',
  titleSize,
  titleClassName,
  titleBold = false,
  className,
  style = {}
}: HeadlineCTAProps) {
  const titleStyles = [];
  titleSize === 'large' && titleStyles.push('text-[3.75rem] leading-[1]');
  titleBold && titleStyles.push('font-bold');

  return (
    <div className={cn('mt-14 flex flex-col gap-12 font-secondary', className)} style={style}>
      <h1 className={cn('phenix-title-001', titleClassName, ...titleStyles)}>
        {title}
        <span className="text-phenix-primary">.</span>
      </h1>
      <div className="text-[0.9375rem]">{content}</div>
      <CTAButton
        href={ctaLink}
        className="max-w-[13.375rem] font-primary text-[0.9375rem] md:max-w-none"
      >
        {ctaText}
      </CTAButton>
    </div>
  );
}
