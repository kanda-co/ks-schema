import type { InfoCompany } from "@kanda-libs/ks-frontend-services";
import type { ValidationProps } from "~/field/types";

export interface SelectedCompanyAddress {
  premises?: string;
  addressLine1?: string;
  addressLine2?: string;
  locality?: string;
  region?: string;
  country?: string;
  postalCode?: string;
}

export interface SelectedCompany {
  title?: string;
  companyName?: string;
  companyNumber?: string;
  addressLineOne?: string;
  addressLineTwo?: string;
  city?: string;
  postalCode?: string;
  address?: SelectedCompanyAddress;
}

export type CompanyApiResponse = InfoCompany[];

export interface CompanyLookupInputSharedProps extends ValidationProps {
  /**
   * Company search field name
   */
  companySearchName: string;
  /**
   * Company focus field name
   */
  companyFocusName: string;
  noCompanyCallback: (query?: string) => void;
}

export interface CompanyLookupInputProps extends CompanyLookupInputSharedProps {
  name?: string;
  label?: string;
  /**
   * Field selected label
   */
  selectedLabel?: string;
  /**
   * Field remove selected label
   */
  removeSelectedLabel?: string;
  /**
   * Company search field label
   */
  placeholder?: string;
  /**
   * City field name
   */
  cityName?: string;
  /**
   * Address line one field name
   */
  addressLineOneName?: string;
  /**
   * Address line two field name
   */
  addressLineTwoName?: string;
  /**
   * Postal code field name
   */
  postalCodeName?: string;
  /**
   * Company number field name
   */
  companyNumberName?: string;
  /**
   * County field name
   */
  countyName?: string;
  /**
   * Country field name
   */
  countryName?: string;
  /**
   * Sole trader button
   */
  soleTraderButton?: JSX.Element;
  /**
   * Sole trader button
   */
  selectedDisplay?: "field" | "card";
}

export interface CompanyLookupInputProps extends CompanyLookupInputSharedProps {
  label?: string;

  /**
   * Sole trader button
   */
  soleTraderButton?: JSX.Element;
  /**
   * Sole trader button
   */
  selectedDisplay?: "field" | "card";
}
