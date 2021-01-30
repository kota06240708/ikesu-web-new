import ReactDOM from 'react-dom';
import React, { ReactElement } from 'react';
import { hot } from 'react-hot-loader/root';

import { makeArray } from '../../shared/scripts/make-array';
import { offsetTop } from '../../shared/scripts/offset';
import smoothscroll from '../../shared/scripts/smooth-scroll';

import Global from '../../index/script/global';

import Index from './react';

type TData = {
  el: HTMLElement;
  bottom: number;
  color: string;
};

const Layouts: () => ReactElement = (): ReactElement => {
  return <Index />;
};

export const aboutRender: () => void = () => {
  const rootEl: HTMLElement = document.getElementById('about-app');
  rootEl ? ReactDOM.render(<Layouts />, rootEl) : null;
};

hot(Layouts);

export class About extends Global {
  private $$sections: HTMLElement[];
  private $$hashs: HTMLElement[];
  private $$aboutBg: HTMLElement;
  private data: TData[];

  constructor() {
    super();
    this.data = [];

    this.hashScroll = this.hashScroll.bind(this);
  }

  // アニメーションのデータを取得
  public setData(): void {
    this.$$sections = makeArray(document.querySelectorAll('.js-about-section'));
    this.$$aboutBg = document.getElementById('js-about-bg');
    this.$$hashs = makeArray(document.querySelectorAll('.js-hashs'));

    if (this.$$sections.length === 0 && !this.$$aboutBg) {
      return;
    }

    this.data = this.$$sections.map((r: HTMLElement) => {
      return {
        el: r,
        bottom: offsetTop(r),
        color: r.dataset.color
      };
    });
  }

  public active(): void {
    if (this.$$sections.length === 0 && !this.$$aboutBg) {
      return;
    }

    this.data.forEach((r: TData) => {
      if (r.bottom <= this.scrollMiddle) {
        this.$$aboutBg.style.backgroundColor = r.color;
      }
    });
  }

  public onClickHashScroll(): void {
    if (this.$$sections.length === 0 && !this.$$aboutBg) {
      return;
    }

    this.$$hashs.forEach((r: HTMLElement) => {
      r.addEventListener('click', this.hashScroll);
    });
  }

  public removeHashScroll(): void {
    if (this.$$sections.length === 0 && !this.$$aboutBg) {
      return;
    }

    this.$$hashs.forEach((r: HTMLElement) => {
      r.removeEventListener('click', this.hashScroll);
    });
  }

  private hashScroll(e: Event): void {
    e.preventDefault();
    const dom = e.currentTarget as HTMLElement;
    const href = dom.getAttribute('href');
    const target = document.querySelector(href) as HTMLElement;

    console.log(href);

    if (target) {
      smoothscroll(offsetTop(target), 0.6);
    }
  }
}
