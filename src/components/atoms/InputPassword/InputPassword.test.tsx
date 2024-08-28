import { render, screen } from '@testing-library/react';
import React from 'react';

import InputPassword from './InputPassword';

test('renders correctly', () => {
  render(<InputPassword />);
  const passwordElement = screen.getByRole('textbox');
  expect(passwordElement).toBeInTheDocument();
});
