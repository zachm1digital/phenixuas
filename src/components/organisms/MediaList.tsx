'use client';
import { createClient, asText } from '@prismicio/client';
import { useRef, useState } from 'react';

import MediaItem, { MediaItemProps } from '../molecules/MediaItem';

export type MediaListProps = {
  list?: MediaItemProps[];
};

const pageSize = 4;

export default function MediaList({ list = [] }: MediaListProps) {
  const [medias, setMedias] = useState(list);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const pageRef = useRef(1);

  const handleLoadMore = async () => {
    setLoading(true);
    pageRef.current += 1;
    try {
      const client = createClient('phenix-mh');
      const list = await client.getByType('media_item', {
        orderings: { direction: 'desc', field: 'my.media_item.date' },
        pageSize,
        page: pageRef.current
      });

      const data = list.results.map((item) => {
        const _itm: MediaItemProps = {
          id: item.uid,
          slug: item.uid,
          subheading: item.data.subheading as string,
          title: item.data.title as string,
          content: asText(item.data.content),
          image: item.data.image.url as string,
          date: (item.data.date as string) || item.first_publication_date,
          category: item.data.category as string
        };

        return _itm;
      });

      if (data.length < pageSize) setHasMore(false);
      setMedias((state) => [...state, ...data]);
    } catch (err) {
      if (err instanceof Error) {
        alert(err?.message);
      }
    }
    setLoading(false);
  };

  return (
    <>
      <div className="w-full max-w-[47.25rem] lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-4 lg:gap-y-10 md:lg:grid-cols-1">
        {medias.map((item, index: number) => (
          <MediaItem
            key={index}
            id={item.id}
            subheading={item.subheading}
            title={item.title}
            content={item.content}
            image={item.image}
            date={item.date}
            slug={item.slug}
          />
        ))}
      </div>
      {hasMore ? (
        <button
          disabled={loading}
          onClick={handleLoadMore}
          className="mt-14 flex w-full flex-row items-center justify-center gap-2 border-t-2 border-t-phenix-primary p-4 text-center text-[1.125rem] font-bold tracking-wider hover:text-phenix-primary"
        >
          {loading ? (
            <>
              <i className="pi pi-spin pi-spinner"></i>
              LOADING...
            </>
          ) : (
            'LOAD MORE'
          )}
        </button>
      ) : (
        <div className="mt-14 flex w-full flex-row items-center justify-center gap-2 border-t-2 border-t-phenix-primary p-4 text-center text-[1.125rem] font-bold tracking-wider">
          END OF LIST
        </div>
      )}
    </>
  );
}
