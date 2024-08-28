import { createClient, asText } from '@prismicio/client';
import { Metadata } from 'next';

import { MediaItemProps } from '@/components/molecules/MediaItem';
import MediaCategories from '@/components/organisms/MediaCategories';
import MediaList from '@/components/organisms/MediaList';
import PageBanner from '@/components/organisms/PageBanner';
import RecentPost from '@/components/organisms/RecentPost';

async function getMedias(): Promise<MediaItemProps[]> {
  const client = createClient('phenix-mh');
  const list = await client.getByType('media_item', {
    orderings: { direction: 'desc', field: 'my.media_item.date' },
    pageSize: 4,
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

async function getCategories(): Promise<{ [x: string]: number }> {
  const client = createClient('phenix-mh');
  const list = await client.getAllByType('media_item', {
    fetch: 'media_item.category'
  });

  const obj: { [x: string]: number } = {};
  for (const item of list) {
    const key = item.data.category as string;
    obj[key] = obj[key] || 0;
    obj[key] += 1;
  }

  return obj;
}

export const metadata: Metadata = {
  title: 'Media',
  description: `Phenix Media`
};

export const dynamic = 'force-dynamic';

export default async function MediaPage() {
  const [list, categories] = await Promise.all([getMedias(), getCategories()]);

  return (
    <>
      <PageBanner label="MEDIA" className="mt-[3.625rem]" />
      <div className="py-[4.5rem] ">
        <div className="mx-auto flex w-full max-w-[73.75rem] flex-row items-start gap-8 lg:flex-col lg:items-center">
          <div className="flex-1 px-6 lg:w-full lg:px-20 md:px-[1.125rem]">
            <MediaList list={list} />
          </div>
          <div
            className="max-w-[22.125rem] flex-1 pr-6 
                        lg:flex lg:w-full lg:max-w-none lg:flex-row lg:gap-[2.875rem] lg:px-20
                        md:flex-col md:px-9"
          >
            <RecentPost recents={list.slice(0, 3)} />
            <MediaCategories categories={categories} />
          </div>
        </div>
      </div>
    </>
  );
}

// export const getStaticPaths: GetStaticPaths = () => {

//   return {
//     paths:[],
//     fallback:false
//   }
// }
// export const getStaticProps: GetStaticProps = async (ctx) =>{

//   return {
//     props:{

//     }
//   }
// }
