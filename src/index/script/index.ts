import { Barba } from './barba';
import { Loading } from './Loading';
import { Text } from './text';
import { Header } from './header';
import Global from './global';

import { sleep } from '../../shared/scripts/sleep';

import { projectRender } from '../../project/script';
import { projectAllRender } from '../../project/all/script';
import { projectDetailRender } from '../../project/detail/script';
import { aboutRender } from '../../about/script';

// import Repository from './api';

(() => {
  window.addEventListener('DOMContentLoaded', async () => {
    const barba = new Barba();
    const loading = new Loading();
    const text = new Text();
    const header = new Header();
    const global = new Global();

    await sleep(2000);

    // 文字列をラップ
    text.coating();

    // reactのレンダリング
    projectRender();
    projectAllRender();
    projectDetailRender();
    aboutRender();

    // マウスのローディングを解除
    global.removeMouseLoading();
    global.mouseMove();

    // ローディング解除
    await loading.end();

    // init
    header.init();
    text.active();

    window.addEventListener('scroll', () => {
      text.active();
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
        // 次のページが表示された直後

        console.log('afterEnter');
      },
      async after() {
        // reactのレンダリング
        projectRender();
        projectAllRender();
        projectDetailRender();
        aboutRender();

        if (!header.isHeaderOpen) {
          await global.bgClose();

          header.removeLoadingHeader();
        } else {
          await header.close();
        }
      }
    });
  });
})();
