import { createSelector } from '@reduxjs/toolkit';
import type { StringIndexedObject } from '../../types';
import type { QueryFlags, QueryState, QueryTerms } from '../slices/query';

export interface QuerySelectors {
  getQuery: (state: StringIndexedObject & { query: QueryState }) => QueryState;
  getQueryTerms: (
    state: StringIndexedObject & { query: QueryState },
  ) => QueryTerms;
  getQueryFlags: (
    state: StringIndexedObject & { query: QueryState },
  ) => QueryFlags;
}

export const getQuery = (state: { query: QueryState }) => state.query;

export const getQueryTerms = createSelector(
  getQuery,
  (query): QueryTerms => query.queryTerms,
);

export const getQueryFlags = createSelector(getQuery, (query) => query.flags);

const querySelectors: QuerySelectors = {
  getQuery,
  getQueryTerms,
  getQueryFlags,
};

export default querySelectors;
