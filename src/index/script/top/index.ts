import gsap from 'gsap';
import { makeArray } from '../../../shared/scripts/make-array';
import { gsapTo } from '../../../shared/scripts/gsap';

type TData = {
  bgWrap: HTMLElement;
  bgInner: HTMLElement;
  bg: HTMLElement;
  isCurrent: boolean;
};

type TImage = {
  image01: string;
  image02: string;
  image03: string;
};

export class Top {
  private $$topBgWrap: HTMLElement[];
  private data: TData[];

  constructor() {
    this.$$topBgWrap = makeArray(document.querySelectorAll('.js-top-kv-wrap'));
    this.data = [];
  }

  public setTopData({ image01, image02, image03 }: TImage): void {
    this.$$topBgWrap = makeArray(document.querySelectorAll('.js-top-kv-wrap'));

    if (!this.$$topBgWrap) {
      return;
    } else if (this.$$topBgWrap.length === 0) {
      return;
    }

    this.data = this.$$topBgWrap.map((r: HTMLElement, i: number) => {
      const isCurrent = !!(i === 0);

      if (isCurrent) {
        r.classList.add('current');
      }

      const bg = r.querySelector('.js-top-kv') as HTMLElement;
      switch (i) {
        case 0:
          bg.style.backgroundImage = `url(${image01})`;
          break;

        case 1:
          bg.style.backgroundImage = `url(${image02})`;
          break;

        case 2:
          bg.style.backgroundImage = `url(${image03})`;
          break;
      }

      return {
        bgWrap: r,
        bgInner: r.querySelector('.js-top-kv-inner'),
        bg,
        isCurrent
      };
    });
  }

  public async slide(): Promise<void> {
    if (!this.$$topBgWrap) {
      return;
    } else if (this.$$topBgWrap.length === 0) {
      return;
    }

    const currentIndex = this.data.findIndex((r: TData) => !!r.isCurrent);
    const nextIndex =
      this.data.length - 1 < currentIndex + 1 ? 0 : currentIndex + 1;

    // 次のスライドのクラスを付与
    this.data[nextIndex].bgWrap.classList.add('next');

    // 次のスライドを少しずらす
    gsap.set(this.data[nextIndex].bg, {
      x: 120,
      scale: 1.12
    });

    // 次のスライドのクラスを付与
    gsapTo(this.data[currentIndex].bgInner, {
      width: 0,
      duration: 1.2,
      ease: 'power2.inOut'
    });

    gsapTo(this.data[currentIndex].bg, {
      x: -100,
      duration: 1.2,
      ease: 'power2.inOut'
    });

    gsapTo(this.data[nextIndex].bg, {
      x: 0,
      duration: 1.4,
      ease: 'power2.inOut'
    });

    gsapTo(this.data[nextIndex].bg, {
      x: 0,
      duration: 1.4,
      scale: 1,
      ease: 'expo.Out'
    });

    await gsapTo(this.data[nextIndex].bgInner, {
      width: '100%',
      duration: 1.6,
      ease: 'power2.inOut'
    });

    this.data[currentIndex].bgWrap.classList.remove('current');
    this.data[currentIndex].isCurrent = false;
    this.data[nextIndex].bgWrap.classList.add('current');
    this.data[nextIndex].bgWrap.classList.remove('next');
    this.data[nextIndex].isCurrent = true;

    gsap.set(this.data[currentIndex].bgInner, {
      width: '100%'
    });
  }
}
