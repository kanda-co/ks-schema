import { cloneElement, FunctionComponent } from "react";
import { ValidationItems } from "~/field/types";
import useValidationProps from "./useValidationProps";

export interface ValidatorProps {
  name?: string;
  validation: ValidationItems;
  children: JSX.Element;
}

const Validator: FunctionComponent<ValidatorProps> = function ({
  name,
  validation,
  children,
}) {
  const validationProps = useValidationProps(validation, name);

  return cloneElement(children, validationProps);
};

export default Validator;
