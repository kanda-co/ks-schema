import { useState, useCallback } from 'react';
import {
  services,
  useSubmit,
  useLoadData,
  useCurrentUser,
  type Service,
} from '@kanda-libs/ks-frontend-services';
import { type StringIndexedObject, useForm } from '@kanda-libs/ks-component-ts';
import { useToast } from '@kanda-libs/ks-design-library';

const getApiError = (error: StringIndexedObject<any> | string): string => {
  if (typeof error === 'string') return error;
  return error?.message || 'Unknown error';
};

export default function useSheets() {
  const [response, setResponse] = useState(null);

  const form = useForm();
  const { showError } = useToast();

  const { isUserLoggedIn } = useCurrentUser();

  const { submit: readSheet, isSubmitting: readSheetIsSubmitting } = useSubmit(
    services.sheets.read as unknown as Service<
      StringIndexedObject,
      StringIndexedObject,
      StringIndexedObject
    >,
  );

  const { data: test } = useLoadData(
    (isUserLoggedIn && services.sheets.read) as unknown as Service<
      StringIndexedObject,
      StringIndexedObject,
      StringIndexedObject
    >,
    {
      useParamsAsKey: true,
    },
    {
      params: {
        id: '1hYHhv4wVfdBUoZDl6_mNINMKz9OtZ8dI-g_vKV4eyBY',
        type: 'batch',
      },
    },
  );

  console.log({ test });

  const { data: test2 } = useLoadData(
    (isUserLoggedIn && services.sheets.read) as unknown as Service<
      StringIndexedObject,
      StringIndexedObject,
      StringIndexedObject
    >,
    {},
    {},
  );

  console.log({ test2 });

  const onSubmit = useCallback(
    (formValues: StringIndexedObject) => {
      const { spreadsheet_id, range } = formValues;
      readSheet({
        ...({ id: spreadsheet_id } || {}),
        ...(range || {}),
      }).then(({ data: sheetData, error: sheetError }) => {
        if (sheetError) {
          const message = getApiError(sheetError);
          showError(`Error with sheet read: ${message}`);
          return;
        }
        setResponse(sheetData);
      });
    },
    [readSheet, showError],
  );

  // setResponse(response)
  const isSubmitting = readSheetIsSubmitting;

  const onReset = useCallback(() => setResponse(null), []);

  return {
    onSubmit,
    onReset,
    isSubmitting,
    response,
    form,
  };
}
