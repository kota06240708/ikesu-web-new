import { Barba } from './barba';
import { Loading } from './Loading';
import { Text } from './text';
import { Header } from './header';

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

    await sleep(2000);

    // 文字列をラップ
    text.coating();

    // reactのレンダリング
    projectRender();
    projectAllRender();
    projectDetailRender();
    aboutRender();

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
      beforeLeave() {
        // 現在のページを離れる直前

        console.log('現在のページを離れる直前');
      },
      async leave() {
        // 現在のページを離れる時
        await new Promise((resolve) => setTimeout(resolve, 1000));
      },
      afterLeave() {
        // 現在のページを離れた直後

        console.log('現在のページを離れた直後');
      },
      beforeEnter() {
        // 次のページを表示する直前

        console.log('次のページを表示する直前');
      },
      async enter() {
        // 現在のページを離れる時
        await new Promise((resolve) => {
          return setTimeout(resolve, 1000);
        });
      },
      afterEnter() {
        // 次のページが表示された直後

        console.log('次のページが表示された直後');
      },
      after() {
        // reactのレンダリング
        projectRender();
        projectAllRender();
        projectDetailRender();
        aboutRender();

        console.log('最後');
      }
    });
  });
})();
