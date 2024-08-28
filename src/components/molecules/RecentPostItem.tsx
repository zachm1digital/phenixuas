import Image from 'next/image';
import Link from 'next/link';

import { MediaItemProps } from './MediaItem';

export default function RecentPostItem({ data }: { data: MediaItemProps }) {
  const content = (data.content as string).substring(0, 200) + '...';

  return (
    <Link
      href={`/media/${data.slug}`}
      className="border-phenix-stroke2 flex flex-row items-center gap-[1.375rem] border-b py-[0.875rem]"
    >
      <div className="relative h-[3.9375rem] w-[5rem] bg-phenix-background2">
        <Image
          alt="media thumb"
          src={data.image}
          width={100}
          height={100}
          className="absolute inset-0 h-[100%] w-full object-cover"
        />
      </div>
      <div className="line-clamp-2 flex-1 font-secondary text-[0.9375rem]">{content}</div>
    </Link>
  );
}
