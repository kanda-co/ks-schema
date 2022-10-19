import get from "lodash.get";
import { StringIndexedObject } from "~/types";
import { ErrorMessage } from "~/field/types";

export const getError = (
  fieldError: ErrorMessage | undefined,
  errors: StringIndexedObject<ErrorMessage> = {},
  validationErrors: StringIndexedObject<string>,
  name: string
) => {
  const errorValue = fieldError || get(errors, name);

  if (!errorValue) return null;

  const type = errorValue?.type;

  if (!type || Object.keys(validationErrors).length === 0)
    return errorValue?.message || errorValue;

  if (validationErrors[type]) return validationErrors[type];

  if (errorValue?.message) return errorValue.message;

  return null;
};

export interface MakeIsAllowedValue {
  value: number;
}

export type MakeIsAllowedReturn = (value: MakeIsAllowedValue) => boolean;

/**
 * Creates helper function to check input validity
 */
export const makeIsAllowed =
  (minValue: number, maxValue: number): MakeIsAllowedReturn =>
  /**
   * Check if value is on the range
   */
  ({ value }) => {
    return value <= maxValue && value >= minValue;
  };
