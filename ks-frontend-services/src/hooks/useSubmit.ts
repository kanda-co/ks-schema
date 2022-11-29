import { useCallback, useState } from 'react';
import {
  Service,
  ServiceMethod,
  ServiceMethodReturn,
  ServiceMethodReturnParams,
  ServiceParams,
  ServiceSubmit,
  StringIndexedObject,
} from '../types';
import { handleResponse, Response } from '../handlers';

// TODO: Fix
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
export default function useSubmit<Value, Args>(
  service: Service<Value, Args>,
  formatResponse = true,
): Hook<Value, Args> {
  const [error, setError] = useState<string | null>();
  const [data, setData] = useState<StringIndexedObject>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  /**
   * Calls the method and handles loading / error states
   */
  const submit = useCallback(
    async ({
      body = {} as Body,
      params = {} as Args,
    }: Partial<ServiceParams<Args, Body>>): Promise<
      ServiceMethodReturnParams<Value>
    > => {
      if (!service || !service.method) {
        const errorLabel = 'No such method exists';
        setError(errorLabel);
        return { error: errorLabel };
      }

      setError(null);
      setIsSubmitting(true);

      /**
       * This is needed because both body and params are marked as required at
       * the service level for each individual request interface. But some may
       * have no params, body or both.
       */
      const args = {
        body,
        params,
      };

      const method = service.method as unknown as (
        args: Partial<ServiceParams<Args, Body>>,
      ) => ServiceMethodReturn<Value>;

      const response = formatResponse
        ? await (method(args) as unknown as Function)()
        : await method(args);

      try {
        const result = formatResponse
          ? await handleResponse(response as Response)
          : response;
        setData(result as Value);
        return { data: result };
      } catch (e) {
        setError(e as string);
        return { error: e as string };
      } finally {
        setIsSubmitting(false);
      }
    },
    [service?.method],
  );

  return {
    submit: submit as unknown as ServiceSubmit<Value, Args, {}>,
    error: error as string,
    data,
    isSubmitting,
  };
}
