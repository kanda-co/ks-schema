import { type Dispatch, type SetStateAction, useState } from 'react';
import useModals, { type ModalsHook } from './useModals';
import useAnimatedModals, {
  type AnimatedModalsHook,
} from './useAnimatedModals';
import useViewportVariables from './useViewportVariables';

type ChildModalHooks = ModalsHook & AnimatedModalsHook;

export interface ModalsWrapperHook extends ChildModalHooks {
  showLoader: boolean;
  setShowLoader: Dispatch<SetStateAction<boolean>>;
}

export default function useModalsWrapper(): ModalsWrapperHook {
  useViewportVariables();

  const [showLoader, setShowLoader] = useState(false);

  const contextValues = useModals();
  const animatedContextValues = useAnimatedModals();

  return {
    showLoader,
    setShowLoader,
    ...contextValues,
    ...animatedContextValues,
  };
}
