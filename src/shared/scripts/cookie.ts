type TSet = {
  key: string;
  value: string | number;
  time?: number;
};

export default {
  set: (r: TSet): void => {
    const { key, value } = r;

    document.cookie = `${key}=${value}; max-age=${r.time | 259200}`;
  },
  get: (): { [key: string]: string } | null => {
    const result: { [key: string]: string } = {};

    const r = document.cookie.split(';');

    console.log(document.cookie);

    if (!document.cookie) {
      return result;
    }

    r.forEach((value) => {
      //cookie名と値に分ける
      const content = value.split('=');

      result[content[0].replace(/\s+/g, '')] = content[1];
    });

    return result;
  }
};
