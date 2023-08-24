import { createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { FirebaseAuthService } from '../../auth';
import { getUser } from '../../middleware';
import type { AuthUser } from '../../generated/components/schemas';
import { createSlice } from '../toolkit';
import { User } from 'firebase/auth';

export interface AuthState {
  isLoading: boolean;
  user: AuthUser | null;
  firebaseUser: User | null;
}

export const revalidateUser = createAsyncThunk(
  'auth/revalidateUser',
  async (_, store) => {
    const isUserLoggedIn = await FirebaseAuthService.isUserLoggedIn();

    if (isUserLoggedIn) {
      const user = await getUser();
      const firebaseUser = FirebaseAuthService.auth.currentUser;

      store.dispatch(userLoggedIn({ user, firebaseUser }));
    }
  },
);

const initialState: AuthState = {
  isLoading: false,
  user: null,
  firebaseUser: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLoggedIn: (
      state,
      {
        payload: { user, firebaseUser },
      }: PayloadAction<{ user: AuthUser; firebaseUser: User }>,
    ) => {
      return {
        ...state,
        user,
        firebaseUser,
      };
    },
  },
});

export const { userLoggedIn } = authSlice.actions;

export default authSlice.reducer;
