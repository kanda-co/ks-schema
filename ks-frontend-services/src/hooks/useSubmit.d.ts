import { Service, ServiceSubmit, StringIndexedObject } from '../types';
export interface Hook<Value, Params, Body = {}> {
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
export default function useSubmit<Value, Args>(service: Service<Value, Args>, formatResponse?: boolean): Hook<Value, Args>;
