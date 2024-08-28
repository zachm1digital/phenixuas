import { render, screen } from '@testing-library/react';
import React from 'react';

import Dropdown from './Dropdown';

test('renders correctly', () => {
  render(<Dropdown />);
  const dropdownHeadingElement = screen.getByRole('heading', { name: /Dropdown/i });
  expect(dropdownHeadingElement).toBeInTheDocument();
});
