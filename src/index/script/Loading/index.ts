import gsap from 'gsap';

import Global from '../global';

import { makeArray } from '../../../shared/scripts/make-array';
import { gsapTo } from '../../../shared/scripts/gsap';

export class Loading extends Global {
  private $$loader: HTMLElement;
  private $$loaderText: HTMLElement[];

  constructor() {
    super();

    this.$$loader = document.getElementById('js-loader-wrap');
    this.$$loaderText = makeArray(document.querySelectorAll('.js-loader-text'));
  }

  // ローディングの処理を完了。
  public end(): Promise<unknown> {
    return new Promise(async (resolve) => {
      await gsapTo(this.$$loaderText, {
        onStart: () => {
          this.$$loaderText.forEach((el: HTMLElement) =>
            el.classList.remove('loading')
          );
        },
        duration: 2,
        webkitFilter: `blur(${30}px)`,
        ease: 'power4.out'
      });

      gsap.to(this.$$loader, {
        display: 'none'
      });

      await this.bgClose();

      resolve('');
    });
  }
}
