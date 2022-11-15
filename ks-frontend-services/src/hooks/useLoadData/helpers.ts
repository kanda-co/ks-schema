import type { LoadDataHookOptions } from './types';
import type { StringIndexedObject } from '../../types';

export const getKey = (
  key: string,
  options: LoadDataHookOptions,
  params: StringIndexedObject = {},
): string => {
  const { useParamsAsKey = false } = options;

  if (!useParamsAsKey) {
    return key;
  }

  const searchParams = new URLSearchParams();

  Object.keys(params).forEach((key) => searchParams.append(key, params[key]));

  return `${key}?${searchParams.toString()}`;
};
