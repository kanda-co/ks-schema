import { MouseEvent, useCallback } from "react";
import type { InfoCompany } from "@kanda-libs/ks-frontend-services";
import type { ItemProps } from "../../types";
import { formatAddress } from "~/field/components/CompanyLookupInput/helpers";
import { Address } from "@kanda-libs/ks-frontend-services";

export type ItemPropsHookArgs = Omit<ItemProps, "searchWords">;

export interface ItemPropsHook {
  className: string;
  onSelect: (e: MouseEvent) => void;
  address: string;
}

export default function useItemProps({
  handleSelect,
  company,
  isLoading,
}: ItemPropsHookArgs): ItemPropsHook {
  /**
   * Handles selecting a company
   */
  const onSelect = useCallback(
    (e: MouseEvent) => {
      e.stopPropagation();

      if (handleSelect) handleSelect(company as InfoCompany);
    },
    [handleSelect, company]
  );

  const address = formatAddress(
    (company?.limited_company?.company_address as Address) || {}
  );

  const className = isLoading ? "mb-4" : "mb-4 cursor-pointer";

  return {
    onSelect,
    address,
    className,
  };
}
