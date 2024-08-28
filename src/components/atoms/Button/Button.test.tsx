import { render, screen } from '@testing-library/react';
import React from 'react';

import Button from './Button';

test('renders correctly', () => {
  render(<Button />);
  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toBeInTheDocument();
});
