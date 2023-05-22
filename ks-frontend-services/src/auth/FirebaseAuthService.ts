import {
  getAuth,
  Auth,
  User,
  onAuthStateChanged,
  signOut,
  setPersistence,
  browserLocalPersistence,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  signInWithCustomToken,
  applyActionCode as applyFirebaseActionCode,
  confirmPasswordReset,
  parseActionCodeURL,
  signInWithEmailLink,
  verifyPasswordResetCode,
  updatePassword,
  updateEmail,
  sendEmailVerification,
  GoogleAuthProvider,
  FacebookAuthProvider,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from 'firebase/auth';
import './config';
import { StringIndexedObject } from '../types';
import { redirectTo } from './helpers';
import { HOME_URL, LOGIN_URL } from './constants';
import { Amplitude } from '@kanda-libs/ks-amplitude-provider';

interface AugmentedCurrentUser extends User {
  accessToken?: string;
}

interface AugmentedAuth extends Auth {
  currentUser: AugmentedCurrentUser | null;
}

class FirebaseAuthService {
  public auth: AugmentedAuth;
  public providers: {
    google: GoogleAuthProvider;
    facebook: FacebookAuthProvider;
  };

  constructor() {
    this.auth = getAuth();

    const google = new GoogleAuthProvider();
    const facebook = new FacebookAuthProvider();

    facebook.addScope('email');

    this.providers = {
      google,
      facebook,
    };
  }

  /**
   * Listens for a change in the auth state from firebase and returns either
   * the currently logged in user or an error
   */
  onAuthStateChangedPromise = async (): Promise<User> => {
    return new Promise((resolve) => {
      onAuthStateChanged(this.auth, (user) => {
        if (user) {
          resolve(user);
        }

        resolve(null);
      });
    });
  };

  /**
   * Returns the currently logged in user
   */
  user = async () => {
    return await this.onAuthStateChangedPromise();
  };

  isUserLoggedIn = async () => {
    return !!(await this.user());
  };

  /**
   * Returns the currently logged in user's access token
   */
  token = async () => {
    const user = await this.user();

    if (!user) {
      return null;
    }

    return await user.getIdToken(true);
  };

  /**
   * Sets the firebase persistence to browser local storage
   */
  setPersistence = async () => {
    await setPersistence(this.auth, browserLocalPersistence);
  };

  /**
   * Allows the user to login with an email and password
   */
  signInWithEmailAndPassword = async (
    { email, password }: StringIndexedObject<string>,
    redirect = true,
  ) => {
    await this.setPersistence();
    await signInWithEmailAndPassword(this.auth, email, password);
    if (redirect) {
      redirectTo(HOME_URL);
    }
  };

  /**
   * Allows the user to login with a Google account
   */
  signInWithGoogle = async () => {
    await this.setPersistence();
    await signInWithRedirect(this.auth, this.providers.google);
  };

  /**
   * Allows the user to login with a Google account using the popup flow
   */
  signInWithGooglePopup = async () => {
    await this.setPersistence();
    await signInWithPopup(this.auth, this.providers.google);
  };

  /**
   * Allows the user to login with a Facebook account
   */
  signInWithFacebook = async () => {
    await this.setPersistence();
    await signInWithPopup(this.auth, this.providers.facebook);
  };

  signInWithCustomToken = async (token: string, redirect = true) => {
    await this.setPersistence();
    await signInWithCustomToken(this.auth, token);
    if (redirect) {
      redirectTo(HOME_URL);
    }
  };

  /**
   * Apply action code
   */
  applyActionCode = async (code: string) => {
    const result = await applyFirebaseActionCode(this.auth, code);
    return result;
  };

  /**
   * Reset the password
   */
  resetPassword = async (code: string, newPassword: string) => {
    const confirmation = await confirmPasswordReset(
      this.auth,
      code,
      newPassword,
    );
    return confirmation;
  };

  /**
   * Verify the reset password code
   */
  verifyResetCode = async (code: string) => {
    const confirmation = await verifyPasswordResetCode(this.auth, code);
    return confirmation;
  };

  /**
   * Parse action code
   */
  parseActionCode = async (url: string) => {
    const result = parseActionCodeURL(url);
    return result;
  };

  /**
   * Sign in with email link
   */
  signInWithEmailLink = async (email: string, url: string) => {
    await this.setPersistence();
    const result = await signInWithEmailLink(this.auth, email, url);
    return result;
  };

  /**
   * Update user's password
   */
  updatePassword = async (newPassword: string) => {
    const result = await updatePassword(this.auth.currentUser, newPassword);
    return result;
  };

  /**
   * Update user's email
   */
  updateEmail = async (newEmail: string) => {
    const result = await updateEmail(this.auth.currentUser, newEmail);
    return result;
  };

  /**
   * Reauthenticate a user
   */
  reauthenticate = async (password: string) => {
    await this.setPersistence();
    const user = this.auth.currentUser;
    const credential = EmailAuthProvider.credential(user.email, password);

    return await reauthenticateWithCredential(user, credential);
  };

  /**
   * Reauthenticate a user
   */
  sendEmailVerification = async () => {
    const user = this.auth.currentUser;
    const result = await sendEmailVerification(user);
    return result;
  };

  /**
   * Log a user out
   */
  logout = async (redirect = true) => {
    await signOut(this.auth);
    Amplitude?.reset();
    if (!redirect) return;
    redirectTo(LOGIN_URL);
  };
}

export default new FirebaseAuthService();
