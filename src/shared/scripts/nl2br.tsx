import React from 'react';

export const nl2br: (str: string) => (string | JSX.Element)[] = (
  str: string
) => {
  const regex = /(\n)/g;
  return str.split(regex).map(function (line, i: number) {
    if (line.match(regex)) {
      return <br key={i} />;
    } else {
      return line;
    }
  });
};
