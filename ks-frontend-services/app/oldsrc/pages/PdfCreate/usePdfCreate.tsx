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

export default function usePdfCreate() {
  const [response, setResponse] = useState(null);

  const form = useForm();
  const { showError } = useToast();

  const { submit: getJob, isSubmitting: jobIsSubmitting } = useSubmit(
    services.job.getJob,
  );

  const { submit: getCompanyInfo, isSubmitting: infoIsSubmitting } = useSubmit(
    services.job.jobCompanyInfo,
  );

  const { submit: createPdf, isSubmitting: createPdfIsSubmitting } = useSubmit(
    services.pdf.create as unknown as Service<
      StringIndexedObject,
      StringIndexedObject,
      StringIndexedObject
    >,
  );

  const onSubmit = useCallback(
    (formValues: StringIndexedObject) => {
      const { id } = formValues;
      getJob({ params: { id } }).then(({ data: job, error: jobError }) => {
        if (jobError) {
          const message = getApiError(jobError);
          showError(`Error with job: ${message}`);
          return;
        }
        getCompanyInfo({ params: { id } }).then(
          ({ data: company, error: companyError }) => {
            if (companyError) {
              const message = getApiError(companyError);
              showError(`Error with job: ${message}`);
              return;
            }
            createPdf({
              body: {
                job,
                company,
              },
            }).then(({ data: pdf, error: pdfError }) => {
              if (pdfError) {
                const message = getApiError(companyError);
                showError(`Error with PDF: ${message}`);
                return;
              }
              setResponse(pdf);
            });
          },
        );
      });
    },
    [getJob, getCompanyInfo, createPdf, showError],
  );

  // setResponse(response)
  const isSubmitting =
    jobIsSubmitting || infoIsSubmitting || createPdfIsSubmitting;

  const onReset = useCallback(() => setResponse(null), []);

  return {
    onSubmit,
    onReset,
    isSubmitting,
    response,
    form,
  };
}
