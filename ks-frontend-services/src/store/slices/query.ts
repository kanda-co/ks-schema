import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type QueryType = 'home' | 'jobs' | 'payments' | 'loans';

type QueryTerms = {
  [key in QueryType]?: string;
};

export interface QueryFlags {
  home: {
    completedSetup: boolean;
  };
  jobs: {
    pendingPayout: boolean;
    satNoteSigned: boolean;
    solar: boolean;
  };
  loans: {
    solar: boolean;
  };
}

export interface QueryState {
  queryTerms: QueryTerms;
  flags: QueryFlags;
  isLoading: boolean;
}

const initialState: QueryState = {
  queryTerms: {
    home: '',
    jobs: '',
    payments: '',
    loans: '',
  },
  flags: {
    home: {
      completedSetup: false,
    },
    jobs: {
      solar: false,
      satNoteSigned: false,
      pendingPayout: false,
    },
    loans: {
      solar: false,
    },
  },
  isLoading: false,
};

export const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    setFlags: (
      state,
      action: PayloadAction<[QueryType, QueryFlags[keyof QueryFlags]]>,
    ) => ({
      ...state,
      flags: {
        ...state.flags,
        [action.payload[0]]: action.payload[1],
      },
    }),
    setQuery: (state, action: PayloadAction<[QueryType, string]>) => ({
      ...state,
      queryTerms: {
        ...state.queryTerms,
        [action.payload[0]]: action.payload[1],
      },
    }),
  },
});

export const { setFlags, setQuery } = querySlice.actions;

export default querySlice.reducer;
