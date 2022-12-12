import { cloneElement, FunctionComponent } from "react";
import { ValidationItems } from "~/field/types";
import useValidationProps from "./useValidationProps";

export interface ValidatorProps {
  name?: string;
  nested?: boolean;
  validation: ValidationItems;
  children: JSX.Element;
}

const Validator: FunctionComponent<ValidatorProps> = function ({
  name,
  nested = false,
  validation,
  children,
}) {
  const validationProps = useValidationProps(validation, name, nested);

  return cloneElement(children, { ...validationProps, validation });
};

export default Validator;
