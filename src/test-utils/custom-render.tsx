import { FC } from 'react';
import { render as tlRender } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

const UIWithProviders: FC<{}> = ({ children }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

const render = (ui: React.ReactElement, options = {}) =>
  tlRender(ui, { wrapper: UIWithProviders, ...options });

export { render };
