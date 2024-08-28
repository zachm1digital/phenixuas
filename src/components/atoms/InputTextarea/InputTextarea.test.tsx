import { render, screen } from '@testing-library/react';
import React from 'react';

import InputTextarea from './InputTextarea';

test('renders correctly', () => {
  render(<InputTextarea />);
  const textareaElement = screen.getByRole('textbox');
  expect(textareaElement).toBeInTheDocument();
});
