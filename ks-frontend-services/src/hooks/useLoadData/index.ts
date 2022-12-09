import useSWRImmutable from 'swr/immutable';

import { getKey } from './helpers';
import type { LoadDataHookOptions } from './types';

import type { Service } from '../../types';
import { handleResponse } from '../../handlers';

const useLoadData = <Value, Params = undefined, Body = undefined>(
  service?: Service<Value, Params, Body> | false,
  options: LoadDataHookOptions = {},
  ...arg
) => {
  const method = (
    service !== false
      ? (service?.method as unknown as Function)
      : () => () => {}
  ) as Function;

  const fetcher = () => method(...arg)().then((res) => handleResponse(res));

  const { params = {} } = arg[0] ? arg[0] : {};
  const serviceKey = service !== false ? service?.key : null;
  const key = getKey(serviceKey, options, params);

  return useSWRImmutable<Value>(key, fetcher, {
    ...options,
  });
};

export default useLoadData;
