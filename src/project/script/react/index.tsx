import React, { FC, ReactElement, useState } from 'react';

import List from './components/List';

import { TAllData, TProduct } from '../../../index/script/api';

// ==========================================
// Type
// ==========================================

type TProps = {
  data: TAllData;
};

// ==========================================
// View
// ==========================================

// Pageを新しく作る際はこちらのテンプレートのコードをコピペしてください。

const Template: FC<TProps> = ({ data }: TProps): ReactElement => {
  const [index, setIndex] = useState<number>(0);

  const { products } = data;
  const { contents } = products;

  const bg = contents.map((r: TProduct, i: number) => {
    const { image } = r;
    return (
      <div
        key={i}
        className={`project-bg ${index !== i ? 'hidden' : ''}`}
        style={{ backgroundImage: `url(${image.url})` }}
      />
    );
  });

  const list = contents.map((r: TProduct, i: number) => {
    const { title, role, type, id, image } = r;
    return (
      <List
        key={i}
        onHover={() => setIndex(i)}
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
    <div className="project-wrap">
      <div className="project-bg-wrap">
        <div className="project-bg-inner">{bg}</div>
      </div>
      <div className="project-inner">
        <div className="project-heading">
          <div className="project-heading-title">
            <div className="sw-title black">PROJECTS</div>
          </div>
          <p className="project-heading-label">
            Take a look at what we’ve done.
          </p>
          <p className="project-heading-description">
            I have been involved in digital installation, hardware development,
            AR, Web development, AI and so on as a project manger.
          </p>
        </div>
        <ul className="project-contents-wrap">{list}</ul>
      </div>
    </div>
  );
};

export default Template;
