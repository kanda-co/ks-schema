import React, { FunctionComponent } from 'react';
import type { ButtonTextProps } from '~/components/Button/ButtonText/types';
import Pass from '~/components/Pass';
import SkeletonLoader from '~/components/SkeletonLoader';
import Icon from '~/components/Icon';
import constants from './constants';
import type { Variant } from '~/types';
import { useButtonTracking } from '~/hooks';

export type { ButtonTextProps };

const ButtonText: FunctionComponent<ButtonTextProps> = function ({
  id,
  onClick: inputOnClick,
  variant = 'solid',
  iconSpacing,
  label,
  size = 48 as unknown as Variant,
  children = null,
  icon,
  iconProps = {},
  className,
  disabled = false,
  submit = false,
  left = false,
  isLoading = false,
  append = null,
  prepend = null,
  ...restProps
}) {
  const { onClick } = useButtonTracking(id, inputOnClick);

  return (
    <Pass.Constants
      constants={constants}
      className={className as string}
      variant={variant as Variant}
      left={left}
      iconSpacing={iconSpacing as Variant}
      loading={isLoading}
      size={size}
    >
      {({ classNames, getButtonProps, getIconProps, getSkeletonProps }) => (
        <button
          id={id}
          type={submit ? 'submit' : 'button'}
          {...getButtonProps(restProps)}
          disabled={disabled}
          onClick={onClick}
        >
          <span className={classNames.container}>
            {prepend}
            <span className={classNames.content}>
              {label || children}
              {icon && <span className={classNames.iconSpace} />}
              {icon && <Icon {...getIconProps({ ...iconProps, icon })} />}
            </span>
            {append}
          </span>
          <SkeletonLoader {...getSkeletonProps({ isLoading })} />
        </button>
      )}
    </Pass.Constants>
  );
};

export default ButtonText;
