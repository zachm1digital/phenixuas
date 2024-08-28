import { render, screen } from '@testing-library/react';
import React from 'react';

import CheckboxButton from './CheckboxButton';

test('renders correctly', () => {
  render(<CheckboxButton checked={true} />);
  const checkboxButtonElement = screen.getByRole('checkbox');
  expect(checkboxButtonElement).toBeInTheDocument();
});
