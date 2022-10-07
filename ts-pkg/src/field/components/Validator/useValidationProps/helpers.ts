import { ValidationConditions, ValidationItems } from "~/field/types";
import { StringIndexedObject } from "~/types";

const flattenErrors = (
  errors: StringIndexedObject<string>
): StringIndexedObject<string> =>
  Object.keys(errors).reduce((flat, val) => {
    if (typeof errors[val] === "string")
      return {
        ...flat,
        [val]: errors[val],
      };
    return {
      ...flat,
      ...flattenErrors(errors[val] as unknown as StringIndexedObject<string>),
    };
  }, {});

export const getValidationErrors = (validation: ValidationItems) =>
  Object.keys(validation).reduce((validators, key) => {
    if (typeof validation[key].message === "string")
      return {
        ...validators,
        [key]: validation[key].message,
      };
    const messages = flattenErrors(
      validation[key].message as StringIndexedObject<string>
    );
    return {
      ...validators,
      ...messages,
    };
  }, {});

export const getValidationConditions = (
  validation: ValidationItems
): ValidationConditions =>
  Object.keys(validation).reduce(
    (validators, key) => ({
      ...validators,
      [key]: validation[key].value,
    }),
    {}
  );
