import MediaCategoriesItem from '../molecules/MediaCategoriesItem';
import UnderlinedHeader from '../molecules/UnderlinedHeader';

export default function MediaCategories({ categories }: { categories: { [x: string]: number } }) {
  const getArray = (data: { [x: string]: number }) => {
    const items: Array<{ name: string; count: number }> = [];
    for (const cat in data) {
      items.push({
        name: cat,
        count: data[cat]
      });
    }

    return items;
  };

  return (
    <div className="animate-1s animate__fadeIn mt-12 lg:mt-0 lg:max-w-[16.625rem] lg:flex-1 md:max-w-none">
      <UnderlinedHeader className="mb-[0.9375rem]">Categories</UnderlinedHeader>
      {getArray(categories).map((item, index) => (
        <MediaCategoriesItem key={index} name={item.name} count={item.count} />
      ))}
    </div>
  );
}
