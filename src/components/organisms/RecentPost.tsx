import { MediaItemProps } from '../molecules/MediaItem';
import RecentPostItem from '../molecules/RecentPostItem';
import UnderlinedHeader from '../molecules/UnderlinedHeader';

export default function RecentPost({ recents }: { recents: MediaItemProps[] }) {
  return (
    <div className="animate-1s animate__fadeIn w-full lg:flex-1">
      <UnderlinedHeader className="mb-4">Recent Post</UnderlinedHeader>
      {recents.map((item, index) => (
        <RecentPostItem data={item} key={item.id || index} />
      ))}
    </div>
  );
}
