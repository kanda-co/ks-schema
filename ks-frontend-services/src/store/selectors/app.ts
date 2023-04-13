import { createSelector } from '../toolkit';

export const getApp = (state) => state.app;

export const getPathKey = createSelector(getApp, (state) => state.pathKey);
