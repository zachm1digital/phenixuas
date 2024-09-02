import { RichTextField } from '@prismicio/client';
import moment from 'moment';
import Link from 'next/link';
import { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export type MediaItemProps = {
  id: string | number;
  title: string;
  subheading: string;
  content: string | RichTextField;
  date: string;
  slug: string;
  image: string;
  video: string;
  category?: string;
} & Omit<HTMLAttributes<HTMLDivElement>, 'content'>;

const aspectRationPadding = (468 / 757) * 100;

export default function MediaItem({
  id,
  title,
  content,
  image,
  video,
  date,
  slug,
  className,
  ...props
}: MediaItemProps) {
  const href = `/media/${encodeURIComponent(slug)}`;
  return (
    <div
      data-id={id}
      className={cn(
        'mb-7 cursor-pointer bg-phenix-background font-secondary shadow-[0px_5px_20px_rgba(0,0,0,0.15)] last:mb-0 lg:mb-0',
        className,
        'animate-1s animate__fadeIn'
      )}
      {...props}
      onClick={() => {
        //window.location.href = href;
        window.location.replace(href)
      }}
    >
      <div
        className="relative w-full overflow-hidden"
        style={{ paddingTop: `${aspectRationPadding}%` }}
      >
        <div className="absolute inset-0 bg-cover" style={{ backgroundImage: `url('${image}')` }} />
      </div>
      <div className="px-10 py-7 text-[0.9375rem] lg:px-4">
        <div className="font-primary font-bold uppercase text-phenix-gray001">
          {moment(new Date(date)).format('MMMM DD, YYYY')}
        </div>
        <h2 className="mb-7 mt-4 text-[1.625rem] lg:mb-4 lg:mt-0 lg:line-clamp-1 lg:text-[1.25rem]">
          {title}
        </h2>
        <div className="line-clamp-2 lg:line-clamp-3 lg:text-[0.75rem]">
          {typeof content === 'string' && content.substring(0, 400)}
        </div>

        <Link href={href}>
          <div className="mt-7 flex flex-row items-center font-primary text-xl font-bold text-phenix-primary lg:mt-4 lg:text-[0.75rem]">
            READ THE FULL ARTICLE{' '}
            <span className="ml-3">
              <ArrowRightIcon />
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      id="Group_496"
      data-name="Group 496"
      xmlns="http://www.w3.org/2000/svg"
      width="24.845"
      height="8.179"
      viewBox="0 0 24.845 8.179"
    >
      <defs>
        <clipPath id="clip-path">
          <rect
            id="Rectangle_50"
            data-name="Rectangle 50"
            width="24.845"
            height="8.179"
            fill="none"
            stroke="#b9262c"
            strokeWidth="1"
          />
        </clipPath>
      </defs>
      <g id="Group_84" data-name="Group 84">
        <g id="Group_83" data-name="Group 83" clipPath="url(#clip-path)">
          <line
            id="Line_14"
            data-name="Line 14"
            x2="24.148"
            transform="translate(0 4.09)"
            fill="none"
            stroke="#b9262c"
            strokeMiterlimit="10"
            strokeWidth="1"
          />
        </g>
      </g>
      <path
        id="Path_651"
        data-name="Path 651"
        d="M.682,8.178,0,7.446,3.612,4.088,0,.732.682,0l4.4,4.088Z"
        transform="translate(19.766 0)"
        fill="#b9262c"
      />
    </svg>
  );
}
