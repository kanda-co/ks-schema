import useSWR from 'swr';
import { PublicConfiguration } from 'swr/dist/types';

import { handleResponse } from '../handlers';
import { Service } from 'types';

const useRefreshingData = <T, V>(
  service: Service<T, V>,
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
