import React, { FunctionComponent } from 'react';
import { CLASS_NAMES } from './constants';

export interface ContentFooterProps {
  children?: JSX.Element | JSX.Element[];
}

const ContentFooter: FunctionComponent<ContentFooterProps> = function ({
  children,
}) {
  return <div className={CLASS_NAMES.contentFooter}>{children}</div>;
};

export default ContentFooter;
