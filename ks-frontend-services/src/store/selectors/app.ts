import { createSelector } from '../toolkit';

export const getApp = (state) => state.app;

export const getPathKey = createSelector(getApp, (state) => state.pathKey);

export const getVisitedPathKeys = createSelector(
  getApp,
  (state) => state.visitedPathKeys,
);

export const getHasVisitedCurrentPagePreviously = createSelector(
  getPathKey,
  getVisitedPathKeys,
  (pathKey, visitedPathKeys) =>
    visitedPathKeys.filter(
      ({ page, id }) => page === pathKey.page && id === pathKey.id,
    ).length > 1,
);
