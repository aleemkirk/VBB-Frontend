import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ReactNode, useLayoutEffect, useState } from 'react';
/**
 * Custom history object and browser router so that we
 * can use the history.push() directly from sagas
 */
export const history = createBrowserHistory();

export const BrowserRouter = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), []);

  return (
    <Router
      children={children}
      location={state.location}
      navigator={history}
      navigationType={state.action}
    />
  );
};

/**
 * Pushes the provided path onto the history object
 * @param path {string} path to push onto history
 */
export const pushHistory = (path: string): void => {
  history.push(path);
};
