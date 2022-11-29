import { Service, ServiceSubmit, StringIndexedObject } from '../types';
export interface Hook<Value, Params, Body> {
    submit: ServiceSubmit<Value, Params, Body>;
    error?: string;
    data?: StringIndexedObject;
    isSubmitting?: boolean;
}
/**
 * Hook to handle submissions / mutations
 * @param service ServiceMethod
 * @param formatResponse
 */
export default function useSubmit<Value, Params, Body>(service: Service<Value, Params, Body>, formatResponse?: boolean): Hook<Value, Params, Body>;
