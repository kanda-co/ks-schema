import React, { type FunctionComponent } from "react";
import type { DesktopProps } from "./types";
import useDesktopProps from "~/field/components/CompanyLookupInput/SearchResults/Desktop/useDesktopProps";
import { Button, Card, Popover } from "@kanda-libs/ks-design-library";
import { CLASS_NAMES } from "./constants";
import Item from "~/field/components/CompanyLookupInput/SearchResults/Desktop/Item";
import type { InfoCompany } from "@kanda-libs/ks-frontend-services";

const Desktop: FunctionComponent<DesktopProps> = function ({
  companySearchName,
  companyFocusName,
  handleSelect,
  noCompanyCallback,
}) {
  const desktopProps = useDesktopProps({
    companySearchName,
    companyFocusName,
    noCompanyCallback,
  });

  if (!desktopProps) return <></>;

  const { visible, results, isLoading, searchWords, showButton, onClick } =
    desktopProps;

  return (
    <div className={CLASS_NAMES.container}>
      <Popover.Standard
        id="company-lookup-input"
        visible={visible}
        className="w-full -mt-5"
      >
        {({ handleClose }) => (
          <Card padding="p-2 pt-0" className={CLASS_NAMES.card}>
            <>
              {showButton && (
                <Button.Link
                  id="company-lookup-not-listed"
                  label="I can't find my company"
                  className="sticky top-0 w-full p-3 bg-neutral-000"
                  onClick={() => {
                    handleClose();
                    onClick();
                  }}
                />
              )}
              {results &&
                results.map((item) => (
                  <Item
                    handleSelect={handleSelect}
                    searchWords={searchWords}
                    key={item.id}
                    company={item as InfoCompany}
                    isLoading={isLoading}
                  />
                ))}
            </>
          </Card>
        )}
      </Popover.Standard>
    </div>
  );
};

export default Desktop;
