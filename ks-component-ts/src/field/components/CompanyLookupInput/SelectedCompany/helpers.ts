interface FormatAddressArgs {
  addressLineOne?: string;
  addressLineTwo?: string;
  city?: string;
  postalCode?: string;
}
/**
 * Formats Address
 */
export const formatAddress = ({
  addressLineOne,
  addressLineTwo,
  city,
  postalCode,
}: FormatAddressArgs): string =>
  [addressLineOne, addressLineTwo, city, postalCode].filter(Boolean).join(", ");
