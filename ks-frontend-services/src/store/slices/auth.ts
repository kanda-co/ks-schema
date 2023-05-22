import type { PayloadAction } from '@reduxjs/toolkit';
import type { AuthUser } from '../../generated/components/schemas';
import { createSlice } from '../toolkit';

export interface AuthState {
  isLoading: boolean;
  user: AuthUser | null;
}

const initialState: AuthState = {
  isLoading: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLoggedIn: (state, { payload: user }: PayloadAction<AuthUser>) => {
      return {
        ...state,
        user,
      };
    },
  },
});

export const { userLoggedIn } = authSlice.actions;

export default authSlice.reducer;
