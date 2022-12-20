import React, { type FunctionComponent, type MouseEvent } from 'react';
import type { HomeLinkProps } from '~/components/ConfigWrapper';
import { MENU_MODAL_ID } from '~/components/Menu/constants';
import Animations from '~/components/Animations';
import AnimatedModalContainer from '~/components/Modal/AnimatedModalContainer';
import ModalLayoutSlideLeft from '~/components/Modal/ModalLayout/ModalLayoutSlideLeft';
import Icon from '~/components/Icon';
import HelpButton from '~/components/HelpButton';
import MenuHeader from './MenuHeader';

export interface MenuItem {
  name: string;
  icon: string;
  href?: string;
  target?: string;
  to?: string;
  onClick?: (e: MouseEvent) => void;
  stroke?: string;
  size?: number;
}

export interface MenuProps {
  items: MenuItem[];
  footer?: JSX.Element | JSX.Element[];
  companyName?: string | JSX.Element | JSX.Element[];
  companyProfilePicture?: string;
  plan?: string | JSX.Element | JSX.Element[];
  linkComponent?: FunctionComponent<HomeLinkProps>;
  hideHelp?: boolean;
}

const Menu: FunctionComponent<MenuProps> = function ({
  items = [],
  linkComponent: LinkComponent = 'a',
  footer,
  companyName,
  companyProfilePicture,
  plan,
  hideHelp = false,
}) {
  return (
    <AnimatedModalContainer id={MENU_MODAL_ID} opacity={50}>
      {({ isVisible, hideModal, handleClose }) => (
        <Animations.SlideLeft show={isVisible} onEnd={hideModal}>
          <ModalLayoutSlideLeft
            footer={footer}
            header={
              <MenuHeader
                companyName={companyName}
                companyProfilePicture={companyProfilePicture}
                plan={plan}
                onClose={handleClose}
                hideHelp={hideHelp}
              />
            }
          >
            <>
              <div className="-mt-8">
                {items.map(({ icon, name, stroke, size, ...itemProps }, i) => (
                  <div
                    onClick={handleClose}
                    className="cursor-pointer mt-8"
                    key={String(i)}
                  >
                    <LinkComponent {...itemProps}>
                      <div className="flex flex-1 w-full h-8 items-center ">
                        <Icon icon={icon} stroke={stroke} size={size || 32} />
                        <p className="ml-4 style-d-em">{name}</p>
                      </div>
                    </LinkComponent>
                  </div>
                ))}
              </div>
              {!hideHelp && (
                <div className="flex flex-row mt-8">
                  <HelpButton variant="text" />
                </div>
              )}
            </>
          </ModalLayoutSlideLeft>
        </Animations.SlideLeft>
      )}
    </AnimatedModalContainer>
  );
};

export default Menu;
