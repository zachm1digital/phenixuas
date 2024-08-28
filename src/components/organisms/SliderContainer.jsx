'use client';

import React, { Component, useRef } from 'react';
import Slider from 'react-slick';
import { useDraggable } from 'react-use-draggable-scroll';

import { cn } from '@/lib/utils';

/**
 * THIS COMPONENT REQUIRES TO BE A CLASS COMPONENT IN ORDER TO WORK
 */

/**
 * @typedef Props
 * @prop {import('react').ReactNode} [children]
 * @prop {import('tailwind-merge').ClassNameValue} [className]
 * @prop {{
 *  dots?: boolean,
 *  infinite?: boolean,
 *  speed?: number,
 *  slidesToShow?: number,
 *  slidesToScroll?: number,
 * }} [settings]
 */

/**
 * @extends Component<Props, State>
 */
export default class SliderContainer extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 0,
      variableWidth: true,
      ...this.props.settings
    };

    return (
      <div className={this.props?.className}>
        <Slider {...settings}>{this.props.children}</Slider>
      </div>
    );
  }
}

/**
 *
 * @param {{
 *  children?: import('react').ReactNode,
 *  className?: import('tailwind-merge').ClassNameValue,
 * }} param0
 * @returns
 */
export function ScrollDragContainer({ children, className }) {
  const ref = useRef(); // We will use React useRef hook to reference the wrapping div:
  const { events } = useDraggable(ref, {
    applyRubberBandEffect: true // activate rubber band effect
  });

  return (
    <div
      className={cn('scrollbar-hide no-scrollbar flex overflow-x-scroll', className)}
      {...events}
      ref={ref} // add reference and events to the wrapping div
    >
      {children}
    </div>
  );
}
