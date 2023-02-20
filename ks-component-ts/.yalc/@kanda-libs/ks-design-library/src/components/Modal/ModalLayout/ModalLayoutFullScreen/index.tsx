import React, { FunctionComponent } from 'react';
import useModalLayoutFullScreenClassNames from './useModalLayoutFullScreenClassNames';

export interface ModalLayoutFullScreenProps {
  children: JSX.Element | JSX.Element[];
  /**
   * Header component
   */
  header?: JSX.Element;
  /**
   * Footer component
   */
  footer?: JSX.Element;
  /**
   * Removes header border
   */
  noBorder?: boolean;
  /**
   * Keep header in place
   */
  stickyHeader?: boolean;
}

const ModalLayoutFullScreen: FunctionComponent<ModalLayoutFullScreenProps> =
  function ({
    children = null,
    header,
    footer,
    noBorder = false,
    stickyHeader = false,
  }) {
    const classNames = useModalLayoutFullScreenClassNames(
      noBorder,
      stickyHeader,
    );

    return (
      <div className={classNames.container}>
        <div className={classNames.wrapper}>
          <div className={classNames.header}>{header}</div>
          <div className={classNames.content}>{children}</div>
          <div className={classNames.footer}>{footer}</div>
        </div>
      </div>
    );
  };

export default ModalLayoutFullScreen;
