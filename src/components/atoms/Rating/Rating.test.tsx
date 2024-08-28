import { render, screen } from '@testing-library/react';
import React from 'react';

import Rating from './Rating';

test('renders correctly', () => {
  render(<Rating />);
  const ratingElement = screen.getByRole('radiogroup');
  expect(ratingElement).toBeInTheDocument();
});
