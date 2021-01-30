import { makeArray } from '../../../shared/scripts/make-array';

type TColor = 'white' | 'black';

export class Mouse {
  public $$body: HTMLElement;
  private $$mouse: HTMLElement;
  private $$hovers: HTMLElement[];

  constructor() {
    this.$$body = document.getElementById('js-body');
    this.$$mouse = document.getElementById('js-mouse');
    this.$$hovers = makeArray(document.querySelectorAll('.js-hover'));

    this.onMousemove = this.onMousemove.bind(this);
    this.onMouseover = this.onMouseover.bind(this);
    this.onMouseout = this.onMouseout.bind(this);
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

  // イベントを初期化
  public mouseRefresh(): void {
    this.$$hovers = makeArray(document.querySelectorAll('.js-hover'));

    this.removeMouseMove();
    this.mouseMove();
  }

  // マウスのアニメーション発火
  public mouseMove(): void {
    document.addEventListener('mousemove', this.onMousemove);

    if (this.$$hovers.length !== 0) {
      this.$$hovers.forEach((r: HTMLElement) => {
        r.addEventListener('mouseover', this.onMouseover);

        r.addEventListener('mouseout', this.onMouseout);
      });
    }
  }

  // マウスイベント削除
  private removeMouseMove(): void {
    document.removeEventListener('mousemove', this.onMousemove);

    if (this.$$hovers.length !== 0) {
      this.$$hovers.forEach((r: HTMLElement) => {
        r.removeEventListener('mouseover', this.onMouseover);

        r.removeEventListener('mouseout', this.onMouseout);
      });
    }
  }

  private onMousemove(e: MouseEvent): void {
    this.$$mouse.style.transform = `translate(${
      e.clientX - this.$$mouse.clientWidth / 2
    }px,  ${e.clientY - this.$$mouse.clientHeight / 2}px)`;
  }

  private onMouseover(): void {
    this.$$mouse.classList.add('hover');
  }

  private onMouseout(): void {
    this.$$mouse.classList.remove('hover');
  }

  // urlでマウスの色を分岐
  public checkMouseColor(url: string): void {
    const path = `${window.location.protocol}//${window.location.host}`;

    const isTop = !!(url.replace(path, '') === '/');
    const isProject = !!(
      url.indexOf('project') !== -1 && url.indexOf('all') === -1
    );

    // マウスの色を分岐
    const isWhite = isTop || isProject;

    if (isWhite) {
      this.updateMouseColor('white');
    } else {
      this.updateMouseColor('black');
    }
  }
}
