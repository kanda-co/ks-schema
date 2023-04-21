import { useState, useCallback } from 'react';
import {
  services,
  useSubmit,
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

  const { submit: readSheet, isSubmitting: readSheetIsSubmitting } = useSubmit(
    services.sheets.read as unknown as Service<
      StringIndexedObject,
      StringIndexedObject,
      StringIndexedObject
    >,
  );

  const onSubmit = useCallback(
    (formValues: StringIndexedObject) => {
      const { spreadsheet_id, range } = formValues;
      readSheet({
        body: {
          ...(spreadsheet_id || {}),
          ...(range || {}),
        },
      }).then(({ data: sheetData, error: sheetError }) => {
        if (sheetError) {
          const message = getApiError(sheetError);
          showError(`Error with PDF: ${message}`);
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
