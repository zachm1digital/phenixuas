'use client';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { getMissionData } from 'src/services/mission.data';
import getMissionData2, {
  ContentProps,
  ImageSectionProps,
  MainFeatureSectionProps,
  MainTitleProps,
  MissionNavLinks,
  SpecialtySectionProps,
  TitleContentSectionProps,
  TwoColumnSectionProps,
  getCivilNavLinks,
  getDefenseNavLinks,
  ItemNotFound
} from 'src/services/missions';

import styles from '@/styles/missions/index.module.css';

import CategoryBox from '@/components/molecules/CategoryBox';
import BuilderImageSection from '@/components/organisms/BuilderImageSection';
import CenterHeadline from '@/components/organisms/CenterHeadline';
import SetsModal, { SetsModalHandlerProps } from '@/components/organisms/SetsModal';
import TabSection from '@/components/organisms/TabSection';

import { cn } from '@/lib/utils';

const staticData = getMissionData();
const staticData2: { [x: string]: { [y: string]: ContentProps[] } } = getMissionData2();
const NotFoundText = ItemNotFound();
const specsImageAspectRation = (684 / 887) * 100;
const categories: { [x: string]: MissionNavLinks[] } = {
  civil: getCivilNavLinks(),
  defense: getDefenseNavLinks()
};

export default function MissionsPage() {
  const params = useSearchParams();
  const category = params.get('category') as string;
  const item = params.get('item') as string;
  const { tabsSection, centerHeadlineSection, builderSection } = staticData;
  const [contents, setContents] = useState<ContentProps[]>(
    staticData2[category]?.[item] || NotFoundText
  );
  const [selectedCategories, setSelectedCategories] = useState<MissionNavLinks[]>(
    categories[category] || []
  );
  const [selectedItemKey, setSelectedItemKey] = useState<string>(item || selectedCategories[0].key);
  const scrollableElement = useRef<HTMLDivElement | null>(null);
  const setsModalRef = useRef<SetsModalHandlerProps | null>(null);

  useEffect(() => {
    // not working due to changing it from next router to client side history.push
    const category = params.get('category') as string;
    const item = params.get('item') as string;
    setSelectedItemKey(item);
    setContents(staticData2[category]?.[item] || NotFoundText);
    setSelectedCategories(categories[category] || []);
  }, [params]);

  const onCategoryItemClick = (link: MissionNavLinks) => {
    const category = link.category;
    const item = link.key;
    setSelectedItemKey(item);
    setContents(staticData2[category]?.[item] || NotFoundText);
    setSelectedCategories(categories[category] || []);
    scrollableElement.current?.scrollTo({
      behavior: 'instant',
      top: 0
    });
  };

  const openModal = () => {
    setsModalRef.current?.show();
  };

  const selectedItem = selectedCategories.find((item) => item.key === selectedItemKey);

  return (
    <>
      <CenterHeadline title={centerHeadlineSection.title} content={centerHeadlineSection.content} />
      <TabSection tabs={tabsSection.tabs} defaultTabId={params.get('category')}>
        <div className="flex flex-row items-start justify-between gap-6 lg:flex-col">
          <CategoryBox
            items={selectedCategories}
            onSelectedChange={onCategoryItemClick}
            defaultSelected={selectedItemKey}
          />
          <div className="animate-500 animate__fadeIn hidden w-full lg:block md:px-9">
            <button
              onClick={openModal}
              className="hidden min-h-[3.875rem] w-full flex-row items-center gap-4 bg-phenix-primary px-7 py-5 text-left font-primary text-[0.9375rem] font-bold uppercase text-phenix-onprimary lg:flex"
            >
              <div className="flex-1">{selectedItem?.label}</div>
              <div className="flex rotate-90 items-start justify-center font-secondary text-xl">
                &gt;
              </div>
            </button>
          </div>
          <div
            className="relative max-h-[50.125rem] w-full max-w-[47.6875rem] flex-1 overflow-y-auto overflow-x-hidden lg:max-h-none"
            ref={scrollableElement}
          >
            <div className="animate__fadeIn animate-300" key={new Date().getTime()}>
              {contents?.map((content, index) => {
                if (content.type === 'main_title') {
                  return <MainTitleSection {...content} key={index} />;
                }

                if (content.type === 'image') {
                  return <ImageSection {...content} key={index} />;
                }

                if (content.type === 'main_features_section') {
                  return <MainFeatureSection {...content} key={index} />;
                }

                if (content.type === 'specialty_section') {
                  return <SpecialtySection {...content} key={index} />;
                }

                if (content.type === 'two_column_section') {
                  return <TwoColumnSection {...content} key={index} />;
                }

                if (content.type === 'title_content_section') {
                  return <TitleContentSection {...content} key={index} />;
                }

                return null;
              })}
            </div>
          </div>
        </div>
      </TabSection>

      <BuilderImageSection
        title={builderSection.title}
        image={builderSection.image}
        className="pb-[5vw] xdCanvas:pb-[4.5rem] md:pb-[5.625rem]"
      />

      <SetsModal
        ref={setsModalRef}
        selectedItemKey={selectedItemKey}
        list={selectedCategories}
        onChange={(item) => {
          onCategoryItemClick(item);
        }}
      />
    </>
  );
}

