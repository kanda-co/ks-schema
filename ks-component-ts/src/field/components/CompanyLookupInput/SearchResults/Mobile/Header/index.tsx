import { Button } from "@kanda-libs/ks-design-library";
import React, { FunctionComponent } from "react";
import HeaderSearch from "~/components/HeaderSearch";
import { SEARCH_PLACEHOLDER } from "../../constants";

export interface HeaderProps {
  handleClose?: () => void;
  handleSearch?: () => void;
}

const Header: FunctionComponent<HeaderProps> = function ({
  handleClose,
  handleSearch = () => {},
}) {
  return (
    <HeaderSearch
      autoFocus
      onChange={handleSearch}
      placeholder={SEARCH_PLACEHOLDER}
      options={[<Button.Icon key="close" icon="close" onClick={handleClose} />]}
    />
  );
};

export default Header;
