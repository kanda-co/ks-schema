import React, { FunctionComponent } from 'react';
import type { NavigationLinkProps } from '~/components/NavigationLink';
import type { CompanyItem } from '~/components/DesktopHeader/CompanyInfoPopover/types';
import { CLASS_NAMES } from './constants';
import { itemClassName } from '~/components/DesktopHeader/DesktopMenu/helpers';

export interface DesktopMenuProps {
  companyItems: CompanyItem[];
  linkComponent: string | React.FunctionComponent<NavigationLinkProps>;
}

const DesktopMenu: FunctionComponent<DesktopMenuProps> = function ({
  companyItems = [],
  linkComponent: LinkComponent = 'a',
}) {
  return (
    <div className={CLASS_NAMES.container}>
      {companyItems.map(({ name, active, ...itemProps }) => (
        <LinkComponent
          className={itemClassName(active as boolean)}
          {...itemProps}
          key={name}
        >
          {name}
        </LinkComponent>
      ))}
    </div>
  );
};

export default DesktopMenu;
