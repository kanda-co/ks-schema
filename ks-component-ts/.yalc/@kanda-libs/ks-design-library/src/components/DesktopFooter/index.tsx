import React, { FunctionComponent } from 'react';

import { CLASS_NAMES, COPYRIGHT, LINK } from './constants';

const DesktopFooter: FunctionComponent = function ({}) {
  return (
    <div className={CLASS_NAMES.container}>
      <div className={CLASS_NAMES.shadow} />
      <div className={CLASS_NAMES.contentContainer}>
        <div className={CLASS_NAMES.wrapper}>
          <div className={CLASS_NAMES.content}>
            <p className={CLASS_NAMES.copyright}>{COPYRIGHT}</p>
            {LINK.map((link) => (
              <a
                key={link.url}
                className={CLASS_NAMES.link}
                href={link.url}
                target={link.target}
                rel="noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopFooter;
