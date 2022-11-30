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

  const serviceObject = useMemo(() => {
    if (!service) return null;
    return get(services, service);
  }, [service]);

  const { submit, isSubmitting } = useSubmit(serviceObject);

  const onClick = useCallback(
    () => submit({ params }).then((response) => setResponse(response)),
    [submit, params],
  );

  const onReset = useCallback(() => setResponse(null), []);

  const onShow = useCallback(() => {
    if (show) setResponse(null);
    setShow(!show);
  }, [show]);

  return {
    onClick,
    onReset,
    show,
    onShow,
    isSubmitting,
    response,
  };
}
