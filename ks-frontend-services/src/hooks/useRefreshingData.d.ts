import type { PublicConfiguration } from 'swr/dist/types';
import type { Service } from '../types';
declare const useRefreshingData: <Value, Params, Body_1>(service: Service<Value, Params, Body_1>, options: Pick<PublicConfiguration, 'revalidateOnMount' | 'refreshInterval'>, ...arg: any[]) => import("swr").SWRResponse<any, any>;
export default useRefreshingData;
