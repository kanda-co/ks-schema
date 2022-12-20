import React, { FunctionComponent, MouseEvent } from 'react';
import Icon from '~/components/Icon';
import { useButtonTracking } from '~/hooks';
import usePaginationNavButtonProps from './usePaginationNavButtonProps';

export interface PaginationNavButtonProps {
  id: string;
  next?: boolean;
  disabled?: boolean;
  onClick?: (e: MouseEvent) => void;
}

const PaginationNavButton: FunctionComponent<PaginationNavButtonProps> =
  function ({ id, onClick: inputOnClick, disabled = false, next = false }) {
    const { className, iconProps } = usePaginationNavButtonProps(
      disabled,
      next,
    );

    const { onClick } = useButtonTracking(id, inputOnClick);

    return (
      <button
        id={id}
        className={className}
        onClick={onClick}
        disabled={disabled}
      >
        <Icon {...iconProps} />
      </button>
    );
  };

export default PaginationNavButton;
