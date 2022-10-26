import useSWRImmutable from 'swr/immutable';
import { PublicConfiguration } from 'swr/dist/types';

import { handleResponse } from '../handlers';
import { Service } from '../types';

interface LoadDataOptions
  extends Pick<PublicConfiguration, 'revalidateOnMount' | 'refreshInterval'> {
  shouldRetryOnError?: boolean;
}

const useLoadData = <Value, Params = undefined, Body = undefined>(
  service?: Service<Value, Params, Body> | false,
  options: LoadDataOptions = {},
  ...arg
) => {
  const method = (
    service !== false
      ? (service?.method as unknown as Function)
      : () => () => {}
  ) as Function;

  const fetcher = () => method(...arg)().then((res) => handleResponse(res));

  const key = service !== false ? service?.key : null;

  return useSWRImmutable<Value>(key, fetcher, {
    ...options,
  });
};

export default useLoadData;
