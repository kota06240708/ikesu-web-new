export const sleep: (msec?: number) => Promise<unknown> = (msec = 1000) =>
  new Promise((resolve) => setTimeout(resolve, msec));
