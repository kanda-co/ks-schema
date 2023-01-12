import type { ServiceMethod, StringIndexedObject } from '../types';
import { handleResponse, type Response as ServiceResponse } from '../handlers';

/**
 * Helper function used to request data from a service whilst running on the server / node
 */
export const loadServerData = async <
  Value extends StringIndexedObject<any>,
  Params extends StringIndexedObject<any> = {},
  Body extends StringIndexedObject<any> = {},
>(
  serviceMethod: ServiceMethod<Value, Params | undefined, Body | undefined>,
  ...args: any[]
): Promise<Value> => {
  const method = serviceMethod || (() => () => {});
  const fetcher = (): Promise<Value> =>
    (method(...args)() as unknown as Promise<ServiceResponse>).then((res) =>
      handleResponse(res),
    ) as Promise<Value>;

  return fetcher();
};
