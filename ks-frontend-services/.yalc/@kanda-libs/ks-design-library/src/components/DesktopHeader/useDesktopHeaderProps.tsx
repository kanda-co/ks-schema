import React, { useContext } from 'react';

import Button from '~/components/Button';
import type { NavigationLinkProps } from '~/components/NavigationLink';
import { ModalsWrapperContext } from '../ModalsWrapper';
import { ConfigWrapperContext, HomeLinkProps } from '../ConfigWrapper';
import { CLASS_NAMES, MENU_BUTTON_PROPS, MENU_MODAL_ID } from './constants';

export interface DesktopHeaderPropsHook {
  options: JSX.Element[];
  linkComponent: string | React.FunctionComponent<NavigationLinkProps>;
  homeLinkProps: HomeLinkProps;
}

export default function useDesktopHeaderProps(): DesktopHeaderPropsHook {
  const { showAnimatedModal } = useContext(ModalsWrapperContext);
  const { linkComponent, homeLinkProps } = useContext(ConfigWrapperContext);

  const handleMenu = () => showAnimatedModal(MENU_MODAL_ID);

  const options = [
    <Button.Icon
      {...MENU_BUTTON_PROPS}
      key="menu"
      className={CLASS_NAMES.mobileMenu}
      onClick={handleMenu}
    />,
  ];

  return {
    options,
    linkComponent: linkComponent as string,
    homeLinkProps: homeLinkProps as HomeLinkProps,
  };
}
