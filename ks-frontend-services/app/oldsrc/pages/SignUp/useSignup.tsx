import { useState, useCallback } from 'react';
import { type StringIndexedObject, useForm } from '@kanda-libs/ks-component-ts';
import { useSubmit, services } from '@kanda-libs/ks-frontend-services';

const parsePhoneNumber = (number: string, code = '+44') => {
  if (!number) return '';
  if (number[0] === '0') return `${code}${number.slice(1)}`;
  if (number[0] === '+') return number;
  return `${code}${number}`;
};

export default function useService() {
  const form = useForm();
  const [response, setResponse] = useState(null);

  const { submit: signUp, isSubmitting } = useSubmit(services.authUser.postMe);

  const onSubmit = useCallback((formValues: StringIndexedObject) => {
    const body = {
      name: `${formValues.firstName} ${formValues.lastName}`,
      email: formValues.emailAddress,
      phone: parsePhoneNumber(formValues.phoneNumber),
    };
    signUp({ body }).then((response) => setResponse(response));
  }, []);

  return {
    form,
    onSubmit,
    response,
    isSubmitting,
  };
}
