import gsap from 'gsap';

/**
 * スムーススクロールでy座標まで
 * @param {number} y 移動する高さ
 */
const smoothscroll: (y: number, duration: number) => void = (
  y = 0,
  duration
) => {
  const HTML = document.getElementsByTagName('html')[0];
  const BODY = document.getElementsByTagName('body')[0];

  gsap.to([HTML, BODY], {
    duration: duration,
    scrollTop: y
  });
};

export default smoothscroll;
