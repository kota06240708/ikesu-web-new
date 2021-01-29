import { makeArray } from '../../../shared/scripts/make-array';
import { offsetTop } from '../../../shared/scripts/offset';

import Global from '../global';

type TData = {
  el: HTMLElement;
  top: number;
  isActive: boolean;
};

export class Text extends Global {
  private titles: HTMLElement[];
  private data: TData[];

  constructor() {
    super();
    this.titles = makeArray(document.querySelectorAll('.js-title'));
    this.data = [];
  }

  // 文字列をコーティング
  public coating(): void {
    if (!this.titles) {
      return;
    } else if (this.titles.length === 0) {
      return;
    }

    this.titles.forEach((r: HTMLElement, i: number) => {
      // brで文字列を分解
      const reg = new RegExp(`<(.*?)>`);
      const txtArr = r.innerHTML
        .split(reg)
        .filter((r: string) => !/^br/i.test(r));

      // 既存の文字列を削除
      r.innerHTML = '';

      // 文字一つ一つにspanをラップして表示
      const result = txtArr
        .map((rr: string) => {
          const splite = rr.split('').map((text) => {
            if (text === ' ') {
              text = '&nbsp;';
            }
            return `<span class="js-text">${text}</span>`;
          });

          return splite;
        })
        .map((rr: string[]) => rr.join(''));

      result.forEach(
        (txt: string) =>
          (r.innerHTML += `<div class="js-text-wrap">${txt}</div>`)
      );

      // アニメーションで使うデータをセット
      this.data[i] = {
        el: r,
        top: offsetTop(r),
        isActive: false
      };
    });
  }

  // タイトルの文字アニメーション
  public active(): void {
    if (this.data.length === 0) {
      return;
    }

    this.data.forEach((r: TData) => {
      const { el, top, isActive } = r;

      if (top < this.scrollBottom && !isActive) {
        r.isActive = true;

        const texts = makeArray(el.querySelectorAll('.js-text-wrap'));
        texts.forEach((text: HTMLElement) => text.classList.add('active'));
      }
    });
  }
}
