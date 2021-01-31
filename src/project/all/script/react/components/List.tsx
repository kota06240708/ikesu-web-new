import React, { FC, ReactElement } from 'react';

import { zeroPadding } from '../../../../../shared/scripts/zero-padding';

// ==========================================
// Type
// ==========================================

type TProps = {
  title: string;
  index: number;
  role: string;
  type: string;
  imgURL: string;
  href: string;
};

// ==========================================
// View
// ==========================================

const List: FC<TProps> = ({
  title,
  index,
  imgURL,
  href,
  role,
  type
}: TProps): ReactElement => {
  return (
    <li className="js-fade all-contents">
      <a className="js-hover all-contents-link" href={href}>
        <div className="all-contents-image-wrap">
          <div
            className="all-contents-image"
            style={{ backgroundImage: `url(${imgURL})` }}
          ></div>
        </div>
        <div className="all-contents-label-wrap">
          <span className="all-contents-label-number">{`${zeroPadding(
            String(index)
          )} -`}</span>
          <p className="all-contents-label">{`${type} / ${role}`}</p>
        </div>
        <h3 className="all-contents-text">{title}</h3>
      </a>
    </li>
  );
};

export default List;
