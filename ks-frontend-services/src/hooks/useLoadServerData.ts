import { ServiceMethod } from '../types';
import { handleResponse } from '../handlers';

const useLoadServerData = async <Value, Params = undefined, Body = undefined>(
  serviceMethod: ServiceMethod<Value, Params, Body>,
  ...arg
) => {
  const method = serviceMethod || (() => () => {});
  const fetcher = () =>
    (method(...arg)() as unknown as Promise<Response>).then((res) =>
      handleResponse(res as unknown as any),
    );

  return fetcher();
};

export default useLoadServerData;
