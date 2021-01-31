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

export const projectAllRender: (data: TAllData) => void = (data: TAllData) => {
  const rootEl: HTMLElement = document.getElementById('project-all-app');
  rootEl ? ReactDOM.render(<Layouts data={data} />, rootEl) : null;
};

hot(Layouts);
