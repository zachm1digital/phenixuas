'use client';
import Link from 'next/link';
import {
  Accordion as PrimeAccordion,
  AccordionTab,
  AccordionProps as PrimeAccordionProps
} from 'primereact/accordion';
import getFaqsData, { QuestionProps } from 'src/services/faqs.data';

import RightArrow from '../atoms/CutomIcons/RightArrow';

const staticData = getFaqsData();
const questions: QuestionProps[] = staticData.faqs.questions;

export type AccordionProps = {
  items?: Array<QuestionProps>;
} & PrimeAccordionProps;

export default function Accordion({ items = questions, ...props }: AccordionProps) {
  return (
    <PrimeAccordion {...props}>
      {items.map((item, index: number) => (
        <AccordionTab
          key={index}
          header={item.question}
          headerTemplate={(props) => {
            return (
              <div className="accordion-custom-header flex w-full flex-row items-center gap-4 px-9 py-7">
                <div className="flex-1">{props.header}</div>
                <div className="ico rotate-90">&gt;</div>
              </div>
            );
          }}
          headerClassName="font-secondary font-thin text-3xl p-0"
        >
          <div className="font-secondary text-[0.9375rem] text-phenix-onbackground">
            <div className="mb-10">{item.answer}</div>
            <Link
              href={item.ctaLink}
              className="flex flex-row items-center gap-3 font-primary text-xl font-bold text-phenix-primary"
            >
              {item.ctaText}{' '}
              <span className="ml-2 font-normal">
                <RightArrow />
              </span>
            </Link>
          </div>
        </AccordionTab>
      ))}
    </PrimeAccordion>
  );
}
