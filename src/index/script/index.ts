import { Barba } from './barba';
import { Loading } from './Loading';
import { Text } from './text';
import { Header } from './header';
import Global from './global';

import { sleep } from '../../shared/scripts/sleep';

import { projectRender } from '../../project/script';
import { projectAllRender } from '../../project/all/script';
import { projectDetailRender } from '../../project/detail/script';
import { aboutRender, About } from '../../about/script';

// import Repository from './api';

(() => {
  window.addEventListener('DOMContentLoaded', async () => {
    const barba = new Barba();
    const loading = new Loading();
    const text = new Text();
    const header = new Header();
    const global = new Global();
    const about = new About();

    await sleep(1500);

    // reactのレンダリング
    projectRender();
    projectAllRender();
    projectDetailRender();
    aboutRender();

    await sleep(500);

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

    // aboutのアニメーションデータをセット
    about.setData();
    about.active();

    // ローディング解除
    await loading.end();

    // init
    header.init();
    text.active();

    // スクロールイベント
    window.addEventListener('scroll', () => {
      text.active();
      about.active();
    });

    // ページ遷移をここで全部統括管理
    barba.init({
      before() {
        // 最初
        console.log('最初');
      },
      async beforeLeave() {
        // 現在のページを離れる直前

        // メニューが開いてない場合
        if (!header.isHeaderOpen) {
          header.addLoadingHeader();
          await global.bgOpen();
        }
      },
      async leave() {
        console.log('leave');
      },
      afterLeave() {
        // 現在のページを離れた直後

        console.log('afterLeave');
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

        // イベントを初期化
        global.mouseRefresh();

        // ページ遷移アニメーション分岐
        if (!header.isHeaderOpen) {
          await global.bgClose();

          header.removeLoadingHeader();
        } else {
          await header.close();
        }

        about.setData();
        about.active();

        text.coating();
        text.active();
      }
    });
  });
})();
