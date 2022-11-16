import React, { type FunctionComponent } from "react";
import {
  Button,
  ModalContainer,
  ModalLayoutFullScreen,
} from "@kanda-libs/ks-design-library";
import type { SearchResultsProps } from "../types";
import Container from "./Container";
import Header from "./Header";
import Item from "./Item";

export type MobileProps = SearchResultsProps;

const Mobile: FunctionComponent<MobileProps> = function ({
  modalId = "",
  handleSelect,
  ...rest
}) {
  return (
    <ModalContainer id={modalId}>
      {({ handleClose }) => (
        <>
          <Container handleClose={handleClose} {...rest}>
            {({
              handleSearch,
              results,
              isLoading,
              searchWords,
              showButton,
              onClick,
            }) => (
              <ModalLayoutFullScreen
                stickyHeader
                header={
                  <React.Fragment>
                    <Header
                      handleClose={handleClose}
                      handleSearch={handleSearch}
                    />
                    {showButton && (
                      <Button.Link
                        onClick={onClick}
                        className="w-full text-center mx-auto mb-2"
                        label="I can't find my company"
                      />
                    )}
                  </React.Fragment>
                }
              >
                {results.map((item) => (
                  <Item
                    handleSelect={handleSelect}
                    searchWords={searchWords}
                    key={item.companyNumber}
                    company={item}
                    isLoading={isLoading}
                  />
                ))}
              </ModalLayoutFullScreen>
            )}
          </Container>
        </>
      )}
    </ModalContainer>
  );
};

export default Mobile;
