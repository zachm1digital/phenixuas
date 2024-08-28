'use client';
import {
  useState,
  useImperativeHandle,
  forwardRef,
  ForwardedRef,
  useRef,
  useLayoutEffect
} from 'react';
import { createPortal } from 'react-dom';
import { MissionNavLinks } from 'src/services/missions';

import { cn } from '@/lib/utils';

import CornerRedTriangle from '../molecules/CornerRedTriangle';

export type SetsModalProps = {
  onChange?: (data: MissionNavLinks) => void;
  selectedItemKey?: string;
  list: MissionNavLinks[];
};

export type SetsModalHandlerProps = {
  show: () => void;
  hide: () => void;
  visible: boolean;
};

export default forwardRef(function SetsModal(
  props: SetsModalProps,
  ref: ForwardedRef<SetsModalHandlerProps>
) {
  const [visible, setVisibility] = useState(false);
  const domRef = useRef<Element | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    domRef.current = document.body;
    const onResize = () => {
      if (window.matchMedia('(min-width: 1024px)').matches) {
        setVisibility(false);
      }
    };
    onResize();
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  useLayoutEffect(() => {
    if (visible) {
      scrollRef.current?.querySelector(`#${props.selectedItemKey}`)?.scrollIntoView();
    }
    const target = document.querySelector('html');
    visible
      ? target?.setAttribute('style', 'overflow-y: hidden;')
      : target?.removeAttribute('style');
  }, [props.selectedItemKey, visible]);

  const show = () => {
    setVisibility(true);
  };
  const hide = () => {
    setVisibility(false);
  };

  const onItemClick = (item: MissionNavLinks) => {
    hide();
    if (item) {
      window.history.pushState({}, '', `/missions${item.href}`);
    }
    typeof props.onChange === 'function' && props.onChange(item);
  };

  useImperativeHandle(
    ref,
    () => {
      return { show, hide, visible };
    },
    [visible]
  );

  return domRef.current && visible
    ? createPortal(
        <div className="fixed inset-0 z-50 flex flex-row items-center p-6">
          <div
            className="animate-300 animate__fadeIn  fixed inset-0 bg-black/30"
            onClick={() => hide()}
          ></div>
          <div className="animate-300 animate__zoomIn relative m-auto flex max-h-[25rem]  min-h-[10rem] w-full max-w-[25rem] flex-col overflow-hidden rounded-sm bg-white shadow-md">
            <div className="border-b-phenix-stroke2 relative flex min-h-[4.5rem] flex-row items-center border-b shadow-lg">
              <div className="p-6 font-secondary">Select an item</div>
              <CornerRedTriangle className="absolute right-0 top-0">
                <i
                  className="pi pi-times mr-0 mt-3 cursor-pointer text-[1.25rem]"
                  onClick={() => hide()}
                ></i>
              </CornerRedTriangle>
            </div>
            <div
              className="flex-1 overflow-y-auto overflow-x-hidden overscroll-contain"
              ref={scrollRef}
            >
              {props.list.map((item, index) => (
                <button
                  id={item.key}
                  key={item.id || index}
                  onClick={() => onItemClick(item)}
                  className={cn(
                    'border-b-phenix-stroke2 hidden min-h-[3.875rem] w-full flex-row gap-4 border-b px-7 py-5 text-left font-primary text-[0.9375rem] font-bold uppercase last:border-b-0 lg:flex',
                    item.key === props.selectedItemKey
                      ? 'bg-phenix-primary text-phenix-onprimary'
                      : 'bg-white text-black'
                  )}
                >
                  <div className="flex-1">{item.label}</div>
                </button>
              ))}
            </div>
          </div>
        </div>,
        domRef.current
      )
    : null;
});
