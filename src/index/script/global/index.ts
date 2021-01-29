import { sleep } from '../../../shared/scripts/sleep';

class Global {
  private $$bg: HTMLElement;

  constructor() {
    this.$$bg = document.getElementById('js-bg-wrap');
  }

  protected get scrollTop(): number {
    return window.pageYOffset || document.documentElement.scrollTop;
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
}

export default Global;
