import type { StringIndexedObject } from '../../types';
import type { QueryFlags, QueryState, QueryTerms } from '../slices/query';
export interface QuerySelectors {
  getQuery: (
    state: StringIndexedObject & {
      query: QueryState;
    },
  ) => QueryState;
  getQueryTerms: (
    state: StringIndexedObject & {
      query: QueryState;
    },
  ) => QueryTerms;
  getQueryFlags: (
    state: StringIndexedObject & {
      query: QueryState;
    },
  ) => QueryFlags;
}
export declare const getQuery: (state: { query: QueryState }) => QueryState;
export declare const getQueryTerms: ((state: {
  query: QueryState;
}) => QueryTerms) &
  import('reselect').OutputSelectorFields<
    (args_0: QueryState) => QueryTerms & {
      clearCache: () => void;
    }
  > & {
    clearCache: () => void;
  };
export declare const getQueryFlags: ((state: {
  query: QueryState;
}) => QueryFlags) &
  import('reselect').OutputSelectorFields<
    (args_0: QueryState) => QueryFlags & {
      clearCache: () => void;
    }
  > & {
    clearCache: () => void;
  };
declare const querySelectors: QuerySelectors;
export default querySelectors;
