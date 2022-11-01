import { useCallback, type MouseEvent } from "react";
import type { Address, InfoCompany } from "@kanda-libs/ks-frontend-services";
import { formatAddress } from "../../../helpers";
import type { ItemProps } from "./types";

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

      handleSelect(company as InfoCompany);
    },
    [handleSelect, company]
  );

  const address = formatAddress(
    (company?.limited_company?.company_address as Address) || {}
  );

  console.log({
    company,
    address,
  });

  return {
    onSelect,
    address,
  };
}
