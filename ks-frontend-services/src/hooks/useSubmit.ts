import { useCallback, useState } from 'react';
import { ServiceMethod, StringIndexedObject } from '../types';
import { handleResponse, Response } from '../handlers';
import { RequestFunction } from '@openapi-io-ts/runtime';

export interface Hook {
  submit: (args: Array<any>) => void;
  error?: string;
  data?: StringIndexedObject;
  isSubmitting?: boolean;
}

/**
 * Hook to handle submissions / mutations
 * @param service ServiceMethod
 * @param formatResponse
 */
export default function useSubmit<T>(
  service: ServiceMethod<RequestFunction<{ body: T }, T>>,
  formatResponse = true,
): Hook {
  const [error, setError] = useState<string>();
  const [data, setData] = useState<StringIndexedObject>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  /**
   * Calls the method and handles loading / error states
   */
  const submit = useCallback(
    async (...arg) => {
      if (!service || !service.method) {
        const errorLabel = 'No such method exists';
        setError(errorLabel);
        return { error: errorLabel };
      }

      setError(null);
      setIsSubmitting(true);

      const response = formatResponse
        ? await service.method(...arg)()
        : await service.method(...arg);

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
    submit,
    error,
    data,
    isSubmitting,
  };
}
