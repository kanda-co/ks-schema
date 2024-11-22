import { NewService, ServiceMethodReturnParams, StringIndexedObject } from '../types';
import { OperationArgs } from '../store/types';
export interface Hook<Entity, Args> {
    submit: (args: Args, operationArgs?: OperationArgs) => Promise<ServiceMethodReturnParams<Entity>>;
    error?: string;
    data?: Entity;
    isSubmitting?: boolean;
}
/**
 * Hook to handle submissions / mutations
 * @param service ServiceMethod
 * @param formatResponse
 */
export default function useSubmit<Entity extends StringIndexedObject | undefined | void, Args extends StringIndexedObject<any> | undefined = undefined>(service: NewService<Entity, Args>, formatResponse?: boolean): Hook<Entity, Args>;
