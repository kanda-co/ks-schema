import React, { FunctionComponent } from 'react';
import { CLASS_NAMES } from './constants';

export interface ContentProps {
  children?: JSX.Element | JSX.Element[];
}

const DesktopLayoutDefaultContent: FunctionComponent<ContentProps> = function ({
  children,
}) {
  return (
    <div className={CLASS_NAMES.container}>
      <div className={CLASS_NAMES.wrapper}>
        <div className={CLASS_NAMES.content}>{children}</div>
      </div>
    </div>
  );
};

export default DesktopLayoutDefaultContent;
