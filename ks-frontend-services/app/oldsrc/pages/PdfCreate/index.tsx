import { Button, Loader } from '@kanda-libs/ks-design-library';
import { Form, Field } from '@kanda-libs/ks-component-ts';

import usePdfCreate from './usePdfCreate';

const PdfCreate = () => {
  const { form, onSubmit, isSubmitting, onReset, response } = usePdfCreate();

  return (
    <div className="flex flex-col w-full">
      <p className="text-xl mb-6">PDF Services</p>
      <div className="flex flex-col mb-8">
        <div className="flex flex-row justify-between px-4 py-3 bg-neutral-600 rounded-t-lg">
          <p className="text-neutral-300">PDF Creation</p>
        </div>
        <Form id="pdf-create-form" form={form} onSubmit={onSubmit}>
          <div className="px-4 py-5 bg-neutral-700 rounded-b-lg">
            <Field.Input name="id" label="Job ID" />
            <div className="flex flex-row">
              <Button.Text
                id="pdf-create-form-submit"
                label="Submit"
                submit
                disabled={isSubmitting}
              />
              <Button.Text
                id="pdf-create-reset"
                label="Reset"
                onClick={onReset}
                className="ml-4"
                disabled={isSubmitting}
              />
            </div>
            {response && (
              <div className="p-6 bg-neutral-900 mt-6">
                <pre className="whitespace-pre-wrap break-all">
                  {JSON.stringify(response, null, 2)}
                </pre>
              </div>
            )}
          </div>
        </Form>
      </div>
      <Loader isLoading={isSubmitting} />
    </div>
  );
};

export default PdfCreate;
