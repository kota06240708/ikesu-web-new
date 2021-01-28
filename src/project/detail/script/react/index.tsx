import React, { FC, ReactElement, useEffect } from 'react';

import Contents from './components/Contents';

// ==========================================
// Type
// ==========================================

// ==========================================
// View
// ==========================================

const Template: FC = (): ReactElement => {
  useEffect(() => {
    console.log('発火 ===================================>');
  }, []);

  return (
    <div className="detail-wrap">
      <div className="detail-inner">
        <div className="detail-kv-wrap">
          <div className="detail-bg-wrap">
            <div className="detail-bg-inner">
              <div
                className="detail-bg"
                style={{ backgroundImage: 'url(/image/img_example_bg.png)' }}
              ></div>
            </div>
          </div>
          <div className="detail-kv">
            <div className="detail-kv-heading">
              <div className="detail-kv-label-wrap">
                <span className="detail-kv-label-number">01 -</span>
                <p className="detail-kv-label">INSTALLATION</p>
              </div>
              <p className="detail-kv-heading-text">
                / PROJECT MANAGEMENT & DIRECTION
              </p>
            </div>
            <h2 className="detail-kv-heading-name">PROJECT NAME</h2>
          </div>
        </div>
        <div className="detail-heading-wrap">
          <p className="detail-heading-text">
            2018年9月に行われた。新型Audi A8/A7 Sportback
            <br />
            の日本発売を記念したプレミアムイベ ント。
            <br />
            アウディが持つ、「モダンプレミアム」な世界を演出するため、
            <br />
            インタラクティブなデジタルコンテンツの企画、制作を担当しました。
          </p>
        </div>
      </div>
      <div className="detail-video-wrap">
        <div className="detail-video-inner">
          <iframe
            className="detail-video"
            width="640"
            height="360"
            src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&amp;origin=http://example.com"
          />
        </div>
        <p className="detail-video-text">
          最新テクノロジーを搭載した Audi A8 /
          A7の革新的な世界、モダンプレミアムの世界観を
          体験できる本イベントでは、
          ワープしていくような激しい光の線が音とともに来場者をSpace for
          Progressの世界へい ざなう Cube Entrance。
        </p>
      </div>
      <div className="detail-contents-wrap">
        <Contents
          imgURL="/image/img_example_bg.png"
          imagePosition="right"
          description="最新テクノロジーを搭載した Audi A8 /
          A7の革新的な世界、モダンプレミアムの世界観を
          体験できる本イベントでは、
          ワープしていくような激しい光の線が音とともに来場者をSpace for
          Progressの世界へい ざなう Cube Entrance。"
        />
        <Contents
          imgURL="/image/img_example_bg.png"
          imagePosition="left"
          description="最新テクノロジーを搭載した Audi A8 /
          A7の革新的な世界、モダンプレミアムの世界観を
          体験できる本イベントでは、
          ワープしていくような激しい光の線が音とともに来場者をSpace for
          Progressの世界へい ざなう Cube Entrance。"
        />
        <Contents
          imgURL="/image/img_example_bg.png"
          imagePosition="normal"
          description=""
        />
      </div>
      <div className="detail-credit-wrap">
        <div className="detail-credit-inner">
          <div className="detail-credit">
            <h3 className="detail-credit-title">Client : </h3>
            <p className="detail-credit-text">
              Audi Japan KK | アウディジャパン株式会社
            </p>
          </div>
          <div className="detail-credit">
            <h3 className="detail-credit-title">Category : </h3>
            <p className="detail-credit-text">Digital Installation</p>
          </div>
          <div className="detail-credit">
            <h3 className="detail-credit-title">Product field：</h3>
            <p className="detail-credit-text">
              企画・システム設計・デザイン・アプリケーション開発
            </p>
          </div>
          <div className="detail-credit">
            <h3 className="detail-credit-title">Product field：</h3>
            <p className="detail-credit-text">
              PM/ディレクター1名、テクニカルディレクター1名、デザイナー2名、サウンドクリエーター1名、フロントエンドエンジニア1名、システムエンジニア4名
            </p>
          </div>
        </div>
      </div>
      <div className="detail-nav-wrap">
        <div className="detail-nav-inner">
          <div className="detail-nav-contents detail-nav-link-wrap--left">
            <a className="detail-nav-link-wrap" href="#">
              <div className="detail-nav-link-inner">
                <div className="detail-nav-link">
                  <span className="sw-line"></span>
                </div>
              </div>
            </a>
          </div>
          <div className="detail-nav-contents detail-nav-link-wrap--center">
            <a className="detail-nav-link-text" href="#">
              project list
            </a>
          </div>
          <div className="detail-nav-contents detail-nav-link-wrap--right">
            <a className="detail-nav-link-wrap" href="#">
              <div className="detail-nav-link-inner">
                <div className="detail-nav-link">
                  <span className="sw-line"></span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template;
