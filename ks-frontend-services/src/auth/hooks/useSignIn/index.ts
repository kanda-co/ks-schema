import { useState, useCallback } from 'react';
import { RequestFunction } from '@openapi-io-ts/runtime';
import { track, flush } from '@amplitude/analytics-browser';

import { SIGN_IN_METHODS } from './constants';

import type { MutateHook } from '../../../hooks/useMutate';
import { init } from '../../../hooks/helpers';
import { APP_ENV } from '../../../config';

type SignInType = keyof typeof SIGN_IN_METHODS;

export default function useSignIn(type: SignInType): MutateHook {
  const [error, setError] = useState();
  const [data, setData] = useState<Record<string, unknown>>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const method = SIGN_IN_METHODS[type];

  /**
   * Calls the method and handles loading / error states
   */
  const mutate = useCallback(
    async (...arg) => {
      setError(null);
      setIsSubmitting(true);

      const email = arg?.[0]?.email || null;
      const { origin, pathname } = window?.location || {};

      const trackingBody = {
        path: pathname,
        referrer: origin,
        info: {
          login: {
            type,
            ...(email && { email }),
          },
        },
      };

      track('login-attempted', trackingBody);
      flush();

      try {
        /**
         * calls method with payload and sets current data as data
         */
        const res = await method(...arg);
        setData(res);
        /**
         * track login success
         */
        track('login-succeeded', trackingBody);
        flush();
        /**
         * return current data in function in case we need to add .then on mutate
         */
        return { data: res };
      } catch (e) {
        /**
         * logs the error for debugging
         */
        if (APP_ENV === 'qa') console.log('Mutate error', e.errors || e);
        /**
         * track login failure
         */
        track('login-failed', trackingBody);
        flush();
        setError(e);

        return { error: e };
      } finally {
        /**
         * finally sets loading false
         */
        setIsSubmitting(false);
      }
    },
    [type],
  );

  init();

  return {
    mutate,
    error,
    data,
    isSubmitting,
    isLoading: isSubmitting,
  };
}
