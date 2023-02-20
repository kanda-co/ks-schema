import React, { FunctionComponent } from 'react';
import type { ButtonLinkProps } from './types';
import useButtonLink from '~/components/Button/ButtonLink/useButtonLink';
import BaseButton from '~/components/Button/BaseButton';
import type { IconProps } from '~/components/Icon/types';

export type { ButtonLinkProps };

const ButtonLink: FunctionComponent<ButtonLinkProps> = function ({
  id,
  className,
  variant = 'turquoise',
  left = false,
  size = 16,
  iconSpacing,
  ...restProps
}) {
  const { iconProps = {}, isLoading = false } = restProps;

  const variantProps = useButtonLink(
    variant,
    left,
    size as number,
    className as string,
    iconProps as IconProps,
    iconSpacing as number,
    isLoading as boolean,
  );

  return (
    <BaseButton id={id} {...restProps} {...variantProps}>
      {restProps.children as JSX.Element}
    </BaseButton>
  );
};

export default ButtonLink;
