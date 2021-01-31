import ReactDOM from 'react-dom';
import React, { ReactElement, FC } from 'react';
import { hot } from 'react-hot-loader/root';

import Index from './react';

import { TAllData } from '../../../index/script/api';

type TProps = {
  data: TAllData;
};

const Layouts: FC<TProps> = ({ data }: TProps): ReactElement => {
  return <Index data={data} />;
};

export const projectDetailRender: (data: TAllData) => void = (
  data: TAllData
) => {
  const rootEl: HTMLElement = document.getElementById('project-detail-app');
  rootEl ? ReactDOM.render(<Layouts data={data} />, rootEl) : null;
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
