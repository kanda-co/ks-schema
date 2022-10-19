import {
  POST_CODE_REGEX,
  NO_ADDRESS_FOUND_LABEL,
} from "field/components/Address/Postcode/PostcodeUncontrolled/constants";
import {
  AddressApiData,
  AddressApiResponseAddress,
} from "~/field/components/Address/types";

export const validatePostcode = (postcode: string): boolean =>
  POST_CODE_REGEX.test(postcode.trim());

/**
 * Format address for proper display on select field
 */
export const formatSelectName = (address: AddressApiResponseAddress) =>
  address.formattedAddress.filter(Boolean).join(", ");

/**
 * Creates select field options from address api data
 */
export const getOptions = (data: AddressApiData) => {
  if (!data)
    return [{ value: "", name: "Enter a postcode above to search address" }];

  if (data?.addresses?.length === 0)
    return [{ value: "", name: NO_ADDRESS_FOUND_LABEL }];

  return data?.addresses?.map((address, i) => ({
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
