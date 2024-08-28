import { render, screen } from '@testing-library/react';
import React from 'react';

import InputSwitch from './InputSwitch';

test('renders correctly', () => {
  render(<InputSwitch checked={true} />);
  const switchElement = screen.getByRole('switch');
  expect(switchElement).toBeInTheDocument();
});
