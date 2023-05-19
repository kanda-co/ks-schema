import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '../toolkit';

export interface AuthState {
  isLoading: boolean;
  user: User | null;
  role: string;
}

const initialState: AuthState = {
  isLoading: false,
  user: null,
  role: '',
};

export interface UserLoggedInPayload {
  user: User;
  role: string;
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLoggedIn: (
      state,
      { payload: { user, role } }: PayloadAction<UserLoggedInPayload>,
    ) => {
      return {
        ...state,
        user,
        role,
      };
    },
  },
});

export const { userLoggedIn } = authSlice.actions;

export default authSlice.reducer;
