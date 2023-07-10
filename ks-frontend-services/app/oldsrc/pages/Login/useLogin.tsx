import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import {
  useSignIn,
  useCurrentUser,
  useSubmit,
  services,
  type Service,
  type UserType,
} from '@kanda-libs/ks-frontend-services';
import { useToast } from '@kanda-libs/ks-design-library';
import { useForm, type StringIndexedObject } from '@kanda-libs/ks-component-ts';

import { getError } from './helpers';
import { URLS } from '../../config';

interface LoginFormProps {
  email: string;
  password: string;
}

export default function useApplyForFinance() {
  const { mutate: googleSignIn, isLoading: googleIsSubmitting } =
    useSignIn('googlePopup');

  const { mutate: login, isLoading: loginIsSubmitting } = useSignIn('email');

  const { showError } = useToast();

  const { push } = useHistory();

  const form = useForm();

  const { revalidate, isValidating } = useCurrentUser();

  const { submit: me, isSubmitting: meIsSubmitting } = useSubmit(
    services.authUser.me as unknown as Service<
      UserType,
      StringIndexedObject,
      StringIndexedObject
    >,
  );

  const afterSignIn = useCallback(async () => {
    await revalidate();
    await me({});
    push(URLS.HOME);
  }, [me, revalidate, push, showError]);

  const signInWithGoogle = useCallback(() => {
    googleSignIn(false).then(({ error: signInGoogleError }) => {
      if (signInGoogleError) {
        showError(getError(signInGoogleError));
        return;
      }
      afterSignIn();
    });
  }, [googleSignIn, afterSignIn, showError]);

  const onSubmit = useCallback((formValues: LoginFormProps): void => {
    login(formValues, false).then(({ error: loginError }) => {
      if (loginError) {
        showError(getError(loginError));
        return;
      }
      afterSignIn();
    });
  }, []);

  const isSubmitting =
    googleIsSubmitting || meIsSubmitting || isValidating || loginIsSubmitting;

  return {
    form,
    onSubmit,
    signInWithGoogle,
    isSubmitting,
  };
}
