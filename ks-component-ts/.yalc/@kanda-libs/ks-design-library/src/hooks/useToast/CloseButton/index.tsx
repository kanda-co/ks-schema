import React, { type FunctionComponent } from 'react';
import * as Button from '~/components/Button';
import type { ButtonOnClick } from '~/types';

export interface CloseButtonProps {
  closeToast: ButtonOnClick;
}

const CloseButton: FunctionComponent<CloseButtonProps> = function ({
  closeToast,
}) {
  return (
    <Button.Icon
      id="hide-toast"
      icon="close"
      variant="ghost-grey"
      size="32-16"
      onClick={closeToast}
      className="min-w-8"
    />
  );
};

export default CloseButton;
