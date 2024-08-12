import { Button } from "@kanda-libs/ks-design-library";
import React, { ChangeEvent, FunctionComponent } from "react";
import HeaderSearch from "~/components/HeaderSearch";
import { SEARCH_PLACEHOLDER } from "../../constants";
import { useFormContext } from "react-hook-form";

export interface HeaderProps {
  id: string;
  handleClose?: () => void;
  handleSearch?: (e: ChangeEvent<HTMLInputElement>) => void;
  companySearchName?: string;
}

const Header: FunctionComponent<HeaderProps> = function ({
  id,
  handleClose,
  handleSearch = () => {},
  companySearchName = "companySearch",
}) {
  const { watch } = useFormContext();
  const value = watch(companySearchName);
  return (
    <HeaderSearch
      autoFocus
      onChange={handleSearch as () => void}
      placeholder={SEARCH_PLACEHOLDER}
      searchName={companySearchName}
      value={value}
      options={[
        <Button.Icon
          id={`${id}-close`}
          key="close"
          icon="close"
          onClick={handleClose}
        />,
      ]}
    />
  );
};

export default Header;
