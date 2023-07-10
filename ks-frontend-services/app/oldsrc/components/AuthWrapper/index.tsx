import { type FunctionComponent, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useCurrentUser } from '@kanda-libs/ks-frontend-services';

export interface Props {
  children: JSX.Element;
}

const AuthWrapper: FunctionComponent<Props> = function ({ children }) {
  const { isUserLoggedIn, isValidating } = useCurrentUser();

  const { push } = useHistory();

  /**
   * If the token in storage is invalid, logout the user
   */
  useEffect(() => {
    if (!isValidating && !isUserLoggedIn) {
      push('/login');
      return;
    }
  }, [isValidating, isUserLoggedIn, push]);

  return isUserLoggedIn ? children : null;
};

export default AuthWrapper;
