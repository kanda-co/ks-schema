import { SelectedCompany } from "~/field/components/CompanyLookupInput/types";

/**
 * Formats Address
 */
export const formatAddress = ({
  addressLineOne,
  addressLineTwo,
  city,
  postalCode,
}: SelectedCompany): string =>
  [addressLineOne, addressLineTwo, city, postalCode].filter(Boolean).join(", ");
