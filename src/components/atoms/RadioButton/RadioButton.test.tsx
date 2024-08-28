import { render, screen } from '@testing-library/react';
import React from 'react';

import RadioButton from './RadioButton';

test('renders correctly', () => {
  render(<RadioButton />);
  const radioButtonElement = screen.getByRole('radio');
  expect(radioButtonElement).toBeInTheDocument();
});
