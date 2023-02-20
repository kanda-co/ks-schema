import React, { FunctionComponent } from 'react';
import useLoadingProviderValue from './useLoadingProviderValue';
import { Context } from './Context';

export interface LoadingProviderProps {
  /**
   * The children contained within the provider
   */
  children: JSX.Element;
  /**
   * isLoading state
   */
  isLoading: boolean;
  /**
   * overwrite state
   */
  overwrite?: boolean;
}

const LoadingProvider: FunctionComponent<LoadingProviderProps> = function ({
  isLoading,
  overwrite,
  children,
}) {
  const value = useLoadingProviderValue(isLoading, overwrite);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default LoadingProvider;
