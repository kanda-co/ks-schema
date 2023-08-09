import { createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { FirebaseAuthService } from '../../auth';
import { getUser } from '../../middleware';
import type { AuthUser } from '../../generated/components/schemas';
import { createSlice } from '../toolkit';

export interface AuthState {
  isLoading: boolean;
  user: AuthUser | null;
}

export const revalidateUser = createAsyncThunk(
  'auth/revalidateUser',
  async (_, store) => {
    const isUserLoggedIn = await FirebaseAuthService.isUserLoggedIn();

    if (isUserLoggedIn) {
      const user = await getUser();

      store.dispatch(userLoggedIn(user));
    }
  },
);

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
