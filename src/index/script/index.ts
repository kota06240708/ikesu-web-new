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
    const loading = new Loading();
    const text = new Text();
    const header = new Header();
    const barba = new Barba({ header });
    const global = new Global();
    const about = new About();

    await sleep(1500);

    // reactのレンダリング
    projectRender();
    projectAllRender();
    projectDetailRender();
    aboutRender();

    // reactのレンダリングを待たせる
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

    // hash値の場所に移動
    global.checkHashScroll(0.1);

    //　hash値移動まで待たせる
    await sleep(200);

    // aboutのアニメーションデータをセット
    about.setData();
    about.active();

    // ローディング解除
    await loading.end();

    // init
    header.init();
    text.active();

    // ハッシュスクロール発火
    about.onClickHashScroll();

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

        // イベントを削除
        about.removeHashScroll();

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

        // マウスイベントを初期化
        global.mouseRefresh();

        // hash値の場所に移動
        global.checkHashScroll(0.1);

        await sleep(100);

        // ページ遷移アニメーション分岐
        if (!header.isHeaderOpen) {
          await global.bgClose();

          header.removeLoadingHeader();
        } else {
          await header.close();
        }

        about.setData();

        // スクロールアニメーション
        about.active();

        // ハッシュスクロール発火
        about.onClickHashScroll();

        text.coating();
        text.active();
      }
    });
  });
})();
