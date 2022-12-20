import { handleResponse } from '../handlers';

const useLoadServerData = async (
  serviceMethod: (...args: any[]) => (...args: any[]) => Promise<Response>,
  token: string,
  ...arg
) => {
  const method = serviceMethod || (() => () => {});
  const fetcher = () =>
    (
      method({
        ...arg,
      })() as unknown as Promise<Response>
    ).then((res) => handleResponse(res as unknown as any));

  return fetcher();
};

export default useLoadServerData;
