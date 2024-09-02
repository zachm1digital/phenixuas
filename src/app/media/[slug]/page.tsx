import { createClient } from '@prismicio/client';

import { MediaItemProps } from '@/components/molecules/MediaItem';
import MediaInternal from '@/components/organisms/MediaInternal';

export async function generateStaticParams() {
  const client = createClient('phenix-mh');
  const item = await client.getAllByType('media_item');

  return item.map((item) => ({
    id: item.uid
  }));
}

async function getMedia({ slug }: { slug: string }): Promise<MediaItemProps | null> {
  try {
    const client = createClient('phenix-mh');
    const item = await client.getByUID('media_item', slug);

    const _itm: MediaItemProps = {
      id: item.uid,
      slug: item.uid,
      title: item.data.title as string,
      subheading: item.data.subheading as string,
      content: item.data.content,
      image: item.data.image.url as string,
      video: item.data.video?.url as string,
      date: (item.data.date as string) || item.first_publication_date
    };

    return _itm;
  } catch (err) {
    return null;
  }
}

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props) {
  const response = await getMedia({ slug: params.slug });

  if (!response) {
    return {
      title: 'Page Not Found'
    };
  }

  return {
    title: response.title,
    description: response.subheading,
    openGraph: {
      images: [response.image]
    }
  };
}

export const dynamic = 'force-dynamic';

export default async function MediaInternalPage() {
  return <MediaInternal />;
}
