'use client';
import { createClient, asText } from '@prismicio/client';
import { useEffect, useState } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import { MediaItemProps } from '@/components/molecules/MediaItem';

import NewsSectionItem from '../molecules/NewsSectionItem';
import ViewAllButton from '../molecules/ViewAllButton';

async function getMedias(): Promise<MediaItemProps[]> {
  const client = createClient('phenix-mh');
  const list = await client.getByType('media_item', {
    orderings: { direction: 'desc', field: 'my.media_item.date' },
    pageSize: 2,
    page: 1
  });

  return list.results.map((item) => {
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
}

export default function NewsSection() {
  const [news, setNews] = useState<MediaItemProps[]>([]);
  useEffect(() => {
    getMedias()
      .then((results) => {
        setNews(results);
      })
      .catch((err: Error) => {
        alert(err.toString());
      })
      .finally(() => {
        //todo
      });
  }, []);

  return (
    <div className="min-h-[29.3125rem] w-full bg-phenix-background2 py-[5.375rem] font-secondary">
      <AnimationOnScroll
        animateOnce={true}
        animateIn="animate__fadeInUp"
        animatePreScroll={true}
        className="phenix-title-001 mb-[4.5rem] text-center font-secondary"
      >
        In the News<span className="text-phenix-primary">.</span>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateOnce={true}
        animateIn="animate__fadeInUp"
        animatePreScroll={true}
        className="newsbp:pl-20 newsbp:pr-0 md:pl-9"
      >
        <div className="relative mx-auto flex max-w-[90rem] flex-row items-center justify-end md:items-stretch">
          <div className="min-h-[1rem] w-[7vw] newsbp:hidden" />
          <div
            className="flex max-w-[70rem] flex-1 flex-row items-center justify-between 
                          gap-8 pr-[4rem] xl:pr-[1.5rem] lg:pr-[1rem] sm:pr-[1.375rem]"
          >
            {news.map((item, index) => (
              <NewsSectionItem data={item} key={index} />
            ))}
          </div>
          <ViewAllButton className="newsbp:relative newsbp:flex-col md:h-auto md:max-w-[6.25rem]" />
        </div>
      </AnimationOnScroll>
    </div>
  );
}
