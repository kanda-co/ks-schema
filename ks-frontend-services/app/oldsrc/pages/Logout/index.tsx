import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  useMutate,
  FirebaseAuthService,
} from '@kanda-libs/ks-frontend-services';

const Logout = () => {
  const { mutate: logout } = useMutate(
    FirebaseAuthService.logout.bind(FirebaseAuthService),
  );

  const { push } = useHistory();

  useEffect(() => {
    logout(false).then(() => push('/login'));
  }, [logout, push]);

  return null;
};

export default Logout;
