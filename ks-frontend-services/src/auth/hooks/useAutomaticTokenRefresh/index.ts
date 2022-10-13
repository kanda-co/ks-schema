import { useEffect, useRef } from 'react';
import FirebaseAuthService from '../../FirebaseAuthService';
import useCurrentUser from '../useCurrentUser';
import { REFRESH_TOKEN_TIMER_IN_MINUTES } from './constants';

export default function useAutomaticTokenRefresh(): void {
  const { isUserLoggedIn } = useCurrentUser();
  const refreshTimerRef = useRef<NodeJS.Timer>(null);

  useEffect(() => {
    if (!isUserLoggedIn) return null;

    refreshTimerRef.current = setInterval(async () => {
      await FirebaseAuthService.token();
    }, REFRESH_TOKEN_TIMER_IN_MINUTES);

    return () => {
      clearTimeout(refreshTimerRef.current);
    };
  }, [isUserLoggedIn]);
}
