import { createSelector } from '@reduxjs/toolkit';
import type { StringIndexedObject } from '../../types';
import {
  type PathKey,
  slices as allSlices,
  pathKeyToLoadingDependencies,
} from '../../';
import type { GeneratedState } from '../types';

export interface AppSelectors<
  State extends StringIndexedObject,
  Pages extends StringIndexedObject,
> {
  getRoot: (state: State) => State;
  getApp: (state: State) => State['app'];
  getPathKey: (state: State) => PathKey<Pages>;
  getIsLoading: (state: State) => boolean;
}

export const getAppSelectors = <
  State extends StringIndexedObject,
  Pages extends StringIndexedObject,
>(): AppSelectors<State, Pages> => {
  const getRoot = (state: State) => state;

  const getApp = (state: State) => state.app;

  const getPathKey = createSelector(
    getApp,
    (state) =>
      (state as StringIndexedObject).pathKey as unknown as PathKey<Pages>,
  );

  const getIsLoading = createSelector(getRoot, getPathKey, (root, pathKey) => {
    const dependencies = pathKeyToLoadingDependencies<State, Pages>(pathKey);

    return (
      dependencies.length === 0 ||
      dependencies.some(
        (dependency) =>
          (root[dependency] as GeneratedState<unknown>)?.isLoading || false,
      )
    );
  });

  return {
    getRoot,
    getApp,
    getPathKey,
    getIsLoading,
  };
};
