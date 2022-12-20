import type { StringIndexedObject } from '~/types';
import { formatObject } from './helpers';
import useVariants from '~/hooks/useVariants';

export default function useClasses(
  constants: StringIndexedObject = {},
  extend: StringIndexedObject = {},
): StringIndexedObject {
  const { variants, ...extendedClassNames } = extend;

  const formattedConstants = formatObject(constants, useVariants(variants));

  return formatObject(extendedClassNames, variants, formattedConstants);
}
