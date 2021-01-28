import ReactDOM from 'react-dom';
import React, { ReactElement } from 'react';
import { hot } from 'react-hot-loader/root';

import Index from './react';

const Layouts: () => ReactElement = (): ReactElement => {
  return <Index />;
};

export const projectRender: () => void = () => {
  const rootEl: HTMLElement = document.getElementById('project-app');
  rootEl ? ReactDOM.render(<Layouts />, rootEl) : null;
};

hot(Layouts);
