import { useEffect, useState } from 'react';
import { User } from 'firebase/auth';
import FirebaseAuthService from '../FirebaseAuthService';
import useMutate from '../../hooks/useMutate';

interface Hook {
  user?: User;
  isUserLoggedIn: boolean;
  isValidating: boolean;
  revalidate: () => Promise<void>;
  logout: (redirect?: boolean) => Promise<void>;
}

export default function useCurrentUser(): Hook {
  const [user, setUser] = useState<User>(null);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(null);
  const { mutate: logoutMutate } = useMutate(
    FirebaseAuthService.logout.bind(FirebaseAuthService),
  );

  function revalidate(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      FirebaseAuthService.isUserLoggedIn().then((value) => {
        setIsUserLoggedIn(value);
      });

      FirebaseAuthService.user().then((value) => {
        setUser(value);
      });

      resolve();
    });
  }

  const logout = async (redirect = false) => {
    await logoutMutate(redirect);
    await revalidate();
    return;
  };

  useEffect(() => {
    revalidate();
  }, []);

  return {
    user,
    isUserLoggedIn,
    isValidating: isUserLoggedIn === null,
    revalidate,
    logout,
  };
}
