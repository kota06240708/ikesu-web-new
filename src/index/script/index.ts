import { Barba } from './barba';
import { Loading } from './Loading';
import { Text } from './text';
import { Header } from './header';
import { Top } from './top';
import Global from './global';

import { sleep } from '../../shared/scripts/sleep';

import { projectRender } from '../../project/script';
import { projectAllRender } from '../../project/all/script';
import { projectDetailRender, Detail } from '../../project/detail/script';
import { aboutRender, About } from '../../about/script';

// import Repository from './api';

(() => {
  window.addEventListener('DOMContentLoaded', async () => {
    await sleep(1500);

    // reactのレンダリング
    projectRender();
    projectAllRender();
    projectDetailRender();
    aboutRender();

    // reactのレンダリングを待たせる
    await sleep(500);

    const header = new Header();
    const barba = new Barba({ header });
    const loading = new Loading();
    const text = new Text();
    const global = new Global();
    const about = new About();
    const top = new Top();
    const detail = new Detail();

    const isTop: () => boolean = () => {
      const path = `${window.location.protocol}//${window.location.host}`;

      return !!(window.location.href.replace(path, '') === '/');
    };

    const isAbout: () => boolean = () => {
      return !!window.location.href.match('about');
    };

    // 文字列をラップ
    text.coating();

    // マウスのローディングを解除
    global.removeMouseLoading();

    // マウスイベント発火
    global.mouseMove();

    // マウス色を判定
    global.checkMouseColor(window.location.href);

    // ヘッダーの色を確認
    header.checkHeaderColor(window.location.href);

    // hash値の場所に移動
    global.checkHashScroll(0.1);

    //　hash値移動まで待たせる
    await sleep(200);

    // aboutのアニメーションデータをセット
    about.setData();
    about.active();

    // topのアニメーションの準備
    top.setTopData({
      image01: '/image/img_example_bg.png',
      image02: '/image/img_example_02.png',
      image03: '/image/img_bg.png'
    });

    // ローディング解除
    await loading.end();

    // init
    header.init();
    text.active();
    detail.open();

    // ハッシュスクロール発火
    about.onClickHashScroll();

    // スクロールイベント
    window.addEventListener('scroll', () => {
      text.active();
      about.active();
    });

    let timer = -1;

    const topAnimation = () => {
      top.slide();

      timer = window.setTimeout(() => topAnimation(), 5000);
    };

    if (isTop()) {
      window.setTimeout(() => topAnimation(), 1000);
    }

    // ページ遷移をここで全部統括管理
    barba.init({
      before() {
        // 最初
        console.log('最初');
      },
      async beforeLeave() {
        // 現在のページを離れる直前

        // イベントを削除
        about.removeHashScroll();

        // メニューが開いてない場合
        if (!header.isHeaderOpen) {
          header.addLoadingHeader();
          await global.bgOpen();
        }

        window.clearTimeout(timer);
      },
      async leave() {
        console.log('leave');
      },
      afterLeave() {
        // 現在のページを離れた直後

        if (!isAbout()) {
          scrollTo(0, 0);
        }

        detail.close();
      },
      beforeEnter() {
        // 次のページを表示する直前

        console.log('beforeEnter');
      },
      async enter() {
        console.log('enter');
      },
      async afterEnter() {
        // マウスの色を分岐
        global.checkMouseColor(barba.next);

        // ヘッダーの色を分岐
        header.checkHeaderColor(barba.next);

        console.log('afterEnter');
      },
      async after() {
        // reactのレンダリング
        projectRender();
        projectAllRender();
        projectDetailRender();
        aboutRender();

        // マウスイベントを初期化
        global.mouseRefresh();

        // hash値の場所に移動
        global.checkHashScroll(0.1);

        // topのアニメーションの準備
        top.setTopData({
          image01: '/image/img_example_bg.png',
          image02: '/image/img_example_02.png',
          image03: '/image/img_bg.png'
        });

        await sleep(100);

        // リンクを初期化
        barba.refresh();

        // ページ遷移アニメーション分岐
        if (!header.isHeaderOpen) {
          await global.bgClose();

          header.removeLoadingHeader();
        } else {
          await header.close();
        }

        if (isTop()) {
          window.setTimeout(() => topAnimation(), 1000);
        }

        about.setData();

        // スクロールアニメーション
        about.active();

        // ハッシュスクロール発火
        about.onClickHashScroll();

        text.coating();
        text.active();

        detail.open();
      }
    });
  });
})();
