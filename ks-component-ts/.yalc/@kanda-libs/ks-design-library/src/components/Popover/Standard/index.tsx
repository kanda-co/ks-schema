import React, { FunctionComponent, MutableRefObject } from 'react';
import useStandardPopover from '~/components/Popover/Standard/useStandardPopover';

export interface StandardHandleCloseArgs {
  handleClose: () => void;
}

export type StandardHandleClose = (
  args: StandardHandleCloseArgs,
) => JSX.Element | JSX.Element[];

export interface StandardProps {
  children: StandardHandleClose;
  button?: JSX.Element | JSX.Element | null;
  className?: string;
  /**
   * Position above button rather than below
   */
  above?: boolean;
  /**
   * Position popover to right-align rather than left-align
   */
  right?: boolean;
  /**
   * Visible state
   */
  visible?: boolean | number;
  /**
   * Y margin shift - tailwind className
   */
  yMargin?: string;
  /**
   * X margin shift - tailwind className
   */
  xMargin?: string;
}

const Standard: FunctionComponent<StandardProps> = function ({
  children,
  above = false,
  right = false,
  visible = false,
  button = null,
  yMargin,
  xMargin,
}) {
  const {
    classNames,
    showPopover,
    button: Button,
    ref,
    handleClose,
  } = useStandardPopover({
    above,
    right,
    visible,
    button,
    yMargin,
    xMargin,
  });

  return (
    <div className={classNames.container}>
      {Button}
      {showPopover && (
        <div
          ref={ref as MutableRefObject<HTMLDivElement>}
          className={classNames.wrapper}
        >
          {children({ handleClose })}
        </div>
      )}
    </div>
  );
};

export default Standard;