function MainTitleSection({ title, subTitle, content }: Omit<MainTitleProps, 'type'>) {
  return (
    <>
      <h1 className="phenix-title-001 mb-5 mt-4 md:px-9">{title}</h1>
      <h4 className="mb-7 font-primary text-[1.25rem] font-bold md:px-9">{subTitle}</h4>
      <div className="pb-6 font-secondary text-[0.9375rem] md:px-9">{content}</div>
    </>
  );
}

function ImageSection({ src, alt, dimensions }: Omit<ImageSectionProps, 'type'>) {
  return (
    <div className="mb-7 w-full max-w-[34.0625rem] md:max-w-none">
      <div className="relative w-full" style={{ paddingTop: `${specsImageAspectRation}%` }}>
        <Image
          className="absolute inset-0 h-[100%] w-full object-cover"
          src={src}
          alt={alt}
          width={dimensions?.width || 545}
          height={dimensions?.height || 346}
        />
      </div>
    </div>
  );
}

function MainFeatureSection({ title, items }: Omit<MainFeatureSectionProps, 'type'>) {
  return (
    <>
      {title && <h2 className="mb-5 font-secondary text-[1.875rem] md:px-9">{title}</h2>}

      <ul className="red-bullet mb-12 font-primary font-semibold md:px-9">
        {items?.map((item, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

function SpecialtySection({ title, items }: Omit<SpecialtySectionProps, 'type'>) {
  return (
    <>
      {title && <h2 className="mb-5 font-secondary text-[1.875rem] md:px-9">{title}</h2>}
      <div className="mb-12 md:px-9">
        {items?.map((item) => (
          <IconTitleContent
            key={item.id}
            icon={item.icon}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </>
  );
}

function TwoColumnSection({ title, items }: Omit<TwoColumnSectionProps, 'type'>) {
  return (
    <>
      {title && <h2 className="mb-10 font-secondary text-[1.875rem] md:px-9">{title}</h2>}
      <div
        className="border-b-phenix-stroke2 mb-12 grid grid-cols-2 gap-x-10 gap-y-[4.5rem] 
                            lg:gap-x-4 lg:gap-y-12 
                            md:grid-cols-1 md:gap-y-8 md:px-9"
      >
        {items?.map((item, index: number) => (
          <TwoColumnItem key={index} title={item.title} content={item.content} />
        ))}
      </div>
    </>
  );
}

function TitleContentSection({ title, content }: Omit<TitleContentSectionProps, 'type'>) {
  return (
    <div className="md:px-9">
      <TitleContent title={title} content={content} />
    </div>
  );
}

function IconTitleContent({
  icon,
  title,
  content
}: {
  icon?: string;
  title: ReactNode;
  content: ReactNode;
}) {
  return (
    <div className="border-t-phenix-stroke2 last:border-b-phenix-stroke2 flex flex-row items-start gap-6 border-t py-6 pr-6 last:border-b md:flex-col md:gap-5 md:px-0">
      {icon && (
        <div className="relative h-[2.5rem] w-[2.5rem] rounded-full">
          <Image
            src={icon}
            width={40}
            height={40}
            alt="icon"
            className="h-[100%] w-[100%] object-contain"
          />
        </div>
      )}
      <div className="flex-1">
        <h4 className="mb-3 mt-[0.3rem] text-[1.25rem] font-semibold uppercase">{title}</h4>
        <div className="font-secondary text-[0.9375rem]">{content}</div>
      </div>
    </div>
  );
}

function TwoColumnItem(props: { title: ReactNode; content: ReactNode }) {
  return (
    <div className="w-full">
      <h4 className="mb-4 text-[1.25rem] font-semibold uppercase tracking-widest">{props.title}</h4>
      <div className="font-secondary text-[0.9375rem]">{props.content}</div>
    </div>
  );
}

function TitleContent(props: { title: ReactNode; content: ReactNode }) {
  return (
    <div className={cn(styles.titleContent, '')}>
      <h2 className="mb-5 font-secondary text-[1.875rem]">{props.title}</h2>
      <div className="pb-6 font-secondary text-[0.9375rem]">{props.content}</div>
    </div>
  );
}
