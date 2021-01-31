import React, { FC, ReactElement, useEffect } from 'react';

import List from './components/List';

import { TAllData, TMember } from '../../../index/script/api';

import { nl2br } from '../../../shared/scripts/nl2br';

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
  useEffect(() => {
    console.log('発火 ===================================>', data);
  }, []);

  const { master, members } = data;

  const member = members.contents.map((r: TMember, i: number) => {
    const { image, role, name } = r;

    return (
      <List key={i} imgURL={image ? image.url : ''} role={role} name={name} />
    );
  });

  return (
    <div className="about-member-wrap">
      <div className="about-member-inner">
        <div className="about-member-contents">
          <div className="about-member-title">
            <div className="js-title sw-title black">founder</div>
          </div>
          <div className="about-member-contents-inner">
            <div className="about-member-master-heading-wrap">
              <div className="about-member-master-image-wrap">
                <img
                  className="about-member-master-image"
                  src={master.image.url}
                  alt="Hideoki Ilesu"
                />
              </div>
              <p className="js-fade about-member-master-image-text">
                {nl2br(master.role)}
                <br />
                {nl2br(master.name)}
              </p>
            </div>
            <p className="js-fade about-member-master-heading-description">
              {nl2br(master.description)}
            </p>
          </div>
        </div>
        <div className="about-member-contents">
          <div className="about-member-title">
            <div className="js-title sw-title black">partners</div>
          </div>
          <ul className="about-member-list-wrap">{member}</ul>
        </div>
      </div>
    </div>
  );
};

export default Template;
