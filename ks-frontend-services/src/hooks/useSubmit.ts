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

export interface Hook<T, V> {
  submit: ServiceSubmit<T, V>;
  error?: string;
  data?: StringIndexedObject;
  isSubmitting?: boolean;
}

/**
 * Hook to handle submissions / mutations
 * @param service ServiceMethod
 * @param formatResponse
 */
export default function useSubmit<T, V>(
  service: Service<T, V>,
  formatResponse = true,
): Hook<T, V> {
  const [error, setError] = useState<string>();
  const [data, setData] = useState<StringIndexedObject>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  /**
   * Calls the method and handles loading / error states
   */
  const submit = useCallback(
    async (args: ServiceParams<V>): Promise<ServiceMethodReturnParams<T>> => {
      if (!service || !service.method) {
        const errorLabel = 'No such method exists';
        setError(errorLabel);
        return { error: errorLabel };
      }

      setError(null);
      setIsSubmitting(true);

      const method = service.method as unknown as (
        args: ServiceParams<V>,
      ) => ServiceMethodReturn<T>;

      const response = formatResponse
        ? ((await method(args)) as unknown as Function)()
        : await method(args);

      try {
        const result = formatResponse
          ? await handleResponse(response as Response)
          : response;
        setData(result as T);
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

  return {
    submit: submit as unknown as ServiceSubmit<T, V>,
    error,
    data,
    isSubmitting,
  };
}
