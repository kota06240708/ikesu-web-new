export const getUrlQueries: () => { [key: string]: string } = (): {
  [key: string]: string;
} | null => {
  const queryStr = window.location.search.slice(1); // 文頭?を除外
  const queries: { [key: string]: string } = {};

  // クエリがない場合は空のオブジェクトを返す
  if (!queryStr) {
    return queries;
  }

  // クエリ文字列を & で分割して処理
  queryStr.split('&').forEach((queryStr: string) => {
    const queryArr: string[] = queryStr.split('=');
    queries[queryArr[0]] = queryArr[1];
  });

  return queries;
};
