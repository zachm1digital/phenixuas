import { render, screen } from '@testing-library/react';
import React from 'react';

import MultiSelect from './MultiSelect';

test('renders correctly', () => {
  render(<MultiSelect />);
  const multiselectElement = screen.getByRole('listbox');
  expect(multiselectElement).toBeInTheDocument();
});
