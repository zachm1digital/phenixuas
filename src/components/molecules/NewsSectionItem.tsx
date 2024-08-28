import Image from 'next/image';
import Link from 'next/link';

import { MediaItemProps } from '@/components/molecules/MediaItem';

//sm:pt-[56.25%]

export default function NewsSectionItem({ data }: { data: MediaItemProps }) {
  return (
    <div className="flex flex-row items-center gap-5 lg:hidden lg:first:flex sm:flex-col sm:items-start">
      <div className="h-[11rem] w-[11rem] bg-white">
        <div className="relative pt-[100%] ">
          <Image
            src={data.image || '/images/phenix-logo-learn-more.png'}
            alt="news cover"
            width={300}
            height={300}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="max-w-[17.125rem] flex-1 newsbp:max-w-none">
        <h2 className="line-clamp-1 text-xl text-phenix-primary">{data.title}</h2>
        <p className="mb-5 mt-4 line-clamp-4 text-[0.9375rem] sm:line-clamp-5">
          {(data.content as string).substring(0, 300)}
        </p>
        <Link
          href={`/media/${data.slug}`}
          className="font-primary text-[0.9375rem] font-semibold text-phenix-primary"
        >
          READ MORE <span className="ml-2 text-lg">→</span>
        </Link>
      </div>
    </div>
  );
}
