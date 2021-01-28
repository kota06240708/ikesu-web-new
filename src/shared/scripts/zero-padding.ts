/**
 * 0で埋める
 * @param {number} num ゼロ埋めしたい数字
 * @param {number} base 何桁にするか確認
 * @return {string}
 */
export const zeroPadding: (num: string, base?: number) => string = (
  num: string,
  base?: number
) => {
  const maxIndex = `${base ? base : 10}`.length;
  let counter = maxIndex - 1;
  let result = '';
  while (counter > 0) {
    result += '0';
    counter--;
  }
  return (result + num).slice(-maxIndex);
};
