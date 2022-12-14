import { Button } from "@kanda-libs/ks-design-library";
import React, { ChangeEvent, FunctionComponent } from "react";
import HeaderSearch from "~/components/HeaderSearch";
import { SEARCH_PLACEHOLDER } from "../../constants";

export interface HeaderProps {
  id: string;
  handleClose?: () => void;
  handleSearch?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Header: FunctionComponent<HeaderProps> = function ({
  id,
  handleClose,
  handleSearch = () => {},
}) {
  return (
    <HeaderSearch
      autoFocus
      onChange={handleSearch as () => void}
      placeholder={SEARCH_PLACEHOLDER}
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
