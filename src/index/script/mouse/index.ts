import { makeArray } from '../../../shared/scripts/make-array';

type TColor = 'white' | 'black';

export class Mouse {
  private $$body: HTMLElement;
  private $$mouse: HTMLElement;
  private $$hovers: HTMLElement[];

  constructor() {
    this.$$body = document.getElementById('js-body');
    this.$$mouse = document.getElementById('js-mouse');
    this.$$hovers = makeArray(document.querySelectorAll('.js-hover'));
  }

  // ローディング終了
  public removeMouseLoading(): void {
    this.$$body.classList.remove('loading');
    this.$$mouse.classList.remove('hidden');
  }

  // マウスの色を更新
  public updateMouseColor(color: TColor): void {
    this.$$mouse.classList.remove('white');
    this.$$mouse.classList.remove('black');
    this.$$mouse.classList.add(color);
  }

  // マウスのアニメーション発火
  public mouseMove(): void {
    document.addEventListener('mousemove', (e: MouseEvent) => {
      this.$$mouse.style.transform = `translate(${
        e.clientX - this.$$mouse.clientWidth / 2
      }px,  ${e.clientY - this.$$mouse.clientHeight / 2}px)`;
    });

    if (this.$$hovers.length !== 0) {
      this.$$hovers.forEach((r: HTMLElement) => {
        r.addEventListener('mouseover', () => {
          this.$$mouse.classList.add('hover');
        });

        r.addEventListener('mouseout', () => {
          this.$$mouse.classList.remove('hover');
        });
      });
    }
  }
}
