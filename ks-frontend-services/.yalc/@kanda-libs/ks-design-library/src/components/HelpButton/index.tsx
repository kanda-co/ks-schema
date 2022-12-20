import React, { FunctionComponent } from 'react';
import { Icon as IconButton, Link as LinkButton } from '~/components/Button';
import useHelpButtonOnClick from './useHelpButtonOnClick';
import { PROPS } from './constants';

export interface HelpButtonProps {
  variant?: string;
}

const HelpButton: FunctionComponent<HelpButtonProps> = function ({
  variant = 'button',
}) {
  const { onClick } = useHelpButtonOnClick();

  if (variant === 'button') {
    return <IconButton onClick={onClick} {...PROPS} />;
  }

  return (
    <LinkButton
      id="help-launcher"
      variant="custom"
      className="text-neutral-900 z-50"
      icon="help"
      onClick={onClick}
    >
      Help Center
    </LinkButton>
  );
};

export default HelpButton;
