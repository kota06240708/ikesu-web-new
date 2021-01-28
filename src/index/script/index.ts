import { Barba } from './barba';

import { projectRender } from '../../project/script';

(() => {
  window.addEventListener('DOMContentLoaded', () => {
    const barba = new Barba();

    projectRender();

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
        // プロジェクトトップのレンダー
        projectRender();

        console.log('最後');
      }
    });
  });
})();
