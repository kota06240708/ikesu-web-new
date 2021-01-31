import ReactDOM from 'react-dom';
import React, { ReactElement } from 'react';
import { hot } from 'react-hot-loader/root';

import Index from './react';

const Layouts: () => ReactElement = (): ReactElement => {
  return <Index />;
};

export const projectDetailRender: () => void = () => {
  const rootEl: HTMLElement = document.getElementById('project-detail-app');
  rootEl ? ReactDOM.render(<Layouts />, rootEl) : null;
};

hot(Layouts);

export class Detail {
  private $$name: HTMLElement;

  constructor() {
    this.$$name = document.querySelector('.js-detail-name');
  }

  public close(): void {
    if (!this.$$name) return;

    this.$$name.classList.remove('open');
  }

  public open(): void {
    this.$$name = document.querySelector('.js-detail-name');

    if (!this.$$name) return;

    this.$$name.classList.add('open');
  }
}
