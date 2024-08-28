import { render, screen } from '@testing-library/react';
import React from 'react';

import Slider from './Slider';

test('renders correctly', () => {
  render(<Slider />);
  const sliderElement = screen.getByRole('slider');
  expect(sliderElement).toBeInTheDocument();
});
