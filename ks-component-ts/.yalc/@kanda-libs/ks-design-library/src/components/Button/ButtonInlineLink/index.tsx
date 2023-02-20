import React, { FunctionComponent } from 'react';
import type { ButtonInlineLinkProps } from './types';
import BaseButton from '~/components/Button/BaseButton';
import useButtonInlineLink from './useButtonInlineLink';

export type { ButtonInlineLinkProps };

const ButtonInlineLink: FunctionComponent<ButtonInlineLinkProps> = function ({
  id,
  className,
  variant = 'grey',
  ...restProps
}) {
  const { isLoading = false } = restProps;

  const variantProps = useButtonInlineLink(
    variant,
    className as string,
    isLoading,
  );

  return <BaseButton id={id} {...restProps} {...variantProps} />;
};

export default ButtonInlineLink;
