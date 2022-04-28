import { ReactNode } from 'react';
import { render as tlRender } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

interface Props {
  children: ReactNode;
}

const UIWithProviders = ({ children }: Props) => (
  <BrowserRouter>{children}</BrowserRouter>
);

const render = (ui: React.ReactElement, options = {}) =>
  tlRender(ui, { wrapper: UIWithProviders, ...options });

export { render };
