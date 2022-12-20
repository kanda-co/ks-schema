import React, { FunctionComponent } from 'react';
import type { ButtonIconProps } from './types';
import useButtonIcon from '~/components/Button/ButtonIcon/useButtonIcon';
import Icon from '~/components/Icon';
import SkeletonLoader from '~/components/SkeletonLoader';
import type { IconProps } from '~/components/Icon/types';
import { useButtonTracking } from '~/hooks';

export type { ButtonIconProps };

const ButtonIcon: FunctionComponent<ButtonIconProps> = function ({
  children = null,
  id,
  onClick: inputOnClick,
  submit,
  size = '40-20',
  variant = 'ghost-grey',
  icon,
  className: initialClassName,
  iconProps: initialIconProps = {},
  isLoading,
  indicator,
  indicatorPosition = 'top-0 right-0',
  ...restProps
}) {
  const { iconProps, classNames, circle, type, style } = useButtonIcon(
    submit as boolean,
    variant,
    size,
    initialIconProps as IconProps,
    initialClassName as string,
    indicator as string,
    indicatorPosition,
  );

  const { onClick } = useButtonTracking(id, inputOnClick);

  return (
    <SkeletonLoader
      className={classNames.skeleton}
      isLoading={isLoading}
      circle={circle}
      {...style}
      afterLoading={
        <button
          id={id}
          className={classNames.button}
          style={style}
          {...restProps}
          type={type as 'button' | 'submit' | 'reset'}
          onClick={onClick}
        >
          <div className={classNames.wrapper}>
            <Icon {...iconProps} icon={icon as string} />
            {indicator && <span className={classNames.indicator} />}
          </div>
        </button>
      }
    />
  );
};

export default ButtonIcon;
