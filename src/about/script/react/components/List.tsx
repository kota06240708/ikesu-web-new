import React, { FC, ReactElement } from 'react';

// ==========================================
// Type
// ==========================================

type TProps = {
  name: string;
  imgURL: string;
  role: string;
};

// ==========================================
// View
// ==========================================

const List: FC<TProps> = ({ name, role, imgURL }: TProps): ReactElement => {
  const isImage = !!(imgURL !== '');

  const image = isImage ? (
    <div
      className="about-member-list-image"
      style={{ backgroundImage: `url(${imgURL})` }}
    />
  ) : null;

  return (
    <li className="js-fade about-member-list">
      <div className="about-member-list-inner">
        <div className="about-member-list-image-wrap">
          <div className="about-member-list-image-inner">{image}</div>
        </div>
        <div
          className={`about-member-list-heading-wrap ${
            !isImage ? 'center' : ''
          }`}
        >
          <h3 className="about-member-list-heading-title">{role}</h3>
          <p className="about-member-list-heading-description">{name}</p>
        </div>
      </div>
    </li>
  );
};

export default List;
