import React, { FC, ReactElement, useEffect } from 'react';

import List from './components/List';

// ==========================================
// Type
// ==========================================

// ==========================================
// View
// ==========================================

// Pageを新しく作る際はこちらのテンプレートのコードをコピペしてください。

const Template: FC = (): ReactElement => {
  useEffect(() => {
    console.log('発火 ===================================>');
  }, []);

  return (
    <div className="about-member-wrap">
      <div className="about-member-inner">
        <div className="about-member-contents">
          <div className="about-member-title">
            <div className="sw-title black">founder</div>
          </div>
          <div className="about-member-contents-inner">
            <div className="about-member-master-heading-wrap">
              <div className="about-member-master-image-wrap">
                <img
                  className="about-member-master-image"
                  src="/about/image/img_example.png"
                  alt="Hideoki Ilesu"
                />
              </div>
              <p className="about-member-master-image-text">
                Project Manager / Director
                <br />
                Hideoki Ikesu
              </p>
            </div>
            <p className="about-member-master-heading-description">
              I am a director for projects such as digital marketing, inbound
              marketing, event management, movie creation. All of my projects
              was done not only in Singapore and Japan but in Kuala Lumpur,
              Penang, Ho Chi Minh, Manila, Taipei. I found it very comfortable
              to work in a multi-cultural circumstance with people from many
              different countries. My ambition is that I would be one of the
              bridges to connect Japan with different countries by the power of
              design & creative.  <br />
              <br />
              関西とシンガポールにて、ワンストップで幅広くデザイン制作を行う総合デザイン会社に企画営業兼ディレクターとして
              従事しました。新規顧客の開拓から制作ディレクション(企業 CI
              開発や基幹システム開発、
              広告デザイン、映像)、マーケティング、アクセス解析など、クリエティブ分野に関して幅広い業務を担当してきました。
              現在は、東京を拠点し、最新センシング技術や
              AI、AR、ドローンなどを活用したデジタルコミュニケーションを得意とする株式会社
              イメージソースに在職し、プロジェクトマネージャー兼ディレクターを担当しております。
              独自のソフトウェア、ハードウェアの開発や、空間を使ったデジタルインスタレーションなども経験し、さらなるディレクションの幅を広げております。
            </p>
          </div>
        </div>
        <div className="about-member-contents">
          <div className="about-member-title">
            <div className="sw-title black">partners</div>
          </div>
          <ul className="about-member-list-wrap">
            <List
              imgURL="/about/image/img_example.png"
              role="Interaction Designer"
              name="Shogo Tabuchi"
            />
            <List
              imgURL="/about/image/img_example.png"
              role="Interaction Designer"
              name="Shogo Tabuchi"
            />
            <List
              imgURL="/about/image/img_example.png"
              role="Interaction Designer"
              name="Shogo Tabuchi"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Template;
