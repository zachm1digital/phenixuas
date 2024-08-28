import { render, screen } from '@testing-library/react';
import React from 'react';

import InputMask from './InputMask';

test('renders correctly', () => {
  render(<InputMask />);
  const inputElement = screen.getByRole('textbox');
  expect(inputElement).toBeInTheDocument();
});
