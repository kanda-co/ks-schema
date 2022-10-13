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

  return useSWRImmutable(service?.key, fetcher, {
    ...options,
  });
};

export default useLoadData;
