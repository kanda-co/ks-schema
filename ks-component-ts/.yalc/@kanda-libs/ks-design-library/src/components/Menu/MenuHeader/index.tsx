import React, { FunctionComponent } from 'react';
import { Img } from 'react-image';
import Button from '~/components/Button';
import HeaderBase from '~/components/Header/HeaderBase';
import { CLASS_NAMES } from './constants';
import { DEFAULT_AVATAR_ICON_PROPS } from '~/common/constants';
import Icon from '~/components/Icon';

export interface MenuHeaderProps {
  /**
   * On close callback
   */
  onClose: () => void;
  companyName?: string | JSX.Element | JSX.Element[];
  companyProfilePicture?: string;
  plan?: string | JSX.Element | JSX.Element[];
  hideHelp?: boolean;
}

const MenuHeader: FunctionComponent<MenuHeaderProps> = function ({
  onClose,
  companyName,
  companyProfilePicture,
  plan,
  hideHelp = false,
}) {
  return (
    <HeaderBase
      help={!hideHelp}
      options={[
        <Button.Icon
          id="mobile-header-menu-close"
          key="close"
          onClick={onClose}
          icon="close"
        />,
      ]}
    >
      <div className={CLASS_NAMES.container}>
        {companyProfilePicture ? (
          <Img
            alt={companyName as string}
            className={CLASS_NAMES.companyProfilePicture}
            src={companyProfilePicture}
            loader={<div className={CLASS_NAMES.loader} />}
            unloader={
              <div className={CLASS_NAMES.defaultAvatar}>
                <Icon {...DEFAULT_AVATAR_ICON_PROPS} />
              </div>
            }
          />
        ) : (
          <div className={CLASS_NAMES.defaultAvatar}>
            <Icon {...DEFAULT_AVATAR_ICON_PROPS} />
          </div>
        )}
        <div className={CLASS_NAMES.infoContainer}>
          <p className={CLASS_NAMES.companyName}>{companyName || 'My Kanda'}</p>
          {plan && <p className={CLASS_NAMES.plan}>{plan}</p>}
        </div>
      </div>
    </HeaderBase>
  );
};

export default MenuHeader;
