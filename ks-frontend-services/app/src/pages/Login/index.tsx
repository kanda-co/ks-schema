import { Button, Loader } from '@kanda-libs/ks-design-library';
import { Form, Field } from '@kanda-libs/ks-component-ts';

import useLogin from './useLogin';

const Login = () => {
  const { signInWithGoogle, isSubmitting, form, onSubmit } = useLogin();

  return (
    <Form id="test-login" form={form} onSubmit={onSubmit}>
      <div className="flex flex-col">
        <p className="text-xl mb-6">Login</p>
        <Field.Input name="email" label="Email" />
        <Field.PasswordInput name="password" label="Password" />
        <Button.Text id="test-login" label="Login" submit className="mb-6" />
        <Button.Text
          id="test-google-login"
          label="Login with Google"
          onClick={signInWithGoogle}
        />
        <Loader isLoading={isSubmitting} />
      </div>
    </Form>
  );
};

export default Login;
