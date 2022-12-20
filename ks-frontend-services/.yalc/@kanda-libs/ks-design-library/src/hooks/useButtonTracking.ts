import { useCallback, type MouseEvent } from 'react';
import { Amplitude, useAmplitude } from '@kanda-libs/ks-amplitude-provider';
import type { ButtonOnClick } from '~/types';

export interface UseButtonTrackingHook {
  onClick: ButtonOnClick;
}

export default function useButtonTracking(
  id: string,
  onClick?: ButtonOnClick,
): UseButtonTrackingHook {
  const { logEvent } = useAmplitude();
  const { flush } = Amplitude;

  const interceptedOnClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>): void => {
      logEvent('button-interacted', {
        element_id: id,
      });
      flush();
      if (onClick) onClick(event);
    },
    [logEvent, flush, id, onClick],
  );

  return {
    onClick: interceptedOnClick,
  };
}
