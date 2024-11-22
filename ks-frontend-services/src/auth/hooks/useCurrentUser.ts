import { useEffect, useState } from 'react';
import { User } from 'firebase/auth';
import FirebaseAuthService from '../FirebaseAuthService';
import useMutate from '../../hooks/useMutate';
import useSubmit from '../../hooks/useSubmit';
import services from '../../service';
import type { Service, StringIndexedObject } from '../../types';
import type { AuthUser } from '../../generated/components/schemas';

interface CurrentUserHook {
  user?: User;
  isUserLoggedIn: boolean;
  isValidating: boolean;
  revalidate: () => Promise<void>;
  logout: (redirect?: boolean) => Promise<void>;
  userDetails: AuthUser | null;
}

export default function useCurrentUser(
  fetchUserDetails = false,
): CurrentUserHook {
  const [user, setUser] = useState<User>(null);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(null);
  const [userDetails, setUserDetails] = useState<AuthUser>(null);

  const { mutate: logoutMutate } = useMutate(
    FirebaseAuthService.logout.bind(FirebaseAuthService),
  );

  const { submit: me } = useSubmit(services.authUser.me);

  function revalidate(): Promise<void> {
    return new Promise<void>((resolve) => {
      FirebaseAuthService.isUserLoggedIn().then((value: boolean) => {
        setIsUserLoggedIn(value);
        FirebaseAuthService.user().then((value) => {
          setUser(value);
          resolve();
        });
      });
    });
  }

  const logout = async (redirect = false) => {
    await logoutMutate(redirect);
    await revalidate();
    return;
  };

  useEffect(() => {
    if (fetchUserDetails && isUserLoggedIn && !userDetails) {
      me(undefined).then(({ data, error }) => {
        if (!error) {
          setUserDetails(data);
        }
      });
    }
  }, [fetchUserDetails, isUserLoggedIn]);

  useEffect(() => {
    revalidate();
  }, []);

  return {
    user,
    isUserLoggedIn,
    isValidating: isUserLoggedIn === null,
    revalidate,
    logout,
    userDetails,
  };
}
