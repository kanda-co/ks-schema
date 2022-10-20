import useSWRImmutable from 'swr/immutable';
import { PublicConfiguration } from 'swr/dist/types';

import { handleResponse } from '../handlers';
import { ServiceMethod } from '../types';

const useLoadData = (
  service: ServiceMethod,
  options: Pick<PublicConfiguration, 'revalidateOnMount' | 'refreshInterval'>,
  ...arg
) => {
  const method = service?.method || (() => () => {});
  const fetcher = () => method(...arg)().then((res) => handleResponse(res));

  const key = service?.key;

  return useSWRImmutable(key, fetcher, {
    ...options,
  });
};

export default useLoadData;
