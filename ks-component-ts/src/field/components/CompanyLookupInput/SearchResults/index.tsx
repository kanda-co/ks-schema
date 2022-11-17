import React, { type FunctionComponent } from "react";
import { BreakPoints } from "@kanda-libs/ks-design-library";
import { SearchResultsProps } from "./types";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

const SearchResults: FunctionComponent<SearchResultsProps> = function ({
  modalId,
  handleSelect,
  companySearchName,
  companyFocusName,
  noCompanyCallback,
}) {
  return (
    <BreakPoints
      mobile={
        <Mobile
          modalId={modalId}
          handleSelect={handleSelect}
          companySearchName={companySearchName}
          companyFocusName={companyFocusName}
          noCompanyCallback={noCompanyCallback}
        />
      }
      desktop={
        <Desktop
          handleSelect={handleSelect}
          companySearchName={companySearchName}
          companyFocusName={companyFocusName}
          noCompanyCallback={noCompanyCallback}
        />
      }
    />
  );
};

export default SearchResults;
