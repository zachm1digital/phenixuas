'use client';
import { createClient, RichTextField } from '@prismicio/client';
import { PrismicRichText } from '@prismicio/react';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import NotFound from 'src/app/media/[slug]/not-found';

import mediaStyle from '@/styles/media/index.module.css';

import { MediaItemProps } from '@/components/molecules/MediaItem';

import { cn } from '@/lib/utils';

async function getMedia({ slug }: { slug: string }): Promise<MediaItemProps> {
  const client = createClient('phenix-mh');
  const item = await client.getByUID('media_item', slug);

  const _itm: MediaItemProps = {
    id: item.uid,
    slug: item.uid,
    title: item.data.title as string,
    subheading: item.data.subheading as string,
    content: item.data.content,
    image: item.data.image.url as string,
    date: (item.data.date as string) || item.first_publication_date
  };

  return _itm;
}

async function getOtherLinks(params: ReturnType<typeof useParams>): Promise<{
  previousLink: string | null;
  nextLink: string | null;
}> {
  const client = createClient('phenix-mh');
  const items = await client.getAllByType('media_item', {
    fetch: 'media_item.uid',
    orderings: { direction: 'asc', field: 'my.media_item.date' }
  });
  const currentIndex = items.findIndex((item) => item.uid === params.slug);
  const prevIndex = currentIndex - 1;
  const nextIndex = currentIndex + 1;

  let prev: string | null = '';
  let next: string | null = '';

  if (prevIndex < 0) {
    prev = null;
  } else {
    prev = `/media/${items[prevIndex].uid}`;
  }

  if (nextIndex < 0 || nextIndex > items.length - 1) {
    next = null;
  } else {
    next = `/media/${items[nextIndex].uid}`;
  }

  return {
    previousLink: prev,
    nextLink: next
  };
}

export default async function MediaInternal() {
  const params = useParams();
  const { previousLink, nextLink } = await getOtherLinks(params);
  try {
    const media = await getMedia({ slug: params?.slug });

    return (
      <>
        <div className="animate-1s animate__fadeIn mx-auto mt-[3.125rem] box-content max-w-[72.375rem] px-6 xl:px-20 md:px-0">
          <Link
            href="/media"
            className="mb-4 block font-primary text-[0.9375rem] font-bold text-phenix-gray001 
                        hover:text-phenix-primary md:px-9"
          >
            BACK TO ALL
          </Link>
          <div
            data-role="cover-image"
            className="relative w-full bg-slate-400 pt-[48.35924006908463%] md:pt-[55.833333333333336%]"
          >
            <Image
              className="absolute inset-0 h-[100%] w-full object-cover"
              src={media.image}
              width={1158}
              height={560}
              alt="sample-blog-img-internal"
            />
          </div>
          <div
            data-role="media-date"
            className="mt-8 font-primary text-[0.9375rem] font-bold uppercase text-phenix-gray001 md:px-9"
          >
            {moment(new Date(media.date)).format('MMMM DD, YYYY')}
          </div>
          <div
            data-role="media-title"
            className="phenix-title-001 mb-8 mt-6 leading-[3.125rem] md:mb-[1.375rem] md:mt-3 md:px-9 md:text-[1.375rem] md:leading-[1]"
          >
            {media.title}
          </div>
          <div
            data-role="media-subtitle"
            className="font-primary text-[1.25rem] font-semibold md:px-9 md:text-[0.9375rem]"
          >
            {media.subheading}
          </div>
          <div className="md:px-9">
            <div
              data-role="media-content"
              className={cn(
                'mb-[2.125rem] border-b-[0.125rem] border-phenix-primary pb-[1.625rem] pt-[3.125rem] font-secondary text-[0.9375rem]',
                'lg:py-6',
                mediaStyle.richContent
              )}
            >
              <PrismicRichText field={media.content as RichTextField} />
            </div>
          </div>
          <div
            data-role="paging"
            className="mb-[3.625rem] flex flex-row justify-between gap-6 font-primary md:px-9"
          >
            {previousLink && (
              <Link
                href={previousLink}
                className="flex flex-row items-center gap-[2.125rem] text-left text-[1.25rem] font-bold text-phenix-primary md:gap-3 md:text-xs"
              >
                <div>
                  <ArrowLeftIcon />
                </div>
                <div>PREVIOUS ARTICLE</div>
              </Link>
            )}
            <div className="flex-1" />
            {nextLink && (
              <Link
                href={nextLink}
                className="flex flex-row items-center gap-[2.125rem] text-right text-[1.25rem] font-bold text-phenix-primary md:gap-3 md:text-xs"
              >
                <div>NEXT ARTICLE</div>
                <div>
                  <ArrowRightIcon />
                </div>
              </Link>
            )}
          </div>
        </div>
      </>
    );
  } catch (err) {
    return <NotFound />;
  }
}

function ArrowLeftIcon() {
  return (
    <svg
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
      <g id="Group_85" data-name="Group 85" transform="translate(24.845 8.179) rotate(180)">
        <g id="Group_84" data-name="Group 84">
          <g id="Group_83" data-name="Group 83" clipPath="url(#clip-path)">
            <line
              id="Line_14"
              data-name="Line 14"
              x2="24.148"
              transform="translate(0 4.089)"
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
          d="M34.214,0l-.682.732L37.144,4.09,33.532,7.446l.682.732,4.4-4.088Z"
          transform="translate(-13.766 0)"
          fill="#b9262c"
        />
      </g>
    </svg>
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
