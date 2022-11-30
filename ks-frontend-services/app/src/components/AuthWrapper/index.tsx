import { type FunctionComponent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCurrentUser } from '@kanda-libs/ks-frontend-services';

export interface Props {
  children: JSX.Element;
}

const AuthWrapper: FunctionComponent<Props> = function ({ children }) {
  const { isUserLoggedIn, isValidating } = useCurrentUser();

  const navigate = useNavigate();

  /**
   * If the token in storage is invalid, logout the user
   */
  useEffect(() => {
    if (!isValidating && !isUserLoggedIn) {
      navigate('/login');
      return;
    }
  }, [isValidating, isUserLoggedIn, navigate]);

  return isUserLoggedIn ? children : null;
};

export default AuthWrapper;
