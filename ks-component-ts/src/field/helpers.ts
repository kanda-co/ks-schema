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
