import React, { FC, ReactElement } from 'react';

import { zeroPadding } from '../../../../shared/scripts/zero-padding';

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
    <li className="project-contents">
      <a
        className="project-contents-link"
        href={href}
        style={{ backgroundImage: `url(${imgURL})` }}
      >
        <div className="project-contents-link-inner">
          <div className="project-contents-heading">
            <div className="project-contents-label-wrap">
              <span className="project-contents-label-number">{`${zeroPadding(
                String(index)
              )} -`}</span>
              <p className="project-contents-label">{type}</p>
            </div>
            <p className="project-contents-heading-text">{`/ ${role}`}</p>
          </div>
          <h2 className="project-contents-name">{title}</h2>
        </div>
      </a>
    </li>
  );
};

export default List;
