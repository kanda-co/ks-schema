import { AddressApiResponseAddress } from "../types";
import { NO_ADDRESS_FOUND_LABEL } from "./constants";

/**
 * Format address for proper display on select field
 */
export const formatSelectName = (address: AddressApiResponseAddress): string =>
  address.formatted_address.filter(Boolean).join(", ");

export interface AddressOption {
  name: string;
  value: string;
}

/**
 * Creates select field options from address api data
 */
export const getOptions = (
  addresses?: AddressApiResponseAddress[]
): AddressOption[] => {
  if (!addresses)
    return [{ value: "", name: "Enter a postcode above to search address" }];
  if (addresses.length === 0)
    return [{ value: "", name: NO_ADDRESS_FOUND_LABEL }];
  return addresses.map((address, i) => ({
    name: formatSelectName(address),
    value: `${i}`,
  }));
};

/**
 * Checks two postcodes match, case insensitively and whitespace insensitively
 */
export const checkPostcodesMatch = (
  original: string,
  updated: string
): boolean => {
  if (!original || !updated) return false;
  return (
    original.toLowerCase().replace(/\s/g, "") ===
    updated.toLowerCase().replace(/\s/g, "")
  );
};
