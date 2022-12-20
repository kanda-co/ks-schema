import React, { useMemo, type FunctionComponent, type MouseEvent } from 'react';
import { useButtonTracking } from '~/hooks';
import usePaginationNumberButtonClassNames from './usePaginationNumberButtonClassNames';

export interface PaginationNumberButtonProps {
  id: string;
  /**
   * Button text to display
   */
  text: string;
  /**
   * Active state of button
   */
  active: boolean;
  /**
   * Disabled state of button
   */
  disabled: boolean;
  /**
   * onClick function for button
   */
  onClick: (e: MouseEvent) => void;
  /**
   * onClick function for button
   */
  ellipsis: boolean;
}

const PaginationNumberButton: FunctionComponent<PaginationNumberButtonProps> =
  function ({
    id: buttonId,
    text,
    onClick: inputOnClick,
    active = false,
    disabled = false,
    ellipsis = false,
  }) {
    const classNames = usePaginationNumberButtonClassNames(active, ellipsis);

    const id = useMemo(() => `pagination-nav-page-${buttonId}`, [buttonId]);

    const { onClick } = useButtonTracking(id, inputOnClick);

    return (
      <button
        id={id}
        className={classNames.button}
        onClick={onClick}
        disabled={disabled}
      >
        <span className={classNames.text}>{text}</span>
      </button>
    );
  };

export default PaginationNumberButton;
