import React, { type FunctionComponent } from 'react';
import Icon from '~/components/Icon';
import SkeletonLoader from '~/components/SkeletonLoader';
import { useButtonTracking } from '~/hooks';
import { SKELETON_PROPS } from './constants';
import type { BaseButtonProps } from './types';

export type { BaseButtonProps };

const BaseButton: FunctionComponent<BaseButtonProps> = function ({
  id,
  onClick: inputOnClick,
  label,
  children = null,
  append = null,
  prepend = null,
  icon,
  iconProps = {},
  disabled = false,
  submit = false,
  classNames,
  isLoading = false,
  ...restProps
}) {
  const type = submit ? 'submit' : 'button';

  const { onClick } = useButtonTracking(id, inputOnClick);

  return (
    <button
      id={id}
      type={type}
      disabled={disabled}
      className={classNames?.button}
      ref={restProps.forwardRef}
      {...restProps}
      onClick={onClick}
    >
      <span className="flex flex-1 items-center justify-items-center justify-center">
        {prepend}
        <span className={classNames?.content}>
          {label || children}
          {icon && <Icon {...iconProps} icon={icon} />}
        </span>
        {append}
      </span>
      <SkeletonLoader {...SKELETON_PROPS} isLoading={isLoading} />
    </button>
  );
};

export default BaseButton;
