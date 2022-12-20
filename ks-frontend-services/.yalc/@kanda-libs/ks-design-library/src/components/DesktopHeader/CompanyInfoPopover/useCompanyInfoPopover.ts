import { useCallback, useMemo } from 'react';
import type { CompanyItem } from './types';
import { LOGOUT_ITEM } from './constants';

export interface CompanyInfoPopoverHook {
  items: CompanyItem[];
  handleLogout: () => void;
}

export default function useCompanyInfoPopover(
  companyItems: CompanyItem[],
  logout?: () => void,
): CompanyInfoPopoverHook {
  const handleLogout = useCallback(() => {
    if (logout) {
      logout();
      return;
    }
  }, [logout]);

  const items = useMemo<CompanyItem[]>(
    () => [
      ...companyItems,
      {
        ...LOGOUT_ITEM,
        onClick: handleLogout,
      },
    ],
    [companyItems, handleLogout],
  );

  return {
    items,
    handleLogout,
  };
}
