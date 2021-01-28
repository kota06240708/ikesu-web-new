import React, { FC, ReactElement } from 'react';

import { nl2br } from '../../../../../shared/scripts/nl2br';

// ==========================================
// Type
// ==========================================

type TProps = {
  description: string;
  imgURL: string;
  imagePosition: 'normal' | 'left' | 'right';
};

// ==========================================
// View
// ==========================================

const Contents: FC<TProps> = ({
  description,
  imagePosition,
  imgURL
}: TProps): ReactElement => {
  const descriptionEl =
    description !== '' ? (
      <p className="detail-contents-text">{nl2br(description)}</p>
    ) : null;

  return (
    <div className={`detail-contents ${imagePosition}`}>
      <div className="detail-contents-image-wrap">
        <img className="detail-contents-image" src={imgURL} alt="" />
      </div>
      {descriptionEl}
    </div>
  );
};

export default Contents;
