import get from 'lodash.get';
import type { StringIndexedObject } from '~/types';

import { VARIABLE_REGEX } from './constants';

/**
 * Gets variants value
 */
export const getVariantValue = (variants: StringIndexedObject, key: string) =>
  variants[key.replace('@', '')];

/**
 * Checks if key has variable
 */
export const isVariable = (key: string): boolean => key.includes('@');

/**
 * replaces variables
 */
export const replaceVariables = (
  string: string,
  variants: StringIndexedObject,
): string => {
  const matches = Array.from(string.matchAll(VARIABLE_REGEX));

  return matches.reduce((prev, match) => {
    const { variable, key } = match.groups || {};

    if (variable && isVariable(variable)) {
      return prev.replace(key, getVariantValue(variants, variable));
    }

    return prev;
  }, string);
};

/**
 * Formats value
 */
export const formatValue = (
  classes: StringIndexedObject,
  value: string | string[] | StringIndexedObject,
  variants: StringIndexedObject = {},
): string => {
  if (typeof value === 'object' && !Array.isArray(value)) {
    if (!Object.keys(value).some(isVariable)) return value as unknown as string;

    const flatValue = Object.keys(value).reduce(
      (arrayValues: string[], key) => {
        if (isVariable(key)) {
          const variantKey = getVariantValue(variants, key);

          if (
            typeof value[key][variantKey] === 'object' &&
            !Array.isArray(value[key][variantKey])
          )
            return [
              ...arrayValues,
              formatValue(classes, value[key][variantKey], variants),
            ];

          if (
            typeof value[key][variantKey] === 'object' &&
            !Array.isArray(value[key][variantKey])
          )
            return [
              ...arrayValues,
              formatValue(classes, value[key][variantKey], variants),
            ];

          if (value[key][variantKey])
            return [...arrayValues, value[key][variantKey]];

          if (value[key][variantKey])
            return [...arrayValues, value[key][variantKey]];

          return arrayValues;
        }

        if (typeof value[key] === 'string') {
          return [...arrayValues, value[key]];
        }

        return arrayValues;
      },
      [],
    );

    return formatValue(classes, flatValue, variants);
  }

  const normalizedValue = Array.isArray(value) ? value : [value];

  return replaceVariables(
    normalizedValue
      .filter((part) => typeof part === 'string')
      .join(' ')
      .split(' ')
      .reduce((acc, className) => {
        const injectedClassName =
          className.indexOf('.') === 0
            ? get(classes, className.substr(1))
            : className;

        if (!injectedClassName) return acc;

        return acc ? `${acc} ${injectedClassName}` : injectedClassName;
      }, ''),
    variants,
  );
};

/**
 * Formats object values
 */
export const formatObject = (
  object: StringIndexedObject,
  variants: StringIndexedObject,
  initial: StringIndexedObject = {},
): StringIndexedObject =>
  Object.entries(object).reduce(
    (formattedObject, [key, value]) => ({
      ...formattedObject,
      [key]: formatValue(formattedObject, value, variants),
    }),
    initial,
  );
