import trim from "lodash.trim";

import { NUMBERS_AND_DASH_REGEX } from "./constants";
import type { SelectedCompany, SelectedCompanyAddress } from "../types";
import { CompanyApiResponse } from "../types";

/**
 * Formats AddressLineOne from api data
 */
export const formatAddressLineOne = (
  address?: SelectedCompanyAddress
): string =>
  [address?.premises, address?.addressLine1]
    .map(trim)
    .filter(Boolean)
    // join ["44", "Hepleswell"] with space "44 Hepleswell"
    // join ["C/O Streets Chartered Accountants", "3 Wellbrook Court"] with comma and space "C/O Streets Chartered Accountants, 3 Wellbrook Court"
    .join(NUMBERS_AND_DASH_REGEX.test(trim(address?.premises)) ? " " : ", ");

/**
 * Formats AddressLineTwo from api data
 * @param {Object} address api data
 */
export const formatAddressLineTwo = (
  address?: SelectedCompanyAddress
): string | undefined => address?.addressLine2;

/**
 * Format company data
 */
export const formatCompany = (company: SelectedCompany) => ({
  companyName: company.title,
  companyNumber: company.companyNumber,
  addressLineOne: formatAddressLineOne(company.address),
  addressLineTwo: formatAddressLineTwo(company.address),
  city: company.address?.locality,
  county: company.address?.region,
  country: company.address?.country,
  postalCode: company.address?.postalCode,
});

/**
 * Format response data
 */
export const formatData = (data: CompanyApiResponse) =>
  data.items.map(formatCompany);
