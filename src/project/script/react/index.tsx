import React, { FC, ReactElement, useState } from 'react';

import List from './components/List';

// ==========================================
// Type
// ==========================================

// ==========================================
// View
// ==========================================

// Pageを新しく作る際はこちらのテンプレートのコードをコピペしてください。

const Template: FC = (): ReactElement => {
  const [index, setIndex] = useState<number>(0);

  return (
    <div className="project-wrap">
      <div className="project-bg-wrap">
        <div className="project-bg-inner">
          <div
            className={`project-bg ${index !== 0 ? 'hidden' : ''}`}
            style={{ backgroundImage: `url(/image/img_example_bg.png)` }}
          />
          <div
            className={`project-bg ${index !== 1 ? 'hidden' : ''}`}
            style={{ backgroundImage: `url(/image/img_example_02.png)` }}
          />
          <div
            className={`project-bg ${index !== 2 ? 'hidden' : ''}`}
            style={{ backgroundImage: `url(/image/img_bg.png)` }}
          />
        </div>
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
        <ul className="project-contents-wrap">
          <List
            onHover={() => {
              setIndex(0);
            }}
            title="PROJECT NAME"
            role="PROJECT MANAGEMENT & DIRECTION"
            index={1}
            type="INSTALLATION"
            href={`/project/detail/?id=1211`}
            imgURL="/image/img_example_bg.png"
          />
          <List
            onHover={() => {
              setIndex(1);
            }}
            title="PROJECT NAME"
            role="PROJECT MANAGEMENT & DIRECTION"
            index={1}
            type="INSTALLATION"
            href={`/project/detail/?id=1211`}
            imgURL="/image/img_example_02.png"
          />
          <List
            onHover={() => {
              setIndex(2);
            }}
            title="PROJECT NAME"
            role="PROJECT MANAGEMENT & DIRECTION"
            index={1}
            type="INSTALLATION"
            href={`/project/detail/?id=1211`}
            imgURL="/image/img_bg.png"
          />
        </ul>
      </div>
    </div>
  );
};

export default Template;
