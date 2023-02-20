import React, { FunctionComponent } from 'react';
import useContentClassNames from './useContentClassNames';

export interface ContentDefaultProps {
  children?: JSX.Element | JSX.Element[];
  footer?: JSX.Element | JSX.Element[];
  header?: JSX.Element | JSX.Element[];
  /**
   * Align content to top
   */
  top?: boolean;
  /**
   * Align content to left
   */
  left?: boolean;
  flex?: boolean;
  width?: string;
}

const DesktopLayoutBoxedContent: FunctionComponent<ContentDefaultProps> =
  function ({
    children,
    header,
    footer,
    width = 'w-120 max-w-120',
    top = false,
    left = false,
    flex = false,
  }) {
    const classNames = useContentClassNames({
      footer,
      width,
      top,
      left,
      flex,
    });

    return (
      <>
        {header}
        <div className={classNames.wrapper}>
          <div className={classNames.container}>
            <div className={classNames.content}>{children}</div>
          </div>
          {footer}
        </div>
      </>
    );
  };

export default DesktopLayoutBoxedContent;
