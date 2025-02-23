import useSWR from 'swr';
import type { PublicConfiguration } from 'swr/dist/types';

import { handleResponse } from '../handlers';
import type { Service } from '../types';

const useRefreshingData = <Value, Params, Body>(
  service: Service<Value, Params, Body>,
  options: Pick<PublicConfiguration, 'revalidateOnMount' | 'refreshInterval'>,
  ...arg
) => {
  const method = (service?.method as unknown as Function) || (() => () => {});
  const fetcher = () => method(...arg)().then((res) => handleResponse(res));

  return useSWR(service?.key, fetcher, {
    ...options,
  });
};

export default useRefreshingData;
