import {
  Button, // LogOnMount
} from '@kanda-libs/ks-design-library';
import { Form, Field } from '@kanda-libs/ks-component-ts';

import useSignup from './useSignup';
import { FORM_PROPS } from './constants';

const SignUp = () => {
  const { form, onSubmit, response, isSubmitting } = useSignup();

  return (
    <div className="flex flex-col w-full">
      <p className="text-xl mb-6">Sign up</p>
      <div className="flex flex-col mb-8">
        <div className="flex flex-row justify-between px-4 py-3 bg-neutral-600 rounded-t">
          <p className="text-neutral-300">Sign up</p>
        </div>
        <Form form={form} onSubmit={onSubmit}>
          <div className="px-4 py-5 bg-neutral-700 rounded-b-lg">
            <Field.Validator validation={FORM_PROPS.firstName.validation}>
              <Field.Input {...FORM_PROPS.firstName} />
            </Field.Validator>

            <Field.Validator validation={FORM_PROPS.lastName.validation}>
              <Field.Input {...FORM_PROPS.lastName} />
            </Field.Validator>

            <Field.Validator validation={FORM_PROPS.phone.validation}>
              <Field.PhoneNumberInput {...FORM_PROPS.phone} />
            </Field.Validator>

            <Field.Validator validation={FORM_PROPS.email.validation}>
              <Field.Input {...FORM_PROPS.email} />
            </Field.Validator>

            <div className="flex flex-row">
              <Button.Text label="Submit" submit disabled={isSubmitting} />
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
      {/* <LogOnMount
        eventType="page-view"
        eventProperties={{
          path: '/sign-up',
        }}
      /> */}
    </div>
  );
};

export default SignUp;
