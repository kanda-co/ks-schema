import { useCallback, useState } from 'react';

import {
  NewService,
  ServiceMethodReturnParams,
  StringIndexedObject,
} from '../types';
import { OperationArgs, Payload } from '../store/types';
import { handlePayload } from '../store/helpers';

export interface Hook<Entity, Args> {
  submit: (
    args: Args,
    operationArgs?: OperationArgs,
  ) => Promise<ServiceMethodReturnParams<Entity>>;
  error?: string;
  data?: Entity;
  isSubmitting?: boolean;
}

/**
 * Hook to handle submissions / mutations
 * @param service ServiceMethod
 * @param formatResponse
 */
export default function useSubmit<
  Entity extends StringIndexedObject | undefined | void,
  Args extends StringIndexedObject<any> | undefined = undefined,
>(
  service: NewService<Entity, Args>,
  formatResponse = true,
): Hook<Entity, Args> {
  const [error, setError] = useState<string>();
  const [data, setData] = useState<Entity>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { method } = service;

  /**
   * Calls the method and handles loading / error states
   */
  const submit = useCallback(
    async (
      args: Args,
      operationArgs?: OperationArgs,
    ): Promise<ServiceMethodReturnParams<Entity>> => {
      if (!service || !service.method) {
        const errorLabel = 'No such method exists';
        setError(errorLabel);
        return { error: errorLabel };
      }

      setError(null);
      setIsSubmitting(true);

      const payload = method(operationArgs)(args);

      try {
        const result = await handlePayload(payload as Payload<Entity>);
        setData(result as Entity);
        return { data: result };
      } catch (e) {
        setError(e);
        return { error: e };
      } finally {
        setIsSubmitting(false);
      }
    },
    [method],
  );

  return {
    submit,
    error,
    data,
    isSubmitting,
  };
}
