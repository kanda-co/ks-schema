import { Button, Loader } from '@kanda-libs/ks-design-library';

import useLogin from './useLogin';

const Login = () => {
  const { signInWithGoogle, isSubmitting } = useLogin();

  return (
    <div className="flex flex-col">
      <p className="mb-4">Login</p>
      <Button.Text label="Login" onClick={signInWithGoogle} />
      <Loader isLoading={isSubmitting} />
    </div>
  );
};

export default Login;
