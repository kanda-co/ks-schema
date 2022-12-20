declare const useLoadServerData: (serviceMethod: (...args: any[]) => (...args: any[]) => Promise<Response>, token: string, ...arg: any[]) => Promise<unknown>;
export default useLoadServerData;
