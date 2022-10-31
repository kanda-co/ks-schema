import { useCallback, type MouseEvent } from "react";
import type { ItemProps } from "field/components/CompanyLookupInput/SearchResults/Desktop/Item/types";
import { SelectedCompany } from "~/field/components/CompanyLookupInput/types";
import { formatAddress } from "~/field/components/CompanyLookupInput/helpers";

export type ItemPropsHookArgs = Omit<ItemProps, "searchWords" | "isLoading">;

export interface ItemPropsHook {
  onSelect: (e: MouseEvent) => void;
  address: string;
}

export default function useItemProps({
  handleSelect,
  company,
}: ItemPropsHookArgs): ItemPropsHook {
  /**
   Handles select company
   */
  const onSelect = useCallback(
    (e: MouseEvent) => {
      e.stopPropagation();

      handleSelect(company as SelectedCompany);
    },
    [handleSelect, company]
  );

  const address = formatAddress(company || {});

  return {
    onSelect,
    address,
  };
}
