import { Button } from '@kanda-libs/ks-design-library';
import { services } from '@kanda-libs/ks-frontend-services';

import useService from './useService';

interface TemplateProps {
  service: string;
}

const Template = ({ service }: TemplateProps) => {
  const { onClick, onReset, isSubmitting, response, show, onShow } =
    useService(service);

  return (
    <div className="flex flex-col">
      <div
        className={`flex flex-row justify-between px-4 py-3 bg-neutral-600 rounded${
          show ? '-t' : ''
        }-lg`}
      >
        <p className="text-neutral-300">{service}</p>
        <Button.Link label={show ? 'Hide' : 'Show'} onClick={onShow} />
      </div>
      {show && (
        <div className="px-4 py-5 bg-neutral-700 rounded-b-lg">
          <div className="flex flex-row">
            <Button.Text
              label="Submit"
              onClick={onClick}
              disabled={isSubmitting}
            />
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
      )}
    </div>
  );
};

export default Template;
