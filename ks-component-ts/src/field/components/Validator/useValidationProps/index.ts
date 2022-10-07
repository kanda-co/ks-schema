import {
  ValidationConditions,
  ValidationErrors,
  type ValidationItems,
} from "~/field/types";
import { getValidationConditions, getValidationErrors } from "./helpers";

interface ValidationProps {
  name?: string;
  validationConditions: ValidationConditions;
  validationErrors: ValidationErrors;
}

export default function useValidationProps(
  validation: ValidationItems,
  name?: string
): ValidationProps {
  const props: ValidationProps = {
    validationConditions: getValidationConditions(validation),
    validationErrors: getValidationErrors(validation),
  };

  if (name) {
    props.name = name;
  }

  return props;
}
