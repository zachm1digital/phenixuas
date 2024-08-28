'use client';
import { Button as PrimeButton, ButtonProps } from 'primereact/button';
import React from 'react';

import { cn } from '@/lib/utils';

type PhenixButtonProps = {
  variant?: 'outlined' | 'fill';
  className?: string;
};

const Button = ({ className = '', ...props }: ButtonProps & PhenixButtonProps) => {
  return (
    <PrimeButton
      {...props}
      className={cn(
        'rounded-none border border-phenix-primary bg-phenix-primary p-3 font-primary text-[0.9375rem] leading-[0.9375rem] text-phenix-onprimary',
        'phenix-button',
        className
      )}
    />
  );
};

// type ButtonFilledProps = {
//   children: React.ReactNode
// };

// Button.Filled = ({ children }: ButtonFilledProps) => {
//   return (
//     <button className={cn('bg-phenix-primary text-phenix-onprimary p-3 border-phenix-primary border')}>{children}</button>
//   );
// };

// Button.Outlined = ({ children }: ButtonFilledProps) => {
//   return (
//     <button className={cn('bg-phenix-primary text-phenix-onprimary p-3 border-phenix-primary border')}>{children}</button>
//   );
// };

export default Button;
