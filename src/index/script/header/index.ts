import gsap from 'gsap';
import { sleep } from '../../../shared/scripts/sleep';
import { makeArray } from '../../../shared/scripts/make-array';
import Global from '../global';
import { gsapTo } from '../../../shared/scripts/gsap';

export class Header extends Global {
  private isOpen: boolean;
  private isAnimation: boolean;
  private isHover: boolean;

  private $$headerWrap: HTMLElement;
  private $$headerInner: HTMLElement;
  private $$toggle: HTMLElement;
  private $$toggleLines: HTMLElement[];
  private $$nav: HTMLElement;
  private $$navLists: HTMLElement[];

  constructor() {
    super();

    this.$$headerWrap = document.getElementById('js-header-wrap');
    this.$$headerInner = this.$$headerWrap.querySelector(
      '.js-header-inner'
    ) as HTMLElement;
    this.$$toggle = document.getElementById('js-toggle-wrap');
    this.$$toggleLines = makeArray(
      this.$$toggle.querySelectorAll('.js-toggle')
    );
    this.$$nav = document.getElementById('js-nav-wrap');
    this.$$navLists = makeArray(this.$$nav.querySelectorAll('.js-nav'));

    this.isAnimation = false;
    this.isHover = false;
  }

  public init(): void {
    this.removeLoadingHeader();
    this.onListener();
  }

  public disableHeader(): void {
    this.$$headerWrap.classList.add('disable');
  }

  public displayHeader(): void {
    this.$$headerWrap.classList.remove('disable');
  }

  public addLoadingHeader(): void {
    this.$$headerWrap.classList.add('loading');
  }

  public removeLoadingHeader(): void {
    this.$$headerWrap.classList.remove('loading');
  }

  private onListener(): void {
    this.$$toggle.addEventListener('click', () => {
      this.isOpen ? this.close() : this.open();
    });

    this.$$toggle.addEventListener('mouseover', () => {
      this.onToggleHover();
    });
  }

  private async onToggleHover(): Promise<void> {
    if (this.isHover) {
      return;
    }

    this.isHover = true;

    await gsapTo(this.$$toggleLines, {
      duration: 0.2,
      x: '100%',
      stagger: 0.1
    });

    gsap.set(this.$$toggleLines, {
      x: '-100%'
    });

    await gsapTo(this.$$toggleLines, {
      duration: 0.2,
      x: 0,
      stagger: 0.1
    });

    this.isHover = false;
  }

  // メニュー非表示
  public async close(): Promise<void> {
    if (this.isAnimation) {
      return;
    }

    this.isAnimation = true;

    this.$$nav.classList.remove('open');

    this.isOpen = false;
    this.$$headerInner.classList.remove('open');

    await this.closeNav();

    await this.bgClose();

    this.isAnimation = false;
  }

  // メニュー表示
  public async open(): Promise<void> {
    if (this.isAnimation) {
      return;
    }

    this.isAnimation = true;

    this.isOpen = true;
    this.$$headerInner.classList.add('open');

    this.bgOpen();

    await sleep(500);

    await this.openNav();

    this.isAnimation = false;
  }

  public get getIsOpen(): boolean {
    return this.isOpen;
  }

  private openNav(): Promise<void> {
    return new Promise(async (resolve) => {
      gsap.to(this.$$nav, {
        opacity: 1,
        duration: 0.2
      });

      gsap.set(this.$$navLists, {
        opacity: 0,
        x: -200
      });

      await gsapTo(this.$$navLists, {
        x: 0,
        opacity: 1,
        duration: 0.4,
        stagger: 0.05
      });

      this.$$nav.classList.add('open');

      resolve();
    });
  }

  private closeNav(): Promise<void> {
    return new Promise(async (resolve) => {
      gsap.to(this.$$nav, {
        opacity: 0,
        duration: 0.3
      });

      gsapTo(this.$$navLists, {
        x: window.innerWidth,
        duration: 0.6
      });

      await sleep(400);

      this.$$nav.classList.remove('open');

      resolve();
    });
  }

  public get isHeaderOpen(): boolean {
    return this.isOpen;
  }
}
