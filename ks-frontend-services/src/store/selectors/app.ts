import pkg from '@reduxjs/toolkit';

const { createSelector } = pkg;

export const getApp = (state) => state.app;

export const getPathKey = createSelector(getApp, (state) => state.pathKey);
