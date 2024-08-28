import { render, screen } from '@testing-library/react';
import React from 'react';

import InputNumber from './InputNumber';

test('renders correctly', () => {
  render(<InputNumber />);
  const inputNumberElement = screen.getByRole('spinbutton');
  expect(inputNumberElement).toBeInTheDocument();
});
