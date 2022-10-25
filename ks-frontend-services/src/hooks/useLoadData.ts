import useSWRImmutable from 'swr/immutable';
import { PublicConfiguration } from 'swr/dist/types';

import { handleResponse } from '../handlers';
import { Service } from '../types';

interface LoadDataOptions
  extends Pick<PublicConfiguration, 'revalidateOnMount' | 'refreshInterval'> {
  shouldRetryOnError?: boolean;
}

const useLoadData = <T, V>(
  service?: Service<T, V>,
  options: LoadDataOptions = {},
  ...arg
) => {
  const method = (service?.method as unknown as Function) || (() => () => {});
  const fetcher = () => method(...arg)().then((res) => handleResponse(res));

  const key = service?.key;

  return useSWRImmutable<T>(key, fetcher, {
    ...options,
  });
};

export default useLoadData;
