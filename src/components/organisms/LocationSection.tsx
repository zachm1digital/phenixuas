import Image from 'next/image';
import Link from 'next/link';
import { HTMLAttributes, ReactNode } from 'react';

import { cn } from '@/lib/utils';

type LocationIconLabelProps = {
  icon: ReactNode;
  label: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const LocationIconLabel = ({ className, icon, label, ...props }: LocationIconLabelProps) => (
  <div className={cn('flex flex-row items-start gap-4', className)} {...props}>
    <div className="mt-[0.125rem] min-h-[0.875rem] w-[0.875rem] min-w-[0.875rem]">{icon}</div>
    <div className="whitespace-pre">{label}</div>
  </div>
);

export default function LocationSection() {
  return (
    <div
      className="animate-1s animate__fadeIn relative flex min-h-[34.75rem] w-full flex-row items-center bg-cover 
                  lg:bg-[calc(50%-_-6rem)_calc(50%)] md:min-h-[53.125rem]
                  md:bg-[calc(50%-_-19rem)_calc(50%-44rem)]"
      style={{ backgroundImage: " url('/images/contact/map-sample-img.png')" }}
    >
      <div
        className="absolute right-0 flex min-h-[25.125rem] w-full max-w-[30rem] flex-col gap-9 
                    bg-white/80 px-16 py-9 font-secondary text-[0.9375rem] shadow-md lg:max-w-[19.6875rem] 
                    lg:px-9 md:top-0 md:max-w-none"
      >
        <div className="px-8">
          <Image
            src="/images/contact/phenix-logo-contact.svg"
            alt="phenix-logo-contact"
            width={143}
            height={109}
            className="h-[6.8125rem] w-[8.9375rem] bg-contain md:mx-auto sm:block"
          />
        </div>

        <div className="flex flex-col gap-6 md:mx-auto md:max-w-[300rem]">
          <LocationIconLabel
            icon={
              <Image
                src="/images/contact/address-icon.svg"
                alt="address-icon"
                width={14}
                height={14}
              />
            }
            label={
              '11090 SW Durham Lane, Building G, Suite 4\nMcMinnville, OR 97128\nUnited States'
            }
          />
          <LocationIconLabel
            icon={
              <Image src="/images/contact/email-icon.svg" alt="email-icon" width={14} height={14} />
            }
            label={<Link href="mailto:info@phenixuas.com">info@phenixuas.com</Link>}
          />
          <LocationIconLabel
            icon={
              <Image src="/images/contact/phone-icon.svg" alt="phone-icon" width={14} height={14} />
            }
            label={<Link href="tel:503-896-9225">503-896-9225</Link>}
            className="mt-0"
          />
        </div>
      </div>
    </div>
  );
}
