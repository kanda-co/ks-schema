import { useEffect } from 'react';
import FirebaseAuthService from '../../FirebaseAuthService';
import userCurrentUser from '../../hooks/useCurrentUser';

/**
 * Hook that returns whether a user is logged in and automatically
 * redirects to the login page if not.
 */
export default function useFirebaseAuthWrapper(): boolean {
  const { isUserLoggedIn, isValidating } = userCurrentUser();

  /**
   * If the token in storage is invalid, logout the user
   */
  useEffect(() => {
    if (!isValidating && !isUserLoggedIn) {
      FirebaseAuthService.logout();
    }
  }, [isValidating, isUserLoggedIn]);

  return isUserLoggedIn;
}
