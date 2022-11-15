/**
 * Creates optional props object from accessors and original row data
 * @param accessors - Either single accessor (String) or
 *    array of accessors
 * @param original - Original row data
 * @param optionalProps - Either single prop name or array of prop names
 */
import { StringIndexedObject } from "~/types";

export const createOptionalProps = (
  accessors: string | string[],
  original: StringIndexedObject,
  optionalProps: string | string[]
) => {
  // If optionalProps or accessors if not defined, return empty object
  if (!optionalProps || !accessors) return {};

  // If the accessors and optionalProps don't have matching classes, return
  if (
    Object.prototype.toString.call(accessors) !==
    Object.prototype.toString.call(optionalProps)
  )
    return {};

  // If the accessor is a string, return the single requested prop
  if (Object.prototype.toString.call(accessors) === "[object String]")
    return {
      [optionalProps as string]: original[accessors as string],
    };

  // If accessor is not an array, return
  if (Object.prototype.toString.call(accessors) !== "[object Array]") return {};

  // Create optionalProps object by iterating over optionalProps
  if (optionalProps.length !== accessors.length) return {};

  return (optionalProps as string[]).reduce((props, prop, index) => {
    if (original[accessors[index]] === undefined) return props;
    return {
      ...props,
      [prop]: original[accessors[index]],
    };
  }, {});
};
