import React, { FunctionComponent } from "react";
import type { DesktopProps } from "./types";
import useDesktopProps from "~/field/components/CompanyLookupInput/SearchResults/Desktop/useDesktopProps";
import { Button, Card, Popover } from "@kanda-libs/ks-design-library";
import { CLASS_NAMES } from "./constants";
import Item from "~/field/components/CompanyLookupInput/SearchResults/Desktop/Item";
import { SelectedCompany } from "~/field/components/CompanyLookupInput/types";

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
      <Popover.Standard visible={visible} className="w-full -mt-5">
        {({ handleClose }) => (
          <Card padding="p-2" className={CLASS_NAMES.card}>
            {showButton && (
              <Button.Link
                label="I can't find my company"
                className="w-full sticky top-0 px-3 pb-1 bg-neutral-000"
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
                  company={item as SelectedCompany}
                  isLoading={isLoading}
                />
              ))}
          </Card>
        )}
      </Popover.Standard>
    </div>
  );
};

export default Desktop;
