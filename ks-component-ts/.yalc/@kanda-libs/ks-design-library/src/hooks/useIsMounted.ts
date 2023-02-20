import { useEffect, useRef } from 'react';

export type IsMountedHook = boolean;

export default function useIsMounted(): IsMountedHook {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  return isMounted.current;
}
