import React, { FunctionComponent } from "react";
import type { CompanyLookupInputProps } from "./types";
import useCompanyLookupInputProps from "./useCompanyLookupInputProps";
import SelectedCompany from "./SelectedCompany";
import { CLASS_NAMES, FIELDS } from "./constants";
import Input from "~/field/components/Input";
import { BreakPoints } from "@kanda-libs/ks-design-library";
import SearchResults from "~/field/components/CompanyLookupInput/SearchResults";

export type { CompanyLookupInputProps };

const CompanyLookupInput: FunctionComponent<CompanyLookupInputProps> =
  function ({
    name = "companyName",
    companyNumberName = "companyNumber",
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
      noCompanyCallback,
    } = useCompanyLookupInputProps({
      noCompanyCallback: initialNoCompanyCallback,
      name,
      companySearchName,
      companyFocusName,
      companyNumberName,
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
                name={companySearchName}
                label={label}
                placeholder={placeholder}
                {...searchInputProps}
              />
              <BreakPoints desktop={soleTraderButton as JSX.Element} />
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
