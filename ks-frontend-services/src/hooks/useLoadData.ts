import useSWRImmutable from 'swr/immutable';
import { PublicConfiguration } from 'swr/dist/types';

import { handleResponse } from '../handlers';
import { ServiceMethod } from '../types';
import { useMemo } from 'react';

const useLoadData = (
  service: ServiceMethod,
  options: Pick<PublicConfiguration, 'revalidateOnMount' | 'refreshInterval'>,
  ...arg
) => {
  const method = service?.method || (() => () => {});
  const fetcher = () => method(...arg)().then((res) => handleResponse(res));

  // Append a random number so that the same API endpoint can be called by different components
  const key = useMemo(() => `${service?.key}-${Math.random()}`, [service?.key]);

  return useSWRImmutable(key, fetcher, {
    ...options,
  });
};

export default useLoadData;
