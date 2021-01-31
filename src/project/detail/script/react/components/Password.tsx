import React, { FC, ReactElement } from 'react';

// ==========================================
// Type
// ==========================================

// ==========================================
// View
// ==========================================

// Pageを新しく作る際はこちらのテンプレートのコードをコピペしてください。

const Password: FC = (): ReactElement => {
  return (
    <div className="detail-password-wrap">
      <div className="detail-password-bg"></div>
      <div className="detail-password">
        <p className="detail-password-text">enter the key to projects</p>
        <input className="js-hover detail-password-input" name="" type="text" />
      </div>
    </div>
  );
};

export default Password;
