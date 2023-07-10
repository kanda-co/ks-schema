import { Button, Loader } from '@kanda-libs/ks-design-library';
import { Form, Field, Widget } from '@kanda-libs/ks-component-ts';

import useEnterprise from './useEnterprise';

const Enterprise = () => {
  const { onSubmit } = useEnterprise();

  return (
    <div className="flex flex-col w-full">
      <p className="text-xl mb-6">Enterprise Services</p>
      <div className="flex flex-col mb-8">
        <div className="flex flex-row justify-between px-4 py-3 bg-neutral-600 rounded-t-lg">
          <p className="text-neutral-300">Post Enterprise Branch</p>
        </div>
        <div className="px-4 py-5 bg-neutral-700 rounded-b-lg">
          <div className="flex flex-row">
            <Button.Text
              id="enterprise-submit"
              label="Submit"
              onClick={onSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enterprise;
