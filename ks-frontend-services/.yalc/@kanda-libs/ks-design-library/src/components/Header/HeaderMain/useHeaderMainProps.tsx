import React, { useContext } from 'react';
import { ModalsWrapperContext } from '~/components/ModalsWrapper';
import {
  ConfigWrapperContext,
  HomeLinkProps,
} from '~/components/ConfigWrapper';
import { MENU_BUTTON_PROPS, MENU_MODAL_ID } from './constants';
import { Icon as IconButton, Link as LinkButton } from '~/components/Button';

export interface HeaderMainPropsHook {
  options: JSX.Element[];
  homeLinkProps?: HomeLinkProps;
}

export default function useHeaderMainProps(
  skip: boolean,
  onSkip?: () => void,
): HeaderMainPropsHook {
  const { showAnimatedModal } = useContext(ModalsWrapperContext);

  const { homeLinkProps } = useContext(ConfigWrapperContext);

  const handleMenu = () => showAnimatedModal(MENU_MODAL_ID);

  const options = skip
    ? [
        <LinkButton
          id="mobile-header-skip"
          variant="light-grey"
          size={16}
          key="skip"
          className="ml-2 mr-3"
          onClick={onSkip}
          label="Skip"
        />,
      ]
    : [<IconButton key="menu" {...MENU_BUTTON_PROPS} onClick={handleMenu} />];

  return {
    options,
    homeLinkProps,
  };
}
