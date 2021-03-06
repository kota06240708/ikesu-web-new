import ReactDOM from 'react-dom';
import React, { ReactElement, FC } from 'react';
import { hot } from 'react-hot-loader/root';

import { makeArray } from '../../shared/scripts/make-array';
import { offsetTop } from '../../shared/scripts/offset';
import smoothscroll from '../../shared/scripts/smooth-scroll';

import Global from '../../index/script/global';
import { TAllData } from '../../index/script/api';

import Index from './react';

type TProps = {
  data: TAllData;
};

type TData = {
  el: HTMLElement;
  bottom: number;
  color: string;
};

const Layouts: FC<TProps> = ({ data }: TProps): ReactElement => {
  return <Index data={data} />;
};

export const aboutRender: (data: TAllData) => void = (data: TAllData) => {
  const rootEl: HTMLElement = document.getElementById('about-app');
  rootEl ? ReactDOM.render(<Layouts data={data} />, rootEl) : null;
};

hot(Layouts);

export class About extends Global {
  private $$sections: HTMLElement[];
  private $$hashs: HTMLElement[];
  private $$aboutBg: HTMLElement;
  private $$link: HTMLLinkElement;
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
    this.$$link = document.getElementById('js-about-link') as HTMLLinkElement;

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

  public setContact(href: string): void {
    if (this.$$link && href) {
      this.$$link.href = href;
      this.$$link.innerText = href;
    }
  }
}
