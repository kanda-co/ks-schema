import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  useSignIn,
  useCurrentUser,
  useSubmit,
  services,
  type Service,
  type UserType,
} from '@kanda-libs/ks-frontend-services';
import { useToast } from '@kanda-libs/ks-design-library';
import { type StringIndexedObject } from '@kanda-libs/ks-component-ts';

import { getError } from './helpers';
import { URLS } from '../../config';

export default function useApplyForFinance() {
  const { mutate: googleSignIn, isLoading: googleIsSubmitting } =
    useSignIn('googlePopup');

  const { showError } = useToast();

  const navigate = useNavigate();

  const { revalidate, isValidating } = useCurrentUser();

  const { submit: me, isSubmitting: meIsSubmitting } = useSubmit(
    services.authUser.me as unknown as Service<
      UserType,
      StringIndexedObject,
      StringIndexedObject
    >,
  );

  // revalidate().then(() => me({}).then(() => navigate))

  const afterSignIn = useCallback(async () => {
    await revalidate();
    await me({});
    navigate(URLS.HOME);
  }, [me, revalidate, navigate, showError]);

  const signInWithGoogle = useCallback(() => {
    googleSignIn(false).then(({ error: signInGoogleError }) => {
      if (signInGoogleError) {
        showError(getError(signInGoogleError));
        return;
      }
      afterSignIn();
    });
  }, [googleSignIn, afterSignIn, showError]);

  const isSubmitting = googleIsSubmitting || meIsSubmitting || isValidating;

  return {
    signInWithGoogle,
    isSubmitting,
  };
}
