import React, {
  createContext,
  Dispatch,
  FunctionComponent,
  SetStateAction,
} from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import useModalsWrapper from './hooks/useModalsWrapper';
import Loader from './Loader';

interface SkeletonThemeProps {
  color?: string;
  highlightColor?: string;
  children?: JSX.Element | JSX.Element[];
}

export interface ModalsWrapperContextValue {
  visibleModals: string[];
  visibleAnimatedModals: string[];
  showLoader?: boolean;
  showAnimatedModal: (modalId: string) => void;
  hideAnimatedModal: (modalId: string) => void;
  showModal: (modalId: string) => void;
  hideModal: (modalId: string) => void;
  setShowLoader: Dispatch<SetStateAction<boolean>>;
}

export interface ModalsWrapperProps {
  children: JSX.Element | JSX.Element[];
}

export const ModalsWrapperContext = createContext<ModalsWrapperContextValue>({
  visibleModals: [],
  visibleAnimatedModals: [],
  showLoader: false,
  showAnimatedModal: () => true,
  hideAnimatedModal: () => true,
  showModal: () => true,
  hideModal: () => true,
  setShowLoader: () => true,
});

const Context = ModalsWrapperContext;

export { Context };

const ModalsWrapper: FunctionComponent<ModalsWrapperProps> = function ({
  children,
}) {
  const { showLoader, ...values } = useModalsWrapper();

  const SkeletonThemeTag =
    SkeletonTheme as unknown as FunctionComponent<SkeletonThemeProps>;

  return (
    <SkeletonThemeTag color="#F4F6FA" highlightColor="#E7EBF4">
      <Loader isLoading={showLoader} />
      <ModalsWrapperContext.Provider value={values}>
        {children}
      </ModalsWrapperContext.Provider>
    </SkeletonThemeTag>
  );
};

export default ModalsWrapper;
