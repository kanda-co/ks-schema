import { useState, useCallback } from 'react';

interface Hook {
  mutate: (
    // TODO: Argument generic
    ...arg: any[]
  ) => Promise<
    | { data: Record<string, unknown>; error?: any }
    | { error: any; data?: undefined }
  >;
  error: any;
  data: Record<string, unknown>;
  isSubmitting: boolean;
  isLoading: boolean;
}

export default function useMutate(method: Function): Hook {
  const [error, setError] = useState();
  const [data, setData] = useState<Record<string, unknown>>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  /**
   * Calls the method and handles loading / error states
   */
  const mutate = useCallback(async (...arg) => {
    setError(null);
    setIsSubmitting(true);

    try {
      /**
       * calls method with payload and sets current data as data
       */
      const res = await method(...arg);
      setData(res);

      /**
       * return current data in function in case we need to add .then on mutate
       */
      return { data: res };
    } catch (e) {
      /**
       * logs the error for debugging
       */
      console.log('Mutate error', e.errors || e);

      setError(e);

      return { error: e };
    } finally {
      /**
       * finally sets loading false
       */
      setIsSubmitting(false);
    }
  }, []);

  return {
    mutate,
    error,
    data,
    isSubmitting,
    isLoading: isSubmitting,
  };
}
