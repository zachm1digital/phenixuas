import { render, screen } from '@testing-library/react';
import React from 'react';

import Editor from './Editor';

test('renders correctly', () => {
  render(<Editor />);
  const editorElement = screen.getByRole('textbox');
  expect(editorElement).toBeInTheDocument();
});
