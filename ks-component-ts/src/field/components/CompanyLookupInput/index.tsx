import React, { type FunctionComponent } from "react";
import { BreakPoints } from "@kanda-libs/ks-design-library";
import Input from "~/field/components/Input";
import useCompanyLookupInputProps from "./useCompanyLookupInputProps";
import { CLASS_NAMES, FIELDS } from "./constants";
import type { CompanyLookupInputProps } from "./types";
import SelectedCompany from "./SelectedCompany";
import SearchResults from "./SearchResults";

export type { CompanyLookupInputProps };

const CompanyLookupInput: FunctionComponent<CompanyLookupInputProps> =
  function ({
    name = "companyName",
    companyNumberName = "companyNumber",
    buildingNumberName = "buildingNumber",
    addressLineOneName = "addressLineOne",
    addressLineTwoName = "addressLineTwo",
    cityName = "city",
    countyName = "county",
    countryName = "country",
    postalCodeName = "postalCode",
    companySearchName = "companySearch",
    companyFocusName = "companyFocus",
    label = "Lookup your company",
    placeholder = "Search Companies House",
    selectedLabel = "Your company",
    removeSelectedLabel = "Choose different company",
    soleTraderButton = null,
    selectedDisplay = "card",
    noCompanyCallback: initialNoCompanyCallback,
    ...props
  }) {
    const {
      handleUnSelect,
      companySelected,
      searchInputProps,
      searchResultsProps,
      isDesktop,
      noCompanyCallback,
    } = useCompanyLookupInputProps({
      noCompanyCallback: initialNoCompanyCallback,
      name,
      companySearchName,
      companyFocusName,
      companyNumberName,
      buildingNumberName,
      addressLineOneName,
      addressLineTwoName,
      cityName,
      countyName,
      countryName,
      postalCodeName,
      placeholder,
      selectedLabel,
      removeSelectedLabel,
      ...props,
    });

    return (
      <>
        {companySelected ? (
          <SelectedCompany
            name={name}
            selectedDisplay={selectedDisplay}
            {...props}
            placeholder=""
            removeSelected={handleUnSelect}
            selectedLabel={selectedLabel}
            cityName={cityName}
            buildingNumberName={buildingNumberName}
            addressLineOneName={addressLineOneName}
            addressLineTwoName={addressLineTwoName}
            postalCodeName={postalCodeName}
            companyNumberName={companyNumberName}
            removeSelectedLabel={removeSelectedLabel}
          />
        ) : (
          <div className={CLASS_NAMES.searchContainer}>
            <div className={CLASS_NAMES.inputWrapper}>
              <Input
                {...FIELDS.search}
                name={isDesktop ? companySearchName : "placeholder"}
                label={label}
                placeholder={placeholder}
                {...searchInputProps}
              />
              {soleTraderButton}
            </div>
            <SearchResults
              {...searchResultsProps}
              companyFocusName={companyFocusName}
              companySearchName={companySearchName}
              noCompanyCallback={noCompanyCallback}
            />
          </div>
        )}
      </>
    );
  };

export default CompanyLookupInput;

// {/* <BreakPoints
//                 desktop={
//                   <Input
//                     {...FIELDS.search}
//                     name={companySearchName}
//                     label={label}
//                     placeholder={placeholder}
//                     {...searchInputProps}
//                   />
//                 }
//                 mobile={
//                   <button
//                     id="company-search"
//                     role="button"
//                     className=""
//                     {...mobileButtonProps}
//                   >
//                     {label}
//                   </button>
//                 }
//               /> */}
