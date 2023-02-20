import React, { FunctionComponent } from 'react';
import { CLASS_NAMES } from './constants';

export interface ContentHeaderProps {
  children?: JSX.Element | JSX.Element[];
}

const DesktopLayoutBoxedContentHeader: FunctionComponent<ContentHeaderProps> =
  function ({ children }) {
    return <div className={CLASS_NAMES.contentHeader}>{children}</div>;
  };

export default DesktopLayoutBoxedContentHeader;
