import { Button } from '@kanda-libs/ks-design-library';
import { Form, Field } from '@kanda-libs/ks-component-ts';

import useService from './useService';

interface TemplateProps {
  service: string;
  showIdField?: boolean;
}

const Template = ({ service, showIdField = false }: TemplateProps) => {
  const {
    form,
    onSubmit,
    name,
    onReset,
    isSubmitting,
    response,
    show,
    onShow,
  } = useService(service);

  return (
    <div className="flex flex-col mb-8">
      <div
        className={`flex flex-row justify-between px-4 py-3 bg-neutral-600 rounded${
          show ? '-t' : ''
        }-lg`}
      >
        <p className="text-neutral-300">{service}</p>
        <Button.Link label={show ? 'Hide' : 'Show'} onClick={onShow} />
      </div>
      {show && (
        <Form form={form} onSubmit={onSubmit}>
          <div className="px-4 py-5 bg-neutral-700 rounded-b-lg">
            {showIdField && <Field.Input name={name} />}
            <div className="flex flex-row">
              <Button.Text label="Submit" submit disabled={isSubmitting} />
              <Button.Text
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
      )}
    </div>
  );
};

export default Template;
