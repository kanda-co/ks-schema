// import { useState, useCallback } from 'react';
import {
  services,
  useSubmit,
  type Service,
  type Lead,
  useLoadData,
  useCurrentUser,
} from '@kanda-libs/ks-frontend-services';
import { type StringIndexedObject } from '@kanda-libs/ks-component-ts';
import { useCallback } from 'react';
// import { useToast } from '@kanda-libs/ks-design-library';

// const getApiError = (error: StringIndexedObject<any> | string): string => {
//   if (typeof error === 'string') return error;
//   return error?.message || 'Unknown error';
// };

export default function useLeadCreate() {
  const { isUserLoggedIn } = useCurrentUser();

  const { submit: postLead, isSubmitting: leadIsSubmitting } = useSubmit(
    services.lead.postLead as unknown as Service<
      Lead,
      StringIndexedObject,
      StringIndexedObject
    >,
  );

  const { data: me } = useLoadData(
    (isUserLoggedIn && services.job.getJob) as unknown as Service<
      StringIndexedObject,
      StringIndexedObject,
      StringIndexedObject
    >,
    {
      revalidateOnMount: true,
    },
    {
      params: {
        id: '783880c6-25f4-4276-8c3a-938565eada49',
      },
      additionalHeaders: {
        'x-kanda-eid': 'eid',
        'x-kanda-bid': 'bid',
      },
    },
  );

  const onSubmit = useCallback(() => {
    const body = {};
    const additionalHeaders = {
      'x-kanda-eid': 'eid',
      'x-kanda-bid': 'bid',
    };
    postLead({
      body,
      additionalHeaders,
    });
  }, [postLead]);

  return {
    onSubmit,
    isSubmitting: leadIsSubmitting,
  };
}
