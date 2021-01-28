import React, { FC, ReactElement, useEffect } from 'react';

import List from './components/List';

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
    <div className="all-wrap">
      <div className="all-inner">
        <div className="all-heading">
          <div className="all-heading-title">
            <div className="sw-title black">ALL CREATIVE PROJECTS</div>
          </div>
          <p className="all-heading-description">
            I have been involved in digital installation, hardware development,
            AR,
            <br className="all-newline-pc" /> Web development, AI and so on as a
            project manger.
          </p>
        </div>
        <ul className="all-contents-wrap">
          <List
            title="PROJECT NAME"
            role="PROJECT MANAGEMENT & DIRECTION"
            index={1}
            type="INSTALLATION"
            href="#"
            imgURL="/image/img_example_bg.png"
          />
        </ul>
      </div>
    </div>
  );
};

export default Template;