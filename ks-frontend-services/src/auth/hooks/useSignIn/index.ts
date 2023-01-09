import { useState, useCallback } from 'react';
import { RequestFunction } from '@openapi-io-ts/runtime';
import {
  Amplitude,
  getEventWindowProperties,
} from '@kanda-libs/ks-amplitude-provider';

import { SIGN_IN_METHODS } from './constants';

import type { MutateHook } from '../../../hooks/useMutate';
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
      const { path, referrer, params } = getEventWindowProperties();

      const trackingBody = {
        path,
        referrer,
        ...(params && { params }),
        info: {
          login: {
            type,
            ...(email && { email }),
          },
        },
      };

      Amplitude?.track('login-attempted', trackingBody);
      Amplitude?.flush();

      try {
        /**
         * calls method with payload and sets current data as data
         */
        const res = await method(...arg);
        setData(res);
        /**
         * track login success
         */
        Amplitude?.track('login-succeeded', trackingBody);
        Amplitude?.flush();
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
        Amplitude?.track('login-failed', {
          ...trackingBody,
          info: {
            ...trackingBody.info,
            login: {
              ...trackingBody.info.login,
              error: e.message,
            },
          },
        });
        Amplitude?.flush();
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

  return {
    mutate,
    error,
    data,
    isSubmitting,
    isLoading: isSubmitting,
  };
}
