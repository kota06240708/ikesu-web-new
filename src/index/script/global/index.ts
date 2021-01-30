import { sleep } from '../../../shared/scripts/sleep';
import smoothScroll from '../../../shared/scripts/smooth-scroll';
import { offsetTop } from '../../../shared/scripts/offset';

import { Mouse } from '../mouse';

class Global extends Mouse {
  private $$bg: HTMLElement;

  constructor() {
    super();
    this.$$bg = document.getElementById('js-bg-wrap');
  }

  protected get scrollTop(): number {
    return window.pageYOffset || document.documentElement.scrollTop;
  }

  protected get scrollMiddle(): number {
    const top = window.pageYOffset || document.documentElement.scrollTop;
    return top + window.innerHeight / 2;
  }

  protected get scrollBottom(): number {
    const top = window.pageYOffset || document.documentElement.scrollTop;
    return top + window.innerHeight;
  }

  public async bgClose(): Promise<void> {
    this.$$bg.classList.remove('open');

    await sleep();
  }

  public async bgOpen(): Promise<void> {
    this.$$bg.classList.add('open');

    await sleep();
  }

  public checkHashScroll(speed?: number): void {
    const urlHash = location.hash;

    if (urlHash) {
      const top = offsetTop(document.querySelector(urlHash));
      smoothScroll(top, speed ? speed : 0.6);
    }
  }
}

export default Global;
