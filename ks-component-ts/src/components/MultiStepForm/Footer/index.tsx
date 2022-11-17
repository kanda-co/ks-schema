import React, { type FunctionComponent } from "react";
import { Button } from "@kanda-libs/ks-design-library";
import { StringIndexedObject } from "~/types";
import useFooterButtonProps from "~/components/MultiStepForm/Footer/useFooterButtonProps";
import { CLASS_NAMES } from "./constants";

export interface FooterProps {
  nextButton?: JSX.Element;
  nextButtonProps?: StringIndexedObject;
  prevButtonProps?: StringIndexedObject;
}

const Footer: FunctionComponent<FooterProps> = function ({
  nextButton,
  nextButtonProps: initialNextButtonProps,
  prevButtonProps: initialPrevButtonProps,
}) {
  const { nextButtonProps, prevButtonProps } = useFooterButtonProps(
    initialNextButtonProps,
    initialPrevButtonProps
  );

  return (
    <div className={CLASS_NAMES.container}>
      <Button.Icon {...prevButtonProps} />
      {nextButton || <Button.Text {...nextButtonProps} />}
    </div>
  );
};

export default Footer;
