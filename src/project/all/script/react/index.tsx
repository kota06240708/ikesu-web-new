import React, { FC, ReactElement } from 'react';

import List from './components/List';

import { TAllData, TProduct } from '../../../../index/script/api';

// ==========================================
// Type
// ==========================================

type TProps = {
  data: TAllData;
};

// ==========================================
// View
// ==========================================

const Template: FC<TProps> = ({ data }: TProps): ReactElement => {
  const { products } = data;
  const { contents } = products;

  const list = contents.map((r: TProduct, i: number) => {
    const { title, role, type, id, image } = r;
    return (
      <List
        key={i}
        title={title}
        role={role}
        index={i}
        type={type[0]}
        href={`/project/detail/?id=${id}`}
        imgURL={image.url}
      />
    );
  });

  return (
    <div className="all-wrap">
      <div className="all-inner">
        <div className="all-heading">
          <div className="all-heading-title">
            <div className="js-title sw-title black">ALL CREATIVE PROJECTS</div>
          </div>
          <p className="js-fade all-heading-description">
            I have been involved in digital installation, hardware development,
            AR,
            <br className="all-newline-pc" /> Web development, AI and so on as a
            project manger.
          </p>
        </div>
        <ul className="all-contents-wrap">{list}</ul>
      </div>
    </div>
  );
};

export default Template;
