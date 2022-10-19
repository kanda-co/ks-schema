import useSWR from 'swr';
import { PublicConfiguration } from 'swr/dist/types';

import { handleResponse } from '../handlers';
import { ServiceMethod } from 'types';

const useRefreshingData = (
  service: ServiceMethod,
  options: Pick<PublicConfiguration, 'revalidateOnMount' | 'refreshInterval'>,
  ...arg
) => {
  const method = service?.method || (() => () => {});
  const fetcher = () => method(...arg)().then((res) => handleResponse(res));

  return useSWR(service?.key, fetcher, {
    ...options,
  });
};

export default useRefreshingData;
