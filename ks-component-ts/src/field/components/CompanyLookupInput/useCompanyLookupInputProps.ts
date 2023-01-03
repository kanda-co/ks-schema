import { useState, useCallback, useContext, useEffect } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import get from "lodash.get";
import type { InfoCompany } from "@kanda-libs/ks-frontend-services";
import {
  ModalsWrapperContext,
  useIsDesktop,
} from "@kanda-libs/ks-design-library";

import { CompanyLookupInputProps } from "./types";
import { InputProps } from "~/field/components/Input";
import { SearchResultsProps } from "~/field/components/CompanyLookupInput/SearchResults/types";

export type CompanyLookupInputArgs = Omit<
  CompanyLookupInputProps,
  "label" | "soleTraderButton" | "selectedDisplay"
>;

export interface CompanyLookupInputPropsHook {
  error?: string | null;
  companySelected?: boolean;
  handleUnSelect?: () => void;
  searchInputProps?: InputProps;
  searchResultsProps?: SearchResultsProps;
  noCompanyCallback?: (name?: string) => void;
}

export default function useCompanyLookupInputProps({
  name,
  validationConditions,
  validationErrors,
  noCompanyCallback,
  companySearchName,
  ...props
}: CompanyLookupInputArgs): CompanyLookupInputPropsHook {
  const isDesktop = useIsDesktop();

  const { showModal, hideModal } = useContext(ModalsWrapperContext);

  const modalId = `${name}-search-modal`;

  const companyName = useWatch({ name: companySearchName as string });

  const [companySelected, setCompanySelected] = useState(false);

  const {
    setValue,
    formState: { errors },
    register,
  } = useFormContext();

  /**
   * Sets field values to form
   * @param {Object} company
   */
  const setFieldValues = useCallback(
    (company: InfoCompany = {}) => {
      setValue(name as string, company?.limited_company?.company_name);
      setValue(
        props.companyNumberName as string,
        company.limited_company?.company_number
      );
      setValue(
        props.buildingNumberName as string,
        company?.limited_company?.company_address?.building_number
      );
      setValue(
        props.addressLineOneName as string,
        company.limited_company?.company_address?.line_1
      );
      setValue(
        props.addressLineTwoName as string,
        company.limited_company?.company_address?.line_2
      );
      setValue(
        props.cityName as string,
        company.limited_company?.company_address?.city
      );
      setValue(
        props.countyName as string,
        company.limited_company?.company_address?.county
      );
      setValue(
        props.countryName as string,
        company.limited_company?.company_address?.country
      );
      setValue(
        props.postalCodeName as string,
        company.limited_company?.company_address?.postcode
      );
      setCompanySelected(true);
    },
    [
      name,
      props.companyNumberName,
      props.addressLineOneName,
      props.addressLineTwoName,
      props.cityName,
      props.countyName,
      props.countryName,
      props.postalCodeName,
      setValue,
    ]
  );

  /**
   * Handles select company
   * @param {Object} company
   */
  const handleSelect = useCallback(
    (company: InfoCompany) => {
      setFieldValues(company);
      if (!isDesktop) {
        hideModal(modalId);
      }
    },
    [hideModal, isDesktop, modalId, setFieldValues]
  );

  /**
   * Handles focus
   */
  const handleFocus = useCallback(() => {
    if (!isDesktop) {
      showModal(modalId);
    }
  }, [isDesktop, modalId, showModal]);

  /**
   * Handles click
   */
  const handleClick = useCallback(() => {
    setValue(props.companyFocusName as string, Math.random());
  }, [props.companyFocusName, setValue]);

  /**
   * Handles unselect company
   */
  const handleUnSelect = useCallback(() => {
    setFieldValues();
    setCompanySelected(false);
  }, [setFieldValues]);

  const errorValue =
    (errors && get(errors, name as string)) ||
    get(errors, props.companyNumberName as string);

  const error = errorValue?.type
    ? (validationErrors && validationErrors[errorValue.type as string]) || null
    : errorValue;

  const searchInputProps = {
    error,
    onFocus: handleFocus,
    onClick: handleClick,
  };

  const searchResultsProps = { modalId, handleSelect };

  const inputCallback = (enteredName?: string) => {
    setValue(name as string, enteredName);
    if (noCompanyCallback) noCompanyCallback();
  };

  /**
   * Hiddes modal on desktop
   */
  useEffect(() => {
    if (isDesktop) {
      hideModal(modalId);
    } else {
      setValue(companySearchName as string, undefined);
    }
  }, [
    hideModal,
    isDesktop,
    modalId,
    name,
    companySearchName as string,
    setValue,
  ]);

  /**
   * Hides modal on desktop
   */
  useEffect(() => {
    if (!validationConditions) return;
    register(props.companyNumberName as string, validationConditions);
  }, [props.companyNumberName, register, validationConditions]);

  /**
   * EFfect sets company name from search value
   */
  useEffect(() => {
    setValue(name as string, companyName);
  }, [setValue, name, companyName]);

  return {
    error: error as string,
    companySelected,
    handleUnSelect,
    searchInputProps: searchInputProps as InputProps,
    searchResultsProps: searchResultsProps as SearchResultsProps,
    noCompanyCallback: inputCallback,
  };
}
