import { sleep } from '../../../shared/scripts/sleep';

class Global {
  private $$bg: HTMLElement;

  constructor() {
    this.$$bg = document.getElementById('js-bg-wrap');
  }

  protected async bgClose(): Promise<void> {
    this.$$bg.classList.remove('open');

    await sleep();
  }

  protected async bgOpen(): Promise<void> {
    this.$$bg.classList.add('open');

    await sleep();
  }
}

export default Global;
