import trim from "lodash.trim";

import { NUMBERS_AND_DASH_REGEX } from "./constants";
import type { SelectedCompany, SelectedCompanyAddress } from "../types";
import { CompanyApiResponse } from "../types";
import {
  InfoCompany,
  LimitedCompanyInfo,
  Metadata,
  SoleTraderInfo,
  UserType,
} from "@kanda-libs/ks-frontend-services";

/**
 * Formats AddressLineOne from api data
 */
export const formatAddressLineOne = (
  address?: SelectedCompanyAddress
): string =>
  [address?.premises, address?.addressLine1]
    .map(trim as unknown as (value?: string) => string[] | undefined)
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
export const formatCompany = (company: InfoCompany) => ({
  companyName: company.limited_company?.company_name,
  companyNumber: company.limited_company?.company_number,
  addressLineOne: formatAddressLineOne(
    company.limited_company?.company_address
  ),
  addressLineTwo: formatAddressLineTwo(
    company.limited_company?.company_address
  ),
  city: company.limited_company?.company_address?.city,
  county: company.limited_company?.company_address?.county,
  country: company.limited_company?.company_address?.country,
  postalCode: company.limited_company?.company_address?.postcode,
});

/**
 * Format response data
 */
export const formatData = (data: CompanyApiResponse) => data.map(formatCompany);
