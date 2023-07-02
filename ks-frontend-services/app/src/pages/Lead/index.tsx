import { Button, Loader } from '@kanda-libs/ks-design-library';

import useLeadCreate from './useLeadCreate';

const Lead = () => {
  const { onSubmit, isSubmitting } = useLeadCreate();

  return (
    <div className="flex flex-col w-full">
      <p className="text-xl mb-6">Lead Services</p>
      <div className="flex flex-col mb-8">
        <div className="flex flex-row justify-between px-4 py-3 bg-neutral-600 rounded-t-lg">
          <p className="text-neutral-300">Lead Creation</p>
        </div>
        <div className="px-4 py-5 bg-neutral-700 rounded-b-lg">
          <p>lead</p>
          <Button.Text id="test-post-lead" onClick={onSubmit} label="submit" />
        </div>
      </div>

      <Loader isLoading={isSubmitting} />
    </div>
  );
};

export default Lead;
