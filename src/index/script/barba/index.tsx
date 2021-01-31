import barba, { ISchemaPage } from '@barba/core';
import barbaPrefetch from '@barba/prefetch';

import Global from '../global';
import { Header } from '../header';

import { makeArray } from '../../../shared/scripts/make-array';

type TInit = {
  before?: () => void;
  beforeLeave?: () => void;
  leave?: () => void;
  afterLeave?: () => void;
  beforeEnter?: () => void;
  enter?: () => void;
  afterEnter?: () => void;
  after?: () => void;
};

type TPreload = {
  header: Header;
};

export class Barba extends Global {
  private isTransition: boolean;
  private $$links: HTMLElement[];
  private getPrevURL: string;
  private getNextURL: string;

  private header: Header;

  constructor(preload: TPreload) {
    super();
    this.isTransition = false;
    this.$$links = makeArray(document.querySelectorAll('a[href]'));

    this.header = preload.header;

    this.onClickLink = this.onClickLink.bind(this);
  }

  // 初期発火
  public init({
    before,
    beforeLeave,
    leave,
    afterLeave,
    beforeEnter,
    enter,
    afterEnter,
    after
  }: TInit): void {
    this.onListener();

    /* eslint-disable @typescript-eslint/no-this-alias */
    const _this = this;

    barba.use(barbaPrefetch);
    barba.init({
      transitions: [
        {
          before() {
            before ? before() : null;
          },
          async beforeLeave() {
            beforeLeave ? await beforeLeave() : null;
          },
          async leave() {
            leave ? await leave() : null;
          },
          afterLeave() {
            afterLeave ? afterLeave() : null;
          },
          beforeEnter({ next }) {
            // 次のページを表示する直前
            _this.replaceHeadTags(next);

            beforeEnter ? beforeEnter() : null;
          },
          async enter() {
            enter ? await enter() : null;
          },
          async afterEnter() {
            // 次のページが表示された直後

            afterEnter ? await afterEnter() : null;
          },
          async after() {
            // 最後
            after ? await after() : null;
          }
        }
      ]
    });
  }

  // イベントリスナー
  private onListener(): void {
    this.$$links.forEach((link: HTMLElement) => {
      link.addEventListener('click', this.onClickLink);
    });
  }

  // イベント削除
  private onRemoveListener(): void {
    this.$$links.forEach((link: HTMLElement) => {
      link.removeEventListener('click', this.onClickLink);
    });
  }

  // イベント再発火
  public refresh(): void {
    this.onRemoveListener();

    this.$$links = makeArray(document.querySelectorAll('a[href]'));
    this.onListener();
  }

  // 遷移する前のURLを取得
  public get prev(): string {
    return this.getPrevURL;
  }

  // 遷移先のURLを取得
  public get next(): string {
    return this.getNextURL;
  }

  // 同じリンクの場合発火させない
  private onClickLink(e: MouseEvent): void {
    const el = e.currentTarget as HTMLLinkElement;

    this.getPrevURL = window.location.href;
    this.getNextURL = el.href;

    if (el.href.split('#')[0] === window.location.href.split('#')[0]) {
      this.header.close();
    }

    if (el.href === window.location.href) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
  }

  // head更新処理
  private replaceHeadTags(target: ISchemaPage): void {
    const head = document.head;
    const targetHead = target.html.match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0];
    const newPageHead = document.createElement('head');
    newPageHead.innerHTML = targetHead;
    const removeHeadTags = [
      "meta[name='keywords']",
      "meta[name='description']",
      "meta[property^='fb']",
      "meta[property^='og']",
      "meta[name^='twitter']",
      "meta[name='robots']",
      'meta[itemprop]',
      'link[itemprop]',
      "link[rel='prev']",
      "link[rel='next']",
      "link[rel='canonical']"
    ].join(',');
    const headTags = [...makeArray(head.querySelectorAll(removeHeadTags))];
    headTags.forEach((item) => {
      head.removeChild(item);
    });
    const newHeadTags = [
      ...makeArray(newPageHead.querySelectorAll(removeHeadTags))
    ];
    newHeadTags.forEach((item) => {
      head.appendChild(item);
    });
  }
}
