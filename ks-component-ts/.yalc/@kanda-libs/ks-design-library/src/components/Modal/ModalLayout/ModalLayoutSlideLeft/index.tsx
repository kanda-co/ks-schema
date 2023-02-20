import React, { forwardRef } from 'react';
import useModalLayoutSlideLeftClassNames from './useModalLayoutSlideLeftClassNames';

interface ModalLayoutSlideLeftProps {
  children?: JSX.Element | JSX.Element[];
  /**
   * Header component
   */
  header?: JSX.Element | JSX.Element[];
  /**
   * Footer component
   */
  footer?: JSX.Element | JSX.Element[];
  /**
   * Removes header border
   */
  noBorder?: boolean;
}

const ModalLayoutSlideLeft = forwardRef<
  HTMLDivElement,
  ModalLayoutSlideLeftProps
>(({ children, header, footer, noBorder = false }, ref) => {
  const classNames = useModalLayoutSlideLeftClassNames(noBorder);

  return (
    <div className={classNames.container} ref={ref}>
      <div className={classNames.wrapper}>
        <div className={classNames.header}>{header}</div>
        <div className={classNames.content}>{children}</div>
        <div className={classNames.footer}>{footer}</div>
      </div>
    </div>
  );
});

ModalLayoutSlideLeft.displayName = 'ModalLayoutSlideLeft';

export default ModalLayoutSlideLeft;
