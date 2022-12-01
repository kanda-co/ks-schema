import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  useMutate,
  FirebaseAuthService,
} from '@kanda-libs/ks-frontend-services';

const Logout = () => {
  const { mutate: logout } = useMutate(
    FirebaseAuthService.logout.bind(FirebaseAuthService),
  );

  const navigate = useNavigate();

  useEffect(() => {
    logout(false).then(() => navigate('/login'));
  }, [logout, navigate]);

  return null;
};

export default Logout;
