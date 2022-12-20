import set from 'lodash.set';
import { VARIANT_REGEX } from './constants';
import type { StringIndexedObject, Variants } from 'types';

export const flatObject = (input: StringIndexedObject): StringIndexedObject => {
  const flat = (
    res: StringIndexedObject,
    key: string,
    val: StringIndexedObject,
    pre = '',
  ): StringIndexedObject => {
    const prefix = [pre, key].filter((v) => v).join('.');
    return typeof val === 'object'
      ? Object.keys(val).reduce(
          (prev, curr) => flat(prev, curr, val[curr], prefix),
          res,
        )
      : Object.assign(res, { [prefix]: val });
  };

  return Object.keys(input).reduce(
    (prev, curr) => flat(prev, curr, input[curr]),
    {},
  );
};

export const capitalize = (text: string) => {
  if (typeof text !== 'string') return '';
  return text.charAt(0).toUpperCase() + text.slice(1);
};

interface Match {
  groups: {
    variant: string;
    value: string;
  };
}

/**
 * Formats object values
 * @param {Object} object
 * @param {Function} formatter
 * @returns {Object} formated object
 */
export const formatObject = (
  object: StringIndexedObject,
  variants: Variants,
) => {
  const flat = flatObject(object);

  const entries = Object.entries(flat).filter(([key]) => {
    const matches = Array.from(
      `${key}.`.matchAll(VARIANT_REGEX),
    ) as unknown as Match[];

    return matches.every((match) => {
      const { variant, value } = match.groups;

      return (
        value === `${variants[variant]}` ||
        value === `${Boolean(variants[variant])}`
      );
    });
  });

  const replaced = entries.map(([key, value]) => [
    `${key}.`.replace(VARIANT_REGEX, '').slice(0, -1),
    value,
  ]);

  return replaced.reduce(
    (prev, [key, value]) => set(prev, key as string, value),
    {},
  );
};

/**
 * Creates a function name from className
 * @param {String} className
 * @returns {String} function name
 */
export const getFunctionName = (className: string) =>
  `get${capitalize(className)}Props`;

/**
 * Create getters
 * @param {Object} formattedProps
 * @param {Object} classNames
 * @param {Object} helpers
 * @returns {Object} getter functions
 */
export const createGetters = (
  formattedProps: StringIndexedObject,
  classNames: StringIndexedObject,
  helpers: StringIndexedObject,
) => {
  const allKeys = [
    ...new Set([...Object.keys(formattedProps), ...Object.keys(classNames)]),
  ];

  return Object.fromEntries(
    allKeys.map((className) => [
      getFunctionName(className),
      (viewProps = {}) => {
        const helper = helpers?.[className];

        const initialProps = {
          ...formattedProps?.[className],
          ...(classNames[className] && { className: classNames[className] }),
        };

        if (typeof helper === 'function')
          return helper({}, initialProps, viewProps);

        return Object.entries(viewProps).reduce((prevProps, [key, value]) => {
          if (typeof helper?.[key] === 'function') {
            return helper?.[key]({ key }, prevProps, value);
          }

          return { ...prevProps, [key]: value };
        }, initialProps);
      },
    ]),
  );
};
