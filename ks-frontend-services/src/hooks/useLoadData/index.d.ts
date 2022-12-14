import type { LoadDataHookOptions } from './types';
import type { Service } from '../../types';
declare const useLoadData: <Value, Params = undefined, Body_1 = undefined>(service?: false | Service<Value, Params, Body_1>, options?: LoadDataHookOptions, ...arg: any[]) => import("swr").SWRResponse<Value, any>;
export default useLoadData;
