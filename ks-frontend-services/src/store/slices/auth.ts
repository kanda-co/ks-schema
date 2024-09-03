import { createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { FirebaseAuthService } from '../../auth';
import { getUser, ghostUser } from '../../middleware';
import type { AuthUser } from '../../generated/components/schemas';
import { createSlice } from '../toolkit';
import { User } from 'firebase/auth';
import {
  GHOST_URL,
  ORIGINAL_USER_SESSION_KEY,
} from '../../middleware/ghost/constants';

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

export const infoGhost = createAsyncThunk(
  'auth/ghostUser',
  async (email: string) => {
    const user = await getUser();

    // Get a custom token for the original user and store in session
    const initialUserGhost = await ghostUser(user.email);

    localStorage.setItem(
      ORIGINAL_USER_SESSION_KEY,
      initialUserGhost.custom_token,
    );

    const infoGhost = await ghostUser(email);

    await FirebaseAuthService.signInWithCustomToken(
      infoGhost.custom_token,
      false,
    );

    window.location.href = `${GHOST_URL}/`;
  },
);

const initialState: AuthState = {
  isLoading: true,
  user: null,
  firebaseUser: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => initialState,
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
        isLoading: false,
      };
    },
    userNotLoggedIn: (state) => ({
      ...state,
      user: null,
      firebaseUser: null,
      isLoading: false,
    }),
  },
});

export const { userLoggedIn, userNotLoggedIn, logout } = authSlice.actions;

export default authSlice.reducer;
