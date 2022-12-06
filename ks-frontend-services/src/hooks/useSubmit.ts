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

import { init } from './helpers';

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
export default function useSubmit<Value, Params, Body>(
  service: Service<Value, Params, Body>,
  formatResponse = true,
): Hook<Value, Params, Body> {
  const [error, setError] = useState<string>();
  const [data, setData] = useState<StringIndexedObject>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  /**
   * Calls the method and handles loading / error states
   */
  const submit = useCallback(
    async ({
      body = {} as Body,
      params = {} as Params,
    }: Partial<ServiceParams<Params, Body>>): Promise<
      ServiceMethodReturnParams<Value>
    > => {
      // console.log(user);

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
        args: Partial<ServiceParams<Params, Body>>,
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
        setError(e);
        return { error: e };
      } finally {
        setIsSubmitting(false);
      }
    },
    [service?.method],
  );

  init();

  return {
    submit: submit as unknown as ServiceSubmit<Value, Params, Body>,
    error,
    data,
    isSubmitting,
  };
}
