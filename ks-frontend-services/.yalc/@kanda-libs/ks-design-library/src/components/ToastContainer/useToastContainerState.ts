import type { ToastContainerProps } from 'react-toastify';
import { INITIAL_STATE } from './constants';

export interface Hook {}

export default function useToastContainerState(
  props: ToastContainerProps,
): Hook {
  const state = {
    ...INITIAL_STATE,
    ...props,
  };

  return state;
}
