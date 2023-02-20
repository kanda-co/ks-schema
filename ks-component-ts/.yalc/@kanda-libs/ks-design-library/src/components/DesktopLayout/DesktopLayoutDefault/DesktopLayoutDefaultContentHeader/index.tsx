import React, { FunctionComponent } from 'react';
import { CLASS_NAMES } from './constants';

export interface ContentHeaderDefaultProps {
  option?: JSX.Element;
  children?: JSX.Element | JSX.Element[];
}

const DesktopLayoutDefaultContentHeader: FunctionComponent<ContentHeaderDefaultProps> =
  function ({ option, children }) {
    return (
      <>
        <div className={CLASS_NAMES.shadow} />
        <div className={CLASS_NAMES.container}>
          <div className={CLASS_NAMES.wrapper}>
            <div className={CLASS_NAMES.content}>
              {option && <div className={CLASS_NAMES.option}>{option}</div>}
              {children}
            </div>
          </div>
        </div>
      </>
    );
  };

export default DesktopLayoutDefaultContentHeader;
