import React from 'react';
import { render, screen } from './test-utils';
import App from './App';

test('renders title', () => {
  render(<App />);
  const title = screen.getByText(/village portal/i);
  expect(title).toBeInTheDocument();
});
