import React, { FunctionComponent } from 'react';
import PopoverMenu from '~/components/PopoverMenu';
import type { PopoverMenuItemProps } from '~/components/PopoverMenu/PopoverMenuItem';
import type { CompanyItem } from './types';
import useCompanyInfoPopover from './useCompanyInfoPopover';
import { CLASS_NAMES } from './constants';

export interface CompanyInfoPopoverProps {
  /**
   * Company items
   */
  companyItems: CompanyItem[];
  /**
   * Notice banner to show
   */
  notice?: FunctionComponent;
  /**
   * Function for logging out
   */
  logout?: () => void;
}

const CompanyInfoPopover: FunctionComponent<CompanyInfoPopoverProps> =
  function ({ companyItems, notice, logout }) {
    const { items } = useCompanyInfoPopover(companyItems, logout);

    return (
      <div className={CLASS_NAMES.container}>
        <div className={CLASS_NAMES.popover}>
          <PopoverMenu
            items={items as PopoverMenuItemProps[]}
            notice={notice}
            size="small"
          />
        </div>
      </div>
    );
  };

export default CompanyInfoPopover;
