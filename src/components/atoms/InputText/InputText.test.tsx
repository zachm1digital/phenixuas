import { render, screen } from '@testing-library/react';
import React from 'react';

import InputText from './InputText';

test('renders correctly', () => {
  render(<InputText />);
  const inputElement = screen.getByRole('textbox');
  expect(inputElement).toBeInTheDocument();
});
