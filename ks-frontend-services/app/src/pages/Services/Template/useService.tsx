import { useState, useMemo, useCallback } from 'react';
import { services, useSubmit } from '@kanda-libs/ks-frontend-services';
import { type StringIndexedObject, useForm } from '@kanda-libs/ks-component-ts';
import get from 'lodash.get';

export default function useService(
  service: string,
  params?: StringIndexedObject,
) {
  const [show, setShow] = useState(false);
  const [response, setResponse] = useState(null);

  const form = useForm();

  const name = `${service}.id`;

  const serviceObject = useMemo(() => {
    if (!service) return null;
    return get(services, service);
  }, [service]);

  const { submit, isSubmitting } = useSubmit(serviceObject);

  const onSubmit = useCallback(
    (formValues: StringIndexedObject) => {
      const id = get(formValues, name);
      const combinedParams = {
        ...params,
        ...(id && { id }),
      };
      submit({ params: combinedParams }).then((response) =>
        setResponse(response),
      );
    },
    [submit, params],
  );

  const onReset = useCallback(() => setResponse(null), []);

  const onShow = useCallback(() => {
    if (show) setResponse(null);
    setShow(!show);
  }, [show]);

  return {
    onSubmit,
    onReset,
    show,
    onShow,
    isSubmitting,
    response,
    form,
    name,
  };
}
