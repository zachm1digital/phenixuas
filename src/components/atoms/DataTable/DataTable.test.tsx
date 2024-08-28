import { render, screen } from '@testing-library/react';
import React from 'react';

import DataTable from './DataTable';

test('renders correctly', () => {
  render(<DataTable />);
  const tableElement = screen.getByRole('table');
  expect(tableElement).toBeInTheDocument();
});
