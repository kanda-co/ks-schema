import type { Service } from '../../types';
import type { LoadDataHookOptions } from './types';
declare const useLoadData: <Value, Args = undefined>(service?: Service<Value, Args>, options?: LoadDataHookOptions, enabled?: boolean, ...arg: any[]) => import("swr").SWRResponse<Value, any>;
export default useLoadData;
