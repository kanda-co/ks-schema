import type { ServiceMethod, ServiceParams, StringIndexedObject } from '../types';
/**
 * Helper function used to request data from a service whilst running on the server / node
 */
export declare const loadServerData: <Value extends StringIndexedObject<any>, Params extends StringIndexedObject<any> = {}, Body_1 extends StringIndexedObject<any> = {}>(serviceMethod: ServiceMethod<Value, Params, Body_1>, args: ServiceParams<Params, Body_1>) => Promise<unknown>;
