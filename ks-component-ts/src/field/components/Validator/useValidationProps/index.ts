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
  name?: string,
  nested?: boolean
): ValidationProps {
  let props: ValidationProps = {
    validationConditions: getValidationConditions(validation),
    validationErrors: getValidationErrors(validation),
  };

  if (nested) {
    const nestedValidationConditions = Object.keys(validation).reduce(
      (validators, key) => ({
        ...validators,
        [key]: getValidationConditions(validation),
      }),
      {}
    );

    const nestedValidationErrors = Object.keys(validation).reduce(
      (errors, key) => ({
        ...errors,
        [key]: getValidationErrors(validation),
      }),
      {}
    );

    props = {
      validationConditions: nestedValidationConditions,
      validationErrors: nestedValidationErrors,
    };
  }

  if (name) {
    props.name = name;
  }

  return props;
}
